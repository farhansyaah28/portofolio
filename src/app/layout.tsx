import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://farhansyaah.me";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "T. Farhan Syah, S.Kom | Back-End & Web Developer Portfolio",
    template: "%s | T. Farhan Syah",
  },
  description:
    "Portofolio resmi T. Farhan Syah, S.Kom (farhansyaah) - Lulusan S1 Informatika Universitas Syiah Kuala (USK), Back-End & Web Developer spesialis NestJS, Express.js, Next.js, TypeScript, dan PostgreSQL.",
  keywords: [
    "T. Farhan Syah",
    "Teuku Farhan Syah",
    "farhansyaah",
    "Back-End Developer",
    "Web Developer",
    "NestJS Developer",
    "Next.js Developer",
    "Informatika USK",
    "Universitas Syiah Kuala",
    "Portfolio RPG 16-bit",
  ],
  authors: [{ name: "T. Farhan Syah, S.Kom", url: SITE_URL }],
  creator: "T. Farhan Syah, S.Kom",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "T. Farhan Syah, S.Kom | Back-End & Web Developer Portfolio",
    description:
      "Jelajahi dunia portofolio RPG 16-bit T. Farhan Syah, S.Kom — Back-End & Web Developer lulusan Informatika Universitas Syiah Kuala.",
    url: SITE_URL,
    siteName: "T. Farhan Syah Portfolio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/assets/hero-programmer.png",
        width: 512,
        height: 512,
        alt: "T. Farhan Syah, S.Kom - Back-End & Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "T. Farhan Syah, S.Kom | Back-End & Web Developer Portfolio",
    description:
      "Portofolio RPG 16-bit T. Farhan Syah, S.Kom — Back-End & Web Developer (NestJS, Next.js, TypeScript, PostgreSQL).",
    images: ["/assets/hero-programmer.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "T. Farhan Syah, S.Kom",
        alternateName: ["Teuku Farhan Syah", "farhansyaah"],
        url: SITE_URL,
        image: `${SITE_URL}/assets/hero-programmer.png`,
        jobTitle: "Back-End & Web Developer",
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Universitas Syiah Kuala",
        },
        sameAs: [
          "https://github.com/farhansyaah28",
          "https://www.linkedin.com/in/farhansyaah/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "T. Farhan Syah, S.Kom — 16-Bit RPG Portfolio",
        publisher: {
          "@id": `${SITE_URL}/#person`,
        },
        inLanguage: "id-ID",
      },
    ],
  };

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Silkscreen:wght@400;700&family=VT323&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#DCEEFF] text-[#1B3A8A] font-rpg-body antialiased selection:bg-[#F7C531] selection:text-[#1B3A8A] min-h-screen">
        {children}
      </body>
    </html>
  );
}
