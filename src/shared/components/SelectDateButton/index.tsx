import Image from "next/image";

import { Dispatch, SetStateAction, useState } from "react";

import ArrowDown from "@/shared/assets/icons/arrow-down.svg";
import ArrowUp from "@/shared/assets/icons/arrow-up.svg";

import { Container } from "./styles";

interface SelectDateButtonProps {
  setDateOrder: Dispatch<SetStateAction<string>>;
  dateOrder: string;
}

export function SelectDateButton({
  dateOrder,
  setDateOrder,
}: SelectDateButtonProps) {
  const [showOptions, setShowOptions] = useState(false);
  const isDescOrder = dateOrder === "desc";

  return (
    <Container>
      <div className="content">
        <button
          className="default"
          onClick={() => setShowOptions(!showOptions)}
        >
          <h3>
            Data de Publicação{" "}
            {showOptions ? (
              <Image src={ArrowUp} alt="" width={16} height={8} />
            ) : (
              <Image src={ArrowDown} alt="" width={16} height={8} />
            )}
          </h3>
        </button>
        {showOptions && (
          <>
            <button
              className={isDescOrder ? "active" : "default"}
              onClick={() => setDateOrder("desc")}
            >
              <h3>Mais recentes</h3>
            </button>
            <button
              className={!isDescOrder ? "active" : "default"}
              onClick={() => setDateOrder("asc")}
            >
              <h3>Mais antigos</h3>
            </button>
          </>
        )}
      </div>
    </Container>
  );
}
