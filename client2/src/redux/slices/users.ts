import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserInterface } from "@/interfaces";
import { toast } from "sonner";

const initialState = {
  currentUser: {} as UserInterface,
};

interface ThunkApiConfig {
  dispatch: Function;
  getState: Function;
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;
