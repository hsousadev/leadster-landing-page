import styled from "styled-components";

export const Container = styled.button`
  width: 360px;
  height: 290px;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 100%;

    border-radius: 16px;
    background: #fff;
    box-shadow: 0px 32px 50px 0px rgba(200, 212, 221, 0.6);

    .thumbnail-content {
      width: 100%;
      border-radius: 16px 16px 0px 0px;

      display: flex;
      align-items: center;
      justify-content: center;

      img.play {
        display: none;
        position: absolute;
        transition: all 0.4s ease-in-out;
      }

      img.thumb {
        transition: all 0.4s ease-in-out;
        width: 100%;
        height: 100%;
        border-radius: 16px 16px 0px 0px;
      }
    }

    .title-content {
      display: flex;
      padding: 24px;

      h2 {
        text-align: start;
      }
    }
  }

  .content:hover {
    .thumbnail-content {
      background-color: var(--Blue);

      img.play {
        display: block;
      }

      img.thumb {
        opacity: 50%;
      }
    }

    .title-content {
      h2 {
        color: var(--Blue);
      }
    }
  }
`;
