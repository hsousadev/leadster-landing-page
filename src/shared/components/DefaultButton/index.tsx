import { Container } from "./styles";

interface DefaultButtonProps {
  text: string;
  onClick?: () => void;
}

export function DefaultButton({ text, onClick }: DefaultButtonProps) {
  return (
    <Container>
      <button onClick={onClick} className="default" >
        <h2>{text}</h2>
      </button>
    </Container>
  );
}
