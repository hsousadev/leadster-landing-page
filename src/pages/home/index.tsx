import { Hero } from "./components/Hero";
import { TopBar } from "@/shared/components/TopBar";
import { VideoLibrary } from "./components/VideoLibrary";

import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <TopBar />
      <Hero />
      <VideoLibrary />
    </Container>
  );
}
