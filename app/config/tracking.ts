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

export function sendCheckoutClick(parameters: CheckoutClickParameters) {
  if (typeof window === "undefined") return;

  const eventParameters = {
    ...parameters,
    transport_type: "beacon",
  };

  if (window.gtag) {
    window.gtag("event", "checkout_click", eventParameters);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(["event", "checkout_click", eventParameters]);
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
