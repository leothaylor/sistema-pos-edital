import type { Metadata } from "next";
import Image from "next/image";
import neuralLogo from "../public/logo-neural.webp";
import { siteRoutes, siteUrls } from "./config/site";
import styles from "./home.module.css";

export const metadata: Metadata = {
  title: "Neural Concursos",
  description: "Site oficial da Neural Concursos em preparação.",
  alternates: { canonical: siteUrls.home },
  openGraph: {
    title: "Neural Concursos",
    description: "Site oficial da Neural Concursos em preparação.",
    type: "website",
    locale: "pt_BR",
    url: siteUrls.home,
    siteName: "Neural Concursos",
  },
  twitter: {
    card: "summary",
    title: "Neural Concursos",
    description: "Site oficial da Neural Concursos em preparação.",
  },
};

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <Image
          alt="Logo da Neural Concursos"
          className={styles.logo}
          height={88}
          priority
          src={neuralLogo}
          width={88}
        />
        <p className={styles.brand}>Neural Concursos</p>
        <h1>Site oficial em preparação.</h1>
        <nav aria-label="Conteúdos disponíveis" className={styles.links}>
          <a href={siteRoutes.product}>Sistema Pós-Edital</a>
          <a href={siteRoutes.raioX}>Raio X Express</a>
        </nav>
      </section>
    </main>
  );
}
