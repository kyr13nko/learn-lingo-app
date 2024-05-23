import styled from "styled-components";
import { Section } from "../../styles/GlobalStyles";

export const HomeContainer = styled.div`
  @media screen and (min-width: 320px) {
    max-width: 100%;
    padding: 0 1rem;
    margin: 0 auto;
  }

  @media screen and (min-width: 1200px) {
    padding: 0 3rem;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 4rem;
  }
`;

export const HomeSection = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
