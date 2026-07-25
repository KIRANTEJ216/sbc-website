"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function CTA() {
  return (
    <section className="relative py-28 sm:py-36 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold/8 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-surface/50 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-text-muted text-xs uppercase tracking-widest font-medium">Get Started</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            Ready to{" "}
            <span className="gradient-text">Grow Your Network</span>
            ?
          </h2>

          <p className="text-text-secondary text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Join 85+ verified businesses already closing deals, building partnerships, and growing
            their network on SB Connect. No politics. Only business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-[0.75rem] bg-accent px-10 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-hover hover:-translate-y-0.5 shine shadow-glow"
            >
              <span className="relative z-10">Apply for Membership</span>
              <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-[0.75rem] border border-border bg-surface/80 backdrop-blur-sm px-10 py-4 text-sm font-semibold text-text-primary transition-all duration-300 hover:border-accent/50 hover:text-accent hover:-translate-y-0.5"
            >
              Schedule a Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </div>

          <p className="text-text-muted text-xs mt-6">
            Free 14-day trial. No commitment. Cancel anytime.
          </p>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
    </section>
  );
}