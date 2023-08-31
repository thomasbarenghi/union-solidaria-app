import { combineReducers } from "@reduxjs/toolkit";
import authSession from "./slices/authSession";

const rootReducer = combineReducers({
  authSession: authSession,
});

export default rootReducer;
