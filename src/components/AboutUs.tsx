"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GsapReveal from "@/components/GsapReveal";
import GsapCounter from "@/components/GsapCounter";

const totalMeetings = 16;

const stats = [
  { value: "127+", label: "Verified Business Members" },
  { value: "4.2Cr+", label: "Deals Facilitated" },
  { value: "1500+", label: "Connections Made" },
  { value: "95%", label: "Member Satisfaction" },
];

export default function AboutUs() {
  const journeyRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<(HTMLDivElement | null)[]>([]);
  const milestonesRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = journeyRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 1.5, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 80%", end: "top 30%", toggleActions: "play none none none" } }
      );

      gsap.fromTo(
        markersRef.current.filter(Boolean),
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.35, stagger: 0.06, ease: "back.out(1.7)", scrollTrigger: { trigger: el, start: "top 75%", end: "top 25%", toggleActions: "play none none none" } }
      );

      gsap.fromTo(
        milestonesRef.current.filter(Boolean),
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 70%", end: "top 30%", toggleActions: "play none none none" } }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-full bg-canvas">
      <section className="py-28 sm:py-36 px-6 border-b border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <GsapReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-surface/50 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-text-muted text-xs uppercase tracking-widest font-medium">About SB Connect</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-heading font-bold mb-6 leading-tight">
              Only Business{" "}
              <span className="gradient-text">No Politics</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              SB Connect is a private community of verified business professionals committed to
              mutual growth through authentic connections, collaboration, and shared opportunities.
            </p>
          </GsapReveal>
        </div>
      </section>

      <section className="py-28 sm:py-36 px-6 border-b border-border/50 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <GsapReveal>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-12 text-center">
              Our <span className="gradient-accent">Journey</span>
            </h2>
          </GsapReveal>

          <GsapReveal>
            <div ref={journeyRef} className="py-4 sm:py-8">
              <div className="relative">
                <div ref={lineRef} className="h-[3px] bg-gradient-to-r from-accent/30 via-accent/60 to-accent absolute left-0 right-0 top-1/2 -translate-y-1/2 rounded-full" />
                <div className="flex items-center justify-between relative overflow-visible pb-8 sm:pb-6">
                  {Array.from({ length: totalMeetings }, (_, i) => (
                    <div key={i} className="flex flex-col items-center relative">
                      <div
                        ref={(el) => { markersRef.current[i] = el; }}
                        className={`w-3 sm:w-4 h-3 sm:h-4 rotate-45 z-10 shrink-0 ${
                          i < 5
                            ? "bg-accent/30"
                            : i < 10
                            ? "bg-accent/60"
                            : i < 15
                            ? "bg-accent"
                            : "bg-accent shadow-[0_0_10px_rgba(40,72,122,0.5)]"
                          }`}
                      />
                      {(i === 0 || i === 6 || i === 11 || i === 15) && (
                        <span
                          ref={(el) => { milestonesRef.current[i] = el; }}
                          className="text-[9px] sm:text-[10px] text-text-muted font-heading whitespace-nowrap absolute top-full mt-2 sm:mt-2.5"
                        >
                          {i === 0 ? "Jan '25" : i === 6 ? "Aug '25" : i === 11 ? "Jan '26" : "Today"}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 mt-12 sm:mt-10 text-center">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-heading font-bold text-accent mb-1">First Meeting</span>
                  <p className="text-[10px] sm:text-xs text-text-muted mt-0.5">Jan 2025 — 10 members</p>
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-heading font-bold text-accent mb-1">Inauguration</span>
                  <p className="text-[10px] sm:text-xs text-text-muted mt-0.5">Oct 2025 — 60 members</p>
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-heading font-bold text-accent mb-1">16th Meeting</span>
                  <p className="text-[10px] sm:text-xs text-text-muted mt-0.5">127+ members and growing</p>
                </div>
              </div>
            </div>
          </GsapReveal>
        </div>
      </section>

      <section className="py-28 sm:py-36 px-6 border-b border-border/50">
        <div className="max-w-5xl mx-auto">
          <GsapReveal>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-12 sm:mb-16 text-center">
              By the <span className="gradient-text">Numbers</span>
            </h2>
          </GsapReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <GsapReveal key={s.label} variant="zoom" delay={0.1 * i}>
                <div className="glass rounded-[1.25rem] sm:rounded-[1.75rem] p-4 sm:p-8 text-center border border-border/60 stat-accent-line transition-all duration-500 hover:shadow-card-glow hover:-translate-y-1">
                  <p className="text-xl sm:text-3xl font-heading font-bold gradient-accent">
                    <GsapCounter value={s.value} />
                  </p>
                  <p className="text-text-muted text-xs sm:text-sm mt-1">{s.label}</p>
                </div>
              </GsapReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 sm:py-36 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <GsapReveal>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              What We <span className="gradient-accent">Stand For</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto mb-10">
              A community built on integrity, mutual growth, and authentic engagement. Every member
              is vetted. Every connection counts. Every deal is a win-win.
            </p>
            <div className="grid sm:grid-cols-3 gap-5">
              {["Authentic Connections", "Zero Politics", "Collective Growth"].map((v) => (
                <div key={v} className="glass rounded-[1.25rem] p-6 sm:p-8 border border-border/60 transition-all duration-500 hover:shadow-card-glow hover:-translate-y-1">
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