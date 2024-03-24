import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, refreshUser, registrationUser } from "./authOperations";

const initialState = {
  user: { name: null, email: null },
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = { name: payload.name, email: payload.email };
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.error = payload;
      })

      .addCase(registrationUser.fulfilled, (state, { payload }) => {
        state.user = { name: payload.name, email: payload.email };
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(registrationUser.rejected, (state, { payload }) => {
        state.error = payload;
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

export const { resetError } = authSlice.actions;

export const authReducer = authSlice.reducer;
