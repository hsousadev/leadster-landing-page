import { TopBar } from "@/shared/components/TopBar";

import Hero from "./components/Hero";
import VideoLibrary from "./components/VideoLibrary";
import DemoSection from "./components/DemoSection";

import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <TopBar />
      <Hero />
      <VideoLibrary />
      <DemoSection />
    </Container>
  );
}
