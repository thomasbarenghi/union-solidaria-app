import { combineReducers } from '@reduxjs/toolkit'
import authSession from './slices/authSession'
import users from './slices/users'
import initiatives from './slices/initiatives'
import filters from './slices/filters'
import { initiativesApi } from '@/redux/services/initiatives.service'
import { currentUsersApi } from '@/redux/services/users.service'
import { authSessionApi } from '@/redux/services/authSession.service'
import { reviewsApi } from './services/reviews.service'

const rootReducer = combineReducers({
  authSession,
  users,
  initiatives,
  filters,
  [initiativesApi.reducerPath]: initiativesApi.reducer,
  [currentUsersApi.reducerPath]: currentUsersApi.reducer,
  [authSessionApi.reducerPath]: authSessionApi.reducer,
  [reviewsApi.reducerPath]: reviewsApi.reducer
})

export default rootReducer
