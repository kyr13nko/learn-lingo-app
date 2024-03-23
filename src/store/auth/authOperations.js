import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
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
        token: user.accessToken,
      };
    } catch (error) {
      console.log("error", error);
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
      token: user.accessToken,
    };
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
