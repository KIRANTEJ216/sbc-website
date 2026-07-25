"use client";

import GsapReveal from "@/components/GsapReveal";

const teamMembers = [
  { name: "ILLA SOMA SEKHAR", role: "President", seed: "core-1" },
  { name: "PECHETTY SURENDER KUMAR", role: "Vice President", seed: "core-2" },
  { name: "CHINTAKULA NAGA PRASAD", role: "Secretary", seed: "core-3" },
  { name: "PITHANI CHANDRA SEKHAR", role: "Joint Secretary", seed: "core-4" },
  { name: "KANCHI VN BHUSHANAM", role: "Treasurer", seed: "core-5" },
  { name: "KADALI NAVEEN KUMAR", role: "Joint Treasurer", seed: "core-6" },
  { name: "PALIVELA VIJAY RAM", role: "Digital Committee", seed: "core-7" },
  { name: "KOPPISETTI KIRAN TEJ", role: "Digital Committee", seed: "core-8" },
];

export default function DigitalTeam() {
  return (
    <section className="relative py-28 sm:py-36 px-4 border-b border-border/50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <GsapReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-surface/50 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-text-muted text-xs uppercase tracking-widest font-medium">Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Core{" "}
              <span className="gradient-text">Committee</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              The governing body driving SB Connect forward
            </p>
          </div>
        </GsapReveal>

        <GsapReveal stagger={0.1} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10">
          {teamMembers.map((m) => (
            <div
              key={m.name}
               className="group glass rounded-[1.25rem] p-4 sm:p-6 border border-border/60 text-center card-hover-glow transition-all duration-500"
            >
              <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden border-2 border-border/80 group-hover:border-accent/40 transition-all duration-500">
                <img
                  src={`/images/${m.seed}.svg`}
                  alt={m.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h3 className="text-[13px] sm:text-base font-heading font-semibold text-text-primary group-hover:text-accent transition-colors duration-500">
                {m.name}
              </h3>
              <p className="text-text-muted text-[11px] sm:text-xs mt-1">{m.role}</p>
              <div className="flex items-center justify-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center cursor-pointer hover:bg-accent/20 transition-colors">
                  <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 5.694v.632A2.5 2.5 0 0117.5 8.5h-.5a1 1 0 01-1-1V4.5a1 1 0 011-1h.5A2.5 2.5 0 0120 5.694zM4 5.694v.632A2.5 2.5 0 006.5 8.5h.5a1 1 0 001-1V4.5a1 1 0 00-1-1h-.5A2.5 2.5 0 004 5.694z" />
                  </svg>
                </div>
                <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center cursor-pointer hover:bg-accent/20 transition-colors">
                  <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </GsapReveal>
      </div>
    </section>
  );
}