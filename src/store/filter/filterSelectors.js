import { createSelector } from "@reduxjs/toolkit";

import { selectTeachers } from "../teachers/teachersSelectors";
import { selectFavorites } from "../favorites/favoritesSelectors";

export const selectFilter = (state) => state.filter;
export const selectLanguage = (state) => state.filter.language;
export const selectLevel = (state) => state.filter.level;
export const selectPrice = (state) => state.filter.price;
export const selectIsFiltered = (state) => state.filter.isFiltered;
export const selectPage = (state) => state.filter.page;

export const selectFilteredTeachers = createSelector(
  [selectTeachers, selectFavorites, selectLanguage, selectLevel, selectPrice, selectPage],
  (teachers, favorites, language, level, price, page) => {
    const itemsToFilter = page === "favorites" ? favorites : teachers;

    return itemsToFilter.filter((item) => {
      if (language && item.languages.indexOf(language) === -1) {
        return false;
      }
      if (level && item.levels.indexOf(level) === -1) {
        return false;
      }
      if (price && item.price_per_hour !== price) {
        return false;
      }
      return true;
    });
  }
);

// export const selectFilteredTeachers = createSelector(
//   [selectTeachers, selectFavorites, selectLanguage, selectLevel, selectPrice, selectPage],
//   (teachers, favorites, language, level, price, page) => {
//     return teachers.filter((teacher) => {
//       if (language && teacher.languages.indexOf(language) === -1) {
//         return false;
//       }
//       if (level && teacher.levels.indexOf(level) === -1) {
//         return false;
//       }
//       if (price && teacher.price_per_hour !== price) {
//         return false;
//       }
//       return true;
//     });
//   }
// );
