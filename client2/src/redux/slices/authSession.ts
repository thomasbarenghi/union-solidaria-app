/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthInterface, UserInterface } from '@/interfaces'
import { PURGE } from 'redux-persist'

interface AuthState {
  auth: AuthInterface
  session: UserInterface
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
    birthday: '',
    phone: '',
    email: '',
    role: 'volunteer',
    password: '',
    bannerImage: '',
    username: '',
    profileImage: '',
    orgName: '',
    posts: [],
    reviews: []
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateCurrentUser: (state, action: PayloadAction<UserInterface>) => {
      console.log('updateCurrentUser', action)
      state.session = {
        ...state.session,
        ...action.payload
      }
    },
    setAuth: (state, action: PayloadAction<AuthInterface>) => {
      console.log('setAuth', action)
      state.auth = action.payload
      // seteamos una cookie que vence en 1 dia
      document.cookie = `sessionId=${action.payload.sessionId}; max-age=86400; path=/`
    },
    resetReducer: (state) => {
      state.auth.isLogged = false
      state.session = {
        id: '',
        firstName: '',
        lastName: '',
        birthday: '',
        phone: '',
        email: '',
        role: 'volunteer',
        password: '',
        bannerImage: '',
        username: '',
        profileImage: '',
        orgName: '',
        posts: [],
        reviews: []
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState)
  }
})

export const { setAuth, resetReducer, updateCurrentUser } = authSlice.actions

export default authSlice.reducer
