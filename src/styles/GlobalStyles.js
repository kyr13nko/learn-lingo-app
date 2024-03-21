import "modern-normalize";

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    --color-bg: #F8F8F8;
    
    --color-black: #121417;
    --color-black-70: #12141770;
    --color-black-20: #12141720;

    --color-grey: #8A8A89;
    --color-white: #ffffff;

    --color-primary: #F4C550;
    --color-secondary: #FFDC86;

    --color-green: #38CD3E;

    --transition: all 400ms ease;
  }

  body {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
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

export const Container = styled.div`
  @media screen and (min-width: 320px) {
    max-width: 100%;
    padding: 0 1rem;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 2rem;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1024px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 8rem;
  }
`;
