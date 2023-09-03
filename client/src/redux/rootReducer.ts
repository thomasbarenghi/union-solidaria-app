import { combineReducers } from "@reduxjs/toolkit";
import authSession from "./slices/authSession";
import users from "./slices/users";

const rootReducer = combineReducers({
  authSession: authSession,
  users: users,
});

export default rootReducer;
