import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;

  .top {
    display: flex;
    flex-direction: column;
    max-width: var(--Max-content-width);

    h4 {
      margin-top: 4px;
      letter-spacing: 0.6px;
      color: var(--DarkGrey);
      font-weight: 500;
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    margin-top: 48px;
    width: 100%;

    max-width: var(--Max-content-width);

    .column {
      display: flex;
      flex-direction: column;
      gap: 48px;

      .links {
        display: flex;
        flex-direction: column;
        gap: 24px;

        a {
          transition: all 0.4s ease-in-out;
          text-decoration: none;
          font-size: 14px;
          color: var(--DarkGrey);
        }

        a:hover {
          color: var(--Blue);
        }
      }

      .social-media {
        display: flex;
        gap: 8px;
        margin-top: -22px;

        a {
          transition: all 0.4s ease-in-out;

          display: flex;
          align-items: center;
          justify-content: center;

          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: #ebeef5;
        }

        svg {
          transition: all 0.4s ease-in-out;
        }

        a:hover {
          background: #00aff0;

          svg {
            fill: var(--White);
          }
        }
      }

      .contact {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-top: -16px;

        h4 {
          color: var(--DarkGrey);
          font-weight: 500;

          strong {
            font-weight: 500;
          }
        }
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: center;

    width: 100%;
    padding: 32px 0;
    margin-top: 72px;

    border: 0.5px solid var(--Gray);

    .bottom-content {
      display: flex;
      justify-content: space-between;

      max-width: var(--Max-content-width);
      width: 100%;

      h4, a {
        text-decoration: none;
        color: var(--DarkGrey);
        font-weight: 500;
      }
    }
  }
`;
