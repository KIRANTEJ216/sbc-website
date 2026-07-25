"use client";

import { useEffect, useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerReveal from "@/components/StaggerReveal";

const stats = [
  { value: 85, suffix: "+", label: "Verified Businesses" },
  { value: 420, suffix: "Cr+", prefix: "₹", label: "Deals Facilitated", isCurrency: true },
  { value: 1500, suffix: "+", label: "Connections Made" },
  { value: 95, suffix: "%", label: "Member Satisfaction" },
  { value: 50, suffix: "+", label: "Events Hosted" },
  { value: 30, suffix: "+", label: "Expert Talks" },
  { value: 200, suffix: "+", label: "Referrals Exchanged" },
  { value: 12, suffix: "x", label: "Avg. ROI on Membership" },
  { value: 40, suffix: "%", label: "YoY Member Growth" },
  { value: 7, suffix: " Days", label: "Avg. Deal Cycle" },
];

function CounterCard({
  value,
  suffix,
  prefix = "",
  label,
}: {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let current = 0;
          const steps = 50;
          const increment = Math.ceil(value / steps);
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              current = value;
              clearInterval(timer);
            }
            el.textContent = `${prefix}${current.toLocaleString("en-IN")}${suffix}`;
          }, 30);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix, prefix]);

  return (
    <div className="glass rounded-[1rem] p-6 border border-border/60 text-center card-hover-lift transition-all duration-300 stat-accent-line">
      <span ref={ref} className="text-2xl sm:text-3xl font-heading font-bold gradient-accent number-counter">
        {prefix}0{suffix}
      </span>
      <p className="text-text-muted text-sm mt-2">{label}</p>
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="relative py-28 sm:py-36 px-4 border-b border-border/50">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-surface/50 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-text-muted text-xs uppercase tracking-widest font-medium">By the Numbers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Our{" "}
              <span className="gradient-text">Impact</span> in Numbers
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Real results from a thriving community
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((s) => (
            <CounterCard key={s.label} {...s} />
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}