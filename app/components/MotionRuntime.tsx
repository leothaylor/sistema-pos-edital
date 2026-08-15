"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { RefObject, useEffect } from "react";
import { tickFrameSubscribers } from "./animationHub";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function MotionRuntime({ root }: { root: RefObject<HTMLDivElement | null> }) {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, touchMultiplier: 1 });
    lenis.on("scroll", ScrollTrigger.update);
    const mainLoop = (seconds: number) => {
      const milliseconds = seconds * 1000;
      lenis.raf(milliseconds);
      tickFrameSubscribers(milliseconds);
    };
    gsap.ticker.add(mainLoop);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(mainLoop);
      lenis.destroy();
    };
  }, []);

  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    gsap.from(".hero-reveal", { y: 18, duration: 0.62, stagger: 0.055, ease: "power3.out" });
    gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
      gsap.from(element, {
        y: 38,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: element, start: "top 88%", once: true },
      });
    });
  }, { scope: root });

  return null;
}
