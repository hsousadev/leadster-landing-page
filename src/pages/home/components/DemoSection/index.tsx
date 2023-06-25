import Image from "next/image";

import HighlightImage from "@/shared/assets/complements/comparativo_img_CTA.png";
import SeloRD from "@/shared/assets/complements/selo_RD.png";
import FrameDesign from "@/shared/assets/complements/frame-section-design.svg";
import Rating from "@/shared/assets/complements/rating.webp";
import NoCard from "@/shared/assets/complements/no-card-dark.webp";

import { DefaultButton } from "@/shared/components/DefaultButton";

import { Container } from "./styles";

export default function DemoSection() {
  return (
    <Container>
      <div className="content">
        <Image src={HighlightImage} width={640} height={600} alt="" />

        <div className="texts">
          <div className="top">
            <h1>
              Pronto para triplicar sua <strong>Geração de Leads?</strong>
            </h1>
            <h2>
              Criação e ativação em <strong>4 minutos</strong>
            </h2>
          </div>
          <div className="middle">
            <DefaultButton
              text="Ver Demonstração"
              onClick={() =>
                window.open(
                  "https://leadster.com.br/geracao-de-leads/software/"
                )
              }
            />
            <Image src={SeloRD} width={204} height={74} alt="" />
          </div>
          <div className="bottom">
            <Image src={NoCard} width={18} height={18} alt="" />
            <h3>
              <strong>Não</strong> é necessário cartão de crédito |{" "}
            </h3>
            <Image src={Rating} width={92} height={16} alt="" />
            <h3>
              <strong>4.9/5</strong> - Média de satisfação
            </h3>
          </div>
        </div>
      </div>
      <div className="frame-design">
        <Image src={FrameDesign} width={1644} height={664} alt="" />
      </div>
    </Container>
  );
}
