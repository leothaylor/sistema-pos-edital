import Image from "next/image";
import { ArrowDown, Circle } from "lucide-react";
import statueImage from "../../public/neural-statue-v2.webp";
import { productConfig } from "../config/product";
import CheckoutButton from "./CheckoutButton";

export default function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-enter">SEU EDITAL SAIU. AGORA EXISTE UMA ORDEM.</p>
        <p className="product-name hero-enter">{productConfig.productName}</p>
        <h1 className="hero-enter" id="hero-title">
          Pare de gastar seu tempo <em>organizando</em> o estudo.
        </h1>
        <p className="hero-lede hero-enter">
          Transforme o edital, a banca e o conteúdo da prova em uma sequência clara para começar sua preparação com direção.
        </p>
        <div className="hero-actions hero-enter">
          <CheckoutButton location="hero" />
          <a className="text-link" href="#mecanismo">
            VER COMO FUNCIONA <ArrowDown aria-hidden="true" size={17} />
          </a>
        </div>
        <div className="hero-principles hero-enter" aria-label="Princípios do sistema">
          <span><Circle aria-hidden="true" size={7} fill="currentColor" />Clareza</span>
          <span><Circle aria-hidden="true" size={7} fill="currentColor" />Sequência</span>
          <span><Circle aria-hidden="true" size={7} fill="currentColor" />Direção operacional</span>
        </div>
      </div>

      <figure className="statue-stage hero-enter">
        <div className="statue-grid" aria-hidden="true" />
        <div className="statue-frame">
          <Image
            alt="Estátua clássica parcialmente dissolvida em uma estrutura neural"
            className="statue-image"
            fill
            priority
            sizes="(max-width: 767px) 92vw, (max-width: 1199px) 48vw, 560px"
            src={statueImage}
          />
        </div>
        <figcaption>
          <span>ESTRUTURA ANTES DA EXECUÇÃO</span>
          <span>01 / DIREÇÃO</span>
        </figcaption>
      </figure>
    </section>
  );
}
