import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  items: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorite: (state, { payload }) => {
      const favoriteTeacher = payload;
      state.items = [...state.items, favoriteTeacher];
    },
    delFromFavorite: (state, { payload }) => {
      const favoriteTeacher = payload;
      state.items = state.items.filter(
        (teacher) => teacher.avatar_url !== favoriteTeacher.avatar_url
      );
    },
    clearAfterLogOut: (state) => {
      state.items = [];
    },
  },
});

const favoritesConfig = {
  key: "favorites",
  storage,
  whitelist: ["items"],
};

export const { addToFavorite, delFromFavorite, clearAfterLogOut } = favoritesSlice.actions;

export const favoritesReducer = persistReducer(favoritesConfig, favoritesSlice.reducer);
