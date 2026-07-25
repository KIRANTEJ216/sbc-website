"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

export default function ConnectingDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Particle[] = [];
    const particleCount = 50;
    const connectionDist = 140;

    let mouseX = -999;
    let mouseY = -999;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    let resizeTimer: ReturnType<typeof setTimeout>;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 100);
    };

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.06,
          vy: (Math.random() - 0.5) * 0.06,
          r: Math.random() * 1.5 + 1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.save();
        ctx.shadowColor = "rgba(59, 130, 246, 0.5)";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59, 130, 246, 0.35)";
        ctx.fill();
        ctx.restore();

        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < connectionDist * 1.5) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(59, 130, 246, ${0.04 * (1 - dist / (connectionDist * 1.5))})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.06 * (1 - dist / connectionDist)})`;
            ctx.lineWidth = 0.3;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    init();
    resize();
    draw();

    const tween = gsap.to(
      { x: mouseX, y: mouseY },
      {
        x: mouseX,
        y: mouseY,
        duration: 0.01,
        ease: "none",
        paused: true,
      }
    );

    const onMouse = (e: MouseEvent) => {
      gsap.to(tween.vars, {
        x: e.clientX,
        y: e.clientY,
        duration: 1.2,
        ease: "power2.out",
        overwrite: "auto",
        onUpdate: () => {
          mouseX = (tween.vars as { x: number }).x;
          mouseY = (tween.vars as { y: number }).y;
        },
      });
    };

    window.addEventListener("resize", debouncedResize);
    window.addEventListener("mousemove", onMouse);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", debouncedResize);
      window.removeEventListener("mousemove", onMouse);
      tween.kill();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}
