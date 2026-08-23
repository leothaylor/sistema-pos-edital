import {
  AlertTriangle,
  ArrowDown,
  Check,
  FileText,
  Route,
} from "lucide-react";
import { mechanismOutputs, problemChain } from "../data/content";
import CheckoutButton from "./CheckoutButton";
import SectionIntro from "./SectionIntro";

export function ProblemSection() {
  return (
    <section className="problem section-dark" id="problema" aria-labelledby="problem-title">
      <div className="problem-heading">
        <p className="section-eyebrow"><span>02</span>O PROBLEMA REAL</p>
        <h2 id="problem-title">O edital saiu.<br /><em>Mas você ainda não começou a estudar.</em></h2>
      </div>
      <div className="problem-copy">
        <p className="problem-lede">O problema não é falta de material. É descobrir o que fazer com ele.</p>
        <p>Antes da primeira sessão de estudo, você tenta decifrar páginas, separar matérias, conferir datas, entender a banca e construir um cronograma. O trabalho de organização ocupa o tempo que deveria levar você ao conteúdo.</p>
        <p className="problem-warning"><AlertTriangle aria-hidden="true" size={19} />Enquanto você organiza o estudo, o relógio já está correndo.</p>
      </div>

      <div className="problem-chain" aria-label="Cadeia de organização manual">
        {problemChain.map((item, index) => (
          <div className="chain-item" key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item}</strong>
            {index < problemChain.length - 1 ? <span className="chain-arrow" aria-hidden="true">→</span> : null}
          </div>
        ))}
      </div>
    </section>
  );
}

export function MechanismSection() {
  return (
    <section className="mechanism" id="mecanismo" aria-labelledby="mechanism-title">
      <SectionIntro
        description="Você fornece o documento e segue uma sequência estruturada. Os comandos ficam por trás das etapas; na frente, aparece o próximo passo."
        eyebrow="DEMONSTRAÇÃO DO MECANISMO"
        index="03"
        title={<><span id="mechanism-title">Um edital entra.</span><br /><em>Uma ordem aparece.</em></>}
      />

      <div className="mechanism-flow" aria-label="Fluxo de entrada, sistema e saídas">
        <article className="input-card">
          <header><FileText aria-hidden="true" size={19} /><span>ENTRADA</span></header>
          <div className="file-preview">
            <div className="file-name"><b>EDITAL_CONCURSO.pdf</b><small>Documento fornecido pelo aluno</small></div>
            <div className="document-lines" aria-hidden="true">
              <i /><i /><i className="highlight" /><i /><i /><i className="short" />
            </div>
            <dl>
              <div><dt>Prova</dt><dd>Data localizada</dd></div>
              <div><dt>Conteúdo</dt><dd>Blocos identificados</dd></div>
              <div><dt>Banca</dt><dd>Informação registrada</dd></div>
            </dl>
          </div>
        </article>

        <div className="system-core">
          <span>SISTEMA</span>
          <strong>PÓS-EDITAL</strong>
          <Route aria-hidden="true" size={28} strokeWidth={1.5} />
          <ArrowDown aria-hidden="true" className="flow-direction" />
        </div>

        <article className="output-card">
          <header><Check aria-hidden="true" size={19} /><span>SAÍDAS ORGANIZADAS</span></header>
          <ul>
            {mechanismOutputs.map((item, index) => (
              <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
            ))}
          </ul>
        </article>
      </div>

      <div className="mechanism-note">
        <p>A organização se adapta ao edital e aos materiais fornecidos. As saídas apoiam decisões de estudo e não representam garantia de resultado.</p>
        <CheckoutButton location="mechanism" />
      </div>
    </section>
  );
}
