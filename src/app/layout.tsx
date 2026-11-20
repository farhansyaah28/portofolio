import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://farhansyaah.me";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "farhansyaah — T. Farhan Syah, S.Kom | Back-End & Web Developer Portfolio",
    template: "%s | farhansyaah (T. Farhan Syah, S.Kom)",
  },
  description:
    "Website portofolio resmi T. Farhan Syah, S.Kom (Teuku Farhan Syah / farhansyaah) — Back-End & Web Developer lulusan S1 Informatika Universitas Syiah Kuala (USK). Spesialis NestJS, Express.js, Next.js, TypeScript, dan PostgreSQL.",
  applicationName: "farhansyaah Portfolio",
  keywords: [
    "farhansyaah",
    "farhansyaah.me",
    "T. Farhan Syah",
    "T. Farhan Syah, S.Kom",
    "Teuku Farhan Syah",
    "Farhan Syah USK",
    "Farhan Syah Informatika",
    "Back-End Developer Aceh",
    "Web Developer Banda Aceh",
    "NestJS Developer Indonesia",
    "Next.js Developer Indonesia",
    "Informatika Universitas Syiah Kuala",
    "Portfolio RPG 16-bit",
  ],
  authors: [{ name: "T. Farhan Syah, S.Kom (farhansyaah)", url: SITE_URL }],
  creator: "T. Farhan Syah, S.Kom",
  publisher: "T. Farhan Syah, S.Kom",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "farhansyaah — T. Farhan Syah, S.Kom | Back-End & Web Developer",
    description:
      "Jelajahi portofolio interaktif RPG 16-bit T. Farhan Syah, S.Kom (farhansyaah) — Back-End & Web Developer lulusan S1 Informatika Universitas Syiah Kuala (USK).",
    url: SITE_URL,
    siteName: "farhansyaah — T. Farhan Syah Portfolio",
    locale: "id_ID",
    type: "profile",
    images: [
      {
        url: "/assets/hero-programmer.png",
        width: 512,
        height: 512,
        alt: "T. Farhan Syah, S.Kom (farhansyaah) - Back-End & Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "farhansyaah — T. Farhan Syah, S.Kom | Back-End & Web Developer",
    description:
      "Portofolio RPG 16-bit T. Farhan Syah, S.Kom (farhansyaah) — Back-End & Web Developer (NestJS, Next.js, TypeScript, PostgreSQL).",
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
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profilepage`,
        url: SITE_URL,
        name: "farhansyaah — T. Farhan Syah, S.Kom | Back-End & Web Developer Portfolio",
        inLanguage: "id-ID",
        mainEntity: {
          "@id": `${SITE_URL}/#person`,
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "T. Farhan Syah, S.Kom",
        givenName: "Teuku Farhan",
        familyName: "Syah",
        alternateName: [
          "farhansyaah",
          "Teuku Farhan Syah",
          "T. Farhan Syah",
          "Farhan Syah",
          "farhansyaah28",
        ],
        url: SITE_URL,
        image: `${SITE_URL}/assets/hero-programmer.png`,
        email: "mailto:teukufarhan028@gmail.com",
        telephone: "+62895613105670",
        jobTitle: "Back-End & Web Developer",
        description:
          "Lulusan S1 Informatika Universitas Syiah Kuala (IPK 3,54). Spesialis pengembangan Back-End, REST API, dan Web menggunakan NestJS, Express.js, Next.js, TypeScript, dan PostgreSQL.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Banda Aceh",
          addressRegion: "Aceh",
          addressCountry: "ID",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Universitas Syiah Kuala",
          sameAs: "https://usk.ac.id",
        },
        knowsAbout: [
          "NestJS",
          "Express.js",
          "Next.js",
          "React",
          "TypeScript",
          "JavaScript",
          "PostgreSQL",
          "MySQL",
          "Supabase",
          "REST API",
          "Back-End Development",
          "Software Engineering",
        ],
        sameAs: [
          "https://farhansyaah.me",
          "https://www.farhansyaah.me",
          "https://github.com/farhansyaah28",
          "https://www.linkedin.com/in/farhansyaah/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "farhansyaah — T. Farhan Syah, S.Kom Portfolio",
        alternateName: ["farhansyaah", "T. Farhan Syah Portfolio"],
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

        {/* Ringkasan Semantik SEO & Aksesibilitas untuk Mesin Pencari (Googlebot) */}
        <aside className="sr-only" aria-label="Ringkasan Profil T. Farhan Syah (farhansyaah)">
          <h2>T. Farhan Syah, S.Kom (Teuku Farhan Syah / farhansyaah) — Back-End &amp; Web Developer</h2>
          <p>
            Portofolio resmi T. Farhan Syah, S.Kom (farhansyaah), lulusan S1 Informatika Universitas Syiah Kuala (USK) Banda Aceh dengan IPK 3,54.
            Spesialis pengembangan aplikasi web dan REST API menggunakan NestJS, Express.js, Next.js, TypeScript, dan PostgreSQL.
          </p>
          <h3>Daftar Proyek Software (Projects)</h3>
          <ul>
            <li>SEHATI – Sekolah Hijau &amp; Anti Plastik (NestJS, TypeScript, PostgreSQL, Supabase, 136 REST API Endpoints)</li>
            <li>SiSurat – Sistem Administrasi Terpadu Gampong Ilie (Node.js, Express.js, PostgreSQL, Tailwind CSS)</li>
            <li>Sistem Manajemen Magang (SIMANG) BAPPEDA Aceh (Next.js, React, TypeScript, PostgreSQL, Geofencing)</li>
            <li>CBT PMB – Sistem Ujian Online Politeknik Aceh (PHP, MySQL, JavaScript)</li>
            <li>SIPAK – Sistem Penyewaan Aset Kampus Politeknik Aceh (PHP, MySQL, Tailwind CSS)</li>
          </ul>
          <h3>Pengalaman &amp; Organisasi</h3>
          <ul>
            <li>Asisten Praktikum Rekayasa Perangkat Lunak, Jaringan Komputer, dan Kewirausahaan — FMIPA Universitas Syiah Kuala</li>
            <li>Ketua Departemen Sosial Masyarakat — BEM FMIPA Universitas Syiah Kuala &amp; HMIF USK</li>
            <li>Staf Sekretariat (Magang) — BAPPEDA Aceh</li>
            <li>Pemandu Wisata — Hayeue Bulud Adventure Banda Aceh</li>
          </ul>
          <h3>Prestasi &amp; Penghargaan</h3>
          <ul>
            <li>Medallion for Excellence Bidang Keamanan Siber (Cyber Security) – LKS Tingkat Nasional 2021 (Puspresnas Kemendikbudristek)</li>
            <li>Juara 2 Bidang Cloud Computing – LKS Tingkat Provinsi Aceh 2021</li>
            <li>Liaison Officer (LO) Kontingen Bangka Belitung – PON XXI Aceh-Sumut 2024</li>
            <li>Bendahara Acara – PPN XIV Aceh 2026</li>
          </ul>
        </aside>
      </body>
    </html>
  );
}
