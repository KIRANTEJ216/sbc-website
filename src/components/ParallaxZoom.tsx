"use client";

import { useEffect, useRef } from "react";

export default function ParallaxZoom() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    if (!section || !text) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const progress = 1 - rect.top / viewportH;

      if (progress > 0 && progress < 1.5) {
        const clamped = Math.max(0, Math.min(1, progress));
        const scale = 1 + Math.sin(clamped * Math.PI) * 0.25;
        const opacity = Math.sin(clamped * Math.PI);
        text.style.transform = `scale(${scale})`;
        text.style.opacity = `${opacity}`;
      } else if (progress <= 0) {
        text.style.transform = "scale(1)";
        text.style.opacity = "0";
      } else {
        text.style.transform = "scale(1.25)";
        text.style.opacity = "0";
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[120vh] flex items-center justify-center overflow-hidden border-b border-border/50 bg-secondary"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-accent-subtle via-transparent to-gold-light/30" />

      <div
        ref={textRef}
        className="relative z-10 text-center px-4 will-change-transform"
        style={{ opacity: 0, transform: "scale(1)" }}
      >
        <p className="text-gold text-sm sm:text-base uppercase tracking-[0.3em] mb-4 font-medium">
          Our Motto
        </p>
        <h2 className="text-5xl sm:text-7xl lg:text-9xl font-heading font-bold leading-[1.1]">
          <span className="gradient-text">GROW</span>
          <br />
          <span className="text-text-primary">TOGETHER</span>
        </h2>
        <p className="text-text-muted text-base sm:text-lg max-w-md mx-auto mt-6">
          Every member rise lifts the entire community
        </p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
        <div className="w-[600px] h-[600px] rounded-full border border-accent/10" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-accent/10" />
        <div className="absolute w-[200px] h-[200px] rounded-full border border-accent/10" />
      </div>
    </section>
  );
}