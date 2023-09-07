import { combineReducers } from '@reduxjs/toolkit'
import authSession from './slices/authSession'
import users from './slices/users'
import initiatives from './slices/initiatives'

const rootReducer = combineReducers({
  authSession,
  users,
  initiatives
})

export default rootReducer
