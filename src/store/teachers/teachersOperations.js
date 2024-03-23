import { createAsyncThunk } from "@reduxjs/toolkit";

import { get, getDatabase, ref } from "firebase/database";
import { app } from "../../firebase";

const database = getDatabase(app);

export const fetchTeachers = createAsyncThunk("teachers/fetchTeachers", async (_, thunkAPI) => {
  try {
    const snapshot = await get(ref(database, "teachers"));
    return snapshot.val();
  } catch (error) {
    console.error;
    return thunkAPI.rejectWithValue(error.message);
  }
});
