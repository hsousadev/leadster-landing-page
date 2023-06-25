import Image from "next/image";

import LogoAnimated from "@/shared/assets/icons/leadster_animated.gif";

import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <div className="top">
        <Image src={LogoAnimated} width={270} height={62} alt="" />
        <h4>Transformando visitantes em clientes.</h4>
      </div>
      <div className="content">
        <div className="column">
          <div className="title">
            <h2>Links Principais</h2>
          </div>
          <div className="links">
            <a href="https://leadster.com.br/">Home</a>
            <a href="https://leadster.com.br/geracao-de-leads/software/">
              Ferramenta
            </a>
            <a href="https://leadster.com.br/preco/">Preços</a>
            <a href="https://leadster.com.br/contato/">Contato</a>
          </div>
        </div>
        <div className="column">
          <div className="title">
            <h2>Cases</h2>
          </div>
          <div className="links">
            <a href="https://leadster.com.br/geracao-de-leads/b2b/">
              Geração de Leads B2B
            </a>
            <a href="https://leadster.com.br/geracao-de-leads/software/">
              Geração de Leads por Software
            </a>
            <a href="https://leadster.com.br/geracao-de-leads/imobiliaria/">
              Geração de Leads por Imobiliária
            </a>
            <a href="https://leadster.com.br/estudo-de-caso/">
              Cases de Sucesso
            </a>
          </div>
        </div>
        <div className="column">
          <div className="title">
            <h2>Materiais</h2>
          </div>
          <div className="links">
            <a href="https://leadster.com.br/blog/">Blog</a>
            <a href="https://leadster.com.br/agencias-parceiras/">
              Parcerias com Agências
            </a>
            <a href="https://leadster.com.br/marketing-conversacional/">
              Guia Definitivo do Marketing
            </a>
            <a href="https://leadster.com.br/materiais/">Materiais Gratuitos</a>
          </div>
        </div>
        <div className="column">
          <div className="title">
            <h2>Siga a Leadster</h2>
          </div>
          <div className="social-media">
            <a href="https://www.linkedin.com/company/leadster-platform/">
              <svg
                stroke="#838EAB"
                fill="#838EAB"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="18px"
                width="18px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </a>
            <a href="https://www.facebook.com/leadsterplatform">
              <svg
                stroke="#838EAB"
                fill="#838EAB"
                stroke-width="0"
                viewBox="0 0 320 512"
                height="18px"
                width="18px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/leadster.com.br/">
              <svg
                stroke="#838EAB"
                fill="#838EAB"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="18px"
                width="18px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
          </div>
          <div className="contact">
            <h4>
              <strong>Email: </strong>contato@leadster.com.br
            </h4>
            <h4>
              <strong>Telefone: </strong> (44) 98828-9851
            </h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-content">
          <h4>
            Copyright © 2015 - 2022 Todos os direitos reservados  |  Leadster
          </h4>

          <h4>
            Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000  | {"  "}
            <a href="https://leadster.com.br/termos_de_uso/">Termos de uso</a>
          </h4>
        </div>
      </div>
    </Container>
  );
}
