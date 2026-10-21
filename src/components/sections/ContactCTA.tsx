"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Lock,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ENGINEER_PROFILE, SOCIAL_LINKS } from "@/data/portfolioData";
import { ArrowButton } from "@/components/ui/ArrowButton";

export const ContactCTA: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [selectedScope, setSelectedScope] = useState<string>(
    "Full-Stack / Next.js Platforma"
  );
  const [submitState, setSubmitState] = useState<
    "idle" | "submitting" | "submitted"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedPayload, setSubmittedPayload] = useState<{
    name: string;
    contact: string;
    scope: string;
  } | null>(null);

  // Sync aria-invalid with native :user-invalid + fallback for older browsers
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const dirtyState = new WeakMap<
      Element,
      { hasInteracted: boolean; hasBlurred: boolean }
    >();
    const supportsUserInvalid =
      typeof CSS !== "undefined" &&
      typeof CSS.supports === "function" &&
      CSS.supports("selector(:user-invalid)");

    const syncFieldValidity = (
      el: HTMLInputElement | HTMLTextAreaElement,
      forceCheck = false
    ) => {
      if (typeof el.checkValidity !== "function") return;
      const isValid = el.checkValidity();

      if (supportsUserInvalid && !forceCheck) {
        const matchesUserInvalid = el.matches(":user-invalid");
        el.setAttribute("aria-invalid", matchesUserInvalid ? "true" : "false");
      } else {
        el.classList.toggle("user-invalid-fallback", !isValid);
        el.classList.toggle("user-valid-fallback", isValid);
        el.setAttribute("aria-invalid", !isValid ? "true" : "false");
      }
    };

    const handleBlur = (e: Event) => {
      const target = e.target as HTMLInputElement | HTMLTextAreaElement;
      if (!target || !("checkValidity" in target)) return;
      const state = dirtyState.get(target) || {
        hasInteracted: false,
        hasBlurred: false,
      };
      state.hasBlurred = true;
      dirtyState.set(target, state);
      if (state.hasInteracted || supportsUserInvalid) {
        syncFieldValidity(target);
      }
    };

    const handleInput = (e: Event) => {
      const target = e.target as HTMLInputElement | HTMLTextAreaElement;
      if (!target || !("checkValidity" in target)) return;
      const state = dirtyState.get(target) || {
        hasInteracted: false,
        hasBlurred: false,
      };
      state.hasInteracted = true;
      dirtyState.set(target, state);
      if (state.hasBlurred || target.hasAttribute("aria-invalid")) {
        syncFieldValidity(target);
      }
    };

    form.addEventListener("blur", handleBlur, true);
    form.addEventListener("input", handleInput);

    return () => {
      form.removeEventListener("blur", handleBlur, true);
      form.removeEventListener("input", handleInput);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      // Trigger native constraint validation UI and focus first invalid input
      const firstInvalid = form.querySelector<HTMLElement>(":invalid");
      firstInvalid?.focus();
      return;
    }

    const formData = new FormData(form);
    const name = String(formData.get("full_name") || "");
    const contact = String(formData.get("contact_channel") || "");
    const brief = String(formData.get("project_brief") || "");

    setSubmitState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          contact,
          scope: selectedScope,
          brief,
        }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setErrorMessage(
          data.error || "Xabar yuborishda xatolik yuz berdi. Qayta urinib ko'ring."
        );
        setSubmitState("idle");
        return;
      }

      setSubmittedPayload({
        name,
        contact,
        scope: selectedScope,
      });
      setSubmitState("submitted");
    } catch {
      setErrorMessage(
        "Tarmoq xatosi yuz berdi. Telegram yoki telefon orqali bog'lanishingiz mumkin."
      );
      setSubmitState("idle");
    }
  };

  const handleReset = () => {
    setSubmitState("idle");
    setErrorMessage(null);
    setSubmittedPayload(null);
    formRef.current?.reset();
  };

  const projectScopes = [
    "Full-Stack / Next.js Platforma",
    "CRM, ERP & Boshqaruv Paneli",
    "E-Commerce / Marketplace",
    "API Integratsiya & Refaktoring",
  ];

  return (
    <section
      id="contact"
      className="deferred-section relative py-24 lg:py-32 bg-[#f6f9fc] overflow-hidden"
    >
      {/* Diagonal White-Gray Background Band */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-12 bottom-12 -skew-y-3 bg-gradient-to-b from-white via-[#f6f9fc] to-slate-100/90 border-y border-slate-200/80 z-0"
      />

      {/* Stripe 4-Column Vertical Guide Lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 z-[1]"
      >
        <div className="border-l border-[rgba(66,84,102,0.08)] h-full" />
        <div className="border-l border-[rgba(66,84,102,0.08)] h-full" />
        <div className="hidden md:block border-l border-[rgba(66,84,102,0.08)] h-full" />
        <div className="hidden md:block border-l border-r border-[rgba(66,84,102,0.08)] h-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (5/12): Value Proposition & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#635bff]/10 text-[#635bff] text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Loyiha Boshlash · Stripe Checkout UX</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0a2540] leading-[1.1]">
              Yangi loyiha ustida{" "}
              <span className="text-[#635bff]">ishlaymizmi?</span>
            </h2>

            <p className="text-base sm:text-lg text-[#425466] leading-relaxed">
              Texnik topshiriq (TZ), mavjud kod bazasini optimallashtirish yoki
              noldan yuqori yuklamali veb-platforma qurish bo&apos;yicha
              so&apos;rovingizni qoldiring.
            </p>

            {/* Engineering Guarantees */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <Clock className="w-5 h-5 text-[#635bff] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-[#0a2540]">
                    Tezkor texnik javob (&lt; 2 soat)
                  </div>
                  <div className="text-xs text-[#425466]">
                    Loyiha arxitekturasi, muddatlar va texnik stek bo&apos;yicha aniq
                    yechim taklifi.
                  </div>
                </div>
              </div>

              <a
                href={`tel:${ENGINEER_PROFILE.phone.replace(/\s+/g, "")}`}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-white hover:border-[#635bff] border border-slate-200/80 shadow-sm transition-all group"
              >
                <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-sm font-bold text-[#0a2540] group-hover:text-[#635bff] transition-colors">
                    To&apos;g&apos;ridan-to&apos;g&apos;ri qo&apos;ng&apos;iroq: {ENGINEER_PROFILE.phone}
                  </div>
                  <div className="text-xs text-[#425466]">
                    Telefon yoki Telegram orqali tezkor muloqot.
                  </div>
                </div>
              </a>
            </div>

            {/* Direct Social Links Strip + Operational Status */}
            <div className="pt-4 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#425466] font-semibold">
                To&apos;g&apos;ridan-to&apos;g&apos;ri bog&apos;lanish:
              </div>
              <div className="flex flex-wrap gap-2">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-[#0a2540] text-[#0a2540] hover:text-white border border-slate-200/90 text-xs font-mono font-semibold transition-all shadow-sm"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>

              <div className="inline-flex items-center gap-2 pt-1 text-xs font-mono text-emerald-700 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>● {ENGINEER_PROFILE.statusText}</span>
              </div>
            </div>
          </div>

          {/* Right Column (7/12): Stripe Checkout-inspired Minimalistic Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200/90 shadow-[0_30px_60px_-15px_rgba(50,50,93,0.25)] p-6 sm:p-9">
              {/* Top Checkout-Style Header */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-200/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#635bff]/10 text-[#635bff] flex items-center justify-center">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#0a2540] tracking-tight">
                      Tezkor Loyiha Brifi
                    </h3>
                    <p className="text-xs font-mono text-[#425466]">
                      Stripe Checkout standartidagi tezkor aloqa oynasi
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-[#0a2540] text-[11px] font-mono font-semibold">
                  <Lock className="w-3 h-3 text-[#635bff]" />
                  TLS Encrypted
                </span>
              </div>

              {submitState === "submitted" && submittedPayload ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="py-8 px-4 text-center space-y-5"
                >
                  <div className="mx-auto w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-2xl font-extrabold text-[#0a2540]">
                      Xabaringiz qabul qilindi!
                    </h4>
                    <p className="text-sm text-[#425466] max-w-md mx-auto">
                      Hurmatli{" "}
                      <strong className="text-[#0a2540]">
                        {submittedPayload.name}
                      </strong>
                      ,{" "}
                      <span className="font-mono text-[#635bff]">
                        {submittedPayload.scope}
                      </span>{" "}
                      bo&apos;yicha so&apos;rovingiz ro&apos;yxatga olindi. Tez orada{" "}
                      <strong className="text-[#0a2540]">
                        {submittedPayload.contact}
                      </strong>{" "}
                      orqali bog&apos;lanamiz.
                    </p>
                  </div>
                  <div className="pt-2">
                    <ArrowButton
                      type="button"
                      variant="outline"
                      size="md"
                      onClick={handleReset}
                    >
                      Yangi xabar yuborish
                    </ArrowButton>
                  </div>
                </div>
              ) : (
                <form
                  ref={formRef}
                  action="#contact"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Project Direction Selector Pills (<5 options exposed visibly) */}
                  <fieldset className="space-y-2">
                    <legend className="block text-xs font-mono uppercase tracking-wider text-[#0a2540] font-bold">
                      1. Loyiha yo&apos;nalishini tanlang
                    </legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {projectScopes.map((scope) => {
                        const active = selectedScope === scope;
                        return (
                          <label
                            key={scope}
                            className={`cursor-pointer flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border text-xs font-semibold transition-all ${
                              active
                                ? "bg-[#635bff]/[0.08] border-[#635bff] text-[#0a2540] ring-1 ring-[#635bff]"
                                : "bg-[#f6f9fc] border-slate-200/90 text-[#425466] hover:bg-white"
                            }`}
                          >
                            <input
                              type="radio"
                              name="project_scope"
                              value={scope}
                              checked={active}
                              onChange={() => setSelectedScope(scope)}
                              className="accent-[#635bff] w-3.5 h-3.5"
                            />
                            <span className="truncate">{scope}</span>
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>

                  {/* Field 1: Full Name (Single-field name per modern-web-guidance) */}
                  <div className="form-field space-y-1.5">
                    <label
                      htmlFor="full_name"
                      className="block text-sm font-bold text-[#0a2540]"
                    >
                      Ismingiz yoki kompaniya nomi{" "}
                      <span className="text-[#635bff]">*</span>
                    </label>
                    <span
                      id="name-hint"
                      className="block text-xs text-[#425466]"
                    >
                      Masalan: Azizbek — Loyiha rahbari
                    </span>
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      required
                      minLength={2}
                      maxLength={100}
                      autoComplete="name"
                      enterKeyHint="next"
                      aria-describedby="name-hint"
                      aria-errormessage="name-error"
                      placeholder="Ismingizni kiriting"
                      className="stripe-input w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#f6f9fc] focus:bg-white border border-slate-300/90 text-base text-[#0a2540] placeholder:text-slate-400 transition-all focus:outline-none focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]"
                    />
                    <div
                      id="name-error"
                      aria-live="polite"
                      className="field-error-msg hidden text-xs font-medium text-red-600 pt-1"
                    >
                      <span aria-hidden="true">⚠ </span>Iltimos, ismingizni
                      kiriting (kamida 2 ta belgi).
                    </div>
                  </div>

                  {/* Field 2: Telegram or Email Identifier */}
                  <div className="form-field space-y-1.5">
                    <label
                      htmlFor="contact_channel"
                      className="block text-sm font-bold text-[#0a2540]"
                    >
                      Telegram (@username) yoki Email{" "}
                      <span className="text-[#635bff]">*</span>
                    </label>
                    <span
                      id="contact-hint"
                      className="block text-xs text-[#425466]"
                    >
                      Format: @username, +998... yoki ism@kompaniya.uz
                    </span>
                    <input
                      type="text"
                      id="contact_channel"
                      name="contact_channel"
                      required
                      minLength={4}
                      maxLength={120}
                      autoComplete="email"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck={false}
                      enterKeyHint="next"
                      aria-describedby="contact-hint"
                      aria-errormessage="contact-error"
                      placeholder="@telegram_user yoki you@domain.com"
                      className="stripe-input w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#f6f9fc] focus:bg-white border border-slate-300/90 text-base text-[#0a2540] font-mono placeholder:font-sans placeholder:text-slate-400 transition-all focus:outline-none focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]"
                    />
                    <div
                      id="contact-error"
                      aria-live="polite"
                      className="field-error-msg hidden text-xs font-medium text-red-600 pt-1"
                    >
                      <span aria-hidden="true">⚠ </span>Bog&apos;lanish uchun
                      Telegram username yoki email manzilingizni kiriting.
                    </div>
                  </div>

                  {/* Field 3: Project Brief Textarea */}
                  <div className="form-field space-y-1.5">
                    <label
                      htmlFor="project_brief"
                      className="block text-sm font-bold text-[#0a2540]"
                    >
                      Loyiha haqida qisqacha{" "}
                      <span className="text-[#635bff]">*</span>
                    </label>
                    <span
                      id="brief-hint"
                      className="block text-xs text-[#425466]"
                    >
                      Asosiy vazifa, texnik talablar yoki kutilayotgan natijani
                      yozing
                    </span>
                    <textarea
                      id="project_brief"
                      name="project_brief"
                      rows={4}
                      required
                      minLength={10}
                      maxLength={1200}
                      aria-describedby="brief-hint"
                      aria-errormessage="brief-error"
                      placeholder="Loyiha maqsadi, real-time oqim yoki server infratuzilmasi bo'yicha talablaringiz..."
                      className="stripe-input w-full px-4 py-3 rounded-xl bg-[#f6f9fc] focus:bg-white border border-slate-300/90 text-base text-[#0a2540] placeholder:text-slate-400 transition-all focus:outline-none focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff] resize-y"
                    />
                    <div
                      id="brief-error"
                      aria-live="polite"
                      className="field-error-msg hidden text-xs font-medium text-red-600 pt-1"
                    >
                      <span aria-hidden="true">⚠ </span>Loyiha haqida kamida 10 ta
                      belgidan iborat qisqacha ma&apos;lumot kiriting.
                    </div>
                  </div>

                  {/* Submit Button & Security Note */}
                  {errorMessage && (
                    <div
                      role="alert"
                      className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs font-medium text-red-700"
                    >
                      ⚠ {errorMessage}
                    </div>
                  )}

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-[#425466]">
                      <Send className="w-3.5 h-3.5 text-[#635bff]" />
                      <span>Xabar to&apos;g&apos;ridan-to&apos;g&apos;ri Telegram botga boradi.</span>
                    </div>

                    <ArrowButton
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={submitState === "submitting"}
                      className="w-full sm:w-auto"
                    >
                      {submitState === "submitting"
                        ? "Yuborilmoqda..."
                        : "So'rovni yuborish"}
                    </ArrowButton>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

