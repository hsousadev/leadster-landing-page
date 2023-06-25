import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--LightBlue);

  width: 100%;
  padding: 160px;
  margin-top: 124px;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-weight: 400;
      margin-bottom: 8px;
    }

    h2 {
      font-weight: 500;
      padding: 0 32px;
      text-align: center;

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

  @media (max-width: 768px) {
    padding: 0px;
    border-radius: 16px;

    .content {
      padding: 64px;

      h2 {
        padding: 0px;
        text-align: left;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export default Container;
