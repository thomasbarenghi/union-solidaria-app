import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import Router from "next/router";
import { toast } from "sonner";
import { AuthClass, UserClass } from "@/types";
import { toastSuccess, toastError } from "@/utils/toastStyles";
import { clientMutator, clientQuerier } from "@/utils/requests";
import { axiosPutter } from "@/utils/requests";
import { sessionBuilder } from "@/utils/state";

const initialState = {
  auth: {} as AuthClass,
  session: {
    current: {} as UserClass,
    loading: false,
  },
};

interface ThunkApiConfig {
  dispatch: Function;
  getState: Function;
}

export const setSession = createAsyncThunk(
  "auth/setSession",
  async (userId: string) => {
    try {
      const data = {} as any;
      return data.findUserById;
    } catch (err: any) {
      throw new Error("Error al loguear el usuario", err);
    }
  },
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: any) => {
    try {
      const data = {} as any;
      return data.createSession;
    } catch (err: any) {
      throw new Error("Error al loguear el usuario", err);
    }
  },
);

export const register = createAsyncThunk(
  "auth/register",
  async (userData: any) => {
    try {
      const data = {} as any;
      //if (errors) console.error("Error al crear el usuario", errors);
      return data.createUser;
    } catch (err: any) {
      console.error("Error al crear el usuario", err);
      throw new Error("Error al crear el usuario", err);
    }
  },
);

export const editUser = createAsyncThunk(
  "auth/editUser",
  async (userData: any, { getState }: ThunkApiConfig) => {
    try {
      const state = getState();
      userData.userId = state.authSession.session.current.id;
      userData.filenamePi = userData.profileImage
        ? userData.profileImage.name
        : "";
      userData.filenameCi = userData.coverImage ? userData.coverImage.name : "";
      const res = await axiosPutter(
        "/rest/users/edit",
        userData,
        "multipart/form-data",
      );
      return res.data;
    } catch (err: any) {
      console.error("Error al crear el usuario", err);
      throw new Error("Error al crear el usuario", err);
    }
  },
);

export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (userData: any, { getState }: ThunkApiConfig) => {
    try {
      const state = getState();
      userData.userId = state.authSession.session.current.id;
      const data = {} as any;
      return data;
    } catch (err: any) {
      console.error("Error al cambiar contraseña", err);
      throw new Error("Error al cambiar contraseña", err);
    }
  },
);

const postsSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthClass>) => {
      state.auth = action.payload;
    },
    resetReducer: (state) => {
      state.auth = initialState.auth;
      state.session = initialState.session;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setSession.pending, (state, action) => {
        if (action.meta.arg === state.session.current.id) {
          state.session.loading = false;
        } else {
          state.session.loading = true;
        }
      })
      .addCase(setSession.fulfilled, (state, action) => {
        state.session.current = sessionBuilder(action.payload);
      })
      .addCase(setSession.rejected, (state, action) => {
        console.error("Rejected setSession", action.payload);
      })
      .addCase(login.pending, (state, action) => {})
      .addCase(login.fulfilled, (state, action) => {
        Router.push(
          `/client?id=${action.payload.userId}&status=ok&session=${action.payload.id}&loginMethod=local`,
        );
      })
      .addCase(login.rejected, (state, action) => {
        console.error("Rejected login", action.payload);
        toast.error("Verifica las credenciales", toastError);
      })
      .addCase(register.fulfilled, (state, action) => {
        const query: string = Router.asPath.split("register")[1] || "";
        toast.success("Registro exitoso", toastSuccess);
        Router.push(`/auth/${query}`);
      })
      .addCase(register.rejected, (state, action) => {
        console.error("Rejected register", action);
        toast.error("Verifica los datos", toastError);
      })
      .addCase(editUser.pending, (state, action) => {
        toast("Editando usuario");
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.session.current = sessionBuilder(action.payload);
        toast.success("Edición exitosa", toastSuccess);
      })
      .addCase(editUser.rejected, (state, action) => {
        console.error("Rejected editUser", action);
        toast.error("Verifica los datos", toastError);
      })
      .addCase(changePassword.pending, (state, action) => {
        toast("Editando contraseña");
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        toast.success("Edición exitosa", toastSuccess);
      })
      .addCase(changePassword.rejected, (state, action) => {
        console.error("Rejected changePassword", action);
        toast.error("Verifica los datos", toastError);
      });
  },
});

export const { setAuth, resetReducer } = postsSlice.actions;

export default postsSlice.reducer;
