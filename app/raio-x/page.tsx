import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  Brain,
  FileCheck2,
  Route,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";
import productCover from "../../public/capa-sistema-pos-edital.webp";
import raioXCover from "../../public/capa-raio-x-expresso.webp";
import neuralLogo from "../../public/logo-neural.webp";
import { productConfig } from "../config/product";
import { AttributionLink } from "./AttributionLink";
import { LeadForm } from "./LeadForm";
import interactionStyles from "./raio-x-interactions.module.css";
import styles from "./raio-x.module.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://leothaylor.github.io/sistema-pos-edital/";
const pageUrl = new URL("raio-x/", siteUrl).toString();

export const metadata: Metadata = {
  title: "Comando Raio X do Edital Gratuito | Neural Concursos",
  description:
    "Receba um comando gratuito com instruções para usar a IA e gerar o Raio X do seu próprio edital.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Comando gratuito para gerar o Raio X do seu edital",
    description: "Receba o comando e o passo a passo para analisar seu edital com IA.",
    type: "website",
    locale: "pt_BR",
    url: pageUrl,
    siteName: "Neural Concursos",
    images: [
      {
        url: "og-raio-x.webp",
        width: 1200,
        height: 630,
        alt: "Comando Raio X do Edital — Neural Concursos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comando gratuito para gerar o Raio X do seu edital",
    description: "Comando pronto e instruções para analisar seu próprio edital com IA.",
    images: ["og-raio-x.webp"],
  },
};

const diagnosticItems = [
  {
    icon: Brain,
    title: "Comando estruturado",
    description: "Um comando pronto para orientar a IA na leitura do seu edital.",
  },
  {
    icon: Route,
    title: "Passo a passo de uso",
    description: "Instruções para anexar o edital, colar o comando e conduzir a conversa com a IA.",
  },
  {
    icon: ScanSearch,
    title: "Estrutura do Raio X",
    description: "O resultado gerado organiza datas, conteúdo, banca e prioridades para você revisar.",
  },
  {
    icon: FileCheck2,
    title: "Revisão do resultado",
    description: "Orientações para conferir a saída da IA e validar os dados centrais antes dos próximos passos.",
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
        <a aria-label="Neural Concursos — início do comando Raio X" className={styles.brand} href="#inicio">
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
            <small>Comando Raio X</small>
          </span>
        </a>
        <a className={styles.headerCta} href="#receber">
          RECEBER O COMANDO <ArrowRight aria-hidden="true" size={16} />
        </a>
      </header>

      <main id="conteudo">
        <section className={styles.hero} id="inicio">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>COMANDO GRATUITO · RAIO X DO EDITAL</p>
            <h1>
              Seu edital saiu. Use a IA para descobrir o que merece atenção <em>primeiro.</em>
            </h1>
            <p className={styles.heroLede}>
              Receba um comando pronto e as instruções de uso. Você anexa seu edital à IA, cola o comando e
              gera o seu próprio Raio X inicial.
            </p>
            <a className={styles.primaryCta} href="#receber">
              <span>RECEBER O COMANDO GRATUITO</span>
              <ArrowDown aria-hidden="true" size={18} strokeWidth={1.8} />
            </a>
            <p className={styles.microcopy}>
              <ShieldCheck aria-hidden="true" size={15} /> Comando + passo a passo · você aplica no seu edital
            </p>
          </div>

          <div className={styles.scanPanel}>
            <div className={styles.scanGrid} />
            <div className={styles.raioCoverFrame}>
              <Image
                alt="Capa Raio X Expresso"
                className={styles.raioCover}
                fill
                priority
                sizes="(max-width: 767px) calc(100vw - 64px), 430px"
                src={raioXCover}
              />
            </div>
          </div>
        </section>

        <section aria-labelledby="entrega-titulo" className={styles.delivery}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>O QUE CHEGA NO SEU E-MAIL</p>
            <h2 id="entrega-titulo">Tudo para gerar o seu próprio Raio X com IA.</h2>
            <p>
              Receba o comando pronto, siga o passo a passo do vídeo e gere seu Raio X em poucos minutos.
            </p>
          </div>

          <div className={styles.diagnosticGrid}>
            {diagnosticItems.map(({ icon: Icon, title, description }, index) => (
              <article className={`${styles.diagnosticCard} ${interactionStyles.diagnosticCardInteractive}`} key={title}>
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
            <div><b>02</b><span>Recebe o comando e as instruções por e-mail.</span></div>
            <ArrowRight aria-hidden="true" size={18} />
            <div><b>03</b><span>Anexa o edital à IA e gera o próprio Raio X.</span></div>
          </div>
        </section>

        <section aria-labelledby="form-titulo" className={styles.capture} id="receber">
          <div className={styles.captureCopy}>
            <p className={styles.eyebrow}>PRONTO PARA COPIAR E USAR</p>
            <h2 id="form-titulo">Receba o comando e o passo a passo.</h2>
            <p>
              Preencha os campos. Depois, é só seguir as instruções, anexar o edital à IA e colar o comando.
            </p>
            <ul>
              <li><FileCheck2 aria-hidden="true" size={18} /> Comando pronto para copiar</li>
              <li><FileCheck2 aria-hidden="true" size={18} /> Instruções de uso com IA</li>
              <li><FileCheck2 aria-hidden="true" size={18} /> Orientações para revisar o resultado</li>
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
            <p className={styles.eyebrow}>DEPOIS DE GERAR O RAIO X</p>
            <h2 id="produto-titulo">Você viu o diagnóstico. E agora?</h2>
            <p className={styles.productLede}>
              O comando ajuda você a enxergar o edital. O <strong>{productConfig.productName}</strong> transforma
              essa leitura em um sistema para conduzir sua preparação até a prova.
            </p>

            <div className={styles.capabilityList}>
              {productCapabilities.map(([number, title, description]) => (
                <div className={`${styles.capability} ${interactionStyles.capabilityInteractive}`} key={title}>
                  <span>{number}</span>
                  <p><strong>{title}</strong> — {description}.</p>
                </div>
              ))}
            </div>

            <AttributionLink className={styles.productCta} href={productConfig.checkoutUrl ?? "../#oferta"}>
              <span>CONHECER O SISTEMA PÓS-EDITAL</span>
              <ArrowRight aria-hidden="true" size={18} />
            </AttributionLink>
          </div>
        </section>

        <section aria-labelledby="final-titulo" className={styles.finalCta}>
          <div>
            <p className={styles.eyebrow}>RAIO X EXPRESS · 100% GRATUITO</p>
            <h2 id="final-titulo">Pegue o comando. Gere seu Raio X. Comece com direção.</h2>
          </div>
          <a className={styles.finalButton} href="#receber">
            RECEBER O RAIO X EXPRESS GRÁTIS <ArrowRight aria-hidden="true" size={19} />
          </a>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>© 2026 {productConfig.brandName}</span>
        <span>Comando Raio X · Sistema Pós-Edital</span>
      </footer>
    </div>
  );
}
