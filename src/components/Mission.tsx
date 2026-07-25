"use client";

import ScrollReveal from "@/components/ScrollReveal";
import StaggerReveal from "@/components/StaggerReveal";

const missions = [
  {
    number: "01",
    title: "Authentic Connections",
    desc: "Real relationships built on trust and mutual value, not transactional networking.",
  },
  {
    number: "02",
    title: "Verified Community",
    desc: "Every member is vetted and verified. Quality over quantity, always.",
  },
  {
    number: "03",
    title: "Deal Enablement",
    desc: "Structured platforms and events designed to facilitate real business deals.",
  },
  {
    number: "04",
    title: "Knowledge Exchange",
    desc: "Peer-to-peer learning through masterminds, workshops, and expert talks.",
  },
  {
    number: "05",
    title: "Collective Growth",
    desc: "When one member wins, we all win. Shared success is the only metric.",
  },
  {
    number: "06",
    title: "Zero Politics",
    desc: "No egos, no agendas, no bureaucracy. Just business, done right.",
  },
];

export default function Mission() {
  return (
    <section className="relative py-28 sm:py-36 px-4 border-b border-border/50">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-surface/50 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-text-muted text-xs uppercase tracking-widest font-medium">Our Mission</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
              What We{" "}
              <span className="gradient-text">Stand For</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Six pillars that define everything we do
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {missions.map((m) => (
            <div
              key={m.number}
              className="group relative glass rounded-[1rem] p-8 border border-border/60 hover-line transition-all duration-500"
            >
              <span className="text-5xl font-heading font-bold text-accent/15 group-hover:text-accent/25 transition-colors duration-500">
                {m.number}
              </span>
              <h3 className="text-lg font-heading font-semibold text-text-primary mt-2 mb-3">
                {m.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}