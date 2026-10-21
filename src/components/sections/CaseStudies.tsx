"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  CheckCircle2,
  Code2,
  Cpu,
  CreditCard,
  GitCommit,
  Globe,
  Layers,
  Lightbulb,
  Lock,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  CASE_STUDIES_DATA,
  CaseStudyItem,
  CaseStudyMockupType,
} from "@/data/portfolioData";

/**
 * Interactive UI Mockup 1: Education CRM Platform (Multi-Tenant SaaS, 7-Role RBAC, httpOnly Cookie & FSD Refactoring)
 */
const EducationCrmInteractiveMockup: React.FC = () => {
  const [selectedTenant, setSelectedTenant] = useState<number>(0);
  const [selectedRole, setSelectedRole] = useState<string>("Admin");

  const tenants = [
    {
      subdomain: "najot.edu-crm.uz",
      centerName: "Najot Ta'lim Markazi",
      students: "3,420 o'quvchi",
      tokenState: "httpOnly Cookie · Auto-Refresh",
    },
    {
      subdomain: "registon.edu-crm.uz",
      centerName: "Registon O'quv Markazi",
      students: "2,850 o'quvchi",
      tokenState: "httpOnly Cookie · Auto-Refresh",
    },
    {
      subdomain: "ibrat.edu-crm.uz",
      centerName: "Ibrat Academy",
      students: "1,940 o'quvchi",
      tokenState: "httpOnly Cookie · Auto-Refresh",
    },
  ];

  const roles = [
    "Admin",
    "O'qituvchi",
    "O'quvchi",
    "Menejer",
    "Buxgalter",
    "Kurator",
    "Ota-ona",
  ];

  const currentTenant = tenants[selectedTenant];

  return (
    <div className="space-y-4">
      {/* Multi-Tenant Subdomain Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200/80">
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-emerald-600" />
          <span className="text-xs font-mono font-bold text-[#0a2540]">
            https://{currentTenant.subdomain}
          </span>
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 text-[10px] font-mono font-semibold border border-emerald-500/20">
            httpOnly Cookie · XSS Safe
          </span>
        </div>

        <div className="inline-flex rounded-lg bg-slate-100 p-0.5 text-[11px] font-mono">
          {tenants.map((t, idx) => (
            <button
              key={t.subdomain}
              type="button"
              onClick={() => setSelectedTenant(idx)}
              className={`px-2 py-1 rounded-md transition-colors ${
                selectedTenant === idx
                  ? "bg-[#0a2540] text-white font-semibold"
                  : "text-[#425466] hover:text-[#0a2540]"
              }`}
            >
              Tenant #{idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* 7-Role RBAC Guard Selector */}
      <div className="rounded-xl bg-[#f6f9fc] border border-slate-200/80 p-3.5 space-y-2.5">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="font-bold text-[#0a2540]">
            7 Xil Rol Uchun Izolyatsiyalangan Panel (RBAC Guard):
          </span>
          <span className="text-[#635bff] font-semibold">
            {currentTenant.centerName}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {roles.map((role) => {
            const active = selectedRole === role;
            return (
              <button
                key={role}
                type="button"
                onClick={() => setSelectedRole(role)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                  active
                    ? "bg-[#635bff] text-white font-bold shadow-sm"
                    : "bg-white text-[#425466] border border-slate-200/80 hover:border-[#635bff]/40"
                }`}
              >
                {role}
              </button>
            );
          })}
        </div>

        <div className="px-3 py-2 rounded-lg bg-white border border-slate-200/70 flex items-center justify-between text-[11px] font-mono">
          <span className="text-[#425466]">
            Aktiv Guard: <strong className="text-[#0a2540]">{selectedRole}</strong> paneli
          </span>
          <span className="text-emerald-600 font-semibold">
            ✓ Token Gateway Validated
          </span>
        </div>
      </div>

      {/* Dark Mode FSD Architecture Refactoring Console */}
      <div className="rounded-xl bg-[#0a2540] text-white p-4 space-y-3 border border-slate-800">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-[#00d4ff] font-bold flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            <span>Feature-Sliced Design (FSD) Refaktoring</span>
          </span>
          <span className="text-slate-300">730 fayl · ~64k qator</span>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          <div className="p-2.5 rounded-lg bg-[#06182c] border border-white/10">
            <div className="text-[10px] font-mono text-slate-400">
              Circular Deps
            </div>
            <div className="text-base font-mono font-extrabold text-emerald-400 mt-0.5">
              8 → 2 ta
            </div>
            <div className="text-[10px] font-mono text-slate-400">
              20 modul ko&apos;chirildi
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-[#06182c] border border-white/10">
            <div className="text-[10px] font-mono text-slate-400">
              Lint Qoidabuzarlik
            </div>
            <div className="text-base font-mono font-extrabold text-[#00d4ff] mt-0.5">
              182 → 23 ta
            </div>
            <div className="text-[10px] font-mono text-slate-400">
              ESLint majburiy qoida
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-[#06182c] border border-white/10">
            <div className="text-[10px] font-mono text-slate-400">
              Xavfsizlik
            </div>
            <div className="text-base font-mono font-extrabold text-[#ffcb57] mt-0.5">
              0 JS Token
            </div>
            <div className="text-[10px] font-mono text-slate-400">
              Server 401 Refresh
            </div>
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-[#06182c] border border-white/10 flex items-center justify-between text-[11px] font-mono">
          <span className="text-slate-300">
            app/ → processes/ → pages/ → widgets/ → features/ → entities/ → shared/
          </span>
          <span className="text-emerald-400 font-bold shrink-0 ml-2">
            tsc &amp; build PASS
          </span>
        </div>
      </div>
    </div>
  );
};

/**
 * Interactive UI Mockup 2: HalalHub (US Food Marketplace — Stripe, Google Maps, 4 Languages, Typed qk Registry & 13 Audit Fixes)
 */
const HalalHubInteractiveMockup: React.FC = () => {
  const [activeLang, setActiveLang] = useState<"EN" | "RU" | "UZ" | "AR">("EN");

  const localizedPreview: Record<
    "EN" | "RU" | "UZ" | "AR",
    { greeting: string; checkoutLabel: string; deliveryLabel: string }
  > = {
    EN: {
      greeting: "HalalHub US · Fresh Halal Delivery",
      checkoutLabel: "Stripe Checkout + Apple / Google Pay",
      deliveryLabel: "Google Maps Live Courier Zone",
    },
    RU: {
      greeting: "HalalHub US · Доставка халяльной еды",
      checkoutLabel: "Оплата Stripe + Apple / Google Вход",
      deliveryLabel: "Интеграция карт Google Maps",
    },
    UZ: {
      greeting: "HalalHub US · Halol taomlar yetkazib berish",
      checkoutLabel: "Stripe To'lov + Apple / Google Kirish",
      deliveryLabel: "Google Maps Xarita Integratsiyasi",
    },
    AR: {
      greeting: "HalalHub US · توصيل الطعام الحلال",
      checkoutLabel: "دفع Stripe + تسجيل الدخول السريع",
      deliveryLabel: "خرائط Google لتحديد الموقع",
    },
  };

  const auditBatches = [
    {
      batch: "Batch #1-2",
      area: "API Key Security & Next.js BFF Routes",
      status: "4 muammo yechildi",
    },
    {
      batch: "Batch #3-4",
      area: "Typed Query Key (qk) Registry · 0 Cache Collision",
      status: "4 muammo yechildi",
    },
    {
      batch: "Batch #5-6",
      area: "Error/Loading States, Unused Deps & 4-Lang i18n",
      status: "5 muammo yechildi",
    },
  ];

  const currentLang = localizedPreview[activeLang];

  return (
    <div className="space-y-4">
      {/* Top Marketplace & 4-Language Switcher Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200/80">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-[#635bff]" />
          <span className="text-xs font-mono font-bold text-[#0a2540]">
            HALALHUB.US · NEXT.JS 16 + REACT 19
          </span>
        </div>

        <div className="inline-flex rounded-lg bg-slate-100 p-0.5 text-[11px] font-mono">
          {(["EN", "RU", "UZ", "AR"] as const).map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => setActiveLang(lang)}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                activeLang === lang
                  ? "bg-[#635bff] text-white font-bold"
                  : "text-[#425466] hover:text-[#0a2540]"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* Customer-Facing Flows Preview (Stripe, OAuth, Google Maps, i18n) */}
      <div className="p-3.5 rounded-xl bg-[#f6f9fc] border border-slate-200/80 space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-extrabold text-[#0a2540]">
            {currentLang.greeting}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-[#635bff]/10 text-[#635bff] text-[10px] font-mono font-bold">
            i18n: {activeLang} Active
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
          <div className="p-2.5 rounded-lg bg-white border border-slate-200/70 flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-[#635bff] shrink-0" />
            <span className="text-[#0a2540] truncate">
              {currentLang.checkoutLabel}
            </span>
          </div>
          <div className="p-2.5 rounded-lg bg-white border border-slate-200/70 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-[#0a2540] truncate">
              {currentLang.deliveryLabel}
            </span>
          </div>
        </div>
      </div>

      {/* Dark Mode Typed `qk` Registry & Pre-Handover Audit Console */}
      <div className="rounded-xl bg-[#0a2540] text-white p-4 space-y-3 border border-slate-800">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-[#00d4ff] font-bold flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5" />
            <span>Typed Query Key (qk) Registry &amp; Handover Audit</span>
          </span>
          <span className="text-emerald-400 font-semibold">
            13 Muammo → 6 Commit
          </span>
        </div>

        {/* Typed qk Registry Snippet */}
        <div className="p-2.5 rounded-lg bg-[#06182c] border border-white/10 font-mono text-[11px] text-slate-200 space-y-1">
          <div className="text-slate-400">
            // Yagona tiplangan reestr — kesh to&apos;qnashuvlari 0 ga tushirildi
          </div>
          <div>
            <span className="text-[#ff7b9c]">export const</span> qk = &#123;
            vendors: (loc: <span className="text-[#00d4ff]">Geo</span>) =&gt; [
            <span className="text-[#a5f3fc]">&apos;vendors&apos;</span>, loc],
            cart: () =&gt; [
            <span className="text-[#a5f3fc]">&apos;cart-root&apos;</span>] &#125;{" "}
            <span className="text-[#ff7b9c]">as const</span>;
          </div>
        </div>

        {/* 6-Commit Audit Verification Rows */}
        <div className="space-y-1.5 font-mono text-[11px]">
          {auditBatches.map((item) => (
            <div
              key={item.batch}
              className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-[#06182c]/90 border border-white/10"
            >
              <span className="text-[#00d4ff] font-semibold">{item.batch}</span>
              <span className="text-slate-200 truncate mx-2">{item.area}</span>
              <span className="text-emerald-400 font-bold shrink-0">
                ✓ {item.status}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 pt-1">
          <span className="flex items-center gap-1.5">
            <GitCommit className="w-3.5 h-3.5 text-[#00d4ff]" />
            <span>Har commitda: tsc + eslint + next build</span>
          </span>
          <span className="text-emerald-400 font-semibold">
            Next.js BFF Ready
          </span>
        </div>
      </div>
    </div>
  );
};

/**
 * Interactive UI Mockup 3: Logistics On-Site UX Discovery (Driver Mobile UX + Director Fleet & Excel Report)
 */
const LogisticsFieldUXMockup: React.FC = () => {
  const [roleView, setRoleView] = useState<"driver" | "director">("driver");
  const [driverStep, setDriverStep] = useState<
    "yuklandi" | "yolda" | "yetkazildi"
  >("yolda");
  const [excelExported, setExcelExported] = useState(false);

  return (
    <div className="space-y-4">
      {/* Top Role Switcher: Haydovchi vs Rahbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200/80">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#635bff]" />
          <span className="text-xs font-mono font-bold text-[#0a2540]">
            ON-SITE UX DISCOVERY · HAYDOVCHI &amp; RAHBAR
          </span>
        </div>

        <div className="inline-flex rounded-lg bg-slate-100 p-0.5 text-[11px] font-mono">
          <button
            type="button"
            onClick={() => setRoleView("driver")}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              roleView === "driver"
                ? "bg-[#635bff] text-white font-bold"
                : "text-[#425466] hover:text-[#0a2540]"
            }`}
          >
            1. Haydovchi (Mobile UX)
          </button>
          <button
            type="button"
            onClick={() => setRoleView("director")}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              roleView === "director"
                ? "bg-[#0a2540] text-white font-bold"
                : "text-[#425466] hover:text-[#0a2540]"
            }`}
          >
            2. Rahbar Paneli (.XLSX)
          </button>
        </div>
      </div>

      {roleView === "driver" ? (
        /* Driver Mobile-First 2-Tap Flow */
        <div className="rounded-xl bg-[#0a2540] text-white p-4 space-y-3.5 border border-slate-800">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[#00d4ff] font-bold">
              Haydovchi Ekran (Yo&apos;lda 1 qo&apos;lda boshqarish):
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">
              GPS Avto-Yuborish Faol
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#06182c] border border-white/10 flex items-center justify-between">
            <div>
              <div className="text-[11px] font-mono text-slate-400">
                Joriy Reys #TR-408
              </div>
              <div className="text-sm font-extrabold text-white">
                Toshkent Ombor → Samarqand Filial
              </div>
            </div>
            <span className="text-xs font-mono text-[#00d4ff] font-bold">
              82 km/s
            </span>
          </div>

          <div className="space-y-1.5">
            <div className="text-[11px] font-mono text-slate-300">
              Holatni 1 bosishda o&apos;zgartirish (Murakkab formalarsiz):
            </div>
            <div className="grid grid-cols-3 gap-2">
              {(
                [
                  { id: "yuklandi", label: "1. Yuk ortildi" },
                  { id: "yolda", label: "2. Yo'ldaman" },
                  { id: "yetkazildi", label: "3. Topshirdim" },
                ] as const
              ).map((st) => (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => setDriverStep(st.id)}
                  className={`py-2.5 px-2 rounded-xl text-xs font-mono font-bold border transition-all ${
                    driverStep === st.id
                      ? "bg-emerald-500 text-[#0a2540] border-emerald-400 shadow-md"
                      : "bg-[#06182c] text-slate-300 border-white/10 hover:border-white/30"
                  }`}
                >
                  {st.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Director Overview & 1-Click Excel Report */
        <div className="rounded-xl bg-[#0a2540] text-white p-4 space-y-3.5 border border-slate-800">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[#00d4ff] font-bold">
              Rahbar Nazorat Paneli (Qo&apos;ng&apos;iroqlarsiz shaffoflik):
            </span>
            <button
              type="button"
              onClick={() => setExcelExported((prev) => !prev)}
              className="px-2.5 py-1 rounded-lg bg-emerald-500 text-[#0a2540] font-bold text-[11px] hover:bg-emerald-400 transition-colors"
            >
              {excelExported
                ? "✓ Hisobot_Rahbar.xlsx Yuklandi!"
                : "↓ Excel (.xlsx) Yuklash"}
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2.5 font-mono">
            <div className="p-2.5 rounded-lg bg-[#06182c] border border-white/10">
              <div className="text-[10px] text-slate-400">Yo&apos;ldagi mashinalar</div>
              <div className="text-sm font-extrabold text-white mt-0.5">
                24 / 26 faol
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-[#06182c] border border-white/10">
              <div className="text-[10px] text-slate-400">Bugungi reyslar</div>
              <div className="text-sm font-extrabold text-emerald-400 mt-0.5">
                96% vaqtida
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-[#06182c] border border-white/10">
              <div className="text-[10px] text-slate-400">Hisobot vaqti</div>
              <div className="text-sm font-extrabold text-[#00d4ff] mt-0.5">
                1.2 soniya
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Field UX Summary Note */}
      <div className="p-3 rounded-xl bg-[#f6f9fc] border border-slate-200/80 flex items-center justify-between text-xs font-mono text-[#425466]">
        <span>
          Biznes ichiga kirib o&apos;rganilgan real jarayon (Field UX Research)
        </span>
        <span className="font-bold text-[#0a2540]">Haydovchi + Rahbar</span>
      </div>
    </div>
  );
};

const renderCaseStudyMockup = (type: CaseStudyMockupType) => {
  switch (type) {
    case "education-crm":
      return <EducationCrmInteractiveMockup />;
    case "halalhub":
      return <HalalHubInteractiveMockup />;
    case "logistics-ux":
      return <LogisticsFieldUXMockup />;
  }
};

export const CaseStudies: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  // Per-project layer mode: "cv" (6-10s HR view) or "deep" (Problem -> Solution -> Result Case Study)
  const [viewModeById, setViewModeById] = useState<
    Record<string, "cv" | "deep">
  >({});
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((node, index) => {
      if (!node) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index);
            }
          });
        },
        {
          rootMargin: "-25% 0px -45% 0px",
          threshold: 0.1,
        }
      );
      observer.observe(node);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const activeCase: CaseStudyItem =
    CASE_STUDIES_DATA[activeIndex] || CASE_STUDIES_DATA[0];

  const getLayerMode = (id: string): "cv" | "deep" =>
    viewModeById[id] || "cv";

  const setLayerMode = (id: string, mode: "cv" | "deep") => {
    setViewModeById((prev) => ({ ...prev, [id]: mode }));
  };

  return (
    <section
      id="projects"
      className="relative py-24 lg:py-32 bg-[#f6f9fc] border-t border-slate-200/70"
    >
      {/* Stripe 4-Column Vertical Architectural Guide Lines */}
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
        {/* Section Heading */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#635bff]/10 text-[#635bff] text-xs font-mono font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Real Production Projects · Ikki Qatlamli Case Study</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0a2540] leading-[1.12]">
            Amaliyotda bajarilgan{" "}
            <span className="text-[#635bff]">real loyihalar va yechimlar.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#425466] leading-relaxed">
            Har bir loyihani ikki xil formatda ko&apos;rishingiz mumkin:{" "}
            <strong className="text-[#0a2540]">HR uchun qisqa CV varianti</strong>{" "}
            (6–10 soniyada o&apos;qish uchun) yoki{" "}
            <strong className="text-[#0a2540]">Chuqur Case Study</strong> (Muammo
            → Qaror → Natija tahlili).
          </p>
        </div>

        {/* Sticky Scroll Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT COLUMN (5/12): Scrolling Project Narrative Cards */}
          <div className="lg:col-span-5 space-y-12 lg:space-y-20">
            {CASE_STUDIES_DATA.map((project, idx) => {
              const isActive = idx === activeIndex;
              const currentMode = getLayerMode(project.id);

              return (
                <div
                  key={project.id}
                  ref={(el) => {
                    stepRefs.current[idx] = el;
                  }}
                  onClick={() => setActiveIndex(idx)}
                  className={`cursor-pointer rounded-2xl p-6 sm:p-7 transition-all duration-300 border ${
                    isActive
                      ? "bg-white border-[#635bff] shadow-[0_30px_60px_-15px_rgba(50,50,93,0.2)]"
                      : "bg-white/75 border-slate-200/80 opacity-80 hover:opacity-100"
                  }`}
                >
                  {/* Project Index & Category */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0a2540] text-white text-xs font-mono font-bold">
                      <span>LOYIHA {project.index}</span>
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#635bff]">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Role/Period */}
                  <h3 className="text-2xl font-extrabold tracking-tight text-[#0a2540] mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-[#425466] mb-4">
                    {project.roleAndPeriod}
                  </p>

                  {/* 2-Layer Switcher: "CV Qisqa (HR)" vs "Chuqur Case Study" */}
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-[#f6f9fc] border border-slate-200/80 mb-5"
                  >
                    <button
                      type="button"
                      onClick={() => setLayerMode(project.id, "cv")}
                      className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                        currentMode === "cv"
                          ? "bg-[#0a2540] text-white shadow-sm"
                          : "text-[#425466] hover:text-[#0a2540]"
                      }`}
                    >
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>CV Qisqa (HR uchun)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setLayerMode(project.id, "deep")}
                      className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                        currentMode === "deep"
                          ? "bg-[#635bff] text-white shadow-sm"
                          : "text-[#425466] hover:text-[#0a2540]"
                      }`}
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Chuqur Case Study</span>
                    </button>
                  </div>

                  {/* Simple HR-friendly 1st paragraph */}
                  <p className="text-sm sm:text-base text-[#0a2540] font-medium leading-relaxed mb-5 bg-[#f6f9fc] p-3.5 rounded-xl border border-slate-200/70">
                    {project.taskDescription}
                  </p>

                  {currentMode === "cv" ? (
                    /* LAYER 1: Short CV Highlights (HR reads in 6-10 seconds) */
                    <ul className="space-y-3 mb-6">
                      {project.architectureHighlights.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#425466] leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#635bff] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    /* LAYER 2: Deep Portfolio Case Study (Muammo -> Qaror -> Natija) */
                    <div className="space-y-4 mb-6">
                      <div className="p-3 rounded-xl bg-slate-900/[0.03] border border-slate-200/80 text-xs font-mono text-[#0a2540]">
                        <strong>Stack:</strong> {project.deepCaseStudy.stackSummary}
                      </div>

                      {project.deepCaseStudy.constraintOrNote && (
                        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 text-xs text-[#0a2540] font-medium">
                          {project.deepCaseStudy.constraintOrNote}
                        </div>
                      )}

                      {project.deepCaseStudy.challenges.map((ch, idxCh) => (
                        <div
                          key={idxCh}
                          className="p-4 rounded-xl bg-[#f6f9fc] border border-slate-200/90 space-y-2 text-xs sm:text-sm"
                        >
                          <div className="font-extrabold text-[#0a2540]">
                            {ch.title}
                          </div>
                          <div className="text-[#425466]">
                            <strong className="text-red-600">Muammo:</strong>{" "}
                            {ch.problem}
                          </div>
                          <div className="text-[#425466]">
                            <strong className="text-[#635bff]">Qaror:</strong>{" "}
                            {ch.solution}
                          </div>
                          <div className="text-[#0a2540] font-medium">
                            <strong className="text-emerald-600">Natija:</strong>{" "}
                            {ch.result}
                          </div>
                        </div>
                      ))}

                      <div className="p-3.5 rounded-xl bg-[#635bff]/[0.08] border border-[#635bff]/25 flex items-start gap-2.5 text-xs sm:text-sm text-[#0a2540]">
                        <Lightbulb className="w-4 h-4 text-[#635bff] shrink-0 mt-0.5" />
                        <span>{project.deepCaseStudy.takeaway}</span>
                      </div>
                    </div>
                  )}

                  {/* Key Metrics Mini-Grid */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#f6f9fc] border border-slate-200/70 mb-5">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-sm sm:text-base font-mono font-extrabold text-[#0a2540]">
                          {m.value}
                        </div>
                        <div className="text-[10px] font-medium text-[#425466] leading-tight">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#635bff]/[0.08] text-[#635bff] border border-[#635bff]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Mobile / Tablet Inline Interactive Showcase (<1024px) */}
                  <div className="mt-6 pt-6 border-t border-slate-200/80 lg:hidden">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#635bff] mb-3">
                      Jonli Loyiha Arxitekturasi:
                    </div>
                    {renderCaseStudyMockup(project.mockupType)}
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN (7/12): Sticky Interactive Architecture Viewport (Desktop lg+) */}
          <div className="hidden lg:block lg:col-span-7 sticky top-28">
            <div className="rounded-3xl bg-white border border-slate-200/90 shadow-[0_30px_60px_-15px_rgba(50,50,93,0.25)] overflow-hidden">
              {/* Sticky Window Chrome Header */}
              <div className="px-6 py-4 bg-[#0a2540] text-white flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b8b]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffcb57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs font-mono text-slate-300">
                    {activeCase.clientType} —{" "}
                    <strong className="text-[#00d4ff]">
                      Loyiha #{activeCase.index}
                    </strong>
                  </span>
                </div>

                {/* Quick Switcher Pills inside Sticky Window */}
                <div className="flex items-center gap-1.5">
                  {CASE_STUDIES_DATA.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                        idx === activeIndex
                          ? "bg-[#635bff] text-white font-bold"
                          : "bg-white/10 text-slate-300 hover:text-white"
                      }`}
                    >
                      #{item.index}{" "}
                      {item.id === "education-crm-platform"
                        ? "CRM"
                        : item.id === "halalhub-food-marketplace"
                        ? "HalalHub"
                        : "Logistika"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Animated Interactive Mockup Body */}
              <div className="p-6 sm:p-8 bg-white min-h-[470px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCase.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="space-y-5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <span className="text-xs font-mono font-bold text-[#635bff] uppercase tracking-wider">
                          {activeCase.category}
                        </span>
                        <h4 className="text-xl font-extrabold text-[#0a2540] tracking-tight">
                          {activeCase.title}
                        </h4>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-mono font-semibold border border-emerald-500/20 shrink-0">
                        ● Verified Case Study
                      </span>
                    </div>

                    {renderCaseStudyMockup(activeCase.mockupType)}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
