import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  background-color: var(--White);
  position: absolute;
  top: 0;

  .content {
    max-width: var(--Max-content-width);
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 40px 0;

    img {
      cursor: pointer;
    }
  }
`;
