import type { Metadata } from "next";
import { siteUrls } from "../config/site";
import RaioXLanding from "../raio-x/RaioXLanding";

export const metadata: Metadata = {
  title: "Comando Raio X do Edital Gratuito | Neural Concursos",
  description:
    "Receba um comando gratuito com instruções para usar a IA e gerar o Raio X do seu próprio edital.",
  alternates: { canonical: siteUrls.raioX },
  openGraph: {
    title: "Comando gratuito para gerar o Raio X do seu edital",
    description: "Receba o comando e o passo a passo para analisar seu edital com IA.",
    type: "website",
    locale: "pt_BR",
    url: siteUrls.raioX,
    siteName: "Neural Concursos",
    images: [
      {
        url: "/og-raio-x.webp",
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
    images: ["/og-raio-x.webp"],
  },
};

export default function RaioXExpressPage() {
  return <RaioXLanding />;
}
