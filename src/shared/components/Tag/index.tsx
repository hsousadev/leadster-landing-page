import { Container } from "./styles";

interface TagProps {
  text: string;
}

export function Tag({ text }: TagProps) {
  return (
    <Container>
      <h4>{text}</h4>
    </Container>
  );
}
