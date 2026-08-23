"use client";

import type { ComponentPropsWithoutRef, MouseEvent } from "react";
import { attributionKeys } from "./config";

type AttributionLinkProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
};

export function AttributionLink({ href, onClick, ...props }: AttributionLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented) return;

    const currentParams = new URLSearchParams(window.location.search);
    const target = new URL(href, window.location.href);

    attributionKeys.forEach((key) => {
      const value = currentParams.get(key);
      if (value) target.searchParams.set(key, value);
    });

    event.currentTarget.href = target.toString();
  }

  return <a href={href} onClick={handleClick} {...props} />;
}
