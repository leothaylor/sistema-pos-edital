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

    event.currentTarget.href = addAttributionToUrl(href, window.location.href);
    sendCheckoutClick({
      cta_location: "raio-x-product",
      product: productConfig.productName,
      checkout_status: productConfig.checkoutUrl ? "ready" : "coming-soon",
    });
  }

  return <a href={href} onClick={handleClick} {...props} />;
}
