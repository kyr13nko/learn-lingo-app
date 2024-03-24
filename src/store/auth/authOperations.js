import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const registrationUser = createAsyncThunk(
  "auth/registration",
  async (values, { rejectWithValue }) => {
    const { name, email, password } = values;

    try {
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      return {
        name: user.displayName,
        email: user.email,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk("auth/login", async (values, { rejectWithValue }) => {
  const { email, password } = values;

  try {
    const auth = getAuth();
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    return {
      name: user.displayName,
      email: user.email,
    };
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const logoutUser = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    await signOut(auth);
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk("auth/refresh", (_, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    console.log("auth:", auth);
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe();
        if (user) {
          const userData = {
            name: user.displayName,
            email: user.email,
          };
          resolve(userData);
        } else {
          reject(rejectWithValue("User not authenticated"));
        }
      });
    });
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
