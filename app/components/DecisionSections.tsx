import { Check, Minus, ShieldCheck, X } from "lucide-react";
import { audience } from "../data/content";
import { formatProductPrice, productConfig } from "../config/product";
import CheckoutButton from "./CheckoutButton";
import SectionIntro from "./SectionIntro";

const faqItems = [
  {
    question: "É só um pacote de comandos?",
    answer: "Não. Os comandos são a tecnologia por trás das etapas. O valor está na sequência organizada de uso: o que inserir, o que observar no resultado e para onde avançar.",
  },
  {
    question: "Preciso entender de inteligência artificial?",
    answer: "Não. O sistema foi organizado para que você siga instruções claras em cada etapa, sem precisar aprender a criar comandos para IA do zero.",
  },
  {
    question: "Funciona para qualquer concurso?",
    answer: "O sistema trabalha a partir do edital e dos materiais fornecidos. A utilidade e a profundidade das saídas dependem da qualidade e da disponibilidade dessas informações.",
  },
  {
    question: "Isso estuda por mim?",
    answer: "Não. O Sistema Pós-Edital ajuda a organizar decisões e reduzir trabalho operacional. O estudo, a prática e a revisão continuam sendo responsabilidade do aluno.",
  },
  {
    question: "E se eu não gostar?",
    answer: productConfig.guaranteeDays === null
      ? "As condições de garantia, quando aplicáveis, serão apresentadas com clareza no checkout antes da compra."
      : `A oferta prevê ${productConfig.guaranteeDays} dias de garantia, conforme as condições apresentadas no checkout oficial.`,
  },
] as const;

export function AudienceSection() {
  return (
    <section className="audience" id="para-quem" aria-labelledby="audience-title">
      <SectionIntro eyebrow="PARA QUEM É" index="07" title={<span id="audience-title">Clareza também é saber <em>o que este produto não promete.</em></span>} />
      <div className="audience-grid">
        <article className="for-you">
          <header><Check aria-hidden="true" size={22} /><h3>É para quem</h3></header>
          <ul>{audience.forYou.map((item) => <li key={item}><Check aria-hidden="true" size={17} />{item}</li>)}</ul>
        </article>
        <article className="not-for-you">
          <header><X aria-hidden="true" size={22} /><h3>Não é</h3></header>
          <ul>{audience.notForYou.map((item) => <li key={item}><Minus aria-hidden="true" size={17} />{item}</li>)}</ul>
        </article>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="faq section-dark" id="faq" aria-labelledby="faq-title">
      <SectionIntro
        description="Respostas diretas, sem promessas que o produto não pode sustentar."
        eyebrow="OBJEÇÕES E DÚVIDAS"
        index="08"
        title={<span id="faq-title">Antes de acessar, <em>entenda o que está comprando.</em></span>}
      />
      <div className="faq-list">
        {faqItems.map((item, index) => (
          <details key={item.question} open={index === 0}>
            <summary><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.question}</strong><i aria-hidden="true" /></summary>
            <div className="faq-answer"><p>{item.answer}</p></div>
          </details>
        ))}
      </div>
    </section>
  );
}

export function OfferSection() {
  const price = formatProductPrice();
  const confirmedConditions = [
    productConfig.lifetimeAccess === true ? "Acesso vitalício" : null,
    productConfig.lifetimeAccess === false ? "Acesso conforme o período informado na oferta" : null,
    productConfig.guaranteeDays !== null ? `${productConfig.guaranteeDays} dias de garantia` : null,
  ].filter(Boolean);

  return (
    <section className="offer" id="oferta" aria-labelledby="offer-title">
      <div className="offer-card">
        <div className="offer-copy">
          <p className="section-eyebrow"><span>09</span>OFERTA</p>
          <p className="offer-product">{productConfig.productName}</p>
          <h2 id="offer-title">Organize o caminho.<br /><em>Comece o estudo.</em></h2>
          <ul className="offer-benefits">
            <li><Check aria-hidden="true" size={18} />Sequência completa com quatro etapas principais</li>
            <li><Check aria-hidden="true" size={18} />Radar de mudanças para quando houver atualização</li>
            <li><Check aria-hidden="true" size={18} />Rota de contingência para menos de 21 dias</li>
            <li><Check aria-hidden="true" size={18} />Orientação de entrada, resultado e próximo passo</li>
          </ul>
        </div>

        <aside className="offer-action" aria-label="Condições da oferta">
          <span className="offer-status">{price ? "VALOR DE ACESSO" : "INSCRIÇÕES EM BREVE"}</span>
          {price ? <p className="offer-price">{price}</p> : <p className="price-pending">O valor e as condições de acesso serão apresentados antes da abertura das inscrições.</p>}
          {confirmedConditions.length ? <ul className="confirmed-conditions">{confirmedConditions.map((item) => <li key={item}>{item}</li>)}</ul> : null}
          <CheckoutButton includePrice label="ACESSAR O SISTEMA" location="offer" />
          <p className="safe-config"><ShieldCheck aria-hidden="true" size={18} />Você verá todas as condições de compra antes de confirmar o pedido.</p>
        </aside>
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section className="final-cta section-red" id="cta-final" aria-labelledby="final-title">
      <p className="section-eyebrow"><span>10</span>PRÓXIMO PASSO</p>
      <h2 id="final-title">Seu edital já saiu.<br /><em>Agora comece pela ordem.</em></h2>
      <p>Menos tempo montando a estrutura. Mais clareza para começar a preparação.</p>
      <CheckoutButton className="cta-button cta-button--light" location="final" />
    </section>
  );
}
