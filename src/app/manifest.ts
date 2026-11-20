import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "farhansyaah — T. Farhan Syah, S.Kom | 16-Bit RPG Portfolio",
    short_name: "farhansyaah",
    description:
      "Portofolio resmi T. Farhan Syah, S.Kom (farhansyaah) - Back-End & Web Developer lulusan S1 Informatika Universitas Syiah Kuala (USK).",
    start_url: "/",
    display: "standalone",
    background_color: "#DCEEFF",
    theme_color: "#1B3A8A",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
