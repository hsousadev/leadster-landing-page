import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 96px;
  max-width: var(--Max-content-width);
  width: 100%;

  .head-filters {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;

    border-bottom: 2px solid var(--Gray);
    padding-bottom: 24px;

    .filters,
    .date {
      display: flex;
      gap: 16px;
    }

    .filters {
      align-items: center;
      justify-content: flex-start;
    }

    .date {
      align-items: flex-start;
      justify-content: space-between;

      > h3 {
        margin-top: 8px;
        color: var(--FontColor);
      }
    }
  }
`;
