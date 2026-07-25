"use client";

import GsapReveal from "@/components/GsapReveal";

const boardMembers = [
  { name: "GOVVALA SOMA SEKHAR", seed: "adv-1" },
  { name: "KADALI TRINADHA RAO", seed: "adv-2" },
  { name: "VITTANALA SRINIVAS KUMAR", seed: "adv-3" },
  { name: "APPARI RAVINDRANATH", seed: "adv-4" },
  { name: "ILLA VINOD KUMAR", seed: "adv-5" },
  { name: "CHINTAKULA RAVI PRASAD", seed: "adv-6" },
  { name: "ILLA SRINIVASA", seed: "adv-7" },
  { name: "KATTA L.B. KUMAR", seed: "adv-8" },
];

export default function AdvisoryBoard() {
  return (
    <section className="relative py-28 sm:py-36 px-4 border-b border-border/50">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <GsapReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-surface/50 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-text-muted text-xs uppercase tracking-widest font-medium">Advisory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Our{" "}
              <span className="gradient-text">Advisory Board</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Seasoned leaders guiding our community's vision and growth
            </p>
          </div>
        </GsapReveal>

        <GsapReveal stagger={0.1} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10">
          {boardMembers.map((m) => (
            <div
              key={m.name}
               className="group glass rounded-[1.25rem] p-4 sm:p-6 border border-border/60 text-center card-hover-glow transition-all duration-500"
            >
              <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden border-2 border-border/80 group-hover:border-accent/40 transition-all duration-500">
                <img
                  src={`/images/${m.seed}.svg`}
                  alt={m.name}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h3 className="text-[13px] sm:text-base font-heading font-semibold text-text-primary group-hover:text-accent transition-colors duration-500 leading-tight">
                {m.name}
              </h3>
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