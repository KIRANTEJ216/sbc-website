"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const goldGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    let mouseX = -400;
    let mouseY = -400;
    let currentX = -400;
    let currentY = -400;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = () => {
      if (glowRef.current) glowRef.current.classList.add("active");
      if (goldGlowRef.current) goldGlowRef.current.classList.add("active");
    };

    const handleMouseLeave = () => {
      if (glowRef.current) glowRef.current.classList.remove("active");
      if (goldGlowRef.current) goldGlowRef.current.classList.remove("active");
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentX - 200}px, ${currentY - 200}px)`;
      }
      if (goldGlowRef.current) {
        goldGlowRef.current.style.transform = `translate(${currentX - 80}px, ${currentY - 80}px)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="cursor-glow" />
      <div ref={goldGlowRef} className="cursor-glow-gold" />
    </>
  );
}