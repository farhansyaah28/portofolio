import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://farhansyaah.me",
      lastModified: "2026-11-20",
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        "https://farhansyaah.me/assets/hero-programmer.png",
        "https://farhansyaah.me/assets/hero-graduated.png",
        "https://farhansyaah.me/assets/projects/sisurat.png",
        "https://farhansyaah.me/assets/projects/simagang.jpg",
      ],
    },
  ];
}
