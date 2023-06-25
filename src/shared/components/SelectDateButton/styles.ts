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
      }
    }

    input,
    button {
      padding: 8px 16px;
      border-radius: 8px;

      border: 1px solid var(--FontColor);
    }

    button.active {
      background-color: var(--Blue);
      border: 1px solid transparent;

      h3 {
        color: var(--White);
      }
    }

    button.default:hover {
      border: 1px solid var(--Blue);

      h3 {
        color: var(--Blue);
      }
    }
  }
`;
