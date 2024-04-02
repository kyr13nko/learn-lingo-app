import styled from "styled-components";

export const StyledScrollUp = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 1rem;
  right: 1rem;

  background-color: var(--color-primary);
  color: var(--color-black);

  border-radius: 50%;

  padding: 1rem;

  cursor: pointer;

  opacity: 0.6;
  transition: var(--transition);

  &:hover {
    opacity: 1;
  }
`;
