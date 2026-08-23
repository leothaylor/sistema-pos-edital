"use client";

import { useEffect, useState } from "react";
import { productConfig } from "../config/product";
import CheckoutButton from "./CheckoutButton";

export default function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting && window.scrollY > hero.clientHeight * 0.55),
      { threshold: 0.08 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!productConfig.showStickyMobileCta || !visible) return null;

  return (
    <aside className="mobile-cta is-visible" aria-label="Acesso rápido ao sistema">
      <CheckoutButton
        className="cta-button cta-button--sticky"
        includePrice
        label="ACESSAR O SISTEMA"
        location="sticky-mobile"
      />
    </aside>
  );
}
