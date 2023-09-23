import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  country: '',
  province: '',
  opportunities: '',
  themes: '',
  languages: '',
  categories: ''
}

const filtersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.name = action.payload
    },
    setCountry(state, action) {
      state.country = action.payload
    },
    setProvince(state, action) {
      state.province = action.payload
    },
    setOpportunities(state, action) {
      state.opportunities = action.payload
    },
    setThemes(state, action) {
      state.themes = action.payload
    },
    setLanguages(state, action) {
      state.languages = action.payload
    },
    setCategories(state, action) {
      state.categories = action.payload
    }
  },
  extraReducers: (builder) => {}
})

export const { setSearch, setCountry, setProvince, setOpportunities, setThemes, setLanguages, setCategories } =
  filtersSlice.actions

export default filtersSlice.reducer
