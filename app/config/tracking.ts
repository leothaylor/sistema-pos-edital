export const trackingConfig = {
  googleAnalyticsMeasurementId: "G-F59RLCT29B",
  microsoftClarityProjectId: "y7hzissaiv",
} as const;

export const attributionKeys = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "utm_id",
  "src",
  "sck",
  "fbclid",
] as const;

export function addAttributionToUrl(destinationHref: string, currentHref: string) {
  const current = new URL(currentHref);
  const destination = new URL(destinationHref, current);

  attributionKeys.forEach((key) => {
    const currentValue = current.searchParams.get(key)?.trim();

    if (currentValue) {
      destination.searchParams.set(key, currentValue);
    }
  });

  return destination.toString();
}

export type CheckoutClickParameters = {
  cta_location: string;
  product: string;
  checkout_status: "ready" | "coming-soon";
};

export function sendCheckoutClick(
  parameters: CheckoutClickParameters,
  onComplete?: () => void,
) {
  if (typeof window === "undefined") return;

  const eventParameters = { ...parameters };

  if (window.gtag) {
    window.gtag("event", "checkout_click", eventParameters);

    if (onComplete) {
      // GA4 batches custom events. Pagehide flushes the batch before leaving for checkout.
      window.dispatchEvent(new PageTransitionEvent("pagehide", { persisted: false }));
      window.setTimeout(onComplete, 100);
    }
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(["event", "checkout_click", eventParameters]);
    onComplete?.();
  }
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
