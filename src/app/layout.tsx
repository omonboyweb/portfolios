import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { ENGINEER_PROFILE } from "@/data/portfolioData";
import {
  SEO_DESCRIPTION,
  SEO_KEYWORDS,
  SEO_TITLE_DEFAULT,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a2540",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO_TITLE_DEFAULT,
    template: `%s | ${ENGINEER_PROFILE.name}`,
  },
  description: SEO_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: SEO_KEYWORDS,
  authors: [{ name: ENGINEER_PROFILE.name, url: SITE_URL }],
  creator: ENGINEER_PROFILE.name,
  publisher: ENGINEER_PROFILE.name,
  category: "technology",
  alternates: {
    canonical: "/",
    languages: {
      "uz-UZ": "/",
      "en-US": "/",
      "ru-RU": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    alternateLocale: ["en_US", "ru_RU"],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SEO_TITLE_DEFAULT,
    description: SEO_DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${ENGINEER_PROFILE.name} — ${ENGINEER_PROFILE.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE_DEFAULT,
    description: SEO_DESCRIPTION,
    creator: "@the_khojamurodov",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans bg-[#f6f9fc] text-[#425466] selection:bg-[#635bff] selection:text-white">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:rounded-xl focus:bg-[#0a2540] focus:text-white focus:font-semibold focus:shadow-lg"
        >
          Asosiy tarkibga o&apos;tish
        </a>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
