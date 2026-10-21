"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Database,
  FileSpreadsheet,
  GitBranch,
  Globe,
  Layers,
  Lock,
  Radio,
  Server,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { SERVICES_BENTO_DATA, ServiceBentoItem } from "@/data/portfolioData";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const MicroFrontendVisual: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<"host" | "rsc" | "mfe">("rsc");

  const nodeMetrics = {
    host: {
      name: "AppRouterShell.tsx",
      mode: "Edge SSR Host",
      renderTime: "8.2ms",
      jsPayload: "0 KB (Server)",
    },
    rsc: {
      name: "MetricsStreamRSC.tsx",
      mode: "React Server Component",
      renderTime: "11.4ms",
      jsPayload: "3.8 KB gzip",
    },
    mfe: {
      name: "FederatedChartZone.tsx",
      mode: "Isolated Micro-Frontend",
      renderTime: "14.1ms",
      jsPayload: "Lazy Hydrated",
    },
  };

  const active = nodeMetrics[selectedNode];

  return (
    <div className="mt-5 rounded-xl bg-[#f6f9fc] border border-slate-200/80 p-4 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#0a2540]">
          <Layers className="w-4 h-4 text-[#635bff]" />
          <span>Komponentlar Daraxti va Render Tezligi</span>
        </div>
        <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-[#635bff]/10 text-[#635bff] font-semibold">
          {active.mode} · {active.renderTime}
        </span>
      </div>

      {/* Interactive Component Tree + Render Speed Mini-Chart */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
        {/* Interactive Tree Nodes (7 cols) */}
        <div className="sm:col-span-7 space-y-2">
          <button
            type="button"
            onClick={() => setSelectedNode("host")}
            className={`w-full text-left px-3 py-2 rounded-lg border text-xs font-mono transition-all flex items-center justify-between ${
              selectedNode === "host"
                ? "bg-white border-[#635bff] shadow-sm text-[#0a2540]"
                : "bg-white/60 border-slate-200/80 text-[#425466] hover:bg-white"
            }`}
          >
            <span className="font-semibold">&lt;RootLayoutShell /&gt;</span>
            <span className="px-1.5 py-0.5 rounded bg-slate-100 text-[10px]">
              Host · 8.2ms
            </span>
          </button>

          <div className="pl-5 border-l-2 border-dashed border-[#635bff]/35 space-y-2">
            <button
              type="button"
              onClick={() => setSelectedNode("rsc")}
              className={`w-full text-left px-3 py-2 rounded-lg border text-xs font-mono transition-all flex items-center justify-between ${
                selectedNode === "rsc"
                  ? "bg-white border-[#635bff] shadow-sm text-[#0a2540]"
                  : "bg-white/60 border-slate-200/80 text-[#425466] hover:bg-white"
              }`}
            >
              <span className="font-semibold text-[#635bff]">
                ├─ &lt;ServerDataStream /&gt;
              </span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-700 text-[10px] font-bold">
                RSC · 0KB JS
              </span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedNode("mfe")}
              className={`w-full text-left px-3 py-2 rounded-lg border text-xs font-mono transition-all flex items-center justify-between ${
                selectedNode === "mfe"
                  ? "bg-white border-[#635bff] shadow-sm text-[#0a2540]"
                  : "bg-white/60 border-slate-200/80 text-[#425466] hover:bg-white"
              }`}
            >
              <span className="font-semibold text-[#0073e6]">
                └─ &lt;MicroFrontendZone /&gt;
              </span>
              <span className="px-1.5 py-0.5 rounded bg-[#00d4ff]/15 text-[#0a2540] text-[10px] font-bold">
                Isolated · 60fps
              </span>
            </button>
          </div>
        </div>

        {/* Mini Render Speed Comparison Chart (5 cols) */}
        <div className="sm:col-span-5 bg-white rounded-xl p-3.5 border border-slate-200/70 space-y-2.5">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-[#425466]">Render Benchmark</span>
            <span className="font-bold text-emerald-600">3.4x Tezroq</span>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-[11px] font-mono">
              <span className="font-semibold text-[#0a2540]">Next.js RSC + MFE</span>
              <span className="text-[#635bff] font-bold">{active.renderTime}</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full w-[28%] rounded-full bg-gradient-to-r from-[#635bff] to-[#00d4ff]" />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-[11px] font-mono text-slate-400">
              <span>Odatiy CSR Monolit</span>
              <span>48.0ms</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full w-[92%] rounded-full bg-slate-300" />
            </div>
          </div>

          <div className="pt-1 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-[#425466]">
            <span>Payload: {active.jsPayload}</span>
            <span className="text-[#0a2540] font-semibold">Strict TS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const RealtimeVisual: React.FC = () => {
  const [queryMode, setQueryMode] = useState<"cache" | "mutate">("cache");

  return (
    <div className="mt-5 rounded-xl bg-[#0a2540] text-white p-4 space-y-4 border border-slate-800">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d4ff] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00d4ff]" />
          </span>
          <span className="text-xs font-mono font-semibold text-[#00d4ff]">
            {queryMode === "cache" ? "GET /api/v1/crm" : "POST /api/v1/sync"}
          </span>
        </div>
        <div className="inline-flex rounded-lg bg-white/10 p-0.5 text-[10px] font-mono">
          <button
            type="button"
            onClick={() => setQueryMode("cache")}
            className={`px-2 py-0.5 rounded-md transition-colors ${
              queryMode === "cache" ? "bg-[#635bff] text-white" : "text-slate-300"
            }`}
          >
            Query
          </button>
          <button
            type="button"
            onClick={() => setQueryMode("mutate")}
            className={`px-2 py-0.5 rounded-md transition-colors ${
              queryMode === "mutate"
                ? "bg-[#635bff] text-white"
                : "text-slate-300"
            }`}
          >
            Mutate
          </button>
        </div>
      </div>

      {/* Animated API -> TanStack Cache -> UI Store Pipeline */}
      <div className="relative py-3 px-3 rounded-lg bg-[#06182c] border border-white/10 flex items-center justify-between overflow-hidden">
        <div className="relative z-10 flex flex-col items-center gap-1">
          <div className="w-7 h-7 rounded-lg bg-[#635bff]/20 border border-[#635bff] flex items-center justify-center">
            <Database className="w-3.5 h-3.5 text-[#00d4ff]" />
          </div>
          <span className="text-[10px] font-mono text-slate-300">REST API</span>
        </div>

        {/* Flowing Typed JSON Payload */}
        <div className="flex-1 mx-3 relative h-6 flex items-center">
          <div className="w-full h-[1.5px] bg-gradient-to-r from-[#635bff] via-[#00d4ff] to-emerald-400 opacity-40" />
          <div className="absolute inset-x-0 flex items-center justify-between">
            <span className="px-1.5 py-0.5 rounded bg-[#00d4ff] text-[#0a2540] text-[9px] font-mono font-bold animate-packet-flow">
              {queryMode === "cache" ? "200 OK · Cached" : "Optimistic UI"}
            </span>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-1">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400 flex items-center justify-center">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <span className="text-[10px] font-mono text-slate-300">Zustand UI</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
        <span>TanStack v5</span>
        <span className="text-emerald-400">Type-Safe Schema</span>
      </div>
    </div>
  );
};

const AutomationExportVisual: React.FC = () => {
  const [exported, setExported] = useState(false);

  return (
    <div className="mt-5 rounded-xl bg-[#f6f9fc] border border-slate-200/80 p-4 space-y-3">
      {/* Mini Data Grid Rows */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-[10px] font-mono text-[#425466] px-2">
          <span>ID · MARSHRUT</span>
          <span>STATUS</span>
          <span>EXSPORT</span>
        </div>
        {[
          { id: "#TR-804", route: "Toshkent → Samarqand", state: "Tasdiqlandi" },
          { id: "#TR-805", route: "Buxoro → Navoiy", state: "Tasdiqlandi" },
        ].map((row) => (
          <div
            key={row.id}
            className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-white border border-slate-200/70 text-[11px] font-mono"
          >
            <span className="font-semibold text-[#0a2540]">{row.id}</span>
            <span className="text-emerald-700 bg-emerald-500/10 px-1.5 py-0.5 rounded text-[10px]">
              {row.state}
            </span>
            <ArrowRight className="w-3 h-3 text-[#635bff]" />
          </div>
        ))}
      </div>

      {/* Animated Transition to .XLSX File */}
      <button
        type="button"
        onClick={() => setExported((prev) => !prev)}
        className="w-full group/xlsx flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-[#0a2540] to-[#14385c] text-white shadow-sm hover:opacity-95 transition-all"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
            <FileSpreadsheet className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="text-xs font-mono font-bold text-white">
              Hisobot_Dispetcher.xlsx
            </div>
            <div className="text-[10px] font-mono text-emerald-300">
              {exported
                ? "✓ 50,000 qator tayyor (1.2s)"
                : "Bosib .XLSX generatsiyani sinang"}
            </div>
          </div>
        </div>
        <span className="px-2 py-1 rounded text-[10px] font-mono font-semibold bg-white/10 text-[#00d4ff]">
          .XLSX
        </span>
      </button>
    </div>
  );
};

const InfrastructureVisual: React.FC = () => {
  const [activeRole, setActiveRole] = useState<"admin" | "manager">("admin");

  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-12 gap-4 items-stretch">
      {/* Interactive CRM / ERP Analytics Console (7 cols) */}
      <div className="sm:col-span-7 rounded-xl bg-[#0a2540] text-white p-4 font-mono text-xs space-y-3 border border-slate-800 flex flex-col justify-between">
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-1.5 text-[11px] text-[#00d4ff]">
            <Activity className="w-3.5 h-3.5" />
            <span>CRM · Executive Dashboard</span>
          </div>
          <div className="inline-flex rounded-md bg-white/10 p-0.5 text-[10px]">
            <button
              type="button"
              onClick={() => setActiveRole("admin")}
              className={`px-2 py-0.5 rounded transition-colors ${
                activeRole === "admin"
                  ? "bg-[#635bff] text-white font-semibold"
                  : "text-slate-300"
              }`}
            >
              SuperAdmin
            </button>
            <button
              type="button"
              onClick={() => setActiveRole("manager")}
              className={`px-2 py-0.5 rounded transition-colors ${
                activeRole === "manager"
                  ? "bg-[#635bff] text-white font-semibold"
                  : "text-slate-300"
              }`}
            >
              Manager
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-2.5 rounded-lg bg-[#06182c] border border-white/10">
            <div className="text-[10px] text-slate-400">Faol Mijozlar</div>
            <div className="text-sm font-extrabold text-white mt-0.5">
              {activeRole === "admin" ? "14,280 ta" : "3,420 ta"}
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-[#06182c] border border-white/10">
            <div className="text-[10px] text-slate-400">Oylik O&apos;sish</div>
            <div className="text-sm font-extrabold text-emerald-400 mt-0.5">
              {activeRole === "admin" ? "+28.4% ↑" : "+19.2% ↑"}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-300 pt-1">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>RBAC ruxsatlar tizimi faol</span>
          </span>
          <span className="text-[#00d4ff]">Charts 60fps</span>
        </div>
      </div>

      {/* Form Validation & UI Architecture Card (5 cols) */}
      <div className="sm:col-span-5 rounded-xl bg-[#f6f9fc] border border-slate-200/80 p-4 flex flex-col justify-between space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#635bff]/10 border border-[#635bff]/25 flex items-center justify-center text-[#635bff]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0a2540]">
                Enterprise UI Kit
              </div>
              <div className="text-[10px] font-mono text-emerald-700">
                Zod + React Hook Form
              </div>
            </div>
          </div>
          <Lock className="w-4 h-4 text-[#635bff]" />
        </div>

        <div className="space-y-1.5 text-[11px] font-mono">
          <div className="flex items-center justify-between px-2.5 py-1 rounded bg-white border border-slate-200/70">
            <span className="text-[#635bff] font-bold">RBAC</span>
            <span className="text-[#0a2540]">Ko&apos;p rolli kirish</span>
            <span className="text-emerald-600">ACTIVE</span>
          </div>
          <div className="flex items-center justify-between px-2.5 py-1 rounded bg-white border border-slate-200/70">
            <span className="text-[#0073e6] font-bold">FORMS</span>
            <span className="text-[#0a2540]">Schema Validated</span>
            <span className="text-emerald-600">100%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const renderBentoVisual = (item: ServiceBentoItem) => {
  switch (item.visualType) {
    case "microfrontend":
      return <MicroFrontendVisual />;
    case "realtime":
      return <RealtimeVisual />;
    case "automation":
      return <AutomationExportVisual />;
    case "infrastructure":
      return <InfrastructureVisual />;
  }
};

export const ServicesBento: React.FC = () => {
  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 bg-[#f6f9fc] overflow-hidden"
    >
      {/* Stripe 4-Column Vertical Guide Lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4"
      >
        <div className="border-l border-[rgba(66,84,102,0.08)] h-full" />
        <div className="border-l border-[rgba(66,84,102,0.08)] h-full" />
        <div className="hidden md:block border-l border-[rgba(66,84,102,0.08)] h-full" />
        <div className="hidden md:block border-l border-r border-[rgba(66,84,102,0.08)] h-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#635bff]/10 text-[#635bff] text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Texnik Xizmatlar · Bento Arxitektura</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0a2540] leading-[1.12]">
            Murakkab biznes vazifalar uchun{" "}
            <span className="text-[#635bff]">to&apos;liq siklli</span> muhandislik
            yechimlari.
          </h2>
          <p className="text-base sm:text-lg text-[#425466] leading-relaxed">
            Har bir modul yuqori yuklamaga chidamli arxitektura, past kechikishli
            ma&apos;lumotlar oqimi va xavfsiz server infratuzilmasi asosida quriladi.
          </p>
        </div>

        {/* 4 Asymmetric Cards Bento Grid (grid-cols-1 md:grid-cols-3 gap-6) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES_BENTO_DATA.map((service, index) => {
            const spanClass =
              service.colSpan === 2 ? "md:col-span-2" : "md:col-span-1";

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={spanClass}
              >
                <SpotlightCard className="h-full p-6 sm:p-7 justify-between">
                  <div className="space-y-3">
                    {/* Top Row: Number Badge & Key Metric Pill */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-[#0a2540] text-xs font-mono font-bold">
                        <span className="text-[#635bff]">{service.number}</span>
                        <span>/ BENTO</span>
                      </span>

                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#635bff]/[0.08] border border-[#635bff]/20 text-xs font-mono">
                        <Zap className="w-3 h-3 text-[#635bff]" />
                        <span className="text-[#425466]">
                          {service.keyMetric.label}:
                        </span>
                        <span className="font-bold text-[#0a2540]">
                          {service.keyMetric.value}
                        </span>
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <p className="text-xs font-mono font-semibold text-[#635bff] mb-1">
                        {service.subtitle}
                      </p>
                      <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0a2540]">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#425466] leading-relaxed">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-slate-100 text-[#425466] border border-slate-200/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Code-Drawn Visual Showcase */}
                  {renderBentoVisual(service)}
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesBento;

