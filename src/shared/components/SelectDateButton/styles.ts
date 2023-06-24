import styled from "styled-components";

export const Container = styled.div`
  transition: all 0.4s ease-in-out;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
    gap: 8px;

    button {
      display: flex;
      align-items: center;
      justify-content: space-between;

      gap: 8px;

      h3 {
        font-weight: 500;
        color: var(--FontColor);
      }
    }

    input,
    button {
      padding: 8px 16px;
      border-radius: 8px;

      color: var(--FontColor);
      border: 1px solid var(--FontColor);
    }
  }

  .content:hover {
    button {
      border: 1px solid var(--Blue);

      h3 {
        color: var(--Blue);
      }

      svg {
        path {
          transition: all 0.4s ease-in-out;
          fill: var(--Blue);
        }
      }
    }
  }
`;
