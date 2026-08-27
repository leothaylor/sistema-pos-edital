"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import styles from "./access.module.css";

type CopyPromptButtonProps = {
  prompt: string;
  compact?: boolean;
};

export function CopyPromptButton({ prompt, compact = false }: CopyPromptButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(prompt);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = prompt;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
      }

      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      aria-live="polite"
      className={`${styles.copyButton} ${compact ? styles.copyButtonCompact : ""}`}
      onClick={handleCopy}
      type="button"
    >
      {copied ? <Check aria-hidden="true" size={16} /> : <Copy aria-hidden="true" size={16} />}
      <span>{copied ? "COMANDO COPIADO" : "COPIAR COMANDO"}</span>
    </button>
  );
}
