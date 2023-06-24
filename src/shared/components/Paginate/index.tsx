import { Dispatch, SetStateAction, useState } from "react";
import { Container } from "./styles";

interface PaginateProps {
  pagesNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
}

export function Paginate({ pagesNumber, setPageNumber }: PaginateProps) {
  return (
    <Container>
      <strong>Página</strong>
      <div className="pages-list">
        {Array.from({ length: pagesNumber }, (_, index) => (
          <button key={index} onClick={() => setPageNumber(index)}>
            <strong>{index + 1}</strong>
          </button>
        ))}
      </div>
    </Container>
  );
}
