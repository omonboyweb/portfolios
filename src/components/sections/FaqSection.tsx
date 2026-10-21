import React from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { FAQ_ITEMS } from "@/data/portfolioData";

export const FaqSection: React.FC = () => {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="deferred-section relative py-20 lg:py-28 bg-[#f6f9fc] border-t border-slate-200/70 overflow-hidden"
    >
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column (5/12): Section Intro */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#635bff]/10 text-[#635bff] text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Texnik Savol-Javoblar · FAQ</span>
            </div>

            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0a2540] leading-[1.12]"
            >
              Hamkorlik va{" "}
              <span className="text-[#635bff]">muhandislik yondashuvi</span>{" "}
              bo&apos;yicha savollar.
            </h2>

            <p className="text-base text-[#425466] leading-relaxed">
              HR menejerlar, CTO va biznes rahbarlari tomonidan eng ko&apos;p
              so&apos;raladigan texnik hamda tashkiliy savollarga qisqa javoblar.
            </p>
          </div>

          {/* Right Column (7/12): Native HTML <details name="portfolio-faq"> Exclusive Accordion */}
          <div className="lg:col-span-7 space-y-3.5">
            {FAQ_ITEMS.map((item, idx) => (
              <details
                key={item.id}
                name="portfolio-faq"
                open={idx === 0}
                className="group rounded-2xl bg-white border border-slate-200/90 shadow-[0_12px_30px_-12px_rgba(50,50,93,0.12)] open:border-[#635bff] transition-all overflow-hidden"
              >
                <summary className="cursor-pointer list-none px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#635bff]">
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold text-[#635bff]">
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>{item.tag}</span>
                    </span>
                    <div className="text-base sm:text-lg font-extrabold text-[#0a2540] group-hover:text-[#635bff] transition-colors">
                      {item.question}
                    </div>
                  </div>

                  <span
                    aria-hidden="true"
                    className="w-8 h-8 rounded-xl bg-[#f6f9fc] group-open:bg-[#635bff] text-[#0a2540] group-open:text-white flex items-center justify-center shrink-0 transition-all duration-200"
                  >
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-open:rotate-180" />
                  </span>
                </summary>

                <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#425466] leading-relaxed border-t border-slate-100">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
