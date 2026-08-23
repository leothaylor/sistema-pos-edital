import { Clock3, Radar } from "lucide-react";
import { journeySteps } from "../data/content";
import CheckoutButton from "./CheckoutButton";
import SectionIntro from "./SectionIntro";

export default function Journey() {
  return (
    <section className="journey section-dark" id="jornada" aria-labelledby="journey-title">
      <SectionIntro
        description="Cada etapa prepara a próxima. Você deixa de escolher ferramentas soltas e passa a seguir uma lógica operacional."
        eyebrow="A JORNADA"
        index="04"
        title={<><span id="journey-title">Você não recebe ferramentas soltas.</span><br /><em>Recebe uma ordem.</em></>}
      />

      <ol className="journey-grid">
        {journeySteps.map((step) => {
          const Icon = step.icon;
          return (
            <li className="journey-card" key={step.number}>
              <div className="journey-card-top"><span>{step.number}</span><Icon aria-hidden="true" size={24} strokeWidth={1.5} /></div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <ul aria-label={`O que observar em ${step.title}`}>
                {step.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </li>
          );
        })}
      </ol>

      <div className="conditional-routes">
        <article>
          <div><Radar aria-hidden="true" size={24} strokeWidth={1.5} /><span>EXTRA</span></div>
          <h3>Radar de mudanças</h3>
          <p>Compare versões e identifique mudanças relevantes quando uma atualização do edital exigir nova leitura.</p>
        </article>
        <article>
          <div><Clock3 aria-hidden="true" size={24} strokeWidth={1.5} /><span>CONTINGÊNCIA</span></div>
          <h3>Menos de 21 dias</h3>
          <p>Use uma rota específica quando o tempo curto exigir recorte, prioridade e decisões mais objetivas.</p>
        </article>
      </div>

      <div className="journey-cta">
        <p>Do documento aberto à rotina possível: uma etapa por vez.</p>
        <CheckoutButton location="mechanism" />
      </div>
    </section>
  );
}
