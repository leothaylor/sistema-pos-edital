"use client";

import dynamic from "next/dynamic";
import {
  ArrowDown,
  ArrowRight,
  CalendarRange,
  Check,
  Clock3,
  FileSearch,
  FileText,
  Layers3,
  Route,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import StaticNeuralBust from "./StaticNeuralBust";

// TROCAR AQUI quando o checkout da Hotmart estiver publicado.
const CHECKOUT_URL: string | null = null;

const NeuralBust = dynamic(() => import("./NeuralBust"), { ssr: false, loading: () => <StaticNeuralBust /> });
const MotionRuntime = dynamic(() => import("./MotionRuntime"), { ssr: false });

const journey = [
  { number: "01", title: "Entenda seu Edital", copy: "Encontre datas, regras, pesos e pontos de atenção antes de tomar qualquer decisão.", icon: FileSearch },
  { number: "02", title: "Organize o Conteúdo", copy: "Transforme o conteúdo programático em blocos claros, comparáveis e acionáveis.", icon: Layers3 },
  { number: "03", title: "Entenda sua Banca", copy: "Leia o padrão de cobrança para saber onde profundidade e prática realmente importam.", icon: ScanSearch },
  { number: "04", title: "Monte sua Rotina", copy: "Cruze peso, domínio e tempo disponível em uma primeira semana possível de executar.", icon: CalendarRange },
];

const objections = [
  ["Não entendo de IA.", "Você não precisa. Cada etapa diz o que inserir, o que observar e qual é o próximo passo."],
  ["É só um pack de prompts?", "Não. É uma jornada organizada: as ferramentas aparecem na ordem em que o problema acontece."],
  ["Vai servir para o meu concurso?", "O sistema trabalha a partir do edital e das informações que você já tem — não de um concurso genérico."],
  ["E se não servir para mim?", "Você tem 7 dias para acessar, testar a estrutura e decidir com calma."],
];

function supportsWebGL() {
  try {
    if (new URLSearchParams(window.location.search).has("no-webgl")) return false;
    const canvas = document.createElement("canvas");
    return Boolean(window.WebGL2RenderingContext && canvas.getContext("webgl2"));
  } catch {
    return false;
  }
}

export default function Landing() {
  const root = useRef<HTMLDivElement>(null);
  const [notice, setNotice] = useState(false);
  const [show3D, setShow3D] = useState(false);
  const [enhancementsReady, setEnhancementsReady] = useState(false);

  useEffect(() => {
    const activate = () => {
      const compact = window.matchMedia("(max-width: 767px)").matches;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setEnhancementsReady(!compact && !reduced);
      setShow3D(!compact && !reduced && supportsWebGL());
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(activate, { timeout: 1800 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = globalThis.setTimeout(activate, 900);
    return () => globalThis.clearTimeout(timeoutId);
  }, []);

  const handleCheckout = () => {
    if (CHECKOUT_URL) {
      window.open(CHECKOUT_URL, "_self", "noopener,noreferrer");
      return;
    }
    setNotice(true);
    window.setTimeout(() => setNotice(false), 2800);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={root} className="site-shell">
      {enhancementsReady ? <MotionRuntime root={root} /> : null}
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header">
        <button className="wordmark" type="button" onClick={() => scrollTo("inicio")}>
          SISTEMA <span>PÓS-EDITAL</span>
        </button>
        <p className="header-note">Estudo com direção</p>
        <button className="header-cta" type="button" onClick={handleCheckout}>Acessar por R$ 57 <ArrowRight size={16} /></button>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio" data-section="hero">
          <div className="hero-copy">
            <p className="eyebrow hero-reveal">Seu edital saiu. Agora existe uma ordem.</p>
            <h1 className="hero-reveal">Pare de gastar seu tempo <em>organizando</em> o estudo.</h1>
            <p className="hero-lede hero-reveal">Transforme edital, banca e rotina em uma sequência clara para começar — sem precisar entender de IA.</p>
            <div className="hero-actions hero-reveal">
              <button className="primary-cta" type="button" onClick={handleCheckout}>Quero começar com direção <ArrowRight size={19} /></button>
              <button className="text-cta" type="button" onClick={() => scrollTo("demonstracao")}>Ver como funciona <ArrowDown size={17} /></button>
            </div>
            <div className="hero-proof hero-reveal">
              <span>R$ 57 · pagamento único</span><span>7 dias de garantia</span><span>Acesso vitalício</span>
            </div>
          </div>
          <div className="neural-stage hero-reveal" aria-label="Busto clássico tridimensional que responde suavemente ao movimento do cursor">
            <div className="stage-grid" aria-hidden="true" />
            {show3D ? <NeuralBust /> : <StaticNeuralBust />}
            <span className="stage-index">01 / CLAREZA</span>
            <span className="stage-caption">Mova o cursor · role a página</span>
          </div>
        </section>

        <section className="problem section-dark" id="problema" data-section="problema">
          <div className="section-kicker reveal"><span>02</span> O problema real</div>
          <div className="problem-grid">
            <h2 className="reveal">O edital chegou.<br />O estudo ainda não.</h2>
            <div className="problem-copy reveal">
              <p>Você abre o PDF, encontra dezenas de páginas e começa um segundo trabalho: descobrir o que importa, separar matérias, pesquisar a banca e inventar uma rotina.</p>
              <p className="pull-quote">A noite termina. O material está organizado. O estudo mesmo nem começou.</p>
            </div>
          </div>
          <div className="manual-strip reveal" aria-label="Etapas do trabalho manual">
            {[
              ["01", "Ler páginas sem filtro"], ["02", "Abrir várias abas"], ["03", "Montar planilhas"], ["04", "Refazer o cronograma"],
            ].map(([n, label]) => <div key={n}><b>{n}</b><span>{label}</span></div>)}
          </div>
        </section>

        <section className="mechanism" id="demonstracao" data-section="demonstracao">
          <div className="section-kicker reveal"><span>03</span> Demonstração do mecanismo</div>
          <div className="mechanism-heading reveal">
            <h2>Um edital entra.<br /><em>Uma sequência sai.</em></h2>
            <p>Sem termos técnicos. Sem tela complicada. Você fornece o documento e segue a saída de cada etapa.</p>
          </div>
          <div className="demo-board reveal">
            <article className="input-document">
              <div className="document-top"><FileText size={19} /><span>EDITAL_EXEMPLO.pdf</span><b>ENTRADA</b></div>
              <div className="document-body">
                <small>CONTEÚDO PROGRAMÁTICO</small>
                <p><mark>Língua Portuguesa</mark> — 10 questões — peso 2</p>
                <p>Direito Administrativo — 8 questões — peso 1</p>
                <p><mark>Prova objetiva: 18/10</mark></p>
                <div className="document-lines" />
              </div>
            </article>
            <div className="flow-arrow" aria-hidden="true"><ArrowRight /></div>
            <article className="output-map">
              <div className="output-top"><Route size={19} /><span>MAPA DE AÇÃO</span><b>SAÍDA</b></div>
              <div className="priority-row"><strong>PRIORIDADE 01</strong><span>Português</span><b>alto impacto</b></div>
              <div className="priority-row"><strong>BANCA</strong><span>padrão a confirmar</span><b>pesquisar</b></div>
              <div className="priority-row"><strong>HOJE</strong><span>separar 3 blocos</span><b>45 min</b></div>
              <div className="next-step"><Check size={16} /> Próximo passo já definido</div>
            </article>
          </div>
          <p className="demo-disclaimer reveal">Exemplo demonstrativo de entrada e saída. O sistema usa os dados do edital apresentado pelo aluno.</p>
        </section>

        <section className="journey section-dark" id="jornada" data-section="jornada">
          <div className="section-kicker reveal"><span>04</span> A jornada</div>
          <div className="journey-heading reveal"><h2>Você não recebe uma pilha.<br />Recebe uma <em>ordem.</em></h2><p>Quatro etapas centrais. Duas rotas condicionais. Cada saída prepara a próxima decisão.</p></div>
          <div className="journey-grid">
            {journey.map((item) => {
              const Icon = item.icon;
              return <article className="journey-card reveal" key={item.number}><span>{item.number}</span><Icon aria-hidden="true" /><h3>{item.title}</h3><p>{item.copy}</p><div className="card-line" /></article>;
            })}
          </div>
          <div className="conditional-grid">
            <article className="conditional-card reveal"><span>EXTRA</span><FileSearch /><div><h3>Radar de Mudanças</h3><p>Para comparar edital anterior e atual sem reler tudo do zero.</p></div></article>
            <article className="conditional-card is-red reveal"><span>CONTINGÊNCIA</span><Clock3 /><div><h3>Menos de 21 dias</h3><p>Uma rota de emergência para priorizar o possível até a prova.</p></div></article>
          </div>
        </section>

        <section className="objections" id="duvidas" data-section="objecoes">
          <div className="section-kicker reveal"><span>05</span> Antes de decidir</div>
          <div className="objections-layout">
            <div className="objections-intro reveal"><h2>Talvez você esteja pensando:</h2><p>A proposta não é estudar por você. É devolver as horas que desaparecem antes do estudo começar.</p></div>
            <div className="objection-list">
              {objections.map(([question, answer], index) => (
                <details className="objection-item reveal" key={question} open={index === 0}>
                  <summary><span>0{index + 1}</span>{question}<b>+</b></summary><p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="value-anchor reveal"><div><Clock3 /><span>O custo invisível</span></div><p>R$ 57 custa menos do que continuar gastando noites inteiras para montar manualmente o caminho que deveria levar você ao estudo.</p></div>
        </section>

        <section className="offer section-red" id="oferta" data-section="oferta">
          <div className="section-kicker reveal"><span>06</span> Acesso completo</div>
          <div className="offer-grid">
            <div className="offer-copy reveal"><p className="offer-label">SISTEMA PÓS-EDITAL</p><h2>Direção custa menos que uma noite perdida.</h2><ul><li><Check /> Jornada completa com 4 etapas</li><li><Check /> Radar de Mudanças e rota de contingência</li><li><Check /> Acesso vitalício pelo Hotmart Club</li><li><Check /> Garantia de 7 dias</li></ul></div>
            <div className="price-card reveal"><span>Pagamento único</span><div className="price"><sup>R$</sup><strong>57</strong><small>,00</small></div><p>Sem mensalidade. Sem parcelamento na V1.</p><button type="button" onClick={handleCheckout}>Quero acessar o sistema <ArrowRight /></button><div className="safe-note"><ShieldCheck /> Compra protegida por 7 dias</div></div>
          </div>
        </section>

        <section className="final-cta section-dark" id="final" data-section="cta-final">
          <div className="final-index reveal">07 / COMEÇAR</div>
          <h2 className="reveal">Seu edital já disse <em>o que</em> cai.<br />Agora descubra <em>em que ordem</em> agir.</h2>
          <p className="reveal">Menos tempo organizando. Mais clareza para começar.</p>
          <button className="final-button reveal" type="button" onClick={handleCheckout}>Começar com direção <ArrowRight /></button>
          <div className="final-meta reveal"><span>R$ 57 · uma vez</span><span>7 dias de garantia</span><span>Acesso vitalício</span></div>
        </section>
      </main>

      <footer><span>Sistema Pós-Edital</span><p>Organização para o estudo. Sem promessa de aprovação.</p><span>© 2026</span></footer>
      <div className={`checkout-notice ${notice ? "is-visible" : ""}`} role="status" aria-live="polite"><strong>Em breve.</strong> O checkout será liberado quando o produto estiver publicado.</div>
    </div>
  );
}
