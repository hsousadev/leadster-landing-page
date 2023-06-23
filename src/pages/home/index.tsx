import { Hero } from "./components/Hero";

import { TopBar } from "@/shared/components/TopBar";

import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <TopBar />
      <Hero />
    </Container>
  );
}
