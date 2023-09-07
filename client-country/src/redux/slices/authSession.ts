import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosPutter, axiosPoster, axiosGetter } from '@/utils/requests'
import Endpoints from '@/utils/constants/endpoints.const'
import { AuthClass, UserClass } from '@/types/index'
import { toast } from 'sonner'

interface AuthState {
  auth: AuthClass
  session: UserClass
}

const initialState: AuthState = {
  auth: {
    isLogged: false,
    sessionId: ''
  },
  session: {
    id: '',
    firstName: '',
    lastName: '',
    username: '',
    profileImage: '',
    email: '',
    isSuperAdmin: false,
    softDelete: false,
    bannerImage: '',
    role: 'volunteer'
  }
}

interface ThunkApiConfig {
  dispatch: Function
  getState: Function
}

export const setSession = createAsyncThunk('auth/setSession', async (userId: string) => {
  return await axiosGetter({
    url: Endpoints.USERS + '/' + userId
  })
})

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string, password: string }, { dispatch }) => {
    const data = await axiosPoster({
      url: Endpoints.LOGIN,
      body: credentials
    })
    await dispatch(setSession(data.userId))
    console.log('data login', data)
    await dispatch(setAuth({ isLogged: true, sessionId: data.sessionId }))
    return data
  }
)

export const register = createAsyncThunk('auth/register', async (userData: any) => {
  const data = {} as any
  return data.createUser
})

export const editUser = createAsyncThunk('auth/editUser', async (userData: any, { getState }: ThunkApiConfig) => {
  try {
    const state = getState()
    userData.userId = state.authSession.session.id
    userData.filenamePi = userData.profileImage ? userData.profileImage.name : ''
    userData.filenameCi = userData.coverImage ? userData.coverImage.name : ''
    const res = await axiosPutter('/rest/users/edit', userData, 'multipart/form-data')
    return res.data
  } catch (err: any) {
    console.error('Error al crear el usuario', err)
    throw new Error('Error al crear el usuario', err)
  }
})

export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async (userData: any, { getState }: ThunkApiConfig) => {
    const state = getState()
    userData.userId = state.authSession.session.id
    const data = {} as any
    return data
  }
)

const postsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthClass>) => {
      state.auth = action.payload
    },
    resetReducer: (state) => {
      state.auth.isLogged = false
      state.session = {
        id: '',
        firstName: '',
        lastName: '',
        username: '',
        profileImage: '',
        email: '',
        isSuperAdmin: false,
        softDelete: false,
        bannerImage: '',
        role: 'volunteer'
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(setSession.fulfilled, (state, action) => {
        state.session = action.payload.user
      })
      .addCase(login.rejected, (state, action) => {
        toast.error('Verifica las credenciales')
      })
      .addCase(register.fulfilled, (state, action) => {
        toast.success('Registro exitoso')
      })
      .addCase(register.rejected, (state, action) => {
        toast.error('Verifica los datos')
      })
      .addCase(editUser.fulfilled, (state, action) => {
        toast.success('Edición exitosa')
      })
      .addCase(editUser.rejected, (state, action) => {
        toast.error('Verifica los datos')
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        toast.success('Edición exitosa')
      })
      .addCase(changePassword.rejected, (state, action) => {
        toast.error('Verifica los datos')
      })
  }
})

export const { setAuth, resetReducer } = postsSlice.actions

export default postsSlice.reducer
