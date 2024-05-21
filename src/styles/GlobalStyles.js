import "modern-normalize";

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    --color-bg: #F8F8F8;
    
    --color-black: #121417;
    --color-black-80: rgba(18, 20, 23, 0.8);
    --color-black-70: rgba(18, 20, 23, 0.7);
    --color-black-20: rgba(18, 20, 23, 0.2);
    --color-black-10: rgba(18, 20, 23, 0.1);

    --color-grey: #8A8A89;
    --color-white: #ffffff;

    --color-primary: #F4C550;
    --color-secondary: #FFDC86;

    --color-avatar: #FBE9BA;

    --color-green: #38CD3E;
    --color-red: #FF0000;


    --transition: all 400ms ease;
  }

  body {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    line-height: 1.5;
    font-optical-sizing: auto;
    margin: 0;

    -webkit-font-smoothing: antialiased;

    background-color: var(--color-bg);
    color: var(--color-black);

    min-height: 100vh;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  img {
    display: block;
    width: 100%;
  }

  button {
    background-color: transparent;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.56;

  background-color: var(--color-primary);

  border: none;
  border-radius: 0.75rem;

  padding: 1rem;

  transition: var(--transition);

  &:hover {
    background-color: var(--color-secondary);
  }
`;

export const Container = styled.div`
  @media screen and (min-width: 320px) {
    max-width: 100%;
    padding: 0 1rem;
    margin: 0 auto;
  }

  @media screen and (min-width: 1200px) {
    padding: 0 2rem;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 3rem;
  }
`;

export const Section = styled.section`
  @media screen and (min-width: 320px) {
    padding: 1.25rem 0;
  }

  @media screen and (min-width: 768px) {
    padding: 1.25rem 0 2rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 1.25rem 0 4rem;
  }

  @media screen and (min-width: 1440px) {
    padding: 1.25rem 0 5rem;
  }
`;
