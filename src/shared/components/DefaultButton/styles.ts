import styled from "styled-components";

export const Container = styled.div`
  .default {
    transition: all 0.4s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 24px 32px;

    border: 1px solid transparent;
    border-radius: 40px;
    background-color: var(--Blue);

    h2 {
      font-weight: 600;
      text-transform: uppercase;
      color: var(--White);
    }
  }

  .default:hover {
    border: 1px solid var(--Blue);
    background-color: transparent;

    h2 {
      color: var(--Blue);
    }
  }
`;
