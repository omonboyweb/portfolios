import React from "react";
import {
  CASE_STUDIES_DATA,
  ENGINEER_PROFILE,
  FAQ_ITEMS,
  SERVICES_BENTO_DATA,
  SOCIAL_LINKS,
} from "@/data/portfolioData";
import {
  SEO_DESCRIPTION,
  SEO_TITLE_DEFAULT,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

export const JsonLd: React.FC = () => {
  const sameAsLinks = SOCIAL_LINKS.filter((link) =>
    link.href.startsWith("http")
  ).map((link) => link.href);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: ENGINEER_PROFILE.name,
        givenName: "Omonbek",
        familyName: "Xojamurodov",
        alternateName: [
          "Omonbek Khojamurodov",
          "Omonbek Xo'jamurodov",
          "Omonbek Xo‘jamurodov",
          "Омонбек Хожамуродов",
          "Omonbek",
          "omonboyweb",
          "the_khojamurodov",
        ],
        jobTitle: ENGINEER_PROFILE.role,
        description: SEO_DESCRIPTION,
        url: SITE_URL,
        image: `${SITE_URL}/opengraph-image`,
        email: `mailto:${ENGINEER_PROFILE.email}`,
        telephone: ENGINEER_PROFILE.phone.replace(/\s+/g, ""),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tashkent",
          addressCountry: "UZ",
        },
        sameAs: sameAsLinks,
        knowsLanguage: ["uz", "en", "ru"],
        knowsAbout: [
          "Software Engineering",
          "Frontend Architecture",
          "Next.js",
          "React",
          "TypeScript",
          "Feature-Sliced Design (FSD)",
          "TanStack Query",
          "Multi-Tenant SaaS Architecture",
          "Role-Based Access Control (RBAC)",
          "Stripe Payment Integration",
          "Google Maps API",
          "CRM and ERP Systems",
          "Excel (.xlsx) Reporting Automation",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SEO_DESCRIPTION,
        inLanguage: "uz-UZ",
        publisher: {
          "@id": `${SITE_URL}/#person`,
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profilepage`,
        url: SITE_URL,
        name: SEO_TITLE_DEFAULT,
        description: SEO_DESCRIPTION,
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#person`,
        },
        mainEntity: {
          "@id": `${SITE_URL}/#person`,
        },
        inLanguage: "uz-UZ",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: "Omonbek Xojamurodov — Frontend & Software Engineering Services",
        url: SITE_URL,
        telephone: ENGINEER_PROFILE.phone.replace(/\s+/g, ""),
        email: ENGINEER_PROFILE.email,
        priceRange: "$$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tashkent",
          addressCountry: "UZ",
        },
        areaServed: [
          { "@type": "Country", name: "Uzbekistan" },
          { "@type": "Country", name: "United States" },
        ],
        provider: {
          "@id": `${SITE_URL}/#person`,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Muhandislik Xizmatlari",
          itemListElement: SERVICES_BENTO_DATA.map((service, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
            },
          })),
        },
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#projects-list`,
        name: "Omonbek Xojamurodov — Real Production Case Studies",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: CASE_STUDIES_DATA.length,
        itemListElement: CASE_STUDIES_DATA.map((project, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          item: {
            "@type": "CreativeWork",
            "@id": `${SITE_URL}/#${project.id}`,
            name: project.title,
            headline: `${project.title} — ${project.category}`,
            description: project.taskDescription,
            author: {
              "@id": `${SITE_URL}/#person`,
            },
            keywords: project.technologies.join(", "),
          },
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq-schema`,
        mainEntity: FAQ_ITEMS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default JsonLd;
