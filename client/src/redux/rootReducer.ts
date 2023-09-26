import { combineReducers } from '@reduxjs/toolkit'
import authSession from './slices/authSession'
import { initiativesApi } from '@/redux/services/initiatives.service'
import { currentUsersApi } from '@/redux/services/users.service'
import { authSessionApi } from '@/redux/services/authSession.service'

const rootReducer = combineReducers({
  authSession,
  [initiativesApi.reducerPath]: initiativesApi.reducer,
  [currentUsersApi.reducerPath]: currentUsersApi.reducer,
  [authSessionApi.reducerPath]: authSessionApi.reducer
})

export default rootReducer
