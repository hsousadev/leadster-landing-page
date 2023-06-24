import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--LightBlue);

  width: 100%;
  padding: 160px;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      color: var(--FontColor);
      font-weight: 400;
      margin-bottom: 8px;
    }

    h2 {
      color: var(--FontColor);
      font-weight: 500;
      padding: 0 32px;

      strong {
        font-weight: 800;
      }
    }

    .line {
      background-color: var(--Gray);

      height: 1px;
      width: 100%;
      margin: 28px 0px 16px 0px;
    }
  }
`;
