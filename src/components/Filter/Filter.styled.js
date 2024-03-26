import styled from "styled-components";

export const SelectWrapper = styled.div`
  display: flex;
  gap: 1.25rem;

  margin-bottom: 2rem;
`;

export const customStyles = {
  singleValue: (styles) => ({
    ...styles,
    color: "var(--color-black)",
    margin: 0,
  }),
  control: (styles, { isHover }) => ({
    ...styles,
    backgroundColor: "var(--color-white)",
    borderColor: "var(--color-black-20)",
    borderRadius: 14,
    cursor: "pointer",
    minWidth: 260,
    boxShadow: "none",
    transition: "var(--transition)",
    ":hover": { borderColor: "var(--color-primary)" },
  }),

  option: (styles, { isSelected, isFocused }) => ({
    ...styles,
    color: isSelected
      ? "var(--color-black)"
      : isFocused
      ? "var(--color-black-70)"
      : "var(--color-black-20)",
    backgroundColor: "var(--color-white)",
    borderRadius: "12px",
  }),
};

// CONTROL
// &:hover: borderColor: "#2684FF"
// alignItems: "center"
// backgroundColor: "hsl(0, 0%, 100%)"
// borderColor: "#2684FF"
// borderRadius: 4
// borderStyle: "solid"
// borderWidth: 1
// boxShadow: "0 0 0 1px #2684FF"
// boxSizing: "border-box"
// cursor: "default"
// display: "flex"
// flexWrap: "wrap"
// justifyContent: "space-between"
// label: "control"
// minHeight: 38
// outline: "0 !important"
// position: "relative"
// transition: "all 100ms"

//OPTION
// :active: backgroundColor: "#B2D4FF"
// WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
// backgroundColor: "transparent"
// boxSizing: "border-box"
// color: "inherit"
// cursor: "default"
// display: "block"
// fontSize: "inherit"
// label: "option"
// padding: "8px 12px"
// userSelect: "none"
// width: "100%"
