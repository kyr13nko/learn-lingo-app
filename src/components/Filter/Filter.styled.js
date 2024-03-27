import styled from "styled-components";

export const SelectWrapper = styled.div`
  display: flex;
  gap: 1.25rem;

  margin-bottom: 2rem;
`;

export const Label = styled.p`
  font-size: 0.875rem;
  line-height: 1.29;

  color: var(--color-grey);

  margin-bottom: 0.5rem;
`;

export const customStyles = (width) => ({
  singleValue: (styles) => ({
    ...styles,
    color: "var(--color-black)",
    margin: 0,
  }),

  control: (styles) => ({
    ...styles,
    backgroundColor: "var(--color-white)",
    border: "2px solid transparent",
    borderRadius: 14,
    cursor: "pointer",
    width,
    boxShadow: "none",
    transition: "var(--transition)",
    ":hover": { borderColor: "var(--color-primary)" },
  }),

  valueContainer: (styles) => ({
    ...styles,
    padding: "0.5rem 0.875rem",
  }),

  menu: (styles) => ({
    ...styles,
    padding: "14px 18px",
    borderRadius: "12px",
    border: "none",
  }),

  menuList: (styles) => ({
    ...styles,
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    boxSizing: "content-box",
    "&::-webkit-scrollbar": {
      width: "0.25rem",
      position: "relative",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "12px",
      background: "var(--color-secondary)",
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
  }),

  option: (styles, { isSelected, isFocused }) => ({
    ...styles,
    color: isSelected
      ? "var(--color-black)"
      : isFocused
      ? "var(--color-black-70)"
      : "var(--color-black-20)",
    backgroundColor: "var(--color-white)",
    padding: 0,
  }),

  placeholder: (styles) => ({
    ...styles,
    color: "var(--color-black)",
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),

  dropdownIndicator: (styles) => ({
    ...styles,
    color: "var(--color-black)",
    ":hover": { color: "var(--color-primary)" },
  }),

  clearIndicator: (styles) => ({
    ...styles,
    color: "var(--color-black)",
    ":hover": { color: "var(--color-primary)" },
  }),
});
