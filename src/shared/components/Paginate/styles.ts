import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  strong {
    color: var(--FontColor);
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -0.48px;
  }

  .pages-list {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      transition: all 0.4s ease-in-out;
      border-radius: 8px;
      width: 42px;
      height: 42px;
    }

    button.active {
      border: 1px solid var(--Blue);
      strong {
        color: var(--Blue);
      }
    }

    button:hover {
      border: 1px solid var(--Blue);
      strong {
        color: var(--Blue);
      }
    }
  }
`;
