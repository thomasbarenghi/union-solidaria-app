import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: {}
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
})

export default usersSlice.reducer
