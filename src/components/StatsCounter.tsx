"use client";

import { useEffect, useRef, useState } from "react";

function Counter({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || counted.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || counted.current) return;
        counted.current = true;

        const duration = 2000;
        const steps = 30;
        const increment = end / steps;
        let current = 0;
        const interval = setInterval(() => {
          current += increment;
          if (current >= end) {
            setCount(end);
            clearInterval(interval);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);

        observer.unobserve(el);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="stat-accent-top bg-surface border border-border rounded-[1rem] px-8 py-8 text-center">
      <div className="font-heading font-extrabold text-4xl sm:text-5xl gradient-text mb-1">
        {count}{suffix}
      </div>
      <div className="text-sm text-steel">{label}</div>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6">
        <Counter end={85} suffix="+" label="Verified Members" />
        <Counter end={420} suffix="Cr+" label="Total Business Value (₹)" />
        <Counter end={28} suffix="+" label="Deals Closed" />
      </div>
    </section>
  );
}
