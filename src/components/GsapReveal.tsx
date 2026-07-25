"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GsapRevealProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "left" | "right" | "scale";
  stagger?: number;
}

const setVars: Record<string, gsap.TweenVars> = {
  default: { opacity: 0, y: 40 },
  left: { opacity: 0, x: -48 },
  right: { opacity: 0, x: 48 },
  scale: { opacity: 0, scale: 0.92 },
};

const toVars: Record<string, gsap.TweenVars> = {
  default: { opacity: 1, y: 0 },
  left: { opacity: 1, x: 0 },
  right: { opacity: 1, x: 0 },
  scale: { opacity: 1, scale: 1 },
};

export default function GsapReveal({ children, className = "", variant = "default", stagger = 0 }: GsapRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = stagger ? Array.from(el.children) : el;

    const ctx = gsap.context(() => {
      gsap.set(targets, setVars[variant]);
      gsap.to(targets, {
        ...toVars[variant],
        duration: 0.9,
        ease: "power3.out",
        stagger: stagger || undefined,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, [variant, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
