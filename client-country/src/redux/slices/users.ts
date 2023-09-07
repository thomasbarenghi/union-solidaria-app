import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosGetter } from '@/utils/requests'
import Endpoints from '@/utils/constants/endpoints.const'
import { UserClass } from '@/types/index'
import { toast } from 'sonner'

interface UserState {
  currentUser: UserClass
}

const initialState: UserState = {
  currentUser: {
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

export const getCurrentUser = createAsyncThunk('users/getCurrentUser', async (username: string) => {
  console.log('username', username)
  return await axiosGetter({
    url: Endpoints.USERS + '/' + username
  })
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.currentUser = action.payload.user
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        toast.error('Ocurrió un error al cargar el usuario')
      })
  }
})

export default usersSlice.reducer
