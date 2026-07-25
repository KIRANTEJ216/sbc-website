"use client";

import { useRef, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  {
    title: "Verified Network",
    desc: "Every member is hand-vetted. No tire-kickers, no time-wasters. Just serious business owners.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    size: "col-span-2 row-span-1",
  },
  {
    title: "Exclusive Events",
    desc: "Monthly masterminds, workshops, and networking sessions designed for deal flow.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    size: "col-span-1 row-span-1",
  },
  {
    title: "Deal Room",
    desc: "Structured platform to list what you need, find what you offer, and close deals faster.",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    size: "col-span-1 row-span-1",
  },
  {
    title: "Expert Access",
    desc: "Direct access to industry experts, mentors, and advisors who have been where you want to go.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4a2 2 0 012-2h4a2 2 0 012 2v1a2 2 0 01-2 2h-4a2 2 0 01-2-2V4z",
    size: "col-span-1 row-span-1",
  },
  {
    title: "Peer Referrals",
    desc: "Members actively refer business to each other, creating a compounding growth engine.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    size: "col-span-1 row-span-1",
  },
  {
    title: "Knowledge Hub",
    desc: "Curated insights, playbooks, and case studies shared exclusively by members.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    size: "col-span-1 row-span-1",
  },
  {
    title: "Growth Analytics",
    desc: "Track your network growth, deal velocity, and community engagement with detailed insights.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    size: "col-span-1 row-span-1",
  },
];

function FeatureCard({
  title,
  desc,
  icon,
  size,
  index,
}: {
  title: string;
  desc: string;
  icon: string;
  size: string;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--mouse-x", `${x}%`);
      card.style.setProperty("--mouse-y", `${y}%`);
    };

    card.addEventListener("mousemove", handleMouseMove);
    return () => card.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const isLarge = size === "col-span-2 row-span-1";

  return (
    <div
      ref={cardRef}
      className={`group relative glass rounded-[1.5rem] p-6 sm:p-8 border border-border/60 overflow-hidden transition-all duration-500 card-hover-glow ${size}`}
      style={{ position: "relative" }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.08) 0%, transparent 60%)",
        }}
      />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-all duration-300">
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
          </svg>
        </div>
        <h3 className={`font-heading font-semibold text-text-primary mb-2 ${isLarge ? "text-xl" : "text-base"}`}>
          {title}
        </h3>
        <p className={`text-text-muted leading-relaxed ${isLarge ? "text-sm" : "text-xs"}`}>{desc}</p>
      </div>
    </div>
  );
}

export default function WhyJoin() {
  return (
    <section className="relative py-28 sm:py-36 px-4 border-b border-border/50">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-surface/50 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-text-muted text-xs uppercase tracking-widest font-medium">Why Join</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Everything You Need to{" "}
              <span className="gradient-gold">Scale</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Seven powerful reasons why ambitious businesses choose our community
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}