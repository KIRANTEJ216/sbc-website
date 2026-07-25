"use client";

import { useEffect, useRef, useState, useMemo, ReactNode } from "react";
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
  const tabIds = useMemo(() => tabLabels.map(toId), [tabLabels]);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const tablistRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState(tabIds[0]);
  const [isSticky, setIsSticky] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const [logoProgress, setLogoProgress] = useState(0);

  // Update indicator position based on active tab
  useEffect(() => {
    const tablist = tablistRef.current;
    if (!tablist) return;

    const activeIdx = tabIds.indexOf(activeId);
    const buttons = tablist.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    const activeBtn = buttons[activeIdx];
    if (!activeBtn) return;

    const containerRect = tablist.getBoundingClientRect();
    const btnRect = activeBtn.getBoundingClientRect();

    setIndicatorStyle({
      left: btnRect.left - containerRect.left + tablist.scrollLeft,
      width: btnRect.width,
    });
  }, [activeId, tabIds]);

  useEffect(() => {
    const onScroll = () => {
      const hero = heroRef.current;
      if (!hero) return;

      const heroBottom = hero.offsetTop + hero.offsetHeight - TAB_HEIGHT;
      setIsSticky(window.scrollY >= heroBottom);
      setLogoProgress(Math.min(1, Math.max(0, window.scrollY / (hero.offsetHeight - TAB_HEIGHT))));

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

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - TAB_HEIGHT;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const activeIndex = tabIds.indexOf(activeId);

  return (
    <div ref={containerRef}>
      <section ref={heroRef} aria-label="Hero" className="flex flex-col items-center justify-center min-h-screen relative text-center overflow-hidden" style={{ background: "linear-gradient(160deg, #FAF8F5 0%, #F5F1EC 35%, #EDE8E1 65%, #E8E2D8 100%)" }}>
        <ConnectingDots />
        <div className="flex-1 flex flex-col items-center justify-center w-full px-4 sm:px-8">
          <div className="max-w-3xl w-full px-2 sm:px-0">
            <div style={{ transform: `scale(${1 - logoProgress})`, opacity: 1 - logoProgress }}>
              <Logo className="w-28 sm:w-36 lg:w-48 mx-auto mb-4 sm:mb-6" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-border/60 bg-white/60 backdrop-blur-sm mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent" />
              <span className="text-[10px] sm:text-xs text-text-muted uppercase tracking-widest font-heading font-medium">Community Business Platform</span>
            </div>

            <h1 className="text-3xl sm:text-6xl lg:text-7xl font-heading font-bold tracking-[0.06em] sm:tracking-[0.12em] lg:tracking-[0.15em] mb-3 sm:mb-4 break-words">
              SB CONNECT
            </h1>

            <p className="text-base sm:text-xl lg:text-2xl font-display italic text-accent tracking-wide mb-2">
              Together We Grow in Business
            </p>

            <p className="text-xs sm:text-base text-text-muted max-w-md mx-auto px-4 sm:px-0">
              Empowering verified businesses to connect, collaborate, and grow together
            </p>
          </div>
        </div>

        <div className="w-full shrink-0">
          <div
            ref={tablistRef}
            role="tablist"
            className="flex w-full bg-white/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.06)] z-40 overflow-x-auto scrollbar-hide overscroll-contain snap-x snap-mandatory"
            style={{
              position: isSticky ? "fixed" : "relative",
              top: isSticky ? 0 : "auto",
              left: isSticky ? 0 : "auto",
              height: TAB_HEIGHT,
            }}
          >
          {tabLabels.map((label, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={activeIndex === i}
              onClick={() => scrollToSection(tabIds[i])}
              className={`flex-1 min-w-0 snap-start flex items-center justify-center text-[11px] sm:text-sm font-heading font-semibold tracking-[0.12em] sm:tracking-[0.15em] transition-all duration-500 cursor-pointer whitespace-nowrap px-2 sm:px-4 h-full touch-manipulation ${
                activeIndex === i
                  ? "text-accent"
                  : "text-text-secondary hover:text-accent-hover"
              }`}
            >
              {label}
            </button>
          ))}
            {/* Active indicator */}
            <span
              className="absolute bottom-0 h-[3px] bg-gradient-to-r from-accent/80 to-accent transition-all duration-400 ease-out rounded-t-sm pointer-events-none"
              style={{
                width: indicatorStyle.width || `${100 / tabLabels.length}%`,
                left: indicatorStyle.left,
                transitionProperty: "left, width",
                transitionDuration: "400ms",
                transitionTimingFunction: "ease-out",
              }}
            />
            {/* Scroll hint gradient - right edge fade */}
            <div className="pointer-events-none absolute top-0 right-0 w-12 h-full bg-gradient-to-r from-transparent to-white/80 z-[1]" />
          </div>
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
