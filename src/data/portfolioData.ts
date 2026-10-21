export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface HeroMetric {
  id: string;
  label: string;
  value: string;
  status: "optimal" | "active" | "stable";
  delta: string;
}

export interface HeroCodeSnippet {
  id: string;
  filename: string;
  language: string;
  badge: string;
  lines: {
    lineNumber: number;
    tokens: {
      text: string;
      type: "keyword" | "type" | "string" | "function" | "comment" | "operator" | "plain" | "number";
    }[];
  }[];
  runtimeOutput: {
    status: string;
    latency: string;
    region: string;
  };
}

export type BentoVisualType = "microfrontend" | "realtime" | "automation" | "infrastructure";

export interface ServiceBentoItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  colSpan: 1 | 2;
  accentColor: string;
  tags: string[];
  visualType: BentoVisualType;
  keyMetric: {
    label: string;
    value: string;
  };
}

export type CaseStudyMockupType = "education-crm" | "halalhub" | "logistics-ux";

export interface CaseStudyChallenge {
  title: string;
  problem: string;
  solution: string;
  result: string;
}

export interface CaseStudyItem {
  id: string;
  index: string;
  category: string;
  title: string;
  roleAndPeriod: string;
  clientType: string;
  taskDescription: string;
  architectureHighlights: string[];
  deepCaseStudy: {
    stackSummary: string;
    constraintOrNote?: string;
    challenges: CaseStudyChallenge[];
    takeaway: string;
  };
  technologies: string[];
  metrics: {
    label: string;
    value: string;
    trend: string;
  }[];
  mockupType: CaseStudyMockupType;
  accentColor: string;
}

export interface CareerStage {
  id: string;
  stepNumber: string;
  period: string;
  role: string;
  stageLabel: string;
  description: string;
  achievements: string[];
  stack: string[];
}

export interface EngineeringMetric {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  accent: "purple" | "cyan" | "blue" | "emerald";
}

export interface TechStackCategory {
  id: string;
  layer: string;
  title: string;
  description: string;
  items: {
    name: string;
    role: string;
    level: string;
  }[];
}

export interface SocialLink {
  id: string;
  name: string;
  handle: string;
  href: string;
  platform: "github" | "linkedin" | "telegram" | "email" | "phone";
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  tag: string;
}

export interface EngineerProfile {
  name: string;
  brandTitle: string;
  role: string;
  badge: string;
  heroTitle: string;
  heroHighlight?: string;
  heroDescription: string;
  location: string;
  phone: string;
  email: string;
  statusText: string;
  availability: string;
}

export const ENGINEER_PROFILE: EngineerProfile = {
  name: "Omonbek Xojamurodov",
  brandTitle: "Omonbek",
  role: "Software Engineer & Frontend Architect",
  badge: "Frontend Engineering · Next.js & TypeScript",
  heroTitle: "Yuqori yuklamali veb-tizimlar uchun muhandislik arxitekturasi.",
  heroDescription:
    "React, Next.js va TypeScript yordamida murakkab veb-ilovalar, ko‘p-ijarachili (multi-tenant) CRM/ERP tizimlari, Feature-Sliced Design (FSD) arxitekturasi va biznes avtomatlashtirish platformalarini qurish bo‘yicha ixtisoslashuv.",
  location: "Toshkent, O‘zbekiston (Global Remote)",
  phone: "+998 77 777 45 02",
  email: "info@eval42.uz",
  statusText: "All systems operational",
  availability: "Yangi arxitektura va muhandislik loyihalari uchun ochiq",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Xizmatlar", href: "#services" },
  { label: "Loyihalar", href: "#projects", badge: "3 Case" },
  { label: "Tajriba", href: "#experience" },
  { label: "Stek", href: "#stack" },
  { label: "FAQ", href: "#faq" },
];

export const HERO_LIVE_METRICS: HeroMetric[] = [
  {
    id: "lighthouse-score",
    label: "Lighthouse Score",
    value: "99/100",
    status: "optimal",
    delta: "Core Web Vitals",
  },
  {
    id: "rsc-engine",
    label: "Next.js 15 & RSC",
    value: "Active",
    status: "active",
    delta: "Streaming SSR",
  },
  {
    id: "lcp-speed",
    label: "First Load LCP",
    value: "0.6s",
    status: "stable",
    delta: "Zero CLS Shift",
  },
];

