import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, refreshUser, registrationUser } from "./authOperations";

const initialState = {
  user: { name: null, email: null },
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = { name: payload.name, email: payload.email };
        state.isLoggedIn = true;
      })

      .addCase(registrationUser.fulfilled, (state, { payload }) => {
        state.user = { name: payload.name, email: payload.email };
        state.isLoggedIn = true;
      })

      .addCase(logoutUser.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.isLoggedIn = false;
      })

      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })

      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = { name: payload.name, email: payload.email };
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })

      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
