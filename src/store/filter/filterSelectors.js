import { createSelector } from "@reduxjs/toolkit";

import { selectTeachers } from "../teachers/teachersSelectors";

export const selectFilter = (state) => state.filter;
export const selectLanguage = (state) => state.filter.language;
export const selectLevel = (state) => state.filter.level;
export const selectPrice = (state) => state.filter.price;
export const selectIsFiltered = (state) => state.filter.isFiltered;

export const selectFilteredTeachers = createSelector(
  [selectTeachers, selectLanguage, selectLevel, selectPrice],
  (teachers, language, level, price) => {
    return teachers.filter((teacher) => {
      if (language && teacher.languages.indexOf(language) === -1) {
        return false;
      }
      if (level && teacher.levels.indexOf(level) === -1) {
        return false;
      }
      if (price && teacher.price_per_hour !== price) {
        return false;
      }
      return true;
    });
  }
);
