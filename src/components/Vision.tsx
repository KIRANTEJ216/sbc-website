"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function Vision() {
  return (
    <section className="relative py-28 sm:py-36 px-4 overflow-hidden border-b border-border/50">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.03] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-surface/50 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-text-muted text-xs uppercase tracking-widest font-medium">Our Vision</span>
          </div>

          <div className="relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[200px] sm:text-[300px] lg:text-[400px] font-heading font-bold text-text-primary/5 select-none pointer-events-none leading-none">
              "
            </div>

            <blockquote className="relative z-10">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-heading font-medium leading-relaxed text-balance mb-8">
                <span className="text-text-primary">A world where ambition meets opportunity.</span>{" "}
                <span className="text-text-secondary/80">
                  Where every business leader has access to the connections, knowledge, and support
                  they need to build something extraordinary.
                </span>
              </p>
            </blockquote>

            <div className="flex items-center justify-center gap-3">
              <div className="w-px h-8 bg-accent/30" />
              <p className="text-text-muted text-sm">
                Building the most trusted business ecosystem in the country
              </p>
              <div className="w-px h-8 bg-accent/30" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}