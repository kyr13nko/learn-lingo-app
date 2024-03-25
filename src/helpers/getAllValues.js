export const getAllValues = (teachers, searchValue) => {
  const uniqueValuesSet = teachers.reduce((acc, teacher) => {
    if (teacher.hasOwnProperty(searchValue)) {
      if (Array.isArray(teacher[searchValue])) {
        teacher[searchValue].forEach((value) => {
          acc.add(value);
        });
      } else {
        acc.add(teacher[searchValue]);
      }
    }
    return acc;
  }, new Set());

  return Array.from(uniqueValuesSet);
};
