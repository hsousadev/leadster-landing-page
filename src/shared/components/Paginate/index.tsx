import { Dispatch, SetStateAction, useState } from "react";
import { Container } from "./styles";

interface PaginateProps {
  pagesNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
  pageNumberActive: number;
}

export function Paginate({
  pagesNumber,
  setPageNumber,
  pageNumberActive,
}: PaginateProps) {
  return (
    <Container>
      <strong>Página</strong>
      <div className="pages-list">
        {Array.from({ length: pagesNumber }, (_, index) =>
          index === pageNumberActive ? (
            <button className="active" key={index} onClick={() => setPageNumber(index)}>
              <strong>{index + 1}</strong>
            </button>
          ) : (
            <button key={index} onClick={() => setPageNumber(index)}>
              <strong>{index + 1}</strong>
            </button>
          )
        )}
      </div>
    </Container>
  );
}
