import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "",
  level: "",
  price: "",
  isFiltered: false,
  page: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateFilter: (state, { payload }) => {
      state.language = payload.language;
      state.level = payload.level;
      state.price = payload.price;
      state.isFiltered = true;
    },
    resetFilter: (state) => {
      state.language = "";
      state.level = "";
      state.price = "";
      state.isFiltered = false;
    },
    pageLocation: (state, { payload }) => {
      state.page = payload;
    },
  },
});

export const { updateFilter, resetFilter, pageLocation } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
