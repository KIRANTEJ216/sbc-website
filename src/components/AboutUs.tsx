"use client";

import GsapReveal from "@/components/GsapReveal";

const totalMeetings = 16;

const stats = [
  { value: "127+", label: "Verified Business Members" },
  { value: "4.2Cr+", label: "Deals Facilitated" },
  { value: "1500+", label: "Connections Made" },
  { value: "95%", label: "Member Satisfaction" },
];

export default function AboutUs() {
  return (
    <div className="min-h-full bg-canvas">
      <section className="py-20 sm:py-28 px-6 border-b border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <GsapReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-surface/50 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-text-muted text-xs uppercase tracking-widest font-medium">About SB Connect</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-heading font-bold mb-6 leading-tight">
              No Politics.{" "}
              <span className="gradient-text">Only Business.</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              SB Connect is a private community of verified business professionals committed to
              mutual growth through authentic connections, collaboration, and shared opportunities.
            </p>
          </GsapReveal>
        </div>
      </section>

      <section className="py-20 sm:py-28 px-6 border-b border-border/50 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <GsapReveal>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-12 text-center">
              Our <span className="gradient-accent">Journey</span>
            </h2>
          </GsapReveal>

          <GsapReveal>
            <div className="py-4 sm:py-8">
              <div className="relative">
                <div className="h-px bg-border/60 absolute left-0 right-0 top-1/2 -translate-y-1/2" />
                <div className="flex items-center justify-between relative overflow-visible pb-8 sm:pb-6">
                  {Array.from({ length: totalMeetings }, (_, i) => (
                    <div key={i} className="flex flex-col items-center relative">
                      <div
                        className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full z-10 transition-all duration-300 shrink-0 ${
                          i < 5
                            ? "bg-accent/30"
                            : i < 10
                            ? "bg-accent/60"
                            : i < 15
                            ? "bg-accent"
                            : "bg-accent shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                          }`}
                      />
                      {(i === 0 || i === 6 || i === 11 || i === 15) && (
                        <span className="text-[9px] sm:text-[10px] text-text-muted font-heading whitespace-nowrap absolute top-full mt-2 sm:mt-2.5">
                          {i === 0 ? "Jan '25" : i === 6 ? "Aug '25" : i === 11 ? "Jan '26" : "Today"}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 mt-12 sm:mt-10 text-center">
                <div>
                  <p className="text-[11px] sm:text-xs font-heading font-bold text-accent">First Meeting</p>
                  <p className="text-[10px] sm:text-xs text-text-muted mt-0.5">Jan 2025 — 10 members</p>
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs font-heading font-bold text-accent">Inauguration</p>
                  <p className="text-[10px] sm:text-xs text-text-muted mt-0.5">Oct 2025 — 60 members</p>
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs font-heading font-bold text-accent">16th Meeting</p>
                  <p className="text-[10px] sm:text-xs text-text-muted mt-0.5">127+ members and growing</p>
                </div>
              </div>
            </div>
          </GsapReveal>
        </div>
      </section>

      <section className="py-20 sm:py-28 px-6 border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <GsapReveal>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-12 text-center">
              By the <span className="gradient-text">Numbers</span>
            </h2>
          </GsapReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <GsapReveal key={s.label}>
                <div className="glass rounded-[1rem] p-6 text-center border border-border/60 stat-accent-line">
                  <p className="text-2xl sm:text-3xl font-heading font-bold gradient-accent">{s.value}</p>
                  <p className="text-text-muted text-xs sm:text-sm mt-1">{s.label}</p>
                </div>
              </GsapReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <GsapReveal>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6">
              What We <span className="gradient-gold">Stand For</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto mb-10">
              A community built on integrity, mutual growth, and authentic engagement. Every member
              is vetted. Every connection counts. Every deal is a win-win.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {["Authentic Connections", "Zero Politics", "Collective Growth"].map((v) => (
                <div key={v} className="glass rounded-[1rem] p-6 border border-border/60">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-heading font-semibold text-text-primary">{v}</h3>
                </div>
              ))}
            </div>
          </GsapReveal>
        </div>
      </section>
    </div>
  );
}