"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  CheckCircle2,
  Code2,
  Cpu,
  Globe,
  Layers,
  Server,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react";
import {
  CAREER_TIMELINE_DATA,
  ENGINEERING_METRICS_DATA,
  TECH_STACK_LAYERS,
} from "@/data/portfolioData";

export const CareerDark: React.FC = () => {
  const [activeLayerId, setActiveLayerId] = useState<string>(
    TECH_STACK_LAYERS[0].id
  );

  return (
    <section
      id="experience"
      className="deferred-section relative py-28 sm:py-36 lg:py-44 overflow-hidden bg-[#f6f9fc]"
    >
      {/* Diagonal Slanted Dark Background Wrapper (-skew-y-6) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-10 bottom-10 -skew-y-6 bg-[#0a2540] shadow-[0_30px_60px_-15px_rgba(10,37,64,0.45)] z-0 overflow-hidden"
      >
        {/* Top & Bottom Diagonal Accent Borders */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#635bff] via-[#00d4ff] to-transparent opacity-80" />
        <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00d4ff] to-[#635bff] opacity-80" />

        {/* Dot-Matrix Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0, 212, 255, 0.55) 1.25px, transparent 1.25px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Neon Cyan (#00d4ff) & Stripe Purple (#635bff) Ambient Glows */}
        <div className="absolute -top-24 right-1/4 w-[520px] h-[520px] rounded-full bg-[#00d4ff]/15 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[560px] h-[560px] rounded-full bg-[#635bff]/20 blur-[130px]" />
      </div>

      {/* Subtle 4-Column Vertical Architectural Guide Lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 z-[1]"
      >
        <div className="border-l border-white/[0.06] h-full" />
        <div className="border-l border-white/[0.06] h-full" />
        <div className="hidden md:block border-l border-white/[0.06] h-full" />
        <div className="hidden md:block border-l border-r border-white/[0.06] h-full" />
      </div>

      {/* Foreground Content (Unskewed, safe on mobile & desktop) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white py-8 sm:py-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-xs font-mono font-bold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5" />
            <span>Global Scale · Ish Faoliyati va Metrikalar</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
            Intensiv amaliyotdan{" "}
            <span className="bg-gradient-to-r from-[#00d4ff] to-[#635bff] bg-clip-text text-transparent">
              tizimli arxitekturagacha
            </span>{" "}
            evolyutsiya.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Har bir bosqich real prodakshen muammolarini yechish, yuqori
            yuklamali ma&apos;lumotlar oqimini boshqarish va mustaqil server
            infratuzilmasini topshirish tajribasi bilan shakllangan.
          </p>
        </div>

        {/* 4-Column Engineering Metrics Block (Stripe Global Scale Numbers) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {ENGINEERING_METRICS_DATA.map((metric, idx) => {
            const accentBarColor =
              metric.accent === "cyan"
                ? "bg-[#00d4ff]"
                : metric.accent === "purple"
                ? "bg-[#635bff]"
                : metric.accent === "blue"
                ? "bg-[#0073e6]"
                : "bg-emerald-400";

            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative rounded-2xl bg-[#06182c]/85 backdrop-blur-md border border-white/10 p-6 hover:border-[#00d4ff]/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`w-1 h-7 rounded-full ${accentBarColor}`} />
                  <span className="text-3xl sm:text-4xl font-mono font-extrabold tracking-tight text-white">
                    {metric.value}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-100 leading-snug mb-1.5">
                  {metric.label}
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  {metric.sublabel}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Career Timeline (Vertikal Xronologiya) */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white flex items-center gap-2.5">
              <Award className="w-6 h-6 text-[#00d4ff]" />
              <span>Career Timeline · Muhandislik Bosqichlari</span>
            </h3>
            <span className="hidden sm:inline-block text-xs font-mono text-slate-400">
              END-TO-END PRODUCTION DELIVERY
            </span>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-[#00d4ff]/30 space-y-10">
            {CAREER_TIMELINE_DATA.map((stage, idx) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Glowing Timeline Node */}
                <span
                  aria-hidden="true"
                  className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center w-4 h-4 rounded-full bg-[#0a2540] border-2 border-[#00d4ff] group-hover:scale-125 transition-transform shadow-[0_0_15px_rgba(0,212,255,0.75)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]" />
                </span>

                <div className="rounded-2xl bg-[#06182c]/80 backdrop-blur-md border border-white/10 group-hover:border-[#00d4ff]/40 p-6 sm:p-7 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#635bff]/25 border border-[#635bff]/50 text-[#00d4ff] text-xs font-mono font-bold">
                        {stage.stepNumber}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {stage.period}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#00d4ff] font-semibold">
                      {stage.stageLabel}
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2">
                    {stage.role}
                  </h4>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-5">
                    {stage.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
                    {stage.achievements.map((ach, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.07] text-xs text-slate-300 leading-relaxed flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#00d4ff] shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {stage.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-white/[0.06] text-slate-200 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dedicated Tech Stack Architecture Section (#stack) */}
        <div
          id="stack"
          className="pt-8 border-t border-white/10 scroll-mt-28 space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#00d4ff] font-semibold mb-2">
                <Terminal className="w-4 h-4" />
                <span>Texnik Stek va Arxitektura Qatlamlari</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Next.js RSC va FSD arxitekturasidan biznes UX hamda xavfsizlikkacha yagona zanjir.
              </h3>
            </div>

            {/* Interactive Layer Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 bg-[#06182c] p-1 rounded-xl border border-white/10">
              {TECH_STACK_LAYERS.map((layer) => (
                <button
                  key={layer.id}
                  type="button"
                  onClick={() => setActiveLayerId(layer.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                    activeLayerId === layer.id
                      ? "bg-[#635bff] text-white shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {layer.title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {TECH_STACK_LAYERS.map((layer) => {
              const isHighlighted = activeLayerId === layer.id;
              return (
                <div
                  key={layer.id}
                  onClick={() => setActiveLayerId(layer.id)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all border ${
                    isHighlighted
                      ? "bg-[#06182c] border-[#00d4ff]/60 shadow-[0_0_35px_-10px_rgba(0,212,255,0.3)]"
                      : "bg-[#06182c]/60 border-white/10 hover:border-white/25"
                  }`}
                >
                  <div className="text-[11px] font-mono font-bold text-[#00d4ff] mb-1">
                    {layer.layer}
                  </div>
                  <h4 className="text-lg font-extrabold text-white mb-2">
                    {layer.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {layer.description}
                  </p>

                  <div className="space-y-2.5">
                    {layer.items.map((item) => (
                      <div
                        key={item.name}
                        className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-between gap-2"
                      >
                        <div>
                          <div className="text-xs font-bold text-white">
                            {item.name}
                          </div>
                          <div className="text-[11px] font-mono text-slate-400">
                            {item.role}
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#00d4ff]/15 text-[#00d4ff] shrink-0">
                          {item.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerDark;

