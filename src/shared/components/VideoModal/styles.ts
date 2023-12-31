import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: rgba(28, 60, 80, 0.5);

  top: 0;
  left: 0;

  z-index: 2;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: var(--White);
    border-top: 4px solid var(--Blue);
    border-radius: 16px;

    max-width: 600px;
    width: 100%;

    .head-title {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      flex-direction: column;

      padding: 16px 24px 28px 24px;
      width: 90%;

      h2 {
        text-align: center;
        font-size: 24px;
        width: 100%;
      }
    }

    iframe {
      width: 100%;
      height: 390px;
      border: none;
    }

    .informations {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;

      padding: 24px 28px;

      .info-content {
        width: 100%;

        h3.title {
          width: 100%;

          border-bottom: 1px solid var(--FontColor);
          padding-bottom: 4px;
          margin-bottom: 8px;
        }

        h3.description {
          font-weight: 500;
          margin-bottom: 24px;
        }

        .download-buttons {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 4px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .content,
    .content .informations {
      height: 90%;
      width: 90%;
    }

    .content .head-title h2 {
      font-size: 16px;
    }

    .content .informations .info-content .download-buttons {
      flex-wrap: wrap;
    }
  }
`;
