"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Check,
  Copy,
  Cpu,
  Layers,
  Radio,
  Server,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react";
import {
  ENGINEER_PROFILE,
  HERO_CODE_SNIPPETS,
  HERO_LIVE_METRICS,
} from "@/data/portfolioData";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { ArrowButton } from "@/components/ui/ArrowButton";

const tokenColorMap: Record<string, string> = {
  keyword: "text-[#ff7b9c] font-semibold",
  type: "text-[#00d4ff]",
  string: "text-[#a5f3fc]",
  function: "text-[#c4b5fd]",
  comment: "text-slate-400 italic",
  operator: "text-[#94a3b8]",
  number: "text-[#ffcb57]",
  plain: "text-slate-100",
};

export const Hero: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>(
    HERO_CODE_SNIPPETS[0].id
  );
  const [copied, setCopied] = useState(false);
  const [liveLatency, setLiveLatency] = useState<number>(12);
  const [sparklinePoints, setSparklinePoints] = useState<number[]>([
    13, 12, 11, 12, 14, 12, 11, 12, 12, 11, 13, 12,
  ]);

  const activeSnippet =
    HERO_CODE_SNIPPETS.find((s) => s.id === activeTabId) ||
    HERO_CODE_SNIPPETS[0];

  useEffect(() => {
    const interval = window.setInterval(() => {
      const nextPing = 11 + Math.floor(Math.random() * 3); // 11ms - 13ms
      setLiveLatency(nextPing);
      setSparklinePoints((prev) => [...prev.slice(1), nextPing]);
    }, 2200);
    return () => window.clearInterval(interval);
  }, []);

  const handleCopyCode = () => {
    const rawCode = activeSnippet.lines
      .map((line) => line.tokens.map((t) => t.text).join(""))
      .join("\n");
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(rawCode).catch(() => {});
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section
      id="top"
      className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 lg:pb-28 overflow-hidden bg-[#f6f9fc]"
    >
      {/* Animated Diagonal Mesh Gradient Background (-6deg slant) */}
      <MeshGradient />

      {/* Stripe 4-Column Vertical Architectural Guide Lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 z-[1]"
      >
        <div className="border-l border-[rgba(66,84,102,0.08)] h-full" />
        <div className="border-l border-[rgba(66,84,102,0.08)] h-full" />
        <div className="hidden md:block border-l border-[rgba(66,84,102,0.08)] h-full" />
        <div className="hidden md:block border-l border-r border-[rgba(66,84,102,0.08)] h-full" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN (7/12): Value Proposition & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Semi-transparent Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#635bff] ring-4 ring-[#635bff]/20" />
              <span className="text-xs sm:text-sm font-semibold tracking-tight text-[#0a2540]">
                {ENGINEER_PROFILE.badge}
              </span>
            </div>

            {/* Large Stripe-styled Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0a2540] leading-[1.08]">
                {ENGINEER_PROFILE.heroTitle}
                {ENGINEER_PROFILE.heroHighlight ? (
                  <>
                    {" "}
                    <span className="bg-gradient-to-r from-[#635bff] via-[#0073e6] to-[#0a2540] bg-clip-text text-transparent">
                      {ENGINEER_PROFILE.heroHighlight}
                    </span>
                  </>
                ) : null}
              </h1>
            </div>

            {/* Short Description */}
            <p className="text-base sm:text-lg lg:text-xl text-[#425466] leading-relaxed max-w-2xl font-normal">
              {ENGINEER_PROFILE.heroDescription}
            </p>

            {/* 2 Interactive CTA Buttons (Arrows shift 4px right on hover) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <ArrowButton href="#projects" variant="primary" size="lg">
                Loyihalarni ko&apos;rish
              </ArrowButton>
              <ArrowButton href="#stack" variant="glass" size="lg">
                Texnik Stek
              </ArrowButton>
            </div>

            {/* Architectural Proof Strip */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl">
              <div className="p-3 rounded-xl bg-white/75 backdrop-blur-sm border border-slate-200/70">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#425466]">
                  <Layers className="w-3.5 h-3.5 text-[#635bff]" />
                  <span>Frontend</span>
                </div>
                <div className="mt-1 text-sm font-bold text-[#0a2540]">
                  Next.js 15 &amp; RSC
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/75 backdrop-blur-sm border border-slate-200/70">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#425466]">
                  <Activity className="w-3.5 h-3.5 text-[#0073e6]" />
                  <span>API Integratsiya</span>
                </div>
                <div className="mt-1 text-sm font-bold text-[#0a2540]">
                  REST &amp; TanStack
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/75 backdrop-blur-sm border border-slate-200/70">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#425466]">
                  <Zap className="w-3.5 h-3.5 text-[#635bff]" />
                  <span>UI / UX</span>
                </div>
                <div className="mt-1 text-sm font-bold text-[#0a2540]">
                  Tailwind &amp; 60fps UI
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/75 backdrop-blur-sm border border-slate-200/70">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#425466]">
                  <Cpu className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Biznes Modullar</span>
                </div>
                <div className="mt-1 text-sm font-bold text-[#0a2540]">
                  CRM · ERP · Dashboards
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN (5/12): Layered Live Architecture Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Layer 1: Glassmorphism Live System Telemetry Card */}
            <div className="relative z-10 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/90 shadow-[0_30px_60px_-15px_rgba(50,50,93,0.25)] p-5 sm:p-6">
              {/* Card Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/70">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#635bff]/10 text-[#635bff]">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#425466] font-semibold">
                      Frontend Performance Audit
                    </div>
                    <div className="text-sm font-bold text-[#0a2540]">
                      Next.js 15 · Core Web Vitals
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  PASSED
                </span>
              </div>

              {/* 3 Live Frontend Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-4">
                {HERO_LIVE_METRICS.map((metric) => {
                  const displayVal =
                    metric.id === "ws-latency"
                      ? `${liveLatency}ms`
                      : metric.value;
                  return (
                    <div
                      key={metric.id}
                      className="p-3 rounded-xl bg-[#f6f9fc] border border-slate-200/70 flex flex-col justify-between"
                    >
                      <span className="text-[11px] font-medium text-[#425466]">
                        {metric.label}
                      </span>
                      <div className="mt-1.5 flex items-baseline justify-between gap-1">
                        <span className="text-base font-mono font-extrabold text-[#0a2540]">
                          {displayVal}
                        </span>
                        <span className="text-[10px] font-mono font-semibold text-[#635bff]">
                          {metric.delta}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Interactive Sparkline & Frame Rate Bar */}
              <div className="rounded-xl bg-slate-900/[0.03] border border-slate-200/60 px-3.5 py-2.5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-[#635bff]" />
                  <span className="text-xs font-mono text-[#425466]">
                    UI Render &amp; Animation:
                  </span>
                </div>
                <div
                  aria-label="Jonli UI render tezligi grafigi"
                  className="flex items-end gap-1 h-5"
                >
                  {sparklinePoints.map((pt, idx) => (
                    <span
                      key={idx}
                      style={{ height: `${Math.min(100, pt * 6)}%` }}
                      className={`w-1.5 rounded-sm transition-all duration-300 ${
                        idx === sparklinePoints.length - 1
                          ? "bg-[#635bff]"
                          : "bg-[#00d4ff]/60"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[11px] font-mono font-semibold text-[#0a2540]">
                  60 FPS
                </span>
              </div>
            </div>

            {/* Layer 2: Overlapping Dark Mode Code Terminal (#0a2540) */}
            <div className="relative z-20 -mt-5 sm:ml-5 rounded-2xl bg-[#0a2540] text-white border border-white/15 shadow-[0_30px_60px_-15px_rgba(10,37,64,0.55)] overflow-hidden">
              {/* Terminal Top Bar with Window Controls & Snippet Tabs */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#06182c] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 mr-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b8b]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffcb57]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  {HERO_CODE_SNIPPETS.map((tab) => {
                    const isCurrent = tab.id === activeSnippet.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTabId(tab.id)}
                        className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                          isCurrent
                            ? "bg-[#635bff] text-white font-semibold"
                            : "text-slate-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {tab.filename}
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={handleCopyCode}
                  aria-label="Kodni nusxalash"
                  className="inline-flex items-center gap-1 px-2 py-1 rounded text-[11px] font-mono text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Syntax-Highlighted Code Body (<pre tabIndex={0}><code> per html guidance) */}
              <pre
                tabIndex={0}
                className="m-0 p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#00d4ff]"
              >
                <code className="block">
                  {activeSnippet.lines.map((line) => (
                    <span
                      key={line.lineNumber}
                      className="flex items-start gap-3 hover:bg-white/[0.03] px-1 rounded"
                    >
                      <span className="w-5 text-right select-none text-slate-500 text-[11px]">
                        {line.lineNumber}
                      </span>
                      <span className="whitespace-pre">
                        {line.tokens.map((tok, i) => (
                          <span
                            key={i}
                            className={tokenColorMap[tok.type] || "text-slate-100"}
                          >
                            {tok.text}
                          </span>
                        ))}
                      </span>
                    </span>
                  ))}
                </code>
              </pre>

              {/* Terminal Runtime Status Footer */}
              <div className="px-4 py-2.5 bg-[#06182c]/90 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
                <div className="flex items-center gap-2 text-[#00d4ff]">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>{activeSnippet.runtimeOutput.status}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <span>{activeSnippet.runtimeOutput.latency}</span>
                  <span className="inline-flex items-center gap-1 text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {activeSnippet.runtimeOutput.region}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

