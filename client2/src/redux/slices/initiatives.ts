import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentInitiative: {} as any,
  initiatives: [] as any[],
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
