import { createSlice } from '@reduxjs/toolkit'
import { UserInterface } from '@/interfaces'

interface UserState {
  activeUser: UserInterface
}

const initialState: UserState = {
  activeUser: {
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

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    updateActiveUser: (state, action) => {
      state.activeUser = action.payload
    }
  },
  extraReducers: (builder) => {}
})

export const { updateActiveUser } = usersSlice.actions

export default usersSlice.reducer
