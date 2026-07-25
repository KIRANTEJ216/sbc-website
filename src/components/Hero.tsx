"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

function AnimatedCounter({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
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
          const increment = Math.ceil(end / 60);
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              current = end;
              clearInterval(timer);
            }
            el.textContent = current.toLocaleString("en-IN") + suffix;
          }, 25);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, suffix]);

  return (
    <div className="text-center">
      <span ref={ref} className="text-3xl sm:text-4xl font-heading font-bold gradient-accent">
        0
      </span>
      <p className="text-text-muted text-sm mt-1">{label}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient-overlay overflow-hidden pt-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/50 mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-text-muted text-sm">Where Businesses Connect</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-heading font-bold leading-[1.1] mb-6 text-balance">
          <span className="gradient-text">No Politics.</span>
          <br />
          <span className="text-text-primary">Only Business.</span>
        </h1>

        <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          No Politics Only Business. Join 85+ verified businesses, close deals worth 4.2Cr+,
          and grow your network with SB Connect. Where every connection counts.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="#"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-[0.75rem] bg-accent px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-hover hover:-translate-y-0.5 shine"
          >
            <span className="relative z-10">Join the Network</span>
            <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-[0.75rem] border border-border bg-surface/80 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-text-primary transition-all duration-300 hover:border-accent/50 hover:text-accent hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch Overview
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <AnimatedCounter end={85} suffix="+" label="Members" />
          <AnimatedCounter end={420} suffix="Cr+" label="Deals Closed" />
          <AnimatedCounter end={1500} suffix="+" label="Connections" />
          <AnimatedCounter end={95} suffix="%" label="Satisfaction" />
        </div>
      </div>
    </section>
  );
}