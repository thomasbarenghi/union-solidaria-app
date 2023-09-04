import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPutter, axiosPoster, axiosGetter } from "@/utils/requests";
import Endpoints from "@/constants/endpoints";
import { UserClass } from "@/types";
import { toast } from "sonner";

const initialState = {
  currentUser: {} as UserClass,
};

interface ThunkApiConfig {
  dispatch: Function;
  getState: Function;
}

export const getCurrentUser = createAsyncThunk(
  "users/getCurrentUser",
  async (username: string) => {
    return await axiosGetter({
      url: Endpoints.USERS + "/" + username,
    });
  },
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.currentUser = action.payload.user;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        toast.error("Ocurrió un error al cargar el usuario");
      });
  },
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;
