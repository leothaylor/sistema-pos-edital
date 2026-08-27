"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { addAttributionToUrl } from "../config/tracking";
import { leadCaptureConfig } from "./config";
import styles from "./raio-x.module.css";

export function LeadForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;

    if (!leadCaptureConfig.actionUrl) {
      event.preventDefault();
      setStatus(
        "Os cadastros ainda não estão abertos. Seus dados continuam preenchidos; volte em breve para receber o Raio X Express e as instruções.",
      );
      return;
    }

    form.action = addAttributionToUrl(leadCaptureConfig.actionUrl, window.location.href);
  }

  return (
    <form
      action={leadCaptureConfig.actionUrl ?? undefined}
      className={styles.form}
      method="post"
      onSubmit={handleSubmit}
    >
      <input name="ml-submit" type="hidden" value="1" />
      <input name="anticsrf" type="hidden" value="true" />

      <div className={styles.field}>
        <label htmlFor="lead-name">
          Nome <span aria-hidden="true">*</span>
        </label>
        <input
          autoComplete="name"
          id="lead-name"
          name={leadCaptureConfig.fieldNames.name}
          placeholder="Como você quer ser chamado?"
          required
          type="text"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="lead-email">
          E-mail <span aria-hidden="true">*</span>
        </label>
        <input
          autoComplete="email"
          id="lead-email"
          name={leadCaptureConfig.fieldNames.email}
          placeholder="voce@email.com"
          required
          type="email"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="lead-whatsapp">
          WhatsApp <small>opcional</small>
        </label>
        <input
          autoComplete="tel"
          id="lead-whatsapp"
          inputMode="tel"
          name={leadCaptureConfig.fieldNames.whatsapp}
          placeholder="(00) 00000-0000"
          type="tel"
        />
      </div>

      <button className={styles.formButton} type="submit">
        <span>QUERO O RAIO X EXPRESS GRÁTIS</span>
        <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
      </button>

      <p className={styles.privacyNote}>
        Ao enviar, você concorda em receber o Raio X Express, as instruções de uso e conteúdos sobre preparação
        pós-edital. Sem spam.
      </p>

      <p aria-live="polite" className={styles.formStatus} role="status">
        {status}
      </p>
    </form>
  );
}
