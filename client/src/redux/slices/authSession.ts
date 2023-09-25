/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthInterface, InitiativeInterface, UserInterface } from '@/interfaces'
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
    _id: '',
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
    reviews: [],
    favorites: [],
    initiatives: []
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateCurrentUser: (state, action: PayloadAction<UserInterface>) => {
      console.log('updateCurrentUser', action.payload)
      state.session = action.payload as UserInterface
    },
    setAuth: (state, action: PayloadAction<AuthInterface>) => {
      console.log('setAuth', action)
      state.auth = action.payload
      // seteamos una cookie que vence en 1 dia
      document.cookie = `sessionId=${action.payload.sessionId}; max-age=86400; path=/`
    },
    modifyFavorites: (state, action: PayloadAction<{ item: InitiativeInterface; actionType: 'add' | 'remove' }>) => {
      const { item, actionType } = action.payload
      if (actionType === 'add') {
        state.session.favorites.push(item)
      } else {
        state.session.favorites = state.session.favorites.filter((favorite) => favorite._id !== item._id)
      }
    },

    resetReducer: (state) => {
      state.auth.isLogged = false
      state.session = initialState.session
    }
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState)
  }
})

export const { setAuth, resetReducer, updateCurrentUser, modifyFavorites } = authSlice.actions

export default authSlice.reducer
