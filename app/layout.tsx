import type { Metadata } from "next";
import "./globals.css";
import "./long-landing-interactions.css";
import { TrackingScripts } from "./components/TrackingScripts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://leothaylor.github.io/sistema-pos-edital/";

export const metadata: Metadata = {
  title: "Sistema Pós-Edital | Organize seu estudo após o edital",
  description: "Organize edital, conteúdo, banca e prioridades em uma sequência clara para começar sua preparação pós-edital com direção.",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  applicationName: "Sistema Pós-Edital",
  keywords: ["pós-edital", "concurso público", "organização de estudos", "edital", "banca examinadora"],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sistema Pós-Edital | Organize seu estudo após o edital",
    description: "Pare de gastar seu tempo organizando o estudo. Transforme o pós-edital em uma sequência clara.",
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Neural Concursos",
    images: [{ url: "og-v2.webp", width: 1200, height: 630, alt: "Sistema Pós-Edital — Pare de gastar seu tempo organizando o estudo." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema Pós-Edital | Organize seu estudo após o edital",
    description: "Pare de gastar seu tempo organizando o estudo.",
    images: ["og-v2.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <TrackingScripts />
      </body>
    </html>
  );
}
