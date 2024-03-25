import styled from "styled-components";

export const SelectWrapper = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    color: "var(--color-black)", // Колір тексту для control
    border: state.isFocused ? "1px solid var(--color-primary)" : "1px solid transparent",
    borderRadius: "14px",
    cursor: "pointer",
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "var(--color-primary)" : "var(--color-black)", // Колір тексту для option
    backgroundColor: state.isSelected ? "var(--color-primary-light)" : "white", // Фоновий колір для обраного варіанту
    "&:hover": {
      backgroundColor: "var(--color-gray-light)", // Фоновий колір при наведенні курсору на варіант
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: state.data.isSelected ? "var(--color-primary)" : "var(--color-black)", // Колір тексту для вибраного варіанту
  }),
};
