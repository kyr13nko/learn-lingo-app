import styled from "styled-components";
import { Container } from "../../styles/GlobalStyles";

export const StyledHeader = styled.header`
  padding: 1.25rem 0;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Btn = styled.button`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25;

  color: var(--color-text);

  border: 1px solid transparent;
  border-radius: 0.75rem;

  padding: 0;

  transition: var(--transition);
`;

export const BtnLog = styled(Btn)`
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

export const BurgerIcon = styled.div`
  display: block;
  width: 32px;
  height: 32px;

  cursor: pointer;

  & svg {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
