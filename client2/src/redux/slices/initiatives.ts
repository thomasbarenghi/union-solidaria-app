/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { InitiativeInterface } from '@/interfaces'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentInitiative: {} as InitiativeInterface,
  initiatives: [] as InitiativeInterface[]
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
})

export default usersSlice.reducer
