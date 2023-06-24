import Image from "next/image";

import YellowDownloadCloud from "@/shared/assets/icons/download-cloud-yellow.svg";
import BlueDownloadCloud from "@/shared/assets/icons/download-cloud-blue.svg";
import GreenDownloadCloud from "@/shared/assets/icons/download-cloud-green.svg";

import { Container } from "./styles";

interface DownloadButtonProps {
  filename: string;
}

export function DownloadButton({ filename }: DownloadButtonProps) {
  const fileExtension = filename.slice(-4);

  const isPPT = fileExtension === ".ppt";
  const isDOC = fileExtension === ".doc";

  const icon = isPPT
    ? YellowDownloadCloud
    : isDOC
    ? BlueDownloadCloud
    : GreenDownloadCloud;

  const className = isPPT ? "ppt" : isDOC ? "doc" : "xls";

  return (
    <Container>
      <div className={className}>
        <div className="icon">
          <Image src={icon} width={16} height={16} alt="" />
        </div>

        <div className="filename">
          <h4 className={className}>{filename}</h4>
        </div>
      </div>
    </Container>
  );
}
