import styled from "styled-components";

export const Overlay = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 12;

  width: 100%;
  height: 100%;

  background-color: var(--color-black-80);

  transition: var(--transition);
`;

export const BurgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1.25rem;

  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  z-index: 13;

  min-width: 12.5rem;
  width: 60%;
  height: 100%;

  background-color: var(--color-bg);

  transition: var(--transition);

  padding: 2.5rem;
`;

export const CloseIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 1.25rem;
  right: 1.25rem;

  cursor: pointer;

  & svg {
    width: 2rem;
    height: 2rem;

    border-radius: 50%;
  }
`;
