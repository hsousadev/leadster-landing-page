import styled from "styled-components";

export const Container = styled.div`
  .default {
    transition: all 0.4s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px 20px;

    border: 1px solid var(--FontColor);
    border-radius: 24px;

    h3 {
      font-weight: 500;
      font-size: 16px;
      color: var(--FontColor);
    }
  }

  .default:hover {
    border: 1px solid var(--Blue);

    h3 {
      color: var(--Blue);
    }
  }

  .active {
    transition: all 0.4s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px 20px;

    border: 1px solid transparent;
    border-radius: 24px;

    background-color: var(--Blue);
    border: transparent;

    h3 {
      color: var(--White);
    }
  }
`;
