"use client";

import ScrollReveal from "@/components/ScrollReveal";

const partners = [
  { name: "TechFlow", seed: "partner-1" },
  { name: "Kapoor Designs", seed: "partner-2" },
  { name: "Nair Logistics", seed: "partner-3" },
  { name: "Verma Associates", seed: "partner-4" },
  { name: "Joshi Media", seed: "partner-5" },
  { name: "Singh Healthcare", seed: "partner-6" },
  { name: "Desai Ventures", seed: "partner-7" },
  { name: "Patel Group", seed: "partner-8" },
];

export default function Partners() {
  return (
    <section className="relative py-20 sm:py-28 px-4 border-b border-border/50">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-surface/50 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-text-muted text-xs uppercase tracking-widest font-medium">Trusted By</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold mb-2">
              Our{" "}
              <span className="gradient-text">Partner Network</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative overflow-hidden">
          <div className="flex gap-12 items-center marquee" style={{ width: "max-content" }}>
            {[...partners, ...partners].map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="flex items-center gap-3 px-6 py-3 rounded-[0.75rem] border border-border/40 bg-surface/30 flex-shrink-0"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${p.seed}/60/60`}
                    alt={p.name}
                    className="w-full h-full object-cover grayscale opacity-70"
                  />
                </div>
                <span className="text-text-muted text-sm font-medium whitespace-nowrap">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}