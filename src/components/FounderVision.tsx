"use client";

import GsapReveal from "@/components/GsapReveal";

export default function FounderVision() {
  return (
    <section className="relative py-28 sm:py-36 px-4 border-b border-border/50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <GsapReveal variant="left">
              <div className="relative">
                <div className="w-full aspect-[3/4] rounded-[1.5rem] overflow-hidden border border-border/50 shadow-card">
                  <img
                    src="/images/founder.svg"
                    alt="Shri. ILLA SOMA SEKHAR"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-accent/20 blur-[40px]" />
                <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-gold/20 blur-[30px]" />
              </div>
            </GsapReveal>
          </div>

          <div className="lg:col-span-3">
            <GsapReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-surface/50 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-text-muted text-xs uppercase tracking-widest font-medium">Founder & Vision</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-2 leading-tight">
                Shri. ILLA{" "}
                <span className="gradient-gold">SOMA SEKHAR</span>
              </h2>

              <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-text-muted mb-6">
                <span>FOUNDER, SB CONNECT</span>

              </div>

              <div className="space-y-3 text-text-secondary leading-relaxed text-sm sm:text-base">
                <p>
                  An accomplished engineer and senior corporate leader with over 35 years of experience, Shri. ILLA SOMA SEKHAR holds a B.E. in ECE and an M.Tech from JNTU, Hyderabad, complemented by advanced studies in HR, Psychology, Marketing, and Project Management.
                </p>

                <p>
                  He began his career at a small Hyderabad firm before joining a Navaratna PSU in 1990 as a Probationary Engineer, rising over three decades to the Senior Management position of Chief General Manager.
                </p>

                <p>
                  His lifelong commitment to community service through mentoring, career guidance, and personality development led to the founding of SB Connect on 26th January 2025 with 10 members. The initiative was formally inaugurated on 12th October 2025 with 60 members.
                </p>

                <p>
                  His vision: unite SB community business professionals under a single platform that fosters mutual growth through collaboration, networking, and shared opportunities. He aims to establish similar groups across both Telugu states, each comprising 100 business members, to build a strong and influential societal presence.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 p-4 rounded-[1rem] bg-accent-subtle border border-accent/10">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent/30 shrink-0">
                  <img
                    src="/images/founder-thumb.svg"
                    alt="Shri. ILLA SOMA SEKHAR"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-text-primary font-heading font-semibold text-sm">Shri. ILLA SOMA SEKHAR</p>
                  <p className="text-text-muted text-xs">Founder, SB Connect</p>
                </div>
              </div>
            </GsapReveal>
          </div>
        </div>
      </div>
    </section>
  );
}