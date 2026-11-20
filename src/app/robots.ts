import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://farhansyaah.me/sitemap.xml",
    host: "https://farhansyaah.me",
  };
}
