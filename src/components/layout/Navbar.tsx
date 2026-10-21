"use client";

import React, { useEffect, useState } from "react";
import { Code2, Menu, Sparkles, X } from "lucide-react";
import { ENGINEER_PROFILE, NAV_ITEMS } from "@/data/portfolioData";
import { ArrowButton } from "@/components/ui/ArrowButton";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      const sectionIds = ["services", "projects", "experience", "stack", "faq", "contact"];
      const scrollPosition = window.scrollY + 220;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${id}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 backdrop-blur-md bg-white/75 border-b border-slate-200/60 ${
        scrolled
          ? "shadow-[0_10px_30px_-10px_rgba(10,37,64,0.08)] py-3"
          : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Author Logo & Brand */}
        <a
          href="#top"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#635bff] rounded-lg"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-[#0a2540] text-white shadow-md overflow-hidden transition-transform duration-200 group-hover:scale-105">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-tr from-[#635bff] via-[#0073e6] to-[#00d4ff] opacity-85 group-hover:opacity-100 transition-opacity"
            />
            <Code2 className="relative z-10 w-5 h-5 text-white stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-[#0a2540]">
                {ENGINEER_PROFILE.brandTitle}
              </span>
            
            </div>
            <span className="text-[11px] font-medium text-[#425466] hidden sm:block leading-none">
              Systems &amp; Frontend Architecture
            </span>
          </div>
        </a>

        {/* Center: Smooth Scroll Navigation Links */}
        <nav
          aria-label="Asosiy navigatsiya"
          className="hidden md:flex items-center gap-1 rounded-full bg-slate-100/80 p-1 border border-slate-200/70"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? "bg-white text-[#635bff] shadow-sm"
                    : "text-[#425466] hover:text-[#0a2540] hover:bg-white/60"
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold rounded-full bg-[#635bff]/10 text-[#635bff]">
                    {item.badge}
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: CTA Button ("Bog'lanish →") & Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <ArrowButton
            href="#contact"
            variant="dark"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Bog&apos;lanish
          </ArrowButton>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Menyuni ochish yoki yopish"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-[#0a2540] hover:bg-slate-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#635bff]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200/70 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-5 shadow-xl">
          <div className="flex flex-col gap-1.5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-[#0a2540] hover:bg-[#f6f9fc]"
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="px-2 py-0.5 text-[11px] font-mono rounded-full bg-[#635bff]/10 text-[#635bff]">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
            <div className="pt-2 mt-1 border-t border-slate-100 flex items-center justify-between gap-3">
              <ArrowButton
                href="#contact"
                variant="dark"
                size="sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Bog&apos;lanish
              </ArrowButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

