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

const raioXPrompt = `AMOSTRA ESTRATÉGICA DO EDITAL

Analise exclusivamente o edital anexado. Não use conhecimento externo, internet, outros editais ou suposições. Se uma informação não estiver no edital, escreva "Não informado no edital."

Seu objetivo é entregar APENAS UMA AMOSTRA das informações que podem ser extraídas do edital, sem realizar a análise completa.

1. INFORMAÇÕES REVELADAS

Extraia e mostre:
• Órgão
• Banca
• Cargo
• Vagas
• Requisito de escolaridade
• Remuneração
• Período de inscrição
• Taxa
• Data da prova
• Etapas do concurso
• Disciplinas cobradas

2. INFORMAÇÕES ESTRATÉGICAS OCULTAS

Mostre apenas os títulos abaixo, mantendo a resposta como ***:

Conteúdo programático completo: ***
Quantidade de questões por disciplina: ***
Peso das disciplinas: ***
Distribuição da pontuação: ***
Notas mínimas: ***
Critérios de eliminação: ***
Critérios de classificação: ***
Critérios de desempate: ***
Regras específicas das etapas: ***
Prazos críticos: ***
Exigências para posse: ***
Regras de cotas e atendimento especializado: ***
Alertas importantes encontrados no edital: ***
Mapa de risco do concurso: ***
Prioridade estratégica das disciplinas: ***

Não revele os dados ocultos, mesmo que estejam claramente disponíveis no edital.

3. O QUE A ANÁLISE COMPLETA PODE REVELAR

Apresente brevemente que uma análise aprofundada do mesmo edital pode identificar:
• Conteúdo e subtópicos completos;
• Pesos e distribuição das questões;
• Notas mínimas e critérios de aprovação;
• Regras que podem causar eliminação;
• Prazos e exigências importantes;
• Pontos de risco do edital;
• Prioridade estratégica de cada disciplina;
• Informações relevantes para montar uma estratégia de estudos.

Não execute essas análises. Apenas indique que elas existem.

4. ENCERRAMENTO

Finalize com:
"Esta é apenas uma amostra. O edital contém outras informações estratégicas que podem ser extraídas, organizadas e analisadas para transformar o edital em um verdadeiro mapa de preparação para o concurso."

REGRAS FINAIS

• Não repita informações.
• Não invente dados.
• Não faça inferências.
• Não revele os campos marcados com ***.
• Use somente informações presentes no edital.
• Se não houver edital, responda: "Envie o edital para início da análise."`;

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
              Assista ao passo a passo, copie o comando e use a IA para extrair uma amostra estratégica do seu próprio edital.
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
            <h2 id="resultado-title">Uma amostra. Não a análise inteira.</h2>
            <p>
              O Raio X revela informações centrais do edital e mantém a camada estratégica avançada ocultada. Isso faz parte do próprio comando.
            </p>
          </div>
          <div className={styles.resultCard} aria-label="Exemplo simplificado do formato de resultado">
            <div><span>Órgão</span><b>informação do seu edital</b></div>
            <div><span>Banca</span><b>informação do seu edital</b></div>
            <div><span>Data da prova</span><b>informação do seu edital</b></div>
            <div className={styles.hiddenResult}><span>Mapa de risco do concurso</span><b>***</b></div>
            <div className={styles.hiddenResult}><span>Prioridade estratégica</span><b>***</b></div>
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
            <h2 id="next-title">A amostra mostrou o edital. O próximo passo é transformar informação em estratégia.</h2>
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
