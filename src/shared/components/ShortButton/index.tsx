import { Container } from "./styles";

interface ShortButtonProps {
  text: string;
}

export function ShortButton({ text }: ShortButtonProps) {
  return (
    <Container>
      <button className="content">
        <h3>{text}</h3>
      </button>
    </Container>
  );
}
