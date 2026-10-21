import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          "uz-UZ": SITE_URL,
          "en-US": SITE_URL,
          "ru-RU": SITE_URL,
        },
      },
    },
  ];
}
