import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  Brain,
  CalendarDays,
  Check,
  FileCheck2,
  FileSearch,
  Route,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";
import productCover from "../../public/capa-sistema-pos-edital.webp";
import neuralLogo from "../../public/logo-neural.webp";
import { productConfig } from "../config/product";
import { AttributionLink } from "./AttributionLink";
import { LeadForm } from "./LeadForm";
import styles from "./raio-x.module.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://leothaylor.github.io/sistema-pos-edital/";
const pageUrl = new URL("raio-x/", siteUrl).toString();

export const metadata: Metadata = {
  title: "Raio X do Edital Gratuito | Neural Concursos",
  description:
    "Envie seu edital e receba uma análise inicial organizada com os pontos que merecem sua atenção primeiro.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Raio X do Edital Gratuito",
    description: "Descubra o que merece sua atenção primeiro depois que o edital sai.",
    type: "website",
    locale: "pt_BR",
    url: pageUrl,
    siteName: "Neural Concursos",
    images: [
      {
        url: "og-v2.webp",
        width: 1200,
        height: 630,
        alt: "Raio X do Edital — Neural Concursos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raio X do Edital Gratuito",
    description: "Uma análise inicial para começar seu pós-edital com direção.",
    images: ["og-v2.webp"],
  },
};

const diagnosticItems = [
  {
    icon: CalendarDays,
    title: "Datas e regras críticas",
    description: "Os prazos, etapas e exigências que você não pode perder de vista.",
  },
  {
    icon: Brain,
    title: "Mapa inicial do conteúdo",
    description: "Uma primeira leitura do que será cobrado e de como o conteúdo se distribui.",
  },
  {
    icon: ScanSearch,
    title: "Leitura inicial da banca",
    description: "Os sinais que ajudam a entender o perfil da prova antes de montar sua rotina.",
  },
  {
    icon: Route,
    title: "Prioridades para começar",
    description: "Uma direção inicial para você saber onde colocar energia primeiro.",
  },
];

const productCapabilities = [
  ["01", "Edital", "extrair o que realmente orienta sua preparação"],
  ["02", "Conteúdo", "transformar matérias e tópicos em um mapa de execução"],
  ["03", "Banca", "ler o perfil de cobrança e ajustar sua estratégia"],
  ["04", "Rotina", "encaixar prioridades no tempo que você realmente tem"],
  ["05", "Contingência", "reorganizar o plano quando a semana sair do previsto"],
] as const;

export default function RaioXPage() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#conteudo">
        Pular para o conteúdo
      </a>

      <header className={styles.header}>
        <a aria-label="Neural Concursos — início do Raio X" className={styles.brand} href="#inicio">
          <Image
            alt=""
            className={styles.logo}
            height={36}
            priority
            src={neuralLogo}
            width={36}
          />
          <span>
            <strong>Neural Concursos</strong>
            <small>Raio X do Edital</small>
          </span>
        </a>
        <a className={styles.headerCta} href="#receber">
          RECEBER GRÁTIS <ArrowRight aria-hidden="true" size={16} />
        </a>
      </header>

      <main id="conteudo">
        <section className={styles.hero} id="inicio">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>RAIO X GRATUITO DO EDITAL</p>
            <h1>
              Seu edital saiu. Agora descubra o que merece sua atenção <em>primeiro.</em>
            </h1>
            <p className={styles.heroLede}>
              Receba uma análise inicial organizada para começar sua preparação com direção — sem tentar
              interpretar tudo sozinho.
            </p>
            <a className={styles.primaryCta} href="#receber">
              <span>RECEBER MEU RAIO X GRATUITO</span>
              <ArrowDown aria-hidden="true" size={18} strokeWidth={1.8} />
            </a>
            <p className={styles.microcopy}>
              <ShieldCheck aria-hidden="true" size={15} /> Gratuito · direto ao ponto · feito a partir do seu edital
            </p>
          </div>

          <div aria-label="Prévia da análise do edital" className={styles.scanPanel} role="img">
            <div className={styles.scanGrid} />
            <div className={styles.documentCard}>
              <div className={styles.documentTop}>
                <span>ANÁLISE INICIAL</span>
                <FileSearch aria-hidden="true" size={22} strokeWidth={1.5} />
              </div>
              <div className={styles.documentBody}>
                <div className={styles.documentTitle}>
                  <small>EDITAL_RECEBIDO.PDF</small>
                  <strong>RAIO X</strong>
                </div>
                <div className={styles.scanLine}><span /><b>DATAS</b></div>
                <div className={styles.scanLine}><span /><b>CONTEÚDO</b></div>
                <div className={styles.scanLine}><span /><b>BANCA</b></div>
                <div className={styles.scanLine}><span /><b>PRIORIDADES</b></div>
              </div>
              <div className={styles.documentFooter}>
                <span>LEITURA CONCLUÍDA</span>
                <Check aria-hidden="true" size={17} />
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="entrega-titulo" className={styles.delivery}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>O QUE VOCÊ RECEBE</p>
            <h2 id="entrega-titulo">Uma primeira leitura para sair da confusão e entrar em movimento.</h2>
            <p>
              O Raio X organiza os principais dados do seu edital e mostra o que merece atenção antes de
              você começar a distribuir horas de estudo.
            </p>
          </div>

          <div className={styles.diagnosticGrid}>
            {diagnosticItems.map(({ icon: Icon, title, description }, index) => (
              <article className={styles.diagnosticCard} key={title}>
                <div>
                  <span>0{index + 1}</span>
                  <Icon aria-hidden="true" size={23} strokeWidth={1.55} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>

          <div className={styles.steps}>
            <div><b>01</b><span>Você faz o cadastro.</span></div>
            <ArrowRight aria-hidden="true" size={18} />
            <div><b>02</b><span>Recebe as orientações para enviar o edital.</span></div>
            <ArrowRight aria-hidden="true" size={18} />
            <div><b>03</b><span>Recebe sua análise inicial organizada.</span></div>
          </div>
        </section>

        <section aria-labelledby="form-titulo" className={styles.capture} id="receber">
          <div className={styles.captureCopy}>
            <p className={styles.eyebrow}>COMECE PELO QUE IMPORTA</p>
            <h2 id="form-titulo">Receba seu Raio X gratuito.</h2>
            <p>
              Cadastre-se abaixo. No próximo passo, você recebe as orientações para enviar seu edital.
            </p>
            <ul>
              <li><FileCheck2 aria-hidden="true" size={18} /> Leitura inicial organizada</li>
              <li><FileCheck2 aria-hidden="true" size={18} /> Prioridades mais visíveis</li>
              <li><FileCheck2 aria-hidden="true" size={18} /> Próximo passo mais claro</li>
            </ul>
          </div>
          <LeadForm />
        </section>

        <section aria-labelledby="produto-titulo" className={styles.product}>
          <div className={styles.productVisual}>
            <div className={styles.coverFrame}>
              <Image
                alt="Capa do Sistema Pós-Edital"
                className={styles.cover}
                fill
                sizes="(max-width: 767px) 88vw, 42vw"
                src={productCover}
              />
            </div>
          </div>

          <div className={styles.productCopy}>
            <p className={styles.eyebrow}>DEPOIS DO DIAGNÓSTICO</p>
            <h2 id="produto-titulo">Quer ir além do Raio X?</h2>
            <p className={styles.productLede}>
              O <strong>{productConfig.productName}</strong> transforma a leitura inicial em um sistema para
              conduzir sua preparação até a prova.
            </p>

            <div className={styles.capabilityList}>
              {productCapabilities.map(([number, title, description]) => (
                <div className={styles.capability} key={title}>
                  <span>{number}</span>
                  <p><strong>{title}</strong> — {description}.</p>
                </div>
              ))}
            </div>

            <AttributionLink className={styles.productCta} href="../#oferta">
              <span>CONHECER O SISTEMA PÓS-EDITAL</span>
              <ArrowRight aria-hidden="true" size={18} />
            </AttributionLink>
          </div>
        </section>

        <section aria-labelledby="final-titulo" className={styles.finalCta}>
          <div>
            <p className={styles.eyebrow}>SEU EDITAL JÁ DEU O SINAL</p>
            <h2 id="final-titulo">Agora dê o primeiro passo com direção.</h2>
          </div>
          <a className={styles.finalButton} href="#receber">
            RECEBER MEU RAIO X GRATUITO <ArrowRight aria-hidden="true" size={19} />
          </a>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>© 2026 {productConfig.brandName}</span>
        <span>Raio X do Edital · Sistema Pós-Edital</span>
      </footer>
    </div>
  );
}
