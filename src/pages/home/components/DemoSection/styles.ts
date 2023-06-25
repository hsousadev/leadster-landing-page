import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--LightBlue);

  width: 100%;
  margin-bottom: 48px;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 64px 0 0 0;
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
        width: 620px;
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
    position: absolute;
    left: -610px;
  }
`;

export default Container;
