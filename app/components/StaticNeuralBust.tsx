"use client";

import Image from "next/image";
import { RefObject } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function BustImage({ imageRef, className = "" }: { imageRef?: RefObject<HTMLImageElement | null>; className?: string }) {
  return <Image ref={imageRef} className={`bust-reference ${className}`} src={`${basePath}/marble-bust-fallback.webp`} width={500} height={680} alt="" priority />;
}

export default function StaticNeuralBust() {
  return <div className="static-bust"><BustImage className="is-static" /></div>;
}
