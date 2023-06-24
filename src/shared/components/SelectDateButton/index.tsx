import Image from "next/image";

import { useState } from "react";

import ArrowDown from "@/shared/assets/icons/arrow-down.svg";
import ArrowUp from "@/shared/assets/icons/arrow-up.svg";

import { Container } from "./styles";

export function SelectDateButton() {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <Container>
      <div className="content">
        <button onClick={() => setShowCalendar(!showCalendar)}>
          <h3>
            Data de Publicação{" "}
            {showCalendar ? (
              <Image src={ArrowUp} alt="" width={16} height={8} />
            ) : (
              <Image src={ArrowDown} alt="" width={16} height={8} />
            )}
          </h3>
        </button>
        {showCalendar && (
          <input
            onChange={(e) => console.log("date", e.target.value)}
            type="date"
            name="select-date"
            id="select-date"
          />
        )}
      </div>
    </Container>
  );
}
