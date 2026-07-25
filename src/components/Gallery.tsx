"use client";

import { useState, useCallback, useEffect, useRef } from "react";

const slides = [
  { seed: "oct22-1", label: "Inauguration Ceremony", desc: "The beginning of SB Connect's journey with 60 founding members" },
  { seed: "oct22-2", label: "Networking Event", desc: "Building connections that matter across industries" },
  { seed: "oct22-3", label: "Business Meetup", desc: "Entrepreneurs and professionals coming together" },
  { seed: "oct22-4", label: "Community Workshop", desc: "Skill-sharing and collaborative learning sessions" },
  { seed: "oct22-5", label: "Founder's Talk", desc: "Vision and roadmap for the growing community" },
  { seed: "oct22-6", label: "Team Outing", desc: "Behind the scenes with the core SB Connect team" },
  { seed: "oct22-7", label: "Member Session", desc: "Active participation from community members" },
  { seed: "oct22-8", label: "Annual Gathering", desc: "Celebrating milestones and achievements together" },
  { seed: "oct22-9", label: "Strategy Meet", desc: "Planning the future direction of SB Connect" },
];

export default function Gallery() {
  const [active, setActive] = useState(0);
  const [hacked, setHacked] = useState(false);
  const [leaving, setLeaving] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const activeRef = useRef(active);
  activeRef.current = active;

  const goNext = useCallback(() => {
    setLeaving(activeRef.current);
    setActive((prev) => (prev + 1) % slides.length);
    setTimeout(() => setLeaving(null), 950);
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(goNext, 3000);
  }, [goNext]);

  useEffect(() => {
    setTimeout(() => setHacked(true), 1000);
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handleNext = useCallback(() => {
    goNext();
    resetTimer();
  }, [goNext, resetTimer]);

  const total = slides.length;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#1E3A63]">
      {slides.map((slide, i) => {
        const isActive = i === active;
        const isLeaving = i === leaving;

        let transform = "translateX(100%)";
        let opacity = 0;
        let zIndex = 0;
        let transitionProperty = "none";
        let transitionDuration = "0s";
        let transitionTimingFunction = "ease";
        let transitionDelay = "0s";
        let animation = "none";

        if (isActive) {
          transform = "translateX(0)";
          opacity = 1;
          zIndex = 2;
          transitionProperty = "transform, opacity";
          transitionDuration = "0.45s, 1ms";
          transitionTimingFunction = "cubic-bezier(0.785, 0.135, 0.15, 0.86), ease";
          transitionDelay = "0.45s, 0.45s";
        } else if (isLeaving) {
          animation = "slideHack 0.9s cubic-bezier(0.785, 0.135, 0.15, 0.86)";
          zIndex = 3;
          opacity = 1;
        } else if (hacked) {
          opacity = 1;
          transitionProperty = "opacity";
          transitionDuration = "0.3s";
          transitionTimingFunction = "ease";
          transitionDelay = "0s";
        }

        return (
          <div
            key={i}
            className="absolute left-0 top-0 w-full h-full"
            style={{
              transform,
              opacity,
              zIndex,
              transitionProperty,
              transitionDuration,
              transitionTimingFunction,
              transitionDelay,
              animation,
              pointerEvents: isActive ? "auto" : "none",
            }}
          >
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={`/images/gallery/${slide.seed}.svg`}
                alt=""
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 transition-all duration-[0.45s] ease-in-out"
                style={{
                  backdropFilter: isActive ? "blur(10px)" : "blur(0)",
                  background: isActive ? "rgba(15,23,42,0.2)" : "transparent",
                  transitionDelay: isActive ? "0.45s" : "0s",
                }}
              />
            </div>

            <div
              className="absolute inset-[5%] sm:inset-[12%] md:inset-[15%] rounded-2xl overflow-hidden shadow-2xl transition-all duration-[0.45s] ease-in-out"
              style={{
                transform: isActive ? "scale(0.82)" : "scale(0.75)",
                opacity: isActive ? 1 : 0,
                transitionDelay: isActive ? "0.45s" : "0s",
              }}
            >
              <img
                src={`/images/gallery/${slide.seed}.svg`}
                alt={slide.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-10 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <span className="inline-flex items-center gap-1.5 text-accent/70 text-[10px] sm:text-xs tracking-widest uppercase font-heading mb-1 sm:mb-2">
                  <span className="w-4 sm:w-6 h-px bg-accent/50" />
                  {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
                <h3 className="text-white text-sm sm:text-3xl font-heading font-bold">{slide.label}</h3>
                <p className="text-white/60 text-[11px] sm:text-base mt-0.5 sm:mt-2 max-w-lg line-clamp-2">{slide.desc}</p>
              </div>
            </div>
          </div>
        );
      })}

      <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 z-30 flex items-center gap-3 sm:gap-4">
        <span className="text-white/50 text-[11px] sm:text-sm font-heading tracking-wider hidden sm:inline">
          {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <button
          onClick={handleNext}
          aria-label="Next gallery image"
          className="px-5 sm:px-8 py-2.5 sm:py-3 backdrop-blur-md rounded-full font-heading tracking-widest text-[10px] sm:text-xs border transition-all duration-500 cursor-pointer bg-accent/10 border-accent/30 text-accent hover:bg-accent hover:text-white touch-manipulation"
        >
          NEXT
        </button>
      </div>
    </div>
  );
}