"use client";

import React, { useRef, useState } from "react";

export interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
  as?: "div" | "article" | "section";
}

/**
 * Stripe Bento Grid Spotlight Card
 * Uses direct CSS variable updates + opacity transition for 60fps GPU-accelerated
 * radial spotlight border and surface illumination around the cursor.
 */
export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(99, 91, 255, 0.14)",
  borderColor = "rgba(99, 91, 255, 0.65)",
  as: Component = "article",
}) => {
  const cardRef = useRef<HTMLElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--spotlight-x", `${x}px`);
    el.style.setProperty("--spotlight-y", `${y}px`);
  };

  return (
    <Component
      ref={cardRef as React.RefObject<never>}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={
        {
          "--spotlight-x": "50%",
          "--spotlight-y": "50%",
          "--spotlight-color": spotlightColor,
          "--spotlight-border": borderColor,
        } as React.CSSProperties
      }
      className={`group relative rounded-2xl bg-white border border-slate-200/80 shadow-[0_30px_60px_-15px_rgba(50,50,93,0.16)] transition-transform duration-300 ease-out hover:-translate-y-0.5 overflow-hidden ${className}`}
    >
      {/* Radial Spotlight Border Highlight (1.5px mask around cursor) */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-20 rounded-2xl transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          padding: "1.5px",
          background:
            "radial-gradient(380px circle at var(--spotlight-x) var(--spotlight-y), var(--spotlight-border), rgba(0, 212, 255, 0.35) 45%, transparent 80%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Subtle Ambient Surface Spotlight */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(520px circle at var(--spotlight-x) var(--spotlight-y), var(--spotlight-color), transparent 70%)",
        }}
      />

      {/* Card Content */}
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </Component>
  );
};

export default SpotlightCard;

