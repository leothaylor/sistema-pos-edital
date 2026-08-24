"use client";

import type { ComponentPropsWithoutRef, MouseEvent } from "react";
import { productConfig } from "../config/product";
import { addAttributionToUrl, sendCheckoutClick } from "../config/tracking";

type AttributionLinkProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
};

export function AttributionLink({ href, onClick, ...props }: AttributionLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented) return;

    event.preventDefault();
    const destination = addAttributionToUrl(href, window.location.href);
    sendCheckoutClick({
      cta_location: "raio-x-product",
      product: productConfig.productName,
      checkout_status: productConfig.checkoutUrl ? "ready" : "coming-soon",
    }, () => window.location.assign(destination));
  }

  return <a href={href} onClick={handleClick} {...props} />;
}
