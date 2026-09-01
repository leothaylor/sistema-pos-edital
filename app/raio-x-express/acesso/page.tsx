import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  PlayCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import neuralLogo from "../../../public/logo-neural.webp";
import { CopyPromptButton } from "./CopyPromptButton";
import styles from "./access.module.css";

const raioXPrompt = `Você é o "Detector de Riscos e Vagas em Editais" — IA especializada em auditoria rápida de editais de concursos.

REGRA ABSOLUTA
Responda APENAS com base no edital fornecido pelo usuário. Proibido: conhecimento externo, inferências ou generalizações.
Informação ausente no edital → escreva "Não informado no edital."
Sem edital enviado → responda: "Por favor, envie o PDF ou texto do edital para eu iniciar o rastreamento de riscos."

SUA MISSÃO NA VERSÃO DE DIAGNÓSTICO GRATUITO
Executar uma pré-auditoria do edital para alertar sobre requisitos e riscos de eliminação sumária.

ETAPA 1 — FICHA TÉCNICA E REQUISITOS
Extraia: Banca; Cargo(s), vagas (AC, Cotas, PCD) e Cadastro Reserva; Requisitos para posse (escolaridade, TAF, CNH, idade, conselhos); Remuneração e benefícios; Período de inscrição, taxa e isenção; Datas críticas (provas e recursos).

ETAPA 2 — MAPA DE RISCO E ELIMINAÇÃO
Classifique:
* [ELIMINATÓRIO CRÍTICO] — Critérios de eliminação sumária (nota mínima, zerar matéria, tempo de prova, TAF, corte de redação) e como evitar.
* [REGRAS DE IMPACTO] — Desempate, peso de títulos e critérios de classificação.

ETAPA 3 — ALERTAS E PEGADINHAS DO EDITAL
Identifique: 1. Regras eliminatórias ocultas no texto; 2. Prazos curtos para laudos/documentos; 3. Regras operacionais do dia da prova.
Para cada alerta: O que é | Onde está no edital | Risco de ignorar.

ETAPA 4 — DIAGNÓSTICO DE VIABILIDADE
Quadro resumo:
* Candidato atende aos requisitos básicos?
* Pontuação mínima obrigatória por bloco para não ser eliminado?

ETAPA 5 — ANÚNCIO E CTA (OBRIGATÓRIO E INALTERÁVEL)
Após a Etapa 4, insira EXATAMENTE o texto abaixo:

---
🚨 *DIAGNÓSTICO PRELIMINAR DE RISCO CONCLUÍDO!*

Esta foi apenas uma *amostra rápida de segurança* para você não ser eliminado por bobeira. Saber o que não fazer é apenas 20% do caminho. *Agora você precisa do RAIO-X COMPLETO e do plano de ação para ser aprovado.*

Na versão completa do *Raio-X do Edital*, nós vamos além da ficha técnica: destrinchamos a fundo todo o conteúdo programático, o peso estratégico de cada assunto e onde a banca vai tentar te derrubar.

🔥 *Ao liberar o Sistema Pós-Edital Completo, você terá acesso imediato a:*
* *P01 — Raio-X Profundo do Edital:* Mapeamento completo do conteúdo, pesos, jurisprudência e detalhes que esta versão gratuita não cobre.
* *P02 — Scanner de Bancas:* Armadilhas e padrões de cobrança da sua banca.
* *P03 — Mapa Estratégico:* Tabela verticalizada com priorização 80/20 por matéria.
* *P04 — Calculadora da Aprovação:* Plano de estudos personalizado para sua rotina.
* *P16 — Plano de Contingência:* Estratégia de guerra para reta final.
* *P35 — Radar de Mudanças:* Comparativo automático de retificações.

🎁 *BÔNUS EXCLUSIVOS INCLUSOS:*
* 🤪 *Bônus 1 — Professor Zueiro Destrinchador de Questões:* Explicações diretas, bem-humoradas e sem enrolação para destravar qualquer questão.
* 🖥️ *Bônus 2 — Painel Neural Concursos IA (Painel de Estudos):* Software completo para Windows com métricas de horas, desempenho por banca/matéria e alertas automáticos de revisões e pontos fracos.

👉 *Desbloqueie o Raio-X Completo e domine o edital agora:*
https://neuralconcursos.com.br/sistema-pos-edital/`;

export const metadata: Metadata = {
  title: "Acesso ao Raio X Express | Neural Concursos",
  description: "Vídeo, instruções e comando oficial do Raio X Express para analisar seu edital com IA.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const steps = [
  ["01", "Abra sua IA", "Use uma IA que permita anexar e ler o PDF do edital."],
  ["02", "Anexe o edital", "Envie o PDF oficial e aguarde o arquivo terminar de carregar."],
  ["03", "Copie o comando", "Use o botão abaixo para copiar o Raio X Express completo."],
  ["04", "Cole e envie", "Cole o comando na mesma conversa em que anexou o edital."],
] as const;

