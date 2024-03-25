import { configureStore } from "@reduxjs/toolkit";

import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

import { authReducer } from "./auth/authSlice";
import { teachersReducer } from "./teachers/teachersSlice";
import { favoritesReducer } from "./favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    teachers: teachersReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
