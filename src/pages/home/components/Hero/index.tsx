import Image from "next/image";

import { Tag } from "@/shared/components/Tag";

import MaisConversao from "@/shared/assets/icons/mais-conversao.svg";

import { Container } from "./styles";

export function Hero() {
  return (
    <Container>
      <div className="content">
        <Tag text="WEBNINARS EXCLUSIVOS" />
        <h2>Menos Conversinha,</h2>
        <Image src={MaisConversao} alt="" width={684} height={78} />
        <div className="line" />
        <h3>
          Conheça as estratégias que <strong>mudaram o jogo</strong> e como
          aplicá-las no seu negócio
        </h3>
      </div>
    </Container>
  );
}
