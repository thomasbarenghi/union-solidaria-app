import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosPutter, axiosPoster, axiosGetter } from '@/utils/requests'
import Endpoints from '@/utils/constants/endpoints.const'
import { toast } from 'sonner'

const initialState = {
  currentInitiative: {} as any,
  initiatives: [] as any[]
}

interface ThunkApiConfig {
  dispatch: Function
  getState: Function
}

export const getInitiatives = createAsyncThunk('users/getInitiatives', async (_) => {
  return await axiosGetter({
    url: Endpoints.INITIATIVES
  })
})

export const getCurrentInitiative = createAsyncThunk('users/getCurrentInitiative', async (id: string) => {
  console.log('id', id)
  return await axiosGetter({
    url: Endpoints.INITIATIVES + '/' + id
  })
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentInitiative.fulfilled, (state, action) => {
        state.currentInitiative = action.payload
      })
      .addCase(getCurrentInitiative.rejected, (state, action) => {
        console.log('Error getCurrentInitiative', action)
        toast.error('Ocurrió un error al cargar la iniciativa')
      })
      .addCase(getInitiatives.fulfilled, (state, action) => {
        state.initiatives = action.payload
      })
      .addCase(getInitiatives.rejected, (state, action) => {
        toast.error('Ocurrió un error al cargar las iniciativas')
      })
  }
})

export const {} = usersSlice.actions

export default usersSlice.reducer
