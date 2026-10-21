"use client";

import React from "react";

export type ArrowButtonVariant = "primary" | "dark" | "glass" | "cyan" | "outline";
export type ArrowButtonSize = "sm" | "md" | "lg";

export interface ArrowButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  variant?: ArrowButtonVariant;
  size?: ArrowButtonSize;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
  external?: boolean;
}

const variantStyles: Record<ArrowButtonVariant, string> = {
  primary:
    "bg-[#635bff] text-white hover:bg-[#5249f5] shadow-[0_10px_25px_-5px_rgba(99,91,255,0.45)] border border-transparent",
  dark:
    "bg-[#0a2540] text-white hover:bg-[#133455] shadow-[0_10px_24px_-6px_rgba(10,37,64,0.35)] border border-white/10",
  glass:
    "bg-white/80 backdrop-blur-md text-[#0a2540] hover:bg-white border border-slate-200/90 shadow-sm",
  cyan:
    "bg-[#00d4ff] text-[#0a2540] hover:bg-[#33ddff] font-bold shadow-[0_10px_25px_-5px_rgba(0,212,255,0.35)] border border-transparent",
  outline:
    "bg-transparent text-[#0a2540] hover:bg-slate-900/[0.04] border border-slate-300/80",
};

const sizeStyles: Record<ArrowButtonSize, string> = {
  sm: "px-4 py-2 text-xs font-semibold gap-1.5",
  md: "px-5 py-2.5 text-sm font-semibold gap-2",
  lg: "px-6 py-3.5 text-sm sm:text-base font-semibold gap-2.5",
};

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  ariaLabel,
  external = false,
}) => {
  const baseClasses = `group relative inline-flex items-center justify-center rounded-full tracking-tight transition-all duration-200 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#635bff] focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none select-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const innerContent = (
    <>
      <span>{children}</span>
      {/* Stripe iconic morphing chevron -> arrow that shifts 4px right on hover */}
      <span
        aria-hidden="true"
        className="relative inline-flex items-center justify-center w-3.5 h-3.5 transition-transform duration-200 ease-out group-hover:translate-x-[4px]"
      >
        <svg
          className="w-3.5 h-3.5 overflow-visible"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 5H7"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            className="opacity-0 scale-x-0 origin-left transition-all duration-200 ease-out group-hover:opacity-100 group-hover:scale-x-100"
          />
          <path
            d="M2.5 1.5L6.5 5L2.5 8.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-200 ease-out"
          />
        </svg>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={baseClasses}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={baseClasses}
    >
      {innerContent}
    </button>
  );
};

export default ArrowButton;

