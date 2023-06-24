import { useState } from "react";
import { ArrowDown } from "../ArrowDown";
import { ArrowUp } from "../ArrowUp";

import { Container } from "./styles";

export function SelectDateButton() {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <Container>
      <div className="content">
        <button onClick={() => setShowCalendar(!showCalendar)}>
          <h3>Data de Publicação</h3>
          {showCalendar ? <ArrowUp /> : <ArrowDown />}
        </button>
        {showCalendar && (
          <input type="date" name="select-date" id="select-date" />
        )}
      </div>
    </Container>
  );
}
