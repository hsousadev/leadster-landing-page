/* eslint-disable react-hooks/exhaustive-deps */
import { VideoCard } from "@/shared/components/VideoCard";
import { ShortButton } from "@/shared/components/ShortButton";
import { SelectDateButton } from "@/shared/components/SelectDateButton";
import { Paginate } from "@/shared/components/Paginate";

import videos from "../../../../../server/videos.json";

import { Container } from "./styles";
import { VideoProps } from "@/shared/types/VideoProps";
import { useEffect, useState } from "react";

export default function VideoLibrary() {
  const [pageNumber, setPageNumber] = useState(0);
  const [filter, setFilter] = useState("");
  const [filteredVideos, setFilteredVideos] = useState<VideoProps[]>([]);
  const [dateOrder, setDateOrder] = useState("desc");

  function handleFiltering(category: string) {
    setFilter(category);
    const filteredVideos = videos.pages
      .flat() // Get into a single array
      .filter((video: VideoProps) => video.category === category);
    setFilteredVideos(filteredVideos);
    setPageNumber(0);
  }

  useEffect(() => {
    if (filter === "") {
      setFilteredVideos(videos.pages.flat());
    } else {
      const filteredVideos = videos.pages
        .flat()
        .filter((video: VideoProps) => video.category === filter);
      setFilteredVideos(filteredVideos);
      setPageNumber(0);
    }
  }, [filter]);

  useEffect(() => {
    if (dateOrder === "desc") {
      setFilteredVideos((prevFilteredVideos) =>
        [...prevFilteredVideos].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
      );
    } else if (dateOrder === "asc") {
      setFilteredVideos((prevFilteredVideos) =>
        [...prevFilteredVideos].sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        )
      );
    }
    setPageNumber(0);
  }, [dateOrder]);

  return (
    <Container>
      <div className="head-filters">
        <div className="filters">
          <div className="buttons">
            <ShortButton
              text="Agências"
              active={filter === "agencia"}
              onClick={() => handleFiltering("agencia")}
            />
            <ShortButton
              text="Chatbot"
              active={filter === "chatbot"}
              onClick={() => handleFiltering("chatbot")}
            />
            <ShortButton
              text="Marketing Digital"
              active={filter === "marketing-digital"}
              onClick={() => handleFiltering("marketing-digital")}
            />
            <ShortButton
              text="Gerador de leads"
              active={filter === "leads"}
              onClick={() => handleFiltering("leads")}
            />
            <ShortButton
              text="Mídia Paga"
              active={filter === "midia-paga"}
              onClick={() => handleFiltering("midia-paga")}
            />
          </div>
          {filter !== "" && (
            <div className="clean-filter">
              <ShortButton
                text="Limpar filtro ✖"
                active={filter === ""}
                onClick={() => setFilter("")}
              />
            </div>
          )}
        </div>

        <div className="date">
          <h3>Ordenar por</h3>
          <SelectDateButton dateOrder={dateOrder} setDateOrder={setDateOrder} />
        </div>
      </div>

      <div className="videos-content">
        {filteredVideos
          .slice(pageNumber * 9, (pageNumber + 1) * 9)
          .map((video: VideoProps, index: number) => (
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
        pagesNumber={Math.ceil(filteredVideos.length / 9)}
        pageNumberActive={pageNumber}
      />
    </Container>
  );
}
