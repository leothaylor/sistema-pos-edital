import { ArrowRight, Check, MonitorSmartphone, Sparkles } from "lucide-react";
import { productConfig } from "../config/product";
import { productModules, simpleUseSteps } from "../data/content";
import SectionIntro from "./SectionIntro";

export function SimpleUseSection() {
  return (
    <section className="simple-use" id="uso" aria-labelledby="simple-use-title">
      <SectionIntro
        eyebrow="SEM BARREIRA TÉCNICA"
        index="05"
        title={<span id="simple-use-title">Você não precisa aprender inteligência artificial <em>para usar inteligência artificial.</em></span>}
      />

      <div className="simple-use-layout">
        <div className="simple-use-copy">
          <p>Você não precisa estudar prompt engineering, inventar comandos ou decidir sozinho qual ferramenta usar primeiro.</p>
          <div className="plain-language-note">
            <Sparkles aria-hidden="true" size={22} strokeWidth={1.5} />
            <p>As instruções já estão organizadas dentro de cada etapa. Você entra com o material, usa o resultado e avança.</p>
          </div>
        </div>
        <ol className="simple-steps">
          {simpleUseSteps.map(([number, label], index) => (
            <li key={number}>
              <span>{number}</span>
              <strong>{label}</strong>
              {index < simpleUseSteps.length - 1 ? <ArrowRight aria-hidden="true" size={18} /> : <Check aria-hidden="true" size={18} />}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ProductInteriorSection() {
  return (
    <section className="product-interior" id="produto" aria-labelledby="product-title">
      <SectionIntro
        description="Cada módulo orienta o que fazer, qual material usar e como avançar para a próxima decisão do seu pós-edital."
        eyebrow="POR DENTRO DO PRODUTO"
        index="06"
        title={<><span id="product-title">Uma área organizada</span><br /><em>pela próxima decisão.</em></>}
      />

      <div className="product-shell">
        <div className="product-shell-top">
          <div className="product-brand"><MonitorSmartphone aria-hidden="true" size={21} strokeWidth={1.5} /><span>JORNADA DO ALUNO</span></div>
          <span>7 MÓDULOS</span>
        </div>
        <ol className="module-list">
          {productModules.map(([number, title, description], index) => (
            <li className={index === 1 ? "is-active" : ""} key={`${number}-${title}`}>
              <span className="module-index">{number}</span>
              <div><strong>{title}</strong><small>{description}</small></div>
              <ArrowRight aria-hidden="true" size={18} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function BonusesSection() {
  if (!productConfig.showBonuses) return null;

  return (
    <section className="bonuses section-dark" id="bonus" aria-labelledby="bonuses-title">
      <SectionIntro
        eyebrow="BÔNUS"
        index="B"
        title={<span id="bonuses-title">Recursos adicionais <em>para ampliar sua preparação.</em></span>}
      />
      <div className="bonus-grid">
        {productConfig.bonuses.map((bonus) => (
          <article key={bonus.title}><span>BÔNUS</span><h3>{bonus.title}</h3><p>{bonus.description}</p></article>
        ))}
      </div>
    </section>
  );
}