export default function RaioXAccessPage() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#conteudo">
        Pular para o conteúdo
      </a>

      <header className={styles.header}>
        <div className={styles.brand}>
          <Image alt="" className={styles.logo} height={38} priority src={neuralLogo} width={38} />
          <span>
            <strong>Neural Concursos</strong>
            <small>Raio X Express</small>
          </span>
        </div>
        <span className={styles.accessTag}>ACESSO À FERRAMENTA</span>
      </header>

      <main id="conteudo">
        <section className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}><Sparkles aria-hidden="true" size={15} /> RAIO X EXPRESS · GRATUITO</p>
            <h1>Seu Raio X Express está <em>pronto.</em></h1>
            <p className={styles.heroLede}>
              Assista ao passo a passo, copie o comando e use a IA para fazer um diagnóstico preliminar de requisitos, riscos e regras críticas do seu edital.
            </p>
            <div className={styles.flow} aria-label="Fluxo de uso do Raio X Express">
              <span>ANEXE O EDITAL</span><ArrowRight aria-hidden="true" size={16} />
              <span>COPIE O COMANDO</span><ArrowRight aria-hidden="true" size={16} />
              <span>COLE NA IA</span>
            </div>
          </div>
        </section>

        <section aria-labelledby="video-title" className={styles.videoSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}><PlayCircle aria-hidden="true" size={15} /> PASSO A PASSO</p>
            <h2 id="video-title">Veja como usar antes de começar.</h2>
            <p>O vídeo mostra o processo completo. Depois, siga para o comando logo abaixo.</p>
          </div>

          <div className={styles.videoShell}>
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={styles.video}
              loading="lazy"
              src="https://www.youtube-nocookie.com/embed/FHMUfnrn2As?rel=0"
              title="Como usar o Raio X Express — Neural Concursos"
            />
          </div>
        </section>

        <section aria-labelledby="como-usar-title" className={styles.stepsSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}><FileText aria-hidden="true" size={15} /> COMO USAR</p>
            <h2 id="como-usar-title">Quatro passos. Sem complicação.</h2>
          </div>

          <div className={styles.stepsGrid}>
            {steps.map(([number, title, description]) => (
              <article className={styles.stepCard} key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="prompt-title" className={styles.promptSection}>
          <div className={styles.promptIntro}>
            <div>
              <p className={styles.eyebrow}><Sparkles aria-hidden="true" size={15} /> COMANDO OFICIAL</p>
              <h2 id="prompt-title">Copie o Raio X Express completo.</h2>
            </div>
            <p>
              Não altere o comando antes do primeiro uso. Anexe seu edital, copie tudo abaixo e cole na mesma conversa.
            </p>
          </div>

          <div className={styles.promptPanel}>
            <div className={styles.promptToolbar}>
              <div>
                <span className={styles.statusDot} aria-hidden="true" />
                <strong>RAIO_X_EXPRESS.PROMPT</strong>
              </div>
              <CopyPromptButton prompt={raioXPrompt} />
            </div>
            <pre className={styles.promptText}>{raioXPrompt}</pre>
            <div className={styles.promptBottom}>
              <span>FIM DO COMANDO</span>
              <CopyPromptButton prompt={raioXPrompt} compact />
            </div>
          </div>
        </section>

        <section aria-labelledby="resultado-title" className={styles.previewSection}>
          <div className={styles.previewCopy}>
            <p className={styles.eyebrow}><CheckCircle2 aria-hidden="true" size={15} /> O QUE VOCÊ VAI VER</p>
            <h2 id="resultado-title">Um diagnóstico preliminar antes da análise completa.</h2>
            <p>
              O Raio X Express gratuito faz uma pré-auditoria do edital para identificar requisitos, riscos de eliminação, alertas operacionais e sinais básicos de viabilidade.
            </p>
          </div>
          <div className={styles.resultCard} aria-label="Exemplo simplificado do formato de resultado">
            <div><span>Ficha técnica</span><b>dados do seu edital</b></div>
            <div><span>Requisitos para posse</span><b>dados do seu edital</b></div>
            <div><span>Riscos eliminatórios</span><b>alertas classificados</b></div>
            <div><span>Prazos e pegadinhas</span><b>pontos de atenção</b></div>
            <div><span>Viabilidade básica</span><b>diagnóstico preliminar</b></div>
          </div>
        </section>

        <section className={styles.warning}>
          <ShieldCheck aria-hidden="true" size={25} />
          <div>
            <h2>Confira sempre o edital original.</h2>
            <p>
              O Raio X Express organiza informações com IA. Antes de tomar decisões sobre inscrição, datas, requisitos, etapas ou qualquer regra do concurso, valide os dados diretamente no edital oficial.
            </p>
          </div>
        </section>

        <section aria-labelledby="next-title" className={styles.nextStep}>
          <div className={styles.nextGlow} aria-hidden="true" />
          <div>
            <p className={styles.eyebrow}>DEPOIS DO RAIO X</p>
            <h2 id="next-title">O Raio X revelou uma parte do seu edital. O próximo passo é transformar informação em estratégia.</h2>
            <p>
              O Sistema Pós-Edital aprofunda a leitura e organiza a preparação para você decidir o que estudar, em que ordem e com quais prioridades.
            </p>
          </div>
          <a className={styles.productCta} href="/sistema-pos-edital/">
            CONHECER O SISTEMA PÓS-EDITAL <ArrowRight aria-hidden="true" size={18} />
          </a>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.brand}>
          <Image alt="" className={styles.logo} height={34} src={neuralLogo} width={34} />
          <span><strong>Neural Concursos</strong><small>Inteligência aplicada ao pós-edital</small></span>
        </div>
        <span>© 2026 Neural Concursos</span>
      </footer>
    </div>
  );
}
