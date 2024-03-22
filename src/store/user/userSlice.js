import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { name: null, email: null },
  token: null,
};

const userSlice = createSlice({
  name: "user",
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

export const { setUser, removeUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
