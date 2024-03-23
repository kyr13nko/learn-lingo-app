import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registrationUser } from "./authOperations";

const initialState = {
  user: { name: null, email: null },
  isLoggedIn: false,
  isRefreshing: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = { name: payload.name, email: payload.email };
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registrationUser.fulfilled, (state, { payload }) => {
        state.user = { name: payload.name, email: payload.email };
        state.token = payload.token;
        state.isLoggedIn = true;
      });
  },
});

export const authReducer = authSlice.reducer;
