"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GsapCounterProps {
  value: string;
  className?: string;
}

export default function GsapCounter({ value, className = "" }: GsapCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const parsed = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");
  const isDecimal = value.includes(".");

  useEffect(() => {
    const el = ref.current;
    if (!el || !parsed) return;

    const ctx = gsap.context(() => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: parsed,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          const display = isDecimal ? obj.val.toFixed(1) : Math.floor(obj.val);
          el.textContent = `${display}${suffix}`;
        },
      });
    });

    return () => ctx.revert();
  }, [parsed, suffix, isDecimal]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
