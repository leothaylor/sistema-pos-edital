"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { formatProductPrice, productConfig } from "../config/product";

type CtaLocation = "header" | "hero" | "mechanism" | "offer" | "final" | "sticky-mobile";

type CheckoutButtonProps = {
  location: CtaLocation;
  label?: string;
  className?: string;
  includePrice?: boolean;
};

const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

function checkoutUrlWithAttribution(checkoutUrl: string) {
  const destination = new URL(checkoutUrl, window.location.href);
  const source = new URLSearchParams(window.location.search);

  utmKeys.forEach((key) => {
    const value = source.get(key);
    if (value && !destination.searchParams.has(key)) destination.searchParams.set(key, value);
  });

  return destination.toString();
}

function trackCta(location: CtaLocation, status: "ready" | "coming-soon") {
  const event = {
    event: "cta_click",
    cta_location: location,
    product: productConfig.productName,
    checkout_status: status,
  };

  window.dispatchEvent(new CustomEvent("neural:cta", { detail: event }));
  const dataLayerWindow = window as Window & { dataLayer?: Array<Record<string, unknown>> };
  dataLayerWindow.dataLayer?.push(event);
}

export default function CheckoutButton({
  location,
  label = "QUERO ORGANIZAR MEU PÓS-EDITAL",
  className = "cta-button",
  includePrice = false,
}: CheckoutButtonProps) {
  const [showNotice, setShowNotice] = useState(false);
  const timerRef = useRef<number | null>(null);
  const noticeId = useId();
  const price = formatProductPrice();
  const visibleLabel = includePrice && price ? `${label} · ${price}` : label;

  useEffect(() => () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
  }, []);

  if (productConfig.checkoutUrl) {
    return (
      <a
        className={className}
        data-cta={location}
        href={productConfig.checkoutUrl}
        onClick={(event) => {
          event.preventDefault();
          trackCta(location, "ready");
          window.location.assign(checkoutUrlWithAttribution(productConfig.checkoutUrl as string));
        }}
      >
        <span>{visibleLabel}</span>
        <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
      </a>
    );
  }

  return (
    <span className="cta-with-notice">
      <button
        className={className}
        data-cta={location}
        type="button"
        aria-describedby={noticeId}
        onClick={() => {
          trackCta(location, "coming-soon");
          setShowNotice(true);
          if (timerRef.current) window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => setShowNotice(false), 3200);
        }}
      >
        <span>{visibleLabel}</span>
        <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
      </button>
      <span
        className={`cta-notice${showNotice ? " is-visible" : ""}`}
        id={noticeId}
        role="status"
        aria-live="polite"
      >
        As inscrições ainda não estão abertas. Volte em breve para acessar o sistema.
      </span>
    </span>
  );
}
