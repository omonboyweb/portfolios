import { ENGINEER_PROFILE } from "@/data/portfolioData";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://eval42.uz"
).replace(/\/$/, "");

export const SITE_NAME = `${ENGINEER_PROFILE.name} — Software Engineer & Frontend Architect`;

export const SEO_TITLE_DEFAULT =
  "Omonbek Xojamurodov — Software Engineer & Frontend Architect | eval42.uz";

export const SEO_DESCRIPTION =
  "Omonbek Xojamurodov (Omonbek Khojamurodov) — React, Next.js 15/16, TypeScript, Feature-Sliced Design (FSD) va TanStack Query bo‘yicha Software Engineer & Frontend Architect (eval42.uz). Multi-tenant CRM/ERP tizimlar, US Marketplace platformalar va biznes avtomatlashtirish yechimlari.";

export const SEO_KEYWORDS: string[] = [
  // Exact Name, Domain & Handle Variations (Top-1 Personal Brand Ranking)
  "Omonbek Xojamurodov",
  "Omonbek Khojamurodov",
  "Omonbek Xo'jamurodov",
  "Omonbek Xo‘jamurodov",
  "Омонбек Хожамуродов",
  "Omonbek",
  "eval42.uz",
  "eval42",
  "info@eval42.uz",
  "Omonbek Software Engineer",
  "Omonbek Frontend Developer",
  "omonboyweb",
  "the_khojamurodov",
  // Core Engineering & Stack Keywords (UZ / EN / RU)
  "Software Engineer Uzbekistan",
  "Frontend Developer Tashkent",
  "Senior Frontend Engineer Toshkent",
  "Frontend Architect Uzbekistan",
  "Next.js Developer Uzbekistan",
  "React TypeScript Developer Toshkent",
  "Feature-Sliced Design FSD Architecture",
  "TanStack Query Expert",
  "Multi-Tenant SaaS CRM Developer",
  "CRM ERP Dashboard dasturchi",
  "Veb sayt va platforma yaratish Toshkent",
  "Next.js 15 App Router",
  "React 19 Server Components",
  "Stripe Payments Integration",
  "Google Maps API Integration",
  "Excel XLSX Export Automation",
  "Разработчик Next.js React Ташкент",
  "Фронтенд разработчик Узбекистан",
];
