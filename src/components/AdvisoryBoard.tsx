"use client";

import ScrollReveal from "@/components/ScrollReveal";
import StaggerReveal from "@/components/StaggerReveal";

const boardMembers = [
  { name: "Govvala Soma Sekhar", seed: "adv-1" },
  { name: "Kadali Trinadha Rao", seed: "adv-2" },
  { name: "Vittanala Srinivas Kumar", seed: "adv-3" },
  { name: "Appari Ravindranath", seed: "adv-4" },
  { name: "Illa Vinod Kumar", seed: "adv-5" },
  { name: "Chintakula Ravi Prasad", seed: "adv-6" },
  { name: "Illa Srinivasa", seed: "adv-7" },
  { name: "Katta L.B. Kumar", seed: "adv-8" },
];

export default function AdvisoryBoard() {
  return (
    <section className="relative py-28 sm:py-36 px-4 border-b border-border/50">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-surface/50 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-text-muted text-xs uppercase tracking-widest font-medium">Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Our{" "}
              <span className="gradient-gold">Advisory Board</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Seasoned leaders guiding our community's vision and growth
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {boardMembers.map((m) => (
            <div
              key={m.name}
              className="group glass rounded-[1.25rem] p-6 border border-border/60 text-center transition-all duration-500 hover:shadow-card-glow hover:border-accent/25 hover:-translate-y-1"
            >
              <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-2 border-border/80 group-hover:border-accent/40 transition-all duration-500">
                <img
                  src={`https://picsum.photos/seed/${m.seed}/200/200`}
                  alt={m.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-base font-heading font-semibold text-text-primary group-hover:text-accent transition-colors duration-300">
                {m.name}
              </h3>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}