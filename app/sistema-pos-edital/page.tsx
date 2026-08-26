import type { Metadata } from "next";
import Landing from "../components/Landing";
import { siteUrls } from "../config/site";

export const metadata: Metadata = {
  title: "Sistema Pós-Edital | Organize seu estudo após o edital",
  description:
    "Organize edital, conteúdo, banca e prioridades em uma sequência clara para começar sua preparação pós-edital com direção.",
  alternates: { canonical: siteUrls.product },
  keywords: [
    "pós-edital",
    "concurso público",
    "organização de estudos",
    "edital",
    "banca examinadora",
  ],
  openGraph: {
    title: "Sistema Pós-Edital | Organize seu estudo após o edital",
    description:
      "Pare de gastar seu tempo organizando o estudo. Transforme o pós-edital em uma sequência clara.",
    type: "website",
    locale: "pt_BR",
    url: siteUrls.product,
    siteName: "Neural Concursos",
    images: [
      {
        url: "/og-v2.webp",
        width: 1200,
        height: 630,
        alt: "Sistema Pós-Edital — Pare de gastar seu tempo organizando o estudo.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema Pós-Edital | Organize seu estudo após o edital",
    description: "Pare de gastar seu tempo organizando o estudo.",
    images: ["/og-v2.webp"],
  },
};

export default function SistemaPosEditalPage() {
  return <Landing />;
}
