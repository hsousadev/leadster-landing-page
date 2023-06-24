import { VideoCard } from "@/shared/components/VideoCard";
import { ShortButton } from "@/shared/components/ShortButton";
import { SelectDateButton } from "@/shared/components/SelectDateButton";
import { Paginate } from "@/shared/components/Paginate";

import videos from "../../../../../server/videos.json";

import { Container } from "./styles";
import { VideoProps } from "@/shared/types/VideoProps";
import { useState } from "react";

export default function VideoLibrary() {
  const [pageNumber, setPageNumber] = useState(0);

  return (
    <Container>
      <div className="head-filters">
        <div className="filters">
          <ShortButton text="Agências" />
          <ShortButton text="Chatbot" />
          <ShortButton text="Marketing Digital" />
          <ShortButton text="Gerador de leads" />
          <ShortButton text="Mídia Paga" />
        </div>

        <div className="date">
          <h3>Ordernar por</h3>
          <SelectDateButton />
        </div>
      </div>

      <div className="videos-content">
        {videos.pages[pageNumber].map((video: VideoProps, index: number) => (
          <VideoCard
            key={index}
            thumbnail={video.thumbnail}
            url={video.url}
            title={video.title}
            category={video.category}
            date={video.date}
          />
        ))}
      </div>

      <Paginate
        setPageNumber={setPageNumber}
        pagesNumber={videos.pages.length}
        pageNumberActive={pageNumber}
      />
    </Container>
  );
}
