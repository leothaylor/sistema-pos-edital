"use client";

import { useEffect } from "react";
import { siteRoutes } from "../config/site";
import styles from "../home.module.css";

export default function LegacyRaioXPage() {
  useEffect(() => {
    const destination = new URL(siteRoutes.raioX, window.location.origin);
    destination.search = window.location.search;
    destination.hash = window.location.hash;
    window.location.replace(destination.toString());
  }, []);

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <p className={styles.brand}>Neural Concursos</p>
        <h1>O Raio X Express mudou de endereço.</h1>
        <nav aria-label="Continuar para o novo endereço" className={styles.links}>
          <a href={siteRoutes.raioX}>Continuar para o Raio X Express</a>
        </nav>
      </section>
    </main>
  );
}
