import Image from "next/image";

import Logo from "@/shared/assets/icons/leadster-logo.svg";

import { Container } from "./styles";

export function TopBar() {
  return (
    <Container>
      <Image src={Logo} alt="Leadster Logo" height={44} width={204} />
    </Container>
  );
}
