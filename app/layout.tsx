import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://leothaylor.github.io/sistema-pos-edital/";

export const metadata: Metadata = {
  title: "Sistema Pós-Edital — Estudo com direção",
  description: "Transforme edital, banca e rotina em uma sequência clara para começar a estudar.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Sistema Pós-Edital — Estudo com direção",
    description: "Pare de gastar seu tempo organizando o estudo.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "og.png", width: 1728, height: 909, alt: "Sistema Pós-Edital — Pare de gastar seu tempo organizando o estudo." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema Pós-Edital — Estudo com direção",
    description: "Pare de gastar seu tempo organizando o estudo.",
    images: ["og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
