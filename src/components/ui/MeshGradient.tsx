"use client";

import React, { useEffect, useRef } from "react";

export interface MeshGradientProps {
  className?: string;
}

interface Orb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: [number, number, number];
  phase: number;
}

/**
 * Stripe-inspired animated Mesh Gradient canvas + CSS aurora layers.
 * Implements `efficient-background-processing` via `contentvisibilityautostatechange`
 * and `IntersectionObserver` fallback to pause canvas rendering when scrolled off-screen.
 */
export const MeshGradient: React.FC<MeshGradientProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number | null = null;
    let isRunning = true;
    let width = 320;
    let height = 200;

    // Stripe signature mesh palette:
    // #635bff (Purple), #00d4ff (Cyan), #ff6b8b (Coral Pink), #0073e6 (Blue), #ffcb57 (Warm Gold accent)
    const orbs: Orb[] = [
      { x: 0.2, y: 0.25, vx: 0.00045, vy: 0.00035, radius: 0.62, color: [99, 91, 255], phase: 0 },
      { x: 0.78, y: 0.22, vx: -0.0004, vy: 0.0005, radius: 0.58, color: [0, 212, 255], phase: 1.8 },
      { x: 0.52, y: 0.45, vx: 0.00035, vy: -0.0004, radius: 0.55, color: [255, 107, 139], phase: 3.4 },
      { x: 0.85, y: 0.65, vx: -0.0005, vy: -0.0003, radius: 0.52, color: [0, 115, 230], phase: 4.7 },
      { x: 0.15, y: 0.68, vx: 0.0003, vy: -0.00045, radius: 0.48, color: [130, 95, 255], phase: 2.5 },
    ];

    const handleResize = () => {
      // Low-resolution buffer for ultra-fast 60fps smooth gradient blending
      width = 360;
      height = 220;
      canvas.width = width;
      canvas.height = height;
    };

    handleResize();

    let tick = 0;
    const render = () => {
      if (!isRunning) return;
      tick += 0.012;

      // Base background fill (#f6f9fc)
      ctx.fillStyle = "#f6f9fc";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < orbs.length; i++) {
        const orb = orbs[i];
        orb.x += orb.vx + Math.sin(tick + orb.phase) * 0.0009;
        orb.y += orb.vy + Math.cos(tick * 0.85 + orb.phase) * 0.0009;

        if (orb.x < 0.05 || orb.x > 0.95) orb.vx *= -1;
        if (orb.y < 0.05 || orb.y > 0.95) orb.vy *= -1;

        const cx = orb.x * width;
        const cy = orb.y * height;
        const r = orb.radius * Math.max(width, height);

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        const [cr, cg, cb] = orb.color;
        grad.addColorStop(0, `rgba(${cr}, ${cg}, ${cb}, 0.82)`);
        grad.addColorStop(0.5, `rgba(${cr}, ${cg}, ${cb}, 0.36)`);
        grad.addColorStop(1, `rgba(${cr}, ${cg}, ${cb}, 0)`);

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }

      animationFrameId = window.requestAnimationFrame(render);
    };

    const startSimulation = () => {
      if (!isRunning) {
        isRunning = true;
        animationFrameId = window.requestAnimationFrame(render);
      }
    };

    const stopSimulation = () => {
      isRunning = false;
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    // Start initial loop
    animationFrameId = window.requestAnimationFrame(render);

    // Direct listener on container for contentvisibilityautostatechange (does not bubble reliably)
    const handleVisibilityStateChange = (event: Event) => {
      const cvEvent = event as Event & { skipped?: boolean };
      if (cvEvent.skipped) {
        stopSimulation();
      } else {
        startSimulation();
      }
    };

    container.addEventListener(
      "contentvisibilityautostatechange",
      handleVisibilityStateChange
    );

    // IntersectionObserver to pause off-screen canvas animation across all browsers
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startSimulation();
          } else {
            stopSimulation();
          }
        });
      },
      { rootMargin: "200px" }
    );
    observer.observe(container);

    return () => {
      stopSimulation();
      container.removeEventListener(
        "contentvisibilityautostatechange",
        handleVisibilityStateChange
      );
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 -top-36 h-[640px] sm:h-[690px] lg:h-[740px] -skew-y-6 origin-top-left overflow-hidden z-0 ${className}`}
    >
      {/* Interactive Canvas Mesh Layer */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover opacity-90 scale-105 filter saturate-125"
      />

      {/* CSS Keyframe Aurora Overlay for depth & Stripe diagonal ribbon sheen */}
      <div
        className="absolute inset-0 mix-blend-overlay opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(at 15% 20%, rgba(99, 91, 255, 0.85) 0px, transparent 50%), radial-gradient(at 80% 15%, rgba(0, 212, 255, 0.8) 0px, transparent 50%), radial-gradient(at 50% 60%, rgba(255, 107, 139, 0.75) 0px, transparent 55%)",
        }}
      />

      {/* Architectural Diagonal Highlight Bands along the bottom edge */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-r from-[#635bff]/30 via-[#00d4ff]/40 to-[#ff6b8b]/30 backdrop-blur-[2px]" />
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#635bff] via-[#00d4ff] to-[#ff6b8b] opacity-80" />
    </div>
  );
};

export default MeshGradient;

