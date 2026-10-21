import React from "react";
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Globe,
  Layers,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import {
  ENGINEER_PROFILE,
  NAV_ITEMS,
  SOCIAL_LINKS,
} from "@/data/portfolioData";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0a2540] text-white pt-20 pb-14 overflow-hidden border-t border-white/10">
      {/* Subtle Architectural 4-Column Guide Lines in Dark Mode */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4"
      >
        <div className="border-l border-white/[0.05] h-full" />
        <div className="border-l border-white/[0.05] h-full" />
        <div className="hidden md:block border-l border-white/[0.05] h-full" />
        <div className="hidden md:block border-l border-r border-white/[0.05] h-full" />
      </div>

      {/* Top Cyan / Purple Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[640px] h-44 bg-gradient-to-r from-[#635bff]/25 via-[#00d4ff]/20 to-[#635bff]/25 blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Column 1: Brand & System Status (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-[#635bff] to-[#00d4ff] text-white shadow-lg">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-tight text-white">
                  {ENGINEER_PROFILE.brandTitle}
                </span>
                <p className="text-xs font-mono text-slate-400">
                  {ENGINEER_PROFILE.role}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300/90 leading-relaxed max-w-sm">
              React, Next.js va TypeScript asosida yuqori yuklamali veb-ilovalar,
              multi-tenant CRM/ERP tizimlar, FSD arxitekturasi va biznes
              avtomatlashtirish platformalarini loyihalash.
            </p>

            {/* System Status Pill ("● All systems operational") */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/[0.06] border border-white/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-xs font-mono font-semibold text-emerald-300 tracking-tight">
                ● {ENGINEER_PROFILE.statusText}
              </span>
              <span className="text-[11px] font-mono text-slate-400 pl-1 border-l border-white/10">
                99.98% SLA
              </span>
            </div>

            <div className="flex flex-col gap-1.5 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#00d4ff]" />
                <span>{ENGINEER_PROFILE.location}</span>
              </div>
              <a
                href={`tel:${ENGINEER_PROFILE.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 text-slate-200 hover:text-[#00d4ff] transition-colors font-semibold"
              >
                <span>📞 {ENGINEER_PROFILE.phone}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#00d4ff] font-semibold">
              Bo&apos;limlar
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#top"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Bosh sahifa (Hero)
                </a>
              </li>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Aloqa &amp; Brif
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Architecture Capabilities (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#00d4ff] font-semibold">
              Muhandislik Yo&apos;nalishlari
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#635bff] shrink-0" />
                <span>Next.js 15/16 RSC &amp; FSD Architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#00d4ff] shrink-0" />
                <span>TanStack Query &amp; Typed Cache Registry</span>
              </li>
              <li className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#635bff] shrink-0" />
                <span>CRM/ERP UI &amp; Excel (.xlsx) Export</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00d4ff] shrink-0" />
                <span>Multi-Tenant RBAC &amp; httpOnly Security</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social & Direct Profiles (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#00d4ff] font-semibold">
              Tarmoqlar va Aloqa
            </h3>
            <div className="space-y-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center justify-between p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-all"
                >
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-[#00d4ff] transition-colors">
                      {link.name}
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      {link.handle}
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal & Architecture Telemetry Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div>
            © {new Date().getFullYear()} {ENGINEER_PROFILE.name}. Stripe Design
            System asosida ishlab chiqilgan.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-slate-300">TypeScript 100% Strict</span>
            <span>·</span>
            <span className="text-slate-300">60fps GPU Transitions</span>
            <span>·</span>
            <span className="text-[#00d4ff]">Lighthouse 98+</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

