import type { MetadataRoute } from "next";
import { ENGINEER_PROFILE } from "@/data/portfolioData";
import { SEO_DESCRIPTION, SITE_NAME } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: ENGINEER_PROFILE.name,
    description: SEO_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#f6f9fc",
    theme_color: "#0a2540",
    lang: "uz",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
