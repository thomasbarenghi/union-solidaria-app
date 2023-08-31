import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { redirect, useRouter } from "next/navigation";
import Redirect from "next/navigation";
import Router from "next/router";
import { toast } from "sonner";
import { GET_USER_BY_ID } from "@/graphql/queries";
import { LOG_IN, CREATE_USER, CHANGE_PASSWORD } from "@/graphql/mutations";
import { AuthClass, UserClass } from "@/types";
import { toastSuccess, toastError } from "@/utils/toastStyles";
import { clientMutator, clientQuerier } from "@/utils/requests";
import { axiosPutter, axiosPoster } from "@/utils/requests";
import { sessionBuilder, authBuilder } from "@/utils/state";
import Routes from "@/constants/routes";
import React from "react";

const initialState = {
  currentRoute: "",
};

const postsSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setCurrentRoute: (state, action: PayloadAction<string>) => {
        console.log("setCurrentRoute", action.payload);
      state.currentRoute = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setCurrentRoute } = postsSlice.actions;

export default postsSlice.reducer;
