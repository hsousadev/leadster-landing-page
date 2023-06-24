import { VideoCard } from "@/shared/components/VideoCard";
import { ShortButton } from "@/shared/components/ShortButton";
import { SelectDateButton } from "@/shared/components/SelectDateButton";

import { Container } from "./styles";

export default function VideoLibrary() {
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
        <VideoCard
          thumbnail="https://i.ytimg.com/vi/yju8RTdhHQ0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDttmwOCYFrD9UsAY_LPKW7W9BUug"
          title="Como aumentar sua Geração de Leads feat. Traktor"
        />
        <VideoCard
          thumbnail="https://i.ytimg.com/vi/yju8RTdhHQ0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDttmwOCYFrD9UsAY_LPKW7W9BUug"
          title="Como aumentar sua Geração de Leads feat. Traktor"
        />
        <VideoCard
          thumbnail="https://i.ytimg.com/vi/yju8RTdhHQ0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDttmwOCYFrD9UsAY_LPKW7W9BUug"
          title="Como aumentar sua Geração de Leads feat. Traktor"
        />
        <VideoCard
          thumbnail="https://i.ytimg.com/vi/yju8RTdhHQ0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDttmwOCYFrD9UsAY_LPKW7W9BUug"
          title="Como aumentar sua Geração de Leads feat. Traktor"
        />
        <VideoCard
          thumbnail="https://i.ytimg.com/vi/yju8RTdhHQ0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDttmwOCYFrD9UsAY_LPKW7W9BUug"
          title="Como aumentar sua Geração de Leads feat. Traktor"
        />
        <VideoCard
          thumbnail="https://i.ytimg.com/vi/yju8RTdhHQ0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDttmwOCYFrD9UsAY_LPKW7W9BUug"
          title="Como aumentar sua Geração de Leads feat. Traktor"
        />
        <VideoCard
          thumbnail="https://i.ytimg.com/vi/yju8RTdhHQ0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDttmwOCYFrD9UsAY_LPKW7W9BUug"
          title="Como aumentar sua Geração de Leads feat. Traktor"
        />
        <VideoCard
          thumbnail="https://i.ytimg.com/vi/yju8RTdhHQ0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDttmwOCYFrD9UsAY_LPKW7W9BUug"
          title="Como aumentar sua Geração de Leads feat. Traktor"
        />
        <VideoCard
          thumbnail="https://i.ytimg.com/vi/yju8RTdhHQ0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDttmwOCYFrD9UsAY_LPKW7W9BUug"
          title="Como aumentar sua Geração de Leads feat. Traktor"
        />
      </div>
    </Container>
  );
}
