import styled from "styled-components";

export const HomeContainer = styled.div`
  @media screen and (min-width: 320px) {
    max-width: 100%;
    padding: 0 0.5rem;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 1rem;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1024px;

    padding: 0 2rem;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 4rem;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6.25rem;

  border: 2px dashed var(--color-primary);
  border-radius: 1.875rem;

  padding: 2.5rem 7.625rem;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Span = styled.span`
  font-size: 1.75rem;
  line-height: 1.14;
  letter-spacing: -0.02em;

  position: relative;

  margin: 0 1rem 0 0;

  &::after {
    content: "+";
    position: absolute;
    right: -1.25rem;
    background-color: transparent;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.29;
  letter-spacing: -0.02em;

  color: var(--color-black-70);
`;
