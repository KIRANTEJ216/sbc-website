"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  isHub: boolean;
  pulsePhase: number;
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
    const hubCount = 10;
    const satelliteCount = 90;
    const connectionDist = 160;
    // Hub-to-hub has longer reach
    const hubConnectionDist = 280;

    let mouseX = -999;
    let mouseY = -999;
    let time = 0;

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
      const w = canvas.width;
      const h = canvas.height;

      // Create hub nodes — distributed with some clustering
      for (let i = 0; i < hubCount; i++) {
        // Spread hubs in a loose grid with randomness for natural feel
        const cols = 4;
        const cellW = w / (cols + 1);
        const cellH = h / Math.ceil(hubCount / cols);
        const col = i % cols;
        const row = Math.floor(i / cols);
        particles.push({
          x: cellW * (col + 1) + (Math.random() - 0.5) * cellW * 0.6,
          y: cellH * (row + 0.5) + (Math.random() - 0.5) * cellH * 0.5,
          vx: (Math.random() - 0.5) * 0.04,
          vy: (Math.random() - 0.5) * 0.04,
          r: 2.5 + Math.random() * 1.5,
          isHub: true,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }

      // Create satellite particles
      for (let i = 0; i < satelliteCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.08,
          r: Math.random() * 1.2 + 0.6,
          isHub: false,
          pulsePhase: 0,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.008;

      // First pass: draw all connection lines (behind dots)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Boundary bounce with slight inward push
        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        if (p.x > canvas.width) { p.x = canvas.width; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        if (p.y > canvas.height) { p.y = canvas.height; p.vy *= -1; }

        // Mouse attraction (gentle pull toward cursor)
        if (mouseX > -999) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200 && dist > 5) {
            const force = 0.00015 * (1 - dist / 200);
            p.vx += dx * force;
            p.vy += dy * force;
          }
        }

        // Connections between particles
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const bothHubs = p.isHub && q.isHub;
          const maxDist = bothHubs ? hubConnectionDist : connectionDist;

          if (dist < maxDist) {
            const alpha = 1 - dist / maxDist;
            let lineWidth = 0.4;
            let opacity = 0.12;

            if (bothHubs) {
              // Hub-to-hub: thick, visible, pulsing
              lineWidth = 1.2 + 0.4 * Math.sin(time * 0.5 + p.pulsePhase + q.pulsePhase);
              opacity = 0.2 + 0.08 * Math.sin(time * 0.8 + p.pulsePhase);
            } else if (p.isHub || q.isHub) {
              // Hub-to-satellite: medium
              lineWidth = 0.7;
              opacity = 0.15 * alpha;
            } else {
              // Satellite-to-satellite: thin
              lineWidth = 0.3;
              opacity = 0.07 * alpha;
            }

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(40, 72, 122, ${opacity})`;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
          }
        }

        // Mouse connection lines
        if (mouseX > -999) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxMouseDist = p.isHub ? hubConnectionDist * 1.2 : connectionDist * 1.5;
          if (dist < maxMouseDist) {
            const alpha = 1 - dist / maxMouseDist;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.strokeStyle = `rgba(40, 72, 122, ${0.06 * alpha})`;
            ctx.lineWidth = p.isHub ? 1.0 : 0.5;
            ctx.stroke();
          }
        }
      }

      // Second pass: draw all dots (on top of lines)
      for (const p of particles) {
        if (p.isHub) {
          // Hub nodes: pulsing glow + solid core
          const pulse = 0.6 + 0.4 * Math.sin(time + p.pulsePhase);
          const glowR = p.r + 6 + 3 * pulse;

          // Outer glow
          ctx.save();
          ctx.shadowColor = "rgba(40, 72, 122, 0.3)";
          ctx.shadowBlur = 20 * pulse;
          ctx.beginPath();
          ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(40, 72, 122, ${0.06 * pulse})`;
          ctx.fill();
          ctx.restore();

          // Inner glow ring
          ctx.save();
          ctx.shadowColor = "rgba(40, 72, 122, 0.4)";
          ctx.shadowBlur = 15;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(40, 72, 122, ${0.3 + 0.2 * pulse})`;
          ctx.fill();
          ctx.restore();

          // Bright core
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(40, 72, 122, 0.6)";
          ctx.fill();
        } else {
          // Satellite nodes: simple dots
          ctx.save();
          ctx.shadowColor = "rgba(40, 72, 122, 0.25)";
          ctx.shadowBlur = 6;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(40, 72, 122, 0.3)";
          ctx.fill();
          ctx.restore();
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
