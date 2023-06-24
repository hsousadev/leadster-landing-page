/* eslint-disable @next/next/no-img-element */
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
          <h3>Data de Publicação</h3>
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
