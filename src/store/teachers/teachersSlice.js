import { createSlice } from "@reduxjs/toolkit";
import { fetchTeachers } from "./teachersOperations";

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTeachers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchTeachers.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.items = payload;
    });
    builder.addCase(fetchTeachers.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const teachersReducer = teachersSlice.reducer;
