import { useState } from "react";
import { ArrowDown } from "../ArrowDown";

import { Container } from "./styles";

export function SelectDateButton() {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <Container showCalendar={showCalendar}>
      <div className="content">
        <button onClick={() => setShowCalendar(!showCalendar)}>
          <h3>Data de Publicação</h3>
          <ArrowDown />
        </button>
        {showCalendar && (
          <input type="date" name="select-date" id="select-date" />
        )}
      </div>
    </Container>
  );
}
