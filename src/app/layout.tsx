import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "farhansyaah",
  description: "Portofolio T. Farhan Syah, S.Kom - Application Developer bertema RPG 16-bit SNES klasik: projects, organisasi, dan mini game eksplorasi.",
  keywords: ["Informatika", "Back-end Developer", "Application Developer", "Portfolio", "Retro RPG", "Pixel Art", "USK"],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "farhansyaah",
    description: "Jelajahi dunia portofolio RPG 16-bit klasik bergaya SNES dengan mini game interaktif.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Silkscreen:wght@400;700&family=VT323&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#DCEEFF] text-[#1B3A8A] font-rpg-body antialiased selection:bg-[#F7C531] selection:text-[#1B3A8A] min-h-screen">
        {children}
      </body>
    </html>
  );
}
