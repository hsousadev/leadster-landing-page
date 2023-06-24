import { Container } from "./styles";

interface ShortButtonProps {
  text: string;
  onClick?: () => void;
  active: boolean;
}

export function ShortButton({ text, onClick, active }: ShortButtonProps) {
  return (
    <Container>
      <button onClick={onClick} className={active ? "active" : "default"}>
        <h3>{text}</h3>
      </button>
    </Container>
  );
}
