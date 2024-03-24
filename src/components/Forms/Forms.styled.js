import styled from "styled-components";
import { Button } from "../../styles/GlobalStyles";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.125rem;

  margin-top: 1.25rem;
`;

export const Label = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;

  background-color: transparent;
  outline: none;

  border: 1px solid var(--color-black-10);
  border-radius: 0.75rem;

  padding: 1rem 1.125rem;

  transition: var(--transition);

  &:hover,
  &:focus {
    border: 1px solid var(--color-black-70);
  }

  &::placeholder {
    color: var(--color-black);
  }
`;

export const ErrorDiv = styled.div`
  position: absolute;
  bottom: -1rem;
  left: 0.75rem;

  font-size: 0.7rem;

  color: var(--color-red);
`;

export const FormButton = styled(Button)`
  width: 100%;
  margin-top: 1.375rem;
`;
