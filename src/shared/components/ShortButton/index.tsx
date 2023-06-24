import { Container } from "./styles";

interface ShortButtonProps {
  text: string;
  onClick?: () => void;
}

export function ShortButton({ text, onClick }: ShortButtonProps) {
  return (
    <Container>
      <button onClick={onClick} className="content">
        <h3>{text}</h3>
      </button>
    </Container>
  );
}
