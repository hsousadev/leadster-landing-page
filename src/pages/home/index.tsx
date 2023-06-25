import { TopBar } from "@/shared/components/TopBar";
import { Footer } from "@/shared/components/Footer";

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
      <Footer />
    </Container>
  );
}
