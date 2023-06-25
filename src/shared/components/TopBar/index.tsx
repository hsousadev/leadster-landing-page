import Image from "next/image";

import Logo from "@/shared/assets/icons/leadster-logo.svg";
import smoothScroll from "@/shared/utils/smoothScroll";

import { Container } from "./styles";

export function TopBar() {
  return (
    <Container>
      <div className="content">
        <Image
          onClick={() => smoothScroll("top")}
          src={Logo}
          alt="Leadster Logo"
          height={44}
          width={204}
        />
      </div>
    </Container>
  );
}