export const HERO_CODE_SNIPPETS: HeroCodeSnippet[] = [
  {
    id: "custom-hook",
    filename: "useDashboardData.ts",
    language: "TypeScript · TanStack",
    badge: "API Hook",
    lines: [
      {
        lineNumber: 1,
        tokens: [
          { text: "import", type: "keyword" },
          { text: " { ", type: "plain" },
          { text: "useQuery", type: "function" },
          { text: " } ", type: "plain" },
          { text: "from", type: "keyword" },
          { text: " ", type: "plain" },
          { text: "'@tanstack/react-query'", type: "string" },
          { text: ";", type: "plain" },
        ],
      },
      {
        lineNumber: 2,
        tokens: [
          { text: "import", type: "keyword" },
          { text: " { ", type: "plain" },
          { text: "fetchCrmAnalytics", type: "function" },
          { text: ", ", type: "plain" },
          { text: "CrmFilter", type: "type" },
          { text: " } ", type: "plain" },
          { text: "from", type: "keyword" },
          { text: " ", type: "plain" },
          { text: "'@/api/crm'", type: "string" },
          { text: ";", type: "plain" },
        ],
      },
      {
        lineNumber: 3,
        tokens: [
          { text: "// Type-safe API integration with smart caching", type: "comment" },
        ],
      },
      {
        lineNumber: 4,
        tokens: [
          { text: "export function", type: "keyword" },
          { text: " ", type: "plain" },
          { text: "useDashboardData", type: "function" },
          { text: "(", type: "plain" },
          { text: "filter", type: "plain" },
          { text: ": ", type: "operator" },
          { text: "CrmFilter", type: "type" },
          { text: ") {", type: "plain" },
        ],
      },
      {
        lineNumber: 5,
        tokens: [
          { text: "  return", type: "keyword" },
          { text: " ", type: "plain" },
          { text: "useQuery", type: "function" },
          { text: "({", type: "plain" },
        ],
      },
      {
        lineNumber: 6,
        tokens: [
          { text: "    queryKey: [", type: "plain" },
          { text: "'crm-metrics'", type: "string" },
          { text: ", filter],", type: "plain" },
        ],
      },
      {
        lineNumber: 7,
        tokens: [
          { text: "    queryFn: () => ", type: "plain" },
          { text: "fetchCrmAnalytics", type: "function" },
          { text: "(filter),", type: "plain" },
        ],
      },
      {
        lineNumber: 8,
        tokens: [
          { text: "    staleTime: ", type: "plain" },
          { text: "60_000", type: "number" },
          { text: ",", type: "plain" },
        ],
      },
      {
        lineNumber: 9,
        tokens: [{ text: "  });", type: "plain" }],
      },
      {
        lineNumber: 10,
        tokens: [{ text: "}", type: "plain" }],
      },
    ],
    runtimeOutput: {
      status: "200 OK · API Cache Validated",
      latency: "TypeScript Strict",
      region: "Lighthouse 99/100",
    },
  },
  {
    id: "rsc-architecture",
    filename: "DashboardPage.tsx",
    language: "Next.js 15 RSC",
    badge: "Server Component",
    lines: [
      {
        lineNumber: 1,
        tokens: [
          { text: "import", type: "keyword" },
          { text: " { ", type: "plain" },
          { text: "Suspense", type: "type" },
          { text: " } ", type: "plain" },
          { text: "from", type: "keyword" },
          { text: " ", type: "plain" },
          { text: "'react'", type: "string" },
          { text: ";", type: "plain" },
        ],
      },
      {
        lineNumber: 2,
        tokens: [
          { text: "import", type: "keyword" },
          { text: " { ", type: "plain" },
          { text: "getInitialStats", type: "function" },
          { text: " } ", type: "plain" },
          { text: "from", type: "keyword" },
          { text: " ", type: "plain" },
          { text: "'@/services/stats'", type: "string" },
          { text: ";", type: "plain" },
        ],
      },
      {
        lineNumber: 3,
        tokens: [
          { text: "// Zero-bundle Server Component with parallel streaming", type: "comment" },
        ],
      },
      {
        lineNumber: 4,
        tokens: [
          { text: "export default async function", type: "keyword" },
          { text: " ", type: "plain" },
          { text: "DashboardPage", type: "function" },
          { text: "() {", type: "plain" },
        ],
      },
      {
        lineNumber: 5,
        tokens: [
          { text: "  const", type: "keyword" },
          { text: " stats = ", type: "plain" },
          { text: "await", type: "keyword" },
          { text: " ", type: "plain" },
          { text: "getInitialStats", type: "function" },
          { text: "();", type: "plain" },
        ],
      },
      {
        lineNumber: 6,
        tokens: [
          { text: "  return", type: "keyword" },
          { text: " (", type: "plain" },
        ],
      },
      {
        lineNumber: 7,
        tokens: [
          { text: "    <", type: "operator" },
          { text: "Suspense", type: "type" },
          { text: " fallback={<", type: "plain" },
          { text: "DashboardSkeleton", type: "type" },
          { text: " />}>", type: "plain" },
        ],
      },
      {
        lineNumber: 8,
        tokens: [
          { text: "      <", type: "operator" },
          { text: "CrmAnalyticsView", type: "type" },
          { text: " initialData={stats} />", type: "plain" },
        ],
      },
      {
        lineNumber: 9,
        tokens: [
          { text: "    </", type: "operator" },
          { text: "Suspense", type: "type" },
          { text: ">", type: "plain" },
        ],
      },
      {
        lineNumber: 10,
        tokens: [{ text: "  );", type: "plain" }],
      },
      {
        lineNumber: 11,
        tokens: [{ text: "}", type: "plain" }],
      },
    ],
    runtimeOutput: {
      status: "RSC Payload · 3.8 KB gzip",
      latency: "LCP 0.6s",
      region: "SSR Streaming Active",
    },
  },
];

