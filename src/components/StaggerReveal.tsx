"use client";

import { useEffect, useRef, ReactNode } from "react";

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
}

export default function StaggerReveal({
  children,
  className = "",
  threshold = 0.1,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={`stagger ${className}`}>
      {children}
    </div>
  );
}