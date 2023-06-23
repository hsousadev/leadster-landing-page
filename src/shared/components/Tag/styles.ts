import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;

  border: 2px solid var(--Blue);
  border-radius: 16px 16px 16px 0px;
  margin-bottom: 16px;

  h4 {
    color: var(--Blue);
    font-weight: 700;
    text-transform: uppercase;
  }
`;
