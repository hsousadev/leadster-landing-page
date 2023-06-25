import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  background-color: var(--LightBlue);

  width: 100%;
  margin-bottom: 48px;
  padding: 0 160px;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 64px 0;
    z-index: 1;
    gap: 88px;

    .texts {
      width: 100%;

      .top {
        max-width: 468px;
        width: 100%;
        padding-bottom: 24px;

        h1 {
          font-size: 42px;
          font-weight: 500;
        }

        h2 {
          margin-top: 8px;
          font-size: 24px;
          font-weight: 500;
        }
      }

      .middle {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 16px;

        padding: 24px 0;
        border-top: 2px solid var(--Gray);
      }

      .bottom {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 4px;

        h3 {
          font-weight: 500;
        }
      }
    }
  }

  .frame-design {
    display: flex;
    position: absolute;
    left: -610px;
  }

  @media (max-width: 1232px) {
    .content {
      flex-direction: column;
      > img {
        width: 100%;
        height: 100%;
      }
    }

    .frame-design {
      display: none;
    }
  }

  @media (max-width: 768px) {
    padding: 0;
    border-radius: 16px;

    .content {
      gap: 16px;
      padding: 16px;

      .texts .middle,
      .texts .bottom {
        flex-direction: column;
        gap: 16px;
      }
    }
  }
`;

export default Container;
