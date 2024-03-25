import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: var(--color-black-70);
`;

export const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1.875rem;
  background-color: var(--color-white);
  width: 35.3125rem;
  max-height: calc(100% - 1.25rem);
  padding: 4rem;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;

  cursor: pointer;

  & svg {
    width: 2rem;
    height: 2rem;

    border-radius: 50%;

    transition: var(--transition);
  }

  &:hover svg {
    fill: var(--color-primary);
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.37;
  color: rgba(18, 20, 23, 0.8);
`;
