import React from "react";
import Link from "next/link";
import { Code2, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f6f9fc] flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full rounded-3xl bg-white border border-slate-200/90 shadow-[0_30px_60px_-15px_rgba(50,50,93,0.2)] p-8 sm:p-10 text-center space-y-6">
        <div className="mx-auto w-14 h-14 rounded-2xl bg-[#0a2540] text-white flex items-center justify-center shadow-lg">
          <Code2 className="w-7 h-7 text-[#00d4ff]" />
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#635bff]/10 text-[#635bff] text-xs font-mono font-bold">
          <Terminal className="w-3.5 h-3.5" />
          <span>HTTP 404 · eval42.uz</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0a2540]">
            Sahifa topilmadi
          </h1>
          <p className="text-sm sm:text-base text-[#425466] leading-relaxed">
            Siz qidirayotgan manzil mavjud emas yoki ko&apos;chirilgan. Bosh
            sahifaga qaytib, loyihalar va texnik stek bilan tanishishingiz
            mumkin.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#635bff] hover:bg-[#5249f5] text-white text-sm font-semibold shadow-[0_10px_25px_-5px_rgba(99,91,255,0.45)] transition-all"
          >
            Bosh sahifaga qaytish →
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#f6f9fc] hover:bg-slate-200/70 text-[#0a2540] border border-slate-200 text-sm font-semibold transition-all"
          >
            Bog&apos;lanish
          </Link>
        </div>
      </div>
    </main>
  );
}
