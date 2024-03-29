import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  get,
  ref,
  getDatabase,
  query,
  orderByKey,
  startAt,
  limitToFirst,
  endAt,
} from "firebase/database";

import { app } from "../../firebase";

const database = getDatabase(app);

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (currentPage, thunkAPI) => {
    console.log("currentPage:", currentPage);

    try {
      const snapshot = await get(ref(database, "teachers"));
      console.log("snapshot.val()", snapshot.val());
      return snapshot.val();
    } catch (error) {
      console.error;
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// ПРИ ПЕРШОМУ ЗАПИТІ ПОВЕРТАЄТЬСЯ НОРМ МАСИВ З 4 ЗНАЧЕННЯМИ.
// ПРИ ДРУГОМУ - МАСИВ З 4 ПУСТИХ І 4 НОВИХ.
// ПРИ ТРЕТЬОМУ ПОВЕРТАЄТЬСЯ ОЄКТ З 4 НАСТУПНИМИ ОБЄКТАМИ

// const TEACHERS_PER_PAGE = 4;

// export const fetchTeachers = createAsyncThunk(
//   "teachers/fetchTeachers",
//   async (currentPage, thunkAPI) => {
//     try {
//       const pageStartIndex = (currentPage - 1) * TEACHERS_PER_PAGE;
//       const teachersQuery = query(
//         ref(database, "teachers"),
//         orderByKey(),
//         startAt(String(pageStartIndex)),
//         endAt(String(pageStartIndex + TEACHERS_PER_PAGE - 1))
//       );
//       const snapshot = await get(teachersQuery);

//       console.log("snapshot.val()", snapshot.val());
//       return snapshot.val();
//     } catch (error) {
//       console.error(error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
