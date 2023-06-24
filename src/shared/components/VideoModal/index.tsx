import Image from "next/image";
import Close from "@/shared/assets/icons/close.svg";

import { DownloadButton } from "../DownloadButton";

import { Container } from "./styles";
import { Dispatch, SetStateAction } from "react";

interface ViodeoModalProps {
  url?: string;
  title?: string;
  setShowVideoModal: Dispatch<SetStateAction<boolean>>;
}

export function VideoModal({
  setShowVideoModal,
  url,
  title,
}: ViodeoModalProps) {
  return (
    <Container>
      <div className="content">
        <div className="head-title">
          <button onClick={() => setShowVideoModal(false)}>
            <Image src={Close} alt="Fechar Modal" width={14} height={14} />
          </button>
          <h2>{title}</h2>
        </div>
        <iframe src={url} />
        <div className="informations">
          <div className="info-content">
            <h3 className="title">Descrição</h3>
            <h3 className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              fermentum pharetra turpis, id finibus est accumsan sed. Morbi sit
              amet fermentum turpis, in consequat dui. Fusce a nibh a metus
              sollicitudin aliquam eu a velit. Mauris consequat turpis nec urna
              tempus, ut posuere mauris ullamcorper.
            </h3>
            <h3 className="title">Downloads</h3>
            <div className="download-buttons">
              <DownloadButton filename="Spreadsheet.xls" />
              <DownloadButton filename="Document.doc" />
              <DownloadButton filename="Presentation.ppt" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
