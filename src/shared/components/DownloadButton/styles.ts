import styled from "styled-components";

export const Container = styled.button`
  .ppt,
  .doc,
  .xls {
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 8px;
      border-radius: 4px 0px 0px 4px;
    }

    .filename {
      h4 {
        padding: 8px;
      }
    }
  }

  .ppt:hover,
  .doc:hover,
  .xls:hover {
    .filename {
      h4 {
        opacity: 50%;
      }
    }
  }

  .xls {
    border-radius: 4px;
    background-color: #c2f4ea;

    .icon {
      background-color: #9fefdf;
    }

    .filename {
      h4.xls {
        color: #00ae7f;
      }
    }
  }

  .doc {
    border-radius: 4px;
    background-color: #c2e6ff;

    .icon {
      background-color: #a1d9ff;
    }

    .filename {
      h4.doc {
        color: #0073ea;
      }
    }
  }

  .ppt {
    border-radius: 4px;
    background-color: #fff8d0;

    .icon {
      background-color: #fff1a0;
    }

    .filename {
      h4.ppt {
        color: #a68e1c;
      }
    }
  }
`;
