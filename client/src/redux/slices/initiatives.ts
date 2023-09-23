import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentInitiative: {} as any,
  initiatives: [] as any[]
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
})

export default usersSlice.reducer
