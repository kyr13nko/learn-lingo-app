import styled from "styled-components";

import HeroImg from "../../../assets/images/hero.png";
import RectImg from "../../../assets/images/rect.png";

import { Button } from "../../../styles/GlobalStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 100%;

  background-color: var(--color-white);
  border-radius: 30px;

  padding: 60px 24px;

  & p {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.37;
    letter-spacing: -0.02em;

    max-width: 470px;
  }

  @media screen and (min-width: 1200px) {
    width: 720px;

    padding: 98px 108px 98px 64px;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 3rem;
  line-height: 1.17;
  letter-spacing: -0.02em;

  & span {
    font-weight: 400;
    font-style: italic;

    background-image: url(${RectImg});
    background-repeat: no-repeat;
    background-position: center bottom 6px;
    background-size: contain;

    padding: 0 6px;
  }
`;

export const HeroButton = styled(Button)`
  align-self: flex-start;
  margin-top: 32px;

  padding: 16px 88px;
`;

export const ImageBlock = styled.div`
  flex: 1;

  width: 100%;
  min-width: 288px;
  min-height: 300px;

  background-color: var(--color-avatar);
  border-radius: 30px;

  background-image: url(${HeroImg});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;

  @media screen and (min-width: 1200px) {
    min-height: 530px;
  }
`;
