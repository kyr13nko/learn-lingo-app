import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
    },
    removeUser(state) {
      state.user = { name: null, email: null };
      state.token = null;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
