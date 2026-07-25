"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import ConnectingDots from "@/components/ConnectingDots";
import Logo from "@/components/Logo";

interface StickyNavProps {
  children: ReactNode[];
  tabLabels: string[];
}

const TAB_HEIGHT = 70;

function toId(label: string) {
  return "tab-" + label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function StickyNav({ children, tabLabels }: StickyNavProps) {
  const tabIds = tabLabels.map(toId);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState(tabIds[0]);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = containerRef.current;
      if (!hero) return;

      const heroBottom = hero.offsetTop + hero.offsetHeight - TAB_HEIGHT;
      setIsSticky(window.scrollY >= heroBottom);

      let current = tabIds[0];
      for (const id of tabIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= TAB_HEIGHT + 1) {
            current = id;
          }
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [tabIds]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - TAB_HEIGHT;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const activeIndex = tabIds.indexOf(activeId);

  return (
    <div ref={containerRef}>
      <section className="flex flex-col items-center justify-center h-screen relative text-center px-4 sm:px-8 overflow-hidden" style={{ background: "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 50%, #E2E8F0 100%)" }}>
        <ConnectingDots />
        <div className="max-w-3xl relative z-[2]">
          <Logo className="w-16 sm:w-20 lg:w-24 mx-auto mb-5 sm:mb-6" />

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-white/60 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-text-muted text-xs uppercase tracking-widest font-heading font-medium">Community Business Platform</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold tracking-[0.12em] sm:tracking-[0.15em] mb-4 break-words">
            SB CONNECT
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary font-heading tracking-wider mb-2">
            No Politics Only Business
          </p>

          <p className="text-sm sm:text-base text-text-muted max-w-md mx-auto">
            Empowering verified businesses to connect, collaborate, and grow together
          </p>
        </div>

        <div
          role="tablist"
          className="flex w-full bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-10 overflow-x-auto scrollbar-hide"
          style={{
            position: isSticky ? "fixed" : "absolute",
            top: isSticky ? 0 : "auto",
            bottom: isSticky ? "auto" : 0,
            left: 0,
            height: TAB_HEIGHT,
          }}
        >
          {tabLabels.map((label, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={activeIndex === i}
              onClick={() => scrollTo(tabIds[i])}
              className={`flex-1 shrink-0 flex items-center justify-center text-xs sm:text-sm font-heading font-semibold tracking-widest transition-all duration-500 cursor-pointer whitespace-nowrap px-3 sm:px-4 ${
                activeIndex === i
                  ? "text-accent bg-accent/5"
                  : "text-text-secondary hover:bg-accent hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
          <span
            className="absolute bottom-0 h-[6px] bg-accent transition-all duration-300 ease-out"
            style={{
              width: `${100 / tabLabels.length}%`,
              left: `${(activeIndex / tabLabels.length) * 100}%`,
            }}
          />
        </div>
      </section>

      <main>
        {children.map((child, i) => (
          <section key={i} id={tabIds[i]}>
            {child}
          </section>
        ))}
      </main>
    </div>
  );
}