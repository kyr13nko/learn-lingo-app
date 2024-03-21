import styled from "styled-components";

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Btn = styled.button`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25;

  border: 1px solid transparent;
  border-radius: 0.75rem;

  transition: var(--transition);
`;

export const BtnLogIn = styled(Btn)`
  display: flex;
  gap: 0.5rem;

  &:hover {
    color: var(--color-primary);
  }
`;

export const BtnRegistration = styled(Btn)`
  color: var(--color-white);
  background-color: var(--color-black);

  padding: 0.875rem 2.4375rem;

  &:hover {
    color: var(--color-black);
    background-color: var(--color-primary);
  }
`;

export const Img = styled.img`
  width: 20px;
  height: 20px;
`;
