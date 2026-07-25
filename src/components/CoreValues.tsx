"use client";

import ScrollReveal from "@/components/ScrollReveal";
import StaggerReveal from "@/components/StaggerReveal";

const values = [
  { title: "Integrity First", desc: "Every interaction is built on honesty and transparency." },
  { title: "Mutual Growth", desc: "We succeed only when our members succeed." },
  { title: "Quality Over Quantity", desc: "Vetted members, meaningful connections, zero spam." },
  { title: "Authentic Engagement", desc: "Real conversations, not automated outreach." },
  { title: "Confidentiality", desc: "What is shared in the community stays in the community." },
  { title: "Active Participation", desc: "You get what you give. Contribution is expected." },
  { title: "Continuous Learning", desc: "Stay ahead through shared knowledge and insights." },
  { title: "Inclusivity", desc: "Diverse perspectives make us stronger." },
  { title: "Accountability", desc: "Members are committed to their goals and promises." },
  { title: "Long-Term Thinking", desc: "We build relationships, not transactions." },
];

const iconMap = [
  "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",
  "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  "M14 10h-2m0 0H4m0 0a2 2 0 01-2-2V5a2 2 0 012-2h6a2 2 0 012 2v3m10 0h-2m0 0V5a2 2 0 00-2-2h-2m2 8v3a2 2 0 01-2 2h-2m4-5a2 2 0 012 2v3a2 2 0 01-2 2h-2",
  "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
];

export default function CoreValues() {
  return (
    <section className="relative py-28 sm:py-36 px-4 border-b border-border/50">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-surface/50 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-text-muted text-xs uppercase tracking-widest font-medium">Core Values</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
              The Principles That{" "}
              <span className="gradient-gold">Guide Us</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Ten values that define our culture and community
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="group glass rounded-[1rem] p-5 sm:p-6 border border-border/60 text-center card-hover-glow transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconMap[i]} />
                </svg>
              </div>
              <h3 className="text-sm font-heading font-semibold text-text-primary mb-1">{v.title}</h3>
              <p className="text-text-muted text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}