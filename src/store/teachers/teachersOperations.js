import { createAsyncThunk } from "@reduxjs/toolkit";

import { get, ref, getDatabase, query, orderByKey, startAt, limitToFirst } from "firebase/database";

import { app } from "../../firebase";

const database = getDatabase(app);

const ITEMS_PER_PAGE = 4;

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (currentPage, thunkAPI) => {
    try {
      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

      const teachersRef = ref(database, "teachers");
      const teachersQuery = query(
        teachersRef,
        orderByKey(),
        startAt(String(startIndex)),
        limitToFirst(ITEMS_PER_PAGE)
      );
      const snapshot = await get(teachersQuery);

      const teachers = [];
      snapshot.forEach((childSnapshot) => {
        teachers.push(childSnapshot.val());
      });

      return teachers;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// ОТРИМАТИ ВСІ ДАНІ З БД

// export const fetchTeachers = createAsyncThunk(
//   "teachers/fetchTeachers",
//   async (currentPage, thunkAPI) => {
//     console.log("currentPage:", currentPage);

//     try {
//       const snapshot = await get(ref(database, "teachers"));
//       console.log("snapshot.val()", snapshot.val());
//       return snapshot.val();
//     } catch (error) {
//       console.error;
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