export const SERVICES_BENTO_DATA: ServiceBentoItem[] = [
  {
    id: "frontend-microfrontend",
    number: "01",
    title: "Frontend & Micro-Frontend Architecture",
    subtitle: "Next.js App Router · Server Components · Strict TypeScript",
    description:
      "React, Next.js (SSR/ISR/Server Components) va TypeScript asosida masshtablashuvchi, yuqori tezlikdagi veb-ilovalarni loyihalash. Izolyatsiyalangan modul chegaralari va nolga yaqin client-side JS yuklamasi.",
    colSpan: 2,
    accentColor: "#635bff",
    tags: ["Next.js 15", "React Server Components", "Micro-Frontends", "TypeScript Strict"],
    visualType: "microfrontend",
    keyMetric: {
      label: "First Load JS qisqarishi",
      value: "-64% Bundle",
    },
  },
  {
    id: "api-state-management",
    number: "02",
    title: "API Integratsiya va State Management",
    subtitle: "REST API · TanStack Query · Zustand / Redux · Auth",
    description:
      "Backend xizmatlari bilan tiplangan (Type-Safe) integratsiya, ma’lumotlarni aqlli keshlash, optimistik UI yangilanishlari va murakkab global state boshqaruvi.",
    colSpan: 1,
    accentColor: "#00d4ff",
    tags: ["REST API", "TanStack Query", "Zustand / Redux", "JWT Auth"],
    visualType: "realtime",
    keyMetric: {
      label: "Kesh Samaradorligi",
      value: "99.4% HIT",
    },
  },
  {
    id: "business-automation",
    number: "03",
    title: "Biznes Avtomatlashtirish va Hisobot Modullari",
    subtitle: "Murakkab Jadvallar · Filtrlash · Excel/PDF Eksport",
    description:
      "Katta hajmdagi ma’lumotlar jadvallari, ko‘p qatlamli qidiruv/filtrlash va avtomatlashtirilgan Excel (.xlsx) hamda PDF eksport tizimlarini yuqori tezlikda ishlashini ta’minlash.",
    colSpan: 1,
    accentColor: "#0073e6",
    tags: ["Excel/XLSX Engine", "Data Tables", "Multi-Filter", "PDF Reports"],
    visualType: "automation",
    keyMetric: {
      label: "Jadval Render Tezligi",
      value: "1.2 soniya",
    },
  },
  {
    id: "crm-erp-dashboards",
    number: "04",
    title: "CRM, ERP va Boshqaruv Panellari",
    subtitle: "Admin Dashboards · Analitik Grafiklar · RBAC · Murakkab Formalar",
    description:
      "Biznes jarayonlarini boshqarish uchun ko‘p rolli (RBAC) admin panellar, interaktiv statistik diagrammalar va ko‘p bosqichli murakkab formalar tizimini noldan qurish.",
    colSpan: 2,
    accentColor: "#635bff",
    tags: ["CRM / ERP UI", "RBAC Rollar", "Analitik Grafiklar", "React Hook Form + Zod"],
    visualType: "infrastructure",
    keyMetric: {
      label: "Interfeys Silliqligi",
      value: "60 FPS UI",
    },
  },
];

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: "education-crm-platform",
    index: "01",
    category: "Multi-Tenant SaaS · Security & FSD Architecture",
    title: "Education CRM Platform (Multi-Tenant SaaS)",
    roleAndPeriod: "Frontend Developer · Next.js, TypeScript, TanStack Query · 2024–2025",
    clientType: "O‘quv Markazlar Uchun Onlayn Boshqaruv Tizimi",
    taskDescription:
      "O‘quv markazlar uchun onlayn CRM platforma: har bir o‘quv markaz o‘z subdomenida ishlaydi, 7 xil rol (admin, o‘qituvchi, o‘quvchi va boshqalar) o‘z panelini ko‘radi. Men frontend xavfsizligi va kod arxitekturasi ustida ishladim.",
    architectureHighlights: [
      "7 xil foydalanuvchi roli uchun xavfsiz kirish va RBAC tizimi: tokenlar URL va brauzer xotirasidan server boshqaruvidagi httpOnly cookie’larga ko‘chirildi hamda sessiyani avtomatik yangilash (auto-refresh) yo‘lga qo‘yildi.",
      "Frontendda multi-tenant izolyatsiya: har bir o‘quv markaz o‘z subdomenida ishlaydi va foydalanuvchi tokeniga mosligi API Gateway darajasida tekshiriladi.",
      "730 ta fayl va ~64,000 qatorli kod bazasi Feature-Sliced Design (FSD) arxitekturasiga o‘tkazildi: aylanali bog‘liqliklar (circular dependencies) 8 tadan 2 taga, lint xatolari esa 182 tadan 23 taga tushirildi va qoidalar har bir commitda avtomatik tekshiriladi.",
    ],
    deepCaseStudy: {
      stackSummary:
        "Next.js, TypeScript, TanStack Query, Feature-Sliced Design (FSD). Backend: Django + Go (jamoa).",
      challenges: [
        {
          title: "Muammo 1: Xavfsizlik va Tokenlar himoyasi",
          problem:
            "Tokenlar URL orqali uzatilardi, sahifalarda rol tekshiruvi yo‘q edi (himoya faqat API xatosiga tayanardi).",
          solution:
            "Next.js server qatlamida httpOnly cookie joriy qilindi, 401 bo‘lsa server o‘zi sessiyani yangilaydi, rol bo‘yicha Guard va subdomenlar orasida tokensiz xavfsiz o‘tish qurildi.",
          result:
            "Brauzer JavaScript’i tokenni umuman ko‘rmaydi — XSS orqali token o‘g‘irlanishi yo‘li to‘liq yopildi.",
        },
        {
          title: "Muammo 2: Chigallashgan kod bazasi (730 fayl / ~64k qator)",
          problem:
            "8 ta feature bir-biriga aylana bo‘lib bog‘langan edi, bitta o‘zgarish hammasini buzishi mumkin edi.",
          solution:
            "Bog‘liqlikni graf sifatida tahlil qilib, 20 ta modulni to‘g‘ri FSD qatlamiga ko‘chirdim va qoidani ESLint orqali har bir commitda avtomatik majburiy qildim.",
          result:
            "Aylanali guruhlar 8 → 2, qoidabuzarliklar 182 → 23 ga tushdi, tsc va production build toza holatga keldi.",
        },
      ],
      takeaway:
        "Nimani o‘rgandim: Ko‘p-ijarachili (multi-tenant) arxitekturada xavfsizlik chegarasi frontend emas, gateway’da turadi. Frontend vazifasi — foydalanuvchi tajribasi va tokenni xavfsiz saqlash.",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Feature-Sliced Design (FSD)",
      "httpOnly Cookies",
      "Multi-Tenant RBAC",
    ],
    metrics: [
      { label: "Foydalanuvchi Rollari", value: "7 ta Rol", trend: "httpOnly + RBAC Guard" },
      { label: "Aylanali Bog‘liqliklar", value: "8 → 2", trend: "730 fayl (~64k qator)" },
      { label: "Lint Qoidabuzarliklar", value: "182 → 23", trend: "Avtomatik ESLint nazorat" },
    ],
    mockupType: "education-crm",
    accentColor: "#635bff",
  },
  {
    id: "halalhub-food-marketplace",
    index: "02",
    category: "US Food Marketplace · Payments, Maps & Quality Audit",
    title: "HalalHub (US Food Marketplace)",
    roleAndPeriod: "Frontend Developer · Next.js 16, React 19, Stripe, Google Maps · 2025",
    clientType: "AQSh Bozoridagi Taom Buyurtma Marketplace Platformasi",
    taskDescription:
      "Amerika bozoriga mo‘ljallangan taom buyurtma marketplace’i. Men to‘lov tizimi, xarita, autentifikatsiya, 4 til lokalizatsiyasi va topshirish oldidan sifat auditi ustida ishladim.",
    architectureHighlights: [
      "Mijozlar uchun asosiy oqimlar: Stripe orqali onlayn to‘lovlar, Apple va Google orqali tezkor kirish, Google Maps xarita integratsiyasi va 4 ta til (EN / RU / UZ / AR).",
      "Kesh to‘qnashuvlarining (cache collisions) oldini olish: barcha ma’lumot olish so‘rovlari (data-fetching keys) yagona tiplangan `qk` reestriga birlashtirildi.",
      "Topshirish oldidan (pre-handover) audit: 13 ta muammo (API kalitlar xavfsizligi, error/loading holatlar, ishlatilmayotgan kutubxonalar va i18n) 6 ta commitda yechildi va har biri type-check, lint hamda production build bilan tasdiqlandi.",
    ],
    deepCaseStudy: {
      stackSummary:
        "Next.js 16, React 19, TanStack Query, Stripe, Google Maps, i18n (EN/RU/UZ/AR).",
      constraintOrNote:
        "Cheklov: Backendni o‘zgartirib bo‘lmasdi — barcha tuzatishlar faqat frontend tomonda (Next.js BFF route’lar yordamida) bajarilishi kerak edi.",
      challenges: [
        {
          title: "Muammo 1: Feature’lar orasida Kesh To‘qnashuvi (Cache Collisions)",
          problem:
            "Turli feature’lar bir xil query key ishlatgani uchun TanStack Query keshlari bir-birini ustiga yozib yuborardi.",
          solution:
            "Barcha so‘rov kalitlarini bitta qat’iy tiplangan `qk` registry’ga yig‘dim va har bir feature uchun alohida root ajratdim.",
          result:
            "Kesh to‘qnashuvlari to‘liq bartaraf etildi va ma’lumotlar sinxronligi 100% kafolatlandi.",
        },
        {
          title: "Muammo 2: Topshirish oldidan sifat va xavfsizlik auditi",
          problem:
            "Topshirishdan oldin mijoz sinmagan va tugallanmagan joylarni (API kalitlar ochiqligi, xato/yuklanish holatlari, chala tarjimalar) topmasligi kerak edi.",
          solution:
            "Raqamlangan batch tizimi joriy qilindi — har bir batchdan keyin majburiy `tsc` / `eslint` / `next build` tekshiruvi va alohida toza commit qilindi.",
          result:
            "13 ta muammo (API key xavfsizligi, error/loading states, unused deps, i18n) 6 ta tekshirilgan commitda to‘liq tuzatildi.",
        },
      ],
      takeaway:
        "Natija: Backendga tegmasdan Next.js BFF qatlami va qat’iy batch-audit yordamida loyiha production-ready holatda mijozga topshirildi.",
    },
    technologies: [
      "Next.js 16",
      "React 19",
      "TanStack Query",
      "Stripe Payments",
      "Google Maps",
      "i18n (EN/RU/UZ/AR)",
    ],
    metrics: [
      { label: "Hal Qilingan Muammolar", value: "13 ta", trend: "6 ta toza commitda" },
      { label: "Lokalizatsiya Qamrovi", value: "4 ta Til", trend: "EN · RU · UZ · AR" },
      { label: "Query Key Arxitekturasi", value: "Typed qk", trend: "0 Cache Collision" },
    ],
    mockupType: "halalhub",
    accentColor: "#0073e6",
  },
  {
    id: "logistics-driver-director-system",
    index: "03",
    category: "On-Site UX Discovery · Fleet & Executive Dashboard",
    title: "Logistika: Haydovchilar va Rahbar Boshqaruv Tizimi",
    roleAndPeriod: "Frontend & Product Engineer · Next.js, TypeScript, Excel Engine · 2024",
    clientType: "Logistika va Yetkazib Berish Biznesi Avtomatlashtiruvi",
    taskDescription:
      "Logistika biznesi uchun ichki boshqaruv platformasi: biznesning o‘ziga bevosita borib, haydovchilar va korxona rahbari bilan birga yurib, har ikki tomon uchun eng qulay bo‘lgan ish jarayoni (UX), lokatsiya nazorati va hisobotlar tizimini yaratdim.",
    architectureHighlights: [
      "On-Site Biznes va UX Tahlil: bevosita ish jarayoniga kirib, haydovchilar va rahbar bilan birga yurib, real og‘riqli nuqtalarni o‘rgandim hamda yo‘lda chalg‘imasdan 2–3 bosishda ishlaydigan haydovchi interfeysini loyihaladim.",
      "Rahbar uchun Boshqaruv va Lokatsiya Paneli: korxona rahbari har bir haydovchining joriy holatini, yo‘nalishini va bajarilgan buyurtmalarini qo‘ng‘iroqlarsiz bitta ekranda ko‘ra oladigan dashboard qurdim.",
      "Ma’lumotlar bazasi sxemasi va Excel (.xlsx) hisobotlar moduli: qog‘oz va tarqoq jadvallar o‘rniga bir tugma orqali tayyor bo‘ladigan, rahbariyat uchun moslashtirilgan avtomatik Excel eksport dvigatelini ishlab chiqdim.",
    ],
    deepCaseStudy: {
      stackSummary:
        "Next.js, TypeScript, REST API, Real-Time Location Flow, Excel (.xlsx) Export Engine, Mobile-First Driver UX.",
      constraintOrNote:
        "Yondashuv: Tayyor shablon ko‘chirish o‘rniga biznesning ichiga kirib, haydovchi va rahbarning kunlik ishini jonli kuzatish orqali UX qarorlar qabul qilindi.",
      challenges: [
        {
          title: "Muammo 1: Haydovchilar uchun yo‘lda murakkab dasturdan foydalanish qiyinligi",
          problem:
            "Haydovchilar harakatda bo‘lgani sababli ko‘p maydonli murakkab formalarni to‘ldira olmasdi va tizimdan foydalanishdan qochardi.",
          solution:
            "Haydovchilar bilan birga yurib, ularning odatlarini o‘rgandim va ekranda faqat eng zarur yirik tugmalar, tezkor status almashinuvi hamda avtomatik geoma’lumot yuborish oqimini qildim.",
          result:
            "Haydovchilar qo‘shimcha o‘qitishsiz tizimga tez moslashdi va buyurtma holatini belgilash vaqti bir necha soniyagacha qisqardi.",
        },
        {
          title: "Muammo 2: Rahbar uchun shaffoflik va hisobotlarning qo‘lda yig‘ilishi",
          problem:
            "Rahbar kim qayerda ekanini bilish uchun doimiy qo‘ng‘iroq qilar, kunlik va oylik hisobotlar esa ko‘p vaqt olardi.",
          solution:
            "Rahbar uchun barcha faol reyslarni jonli ko‘rsatuvchi markaziy panel va ma’lumotlar bazasidan to‘g‘ridan-to‘g‘ri formatlangan `.xlsx` (Excel) hisobot chiqarib beruvchi modul yaratdim.",
          result:
            "Boshqaruv to‘liq shaffoflashdi va rahbar uchun hisobot tayyorlash vaqti soatlardan 1–2 soniyaga tushdi.",
        },
      ],
      takeaway:
        "Nimani o‘rgandim: Eng yaxshi mahsulot va UX ofisda taxmin qilish bilan emas, biznesning ichiga borib, haydovchi va rahbarning yonida yurib, ularning haqiqiy ehtiyojini tushunganda yaratiladi.",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "On-Site UX Research",
      "Driver Mobile UI",
      "Executive Dashboard",
      "Excel (.xlsx) Export",
    ],
    metrics: [
      { label: "Biznes Tahlil", value: "On-Site UX", trend: "Haydovchi + Rahbar" },
      { label: "Haydovchi Oqimi", value: "2-3 Bosish", trend: "Mobile-First UI" },
      { label: "Rahbar Hisoboti", value: ".XLSX Auto", trend: "1 soniyada eksport" },
    ],
    mockupType: "logistics-ux",
    accentColor: "#635bff",
  },
];

