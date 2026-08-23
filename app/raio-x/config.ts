export type LeadCaptureConfig = {
  actionUrl: string | null;
  fieldNames: {
    name: string;
    email: string;
    whatsapp: string;
  };
};

/**
 * Fonte central da integração do Raio X com o MailerLite.
 * A URL deve ser a action oficial do formulário incorporado.
 */
export const leadCaptureConfig: LeadCaptureConfig = {
  actionUrl: process.env.NEXT_PUBLIC_MAILERLITE_FORM_ACTION?.trim() || null,
  fieldNames: {
    name: "fields[name]",
    email: "fields[email]",
    whatsapp: "fields[phone]",
  },
};

export const attributionKeys = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;
