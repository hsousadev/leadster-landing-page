/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Container } from "./styles";

import Play from "@/shared/assets/icons/play.svg";

interface VideoCardProps {
  title: string;
  thumbnail: string;
}

export function VideoCard({ title, thumbnail }: VideoCardProps) {
  return (
    <Container>
      <div className="content">
        <div className="thumbnail-content">
          <img className="thumb" src={thumbnail} alt="Video Thumbnail" />
          <Image className="play" src={Play} alt="Video Thumbnail" />
        </div>
        <div className="title-content">
          <h2>{title}</h2>
        </div>
      </div>
    </Container>
  );
}