export const CAREER_TIMELINE_DATA: CareerStage[] = [
  {
    id: "stage-1-intensive",
    stepNumber: "BOSQICH 01",
    period: "Boshlang‘ich Muhandislik Fazasi",
    role: "Intensiv Amaliyot (Frontend Engineering)",
    stageLabel: "Foundation & Core UI Architecture",
    description:
      "Asosiy frontend texnologiyalarini chuqur o‘zlashtirish, real loyihalarda komponentlar arxitekturasi va state management bilan ishlash.",
    achievements: [
      "Qayta ishlatiluvchi (reusable), qat’iy tiplangan UI komponentlar kutubxonasi va dizayn tizimi tokenlarini shakllantirish.",
      "Murakkab asinxron ma’lumotlar oqimi, kesh boshqaruvi va formalar validatsiyasini real prodakshen loyihalarda joriy etish.",
      "Brauzer render sikli (Critical Rendering Path), DOM optimizatsiyasi va responsiv layout qoidalarini mukammal egallash.",
    ],
    stack: ["JavaScript ES6+", "TypeScript", "React", "Tailwind CSS", "State Management"],
  },
  {
    id: "stage-2-software-engineer",
    stepNumber: "BOSQICH 02",
    period: "Professional Muhandislik Fazasi",
    role: "Frontend & Product Software Engineer",
    stageLabel: "Multi-Tenant SaaS & Business Automation",
    description:
      "Murakkab biznes-mantiqqa ega ko‘p-ijarachili (multi-tenant) CRM/ERP tizimlarni va real biznes jarayonlarini mustaqil loyihalash.",
    achievements: [
      "Next.js (SSR, ISR, App Router) asosida 7 rolli (RBAC) o‘quv markazlar CRM platformasi va rahbar boshqaruv panellarini arxitektura qilish.",
      "Biznes ichiga kirib (On-Site UX Discovery) haydovchilar va rahbarlar uchun eng qulay interfeys hamda 1 soniyada ishlovchi avtomatik Excel (.xlsx) hisobot modullarini yaratish.",
      "730+ faylli yirik kod bazalarini Feature-Sliced Design (FSD) arxitekturasiga o‘tkazish va aylanali bog‘liqliklarni (circular dependencies) bartaraf etish.",
    ],
    stack: ["Next.js App Router", "Feature-Sliced Design (FSD)", "TanStack Query", "Excel (.xlsx) Engine", "RBAC Security"],
  },
  {
    id: "stage-3-system-architecture",
    stepNumber: "BOSQICH 03",
    period: "Hozirgi Faza · Lead Frontend & Production Delivery",
    role: "Frontend Architecture & Quality Engineering",
    stageLabel: "Enterprise Security, BFF & Global Marketplaces",
    description:
      "Xalqaro (AQSh va mahalliy) loyihalarda BFF qatlami, xavfsiz autentifikatsiya, to‘lov tizimlari va topshirish oldidan to‘liq sifat auditini amalga oshirish.",
    achievements: [
      "Next.js 15/16 va React 19 asosida Stripe to‘lov tizimi, Google Maps, Apple/Google OAuth va 4 tilli (EN/RU/UZ/AR) marketplace oqimlarini qurish.",
      "Tokenlarni URL va localStorage’dan server boshqaruvidagi httpOnly cookie’larga o‘tkazish hamda yagona tiplangan `qk` query-key reestri orqali kesh to‘qnashuvlarini 0 ga tushirish.",
      "Topshirish oldidan (pre-handover) batch-audit tizimi: har bir commitni majburiy `tsc`, `eslint` va `next build` tekshiruvidan o‘tkazib, 99/100 Lighthouse natijasiga erishish.",
    ],
    stack: ["Next.js 15/16 & React 19", "httpOnly Cookie BFF", "Stripe & Google Maps", "Typed Query Registry", "CI/CD & Quality Audit"],
  },
];

