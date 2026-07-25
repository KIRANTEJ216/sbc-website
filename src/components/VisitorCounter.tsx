"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("sb-connect-visits");
    const prev = stored ? Number(stored) : 0;
    const next = prev + 1;
    localStorage.setItem("sb-connect-visits", String(next));
    setCount(next);
  }, []);

  const digits = String(count).padStart(6, "0").split("");

  return (
    <footer className="relative w-full bg-[#0a0f1e] overflow-hidden">
      <div className="stars" />
      <div className="twinkling" />
      <div className="clouds" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-white/40 text-[10px] uppercase tracking-[0.15em] font-heading font-medium mr-1">
              Visitors
            </span>
            {digits.map((d, i) => (
              <div
                key={i}
                className="w-7 sm:w-9 h-9 sm:h-11 rounded-md bg-white/5 border border-white/10 flex items-center justify-center"
              >
                <span className="text-white text-base sm:text-xl font-heading font-bold tabular-nums">
                  {d}
                </span>
              </div>
            ))}
          </div>

          <p className="text-white/30 text-xs font-heading tracking-wider">
            &copy; {new Date().getFullYear()} SB Connect. All rights reserved.
          </p>

          <p className="text-white/30 text-[10px] sm:text-xs font-heading tracking-wider">
            Developed by <span className="text-accent/60">FloLogixAutomations</span>
          </p>
        </div>
      </div>
    </footer>
  );
}