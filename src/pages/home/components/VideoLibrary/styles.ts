import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 96px 0;
  max-width: var(--Max-content-width);
  width: 100%;

  .head-filters {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;

    padding-bottom: 24px;

    .filters,
    .date {
      display: flex;
      gap: 16px;
    }

    .filters {
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;

      .buttons {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;

        gap: 16px;
      }
    }

    .date {
      align-items: flex-start;
      justify-content: space-between;

      > h3 {
        margin-top: 8px;
      }
    }
  }

  .videos-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 28px;

    flex-wrap: wrap;

    width: 100%;
    padding: 64px 0px;

    border-bottom: 2px solid var(--Gray);
    border-top: 2px solid var(--Gray);

    margin-bottom: 40px;
  }

  @media (max-width: 1200px) {
    .head-filters {
      flex-direction: column;
      gap: 16px;

      .date {
        flex-direction: column;
      }
    }
  }

  @media (max-width: 768px) {
    margin: 64px 0;
  }
`;

export default Container;