export const ENGINEERING_METRICS_DATA: EngineeringMetric[] = [
  {
    id: "metric-fsd",
    value: "64K+",
    label: "FSD arxitekturasiga o‘tkazilgan kod bazasi",
    sublabel: "730 ta fayl · Circular deps 8 → 2 ga qisqartirildi",
    accent: "cyan",
  },
  {
    id: "metric-rbac",
    value: "7 Rol",
    label: "Multi-Tenant RBAC va httpOnly Xavfsizlik",
    sublabel: "Subdomen izolyatsiyasi va XSS’dan 100% himoya",
    accent: "purple",
  },
  {
    id: "metric-typescript",
    value: "100%",
    label: "TypeScript Strict & Typed Query Registry",
    sublabel: "0 kesh to‘qnashuvi (Cache Collision) va toza build",
    accent: "blue",
  },
  {
    id: "metric-lighthouse",
    value: "99/100",
    label: "Google Lighthouse & Core Web Vitals",
    sublabel: "Next.js RSC, zero-layout-shift va 60fps UI",
    accent: "emerald",
  },
];

export const TECH_STACK_LAYERS: TechStackCategory[] = [
  {
    id: "layer-frontend",
    layer: "QATLAM 01 · CORE FRONTEND & ARCHITECTURE",
    title: "Frontend & FSD Arxitektura",
    description: "Server Components, Feature-Sliced Design (FSD) va 60fps interaktiv interfeyslar.",
    items: [
      { name: "Next.js 15 / 16 (App Router)", role: "SSR, BFF Routes, React Server Components", level: "Expert" },
      { name: "React 19 & TypeScript 5", role: "Strict Mode, Custom Hooks, Concurrency", level: "Expert" },
      { name: "Feature-Sliced Design (FSD)", role: "730+ faylli yirik kod bazalar arxitekturasi", level: "Expert" },
      { name: "Tailwind CSS & Framer Motion", role: "Design Systems, GPU Spring Physics", level: "Expert" },
    ],
  },
  {
    id: "layer-realtime",
    layer: "QATLAM 02 · STATE, SECURITY & INTEGRATIONS",
    title: "State, Xavfsizlik va To‘lovlar",
    description: "Tiplangan kesh reestri, httpOnly cookie xavfsizligi va xalqaro servislar integratsiyasi.",
    items: [
      { name: "TanStack Query v5 (Typed qk)", role: "Zero Cache Collision, Optimistic UI", level: "Expert" },
      { name: "Multi-Tenant RBAC & Auth", role: "httpOnly Cookies, Auto-Refresh, 7-Role Guard", level: "Expert" },
      { name: "Stripe & Google Maps API", role: "Checkout, Apple/Google OAuth, Geo-Zones", level: "Expert" },
      { name: "Zustand, RHF & Zod", role: "Global State & Schema-Validated Forms", level: "Expert" },
    ],
  },
  {
    id: "layer-infra",
    layer: "QATLAM 03 · PRODUCT UX, REPORTS & DELIVERY",
    title: "Biznes UX, Hisobotlar va Sifat",
    description: "On-site UX tahlil, avtomatlashtirilgan Excel dvigatellari va qat’iy sifat nazorati.",
    items: [
      { name: "Excel (.xlsx) & PDF Engine", role: "1 soniyada avtomatik rahbar hisobotlari", level: "Expert" },
      { name: "On-Site UX & Product Discovery", role: "Haydovchi va rahbar oqimlarini loyihalash", level: "Expert" },
      { name: "Multi-Language i18n (4 Til)", role: "EN / RU / UZ / AR RTL & LTR lokalizatsiya", level: "Expert" },
      { name: "Pre-Handover Quality Audit", role: "ESLint Boundaries, Strict TSC, CI/CD Deploy", level: "Expert" },
    ],
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    tag: "Arxitektura & FSD",
    question: "Omonbek Xojamurodov qaysi texnologiyalar va arxitekturada ishlaydi?",
    answer:
      "Asosiy ixtisoslashuv — Next.js (14/15/16 App Router), React 19, TypeScript (Strict Mode), TanStack Query, Zustand va Tailwind CSS. Yirik loyihalarda kod chigallashib ketmasligi uchun Feature-Sliced Design (FSD) arxitekturasi va ESLint chegara qoidalari qo‘llaniladi.",
  },
  {
    id: "faq-2",
    tag: "Xavfsizlik & Multi-Tenant",
    question: "Ko‘p rolli (RBAC) va ko‘p subdomenli (Multi-Tenant) CRM/ERP tizimlarda xavfsizlik qanday ta’minlanadi?",
    answer:
      "Tokenlar brauzer xotirasida (localStorage) yoki URL’da saqlanmaydi. Next.js BFF server qatlami orqali httpOnly cookie’lardan foydalaniladi, 401 holatida sessiya serverda avtomatik yangilanadi va har bir rol (masalan, 7 xil rol) maxsus Route Guard orqali himoyalanadi.",
  },
  {
    id: "faq-3",
    tag: "Mavjud Loyihalar Auditi",
    question: "Mavjud (chigallashgan yoki sekin ishlayotgan) frontend kod bazasini tartibga solib bera olasizmi?",
    answer:
      "Ha. Masalan, 730 ta fayl va 64,000 qatordan iborat CRM loyihada aylanali bog‘liqliklarni (circular dependencies) 8 tadan 2 taga, lint xatolarini 182 tadan 23 taga tushirib, kesh to‘qnashuvlarini yagona tiplangan `qk` reestri bilan to‘liq bartaraf etganman.",
  },
  {
    id: "faq-4",
    tag: "Bog‘lanish & Hamkorlik",
    question: "Yangi loyiha bo‘yicha qanday bog‘lanish mumkin va javob vaqti qancha?",
    answer:
      "Saytdagi tezkor loyiha brifi formasi (xabar to‘g‘ridan-to‘g‘ri Telegram botga boradi), @the_khojamurodov Telegram manzili yoki +998 77 777 45 02 telefon raqami orqali bog‘lanishingiz mumkin. Odatda 2 soat ichida texnik javob beriladi.",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    handle: "@omonboyweb",
    href: "https://github.com/omonboyweb",
    platform: "github",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "in/omonbekxojamurodov",
    href: "https://www.linkedin.com/in/omonbekxojamurodov/",
    platform: "linkedin",
  },
  {
    id: "telegram",
    name: "Telegram",
    handle: "@the_khojamurodov",
    href: "https://t.me/the_khojamurodov",
    platform: "telegram",
  },
  {
    id: "phone",
    name: "Telefon",
    handle: "+998 77 777 45 02",
    href: "tel:+998777774502",
    platform: "phone",
  },
  {
    id: "email",
    name: "Email",
    handle: "info@eval42.uz",
    href: "mailto:info@eval42.uz",
    platform: "email",
  },
];

