import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle<any>`

  :root {
    --Max-content-width: 1140px;

    --Blue: #1B7EFF;
    --DarkGrey: #838EAB;
    --Gray: #C8D4DD;
    --LightBlue: #F0F8FF;
    --White: #FFF;

    --FontColor: #1C3C50;
  }

  html {
    transition: all 0.2s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--White);

    @media(max-width: 1360px) {
      padding: 0 64px;
    }

    @media(max-width: 720px) {
      padding: 0 32px;

      h1 {
        font-size: 32px !important;
      }

      h2 {
        font-size: 24px;
      }

      h3 {
        font-size: 16px;
      }

      h4 {
        font-size: 14px;
      }

      p {
        font-size: 12px;
      }
    }

    @media (max-width: 540px) {
      h1 {
        font-size: 24px !important;
      }

      h2 {
        font-size: 16px;
      }

      h3 {
        font-size: 14px;
      }

      h4 {
        font-size: 12px;
      }

      p {
        font-size: 10px;
      }
    }

    @media(max-width: 425px) {
      padding: 0 16px;
    }

    @media(max-width: 1380px) {
      zoom: 80%;
    }

    @media(max-width: 1232px) {
      zoom: 100%;
    }
  }

  body {
    width: 100%;
    background: var(--White) !important;
    margin: 0;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, p, strong, a {
    transition: all 0.2s ease-in-out;

    margin: 0;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-style: normal;
    letter-spacing: -0.32px;
    color: var(--FontColor);
  }

  h1 {
    font-size: 48px;
  }

  h2 {
    font-size: 18px;
  }

  h3 {
    font-size: 16px;
  }

  h4 {
    font-size: 14px;
  }

  p {
    font-size: 12px;
  }

  button {
    cursor: pointer;
    outline: none;
    appearance: none;
    border: none;
    background: transparent;
    padding: 0;
  }
`;
