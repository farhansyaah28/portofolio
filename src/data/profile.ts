export interface InventoryItem {
  name: string;
  desc: string;
  type: string;
  rarity: string;
}

export interface CharacterSkin {
  id: "graduated" | "programmer" | "organisasi" | "tourguide";
  name: string;
  roleTitle: string;
  imageSrc: string;
  perk: string;
  description: string;
  stats: { name: string; value: number; max: number }[];
  inventory: InventoryItem[];
  highlightProjects: string[]; // project ids
  highlightExperiences: string[]; // experience ids
  highlightAchievements: string[]; // achievement ids
}

export const CHARACTER_SKINS: CharacterSkin[] = [
  {
    id: "programmer",
    name: "Software Engineer",
    roleTitle: "Back-End & Web Developer",
    imageSrc: "/assets/hero-programmer.png",
    perk: "NestJS & TypeScript | REST API Mastery",
    description: "Spesialis pengembangan back-end dan REST API dengan NestJS, Express.js, Next.js, TypeScript, dan PostgreSQL. Berpengalaman membangun sistem skala produksi dengan autentikasi JWT dan pengujian performa.",
    stats: [
      { name: "BACK-END (NestJS / Express)", value: 93, max: 100 },
      { name: "TYPESCRIPT & REST API", value: 95, max: 100 },
      { name: "DATABASE (PostgreSQL / MySQL)", value: 90, max: 100 },
      { name: "FRONTEND (React / Next.js)", value: 88, max: 100 },
      { name: "TESTING & DEBUGGING", value: 91, max: 100 },
    ],
    inventory: [
      {
        name: "NestJS & Express.js",
        desc: "Framework back-end utama untuk membangun REST API produksi hingga 136 endpoint, modular controller, dan JWT auth.",
        type: "Backend",
        rarity: "Utama"
      },
      {
        name: "TypeScript & JS",
        desc: "Bahasa utama dalam logika sistem aplikasi modern dengan typing ketat, performa tinggi, dan clean architecture.",
        type: "Language",
        rarity: "Keahlian"
      },
      {
        name: "PostgreSQL & Supabase",
        desc: "Pengelolaan basis data relasional, desain skema, relasi tabel efisien, query optimization, serta cloud hosting.",
        type: "Database",
        rarity: "Keahlian"
      },
      {
        name: "Next.js & React",
        desc: "Pengembangan antarmuka web modern dengan server components, integrasi REST API, dan styling responsif Tailwind CSS.",
        type: "Frontend",
        rarity: "Keahlian"
      },
      {
        name: "REST API & Postman",
        desc: "Perancangan endpoint standar REST, pengujian fungsional API, dan stress testing beban 100 concurrent users.",
        type: "Testing",
        rarity: "Tools"
      },
      {
        name: "Git & Metodologi Scrum",
        desc: "Manajemen version control repositori GitHub dan penerapan siklus kerja sprint tangkas (Agile/Scrum).",
        type: "Metodologi",
        rarity: "Workflow"
      }
    ],
    highlightProjects: ["quest-1", "quest-2", "quest-3", "quest-4", "quest-5"],
    highlightExperiences: ["exp-1", "exp-2"],
    highlightAchievements: ["ach-1", "ach-2"],
  },
  {
    id: "graduated",
    name: "Wisudawan USK",
    roleTitle: "Sarjana Komputer (S.Kom) - Universitas Syiah Kuala",
    imageSrc: "/assets/hero-graduated.png",
    perk: "IPK 3.54 | Degree Unlocked",
    description: "Telah resmi menyelesaikan studi S1 Informatika di Universitas Syiah Kuala dengan IPK 3,54, berfondasi kuat pada algoritma, rekayasa perangkat lunak, dan kecerdasan komputasi.",
    stats: [
      { name: "ALGORITMA & DASAR TEORI", value: 95, max: 100 },
      { name: "REKAYASA PERANGKAT LUNAK", value: 92, max: 100 },
      { name: "METODOLOGI RISET & SKRIPSI", value: 90, max: 100 },
      { name: "KECERDASAN BUATAN / ML", value: 84, max: 100 },
      { name: "PROBLEM SOLVING", value: 94, max: 100 },
    ],
    inventory: [
      {
        name: "Ijazah S1 (IPK 3.54)",
        desc: "Kelulusan resmi Sarjana Komputer dari Universitas Syiah Kuala dengan IPK 3,54 berpredikat sangat memuaskan.",
        type: "Akademik",
        rarity: "Utama"
      },
      {
        name: "Riset & Algoritma",
        desc: "Penguasaan dasar teori komputasi, struktur data, metodologi riset ilmiah, dan penyelesaian tugas akhir skripsi.",
        type: "Fondasi",
        rarity: "Keahlian"
      },
      {
        name: "Asisten Lab RPL",
        desc: "Membimbing mahasiswa dalam praktikum Rekayasa Perangkat Lunak berbasis platform low-code Mendix di FMIPA USK.",
        type: "Pengajaran",
        rarity: "Akademik"
      },
      {
        name: "Asisten Lab Jarkom",
        desc: "Membimbing praktikum Jaringan Komputer, konfigurasi routing, switching, dan troubleshooting perangkat jaringan di lab.",
        type: "Praktikum",
        rarity: "Akademik"
      },
      {
        name: "Asisten Kewirausahaan",
        desc: "Membimbing penyusunan ide bisnis, validasi model usaha, dan evaluasi tugas kewirausahaan mahasiswa FMIPA USK.",
        type: "Pengajaran",
        rarity: "Akademik"
      },
      {
        name: "Magang Bappeda Aceh",
        desc: "Pengalaman kerja magang di Bappeda Aceh dalam tata kelola administrasi dan pengarsipan sistem pemerintahan.",
        type: "Magang",
        rarity: "Instansi"
      }
    ],
    highlightProjects: ["quest-1", "quest-5"],
    highlightExperiences: ["exp-1", "exp-2", "exp-3"],
    highlightAchievements: ["ach-1", "ach-2"],
  },
  {
    id: "organisasi",
    name: "Leader Guild",
    roleTitle: "Ketua Departemen Sosial Masyarakat",
    imageSrc: "/assets/hero-organisasi.png",
    perk: "Leadership & Event | Team Synergy",
    description: "Memimpin Departemen Sosial Masyarakat di BEM FMIPA USK dan HMIF USK — memimpin 14 anggota, mengkoordinasi 6 program kerja, dengan rata-rata 35 panitia per kegiatan.",
    stats: [
      { name: "LEADERSHIP & MANAJEMEN TIM", value: 95, max: 100 },
      { name: "PUBLIC SPEAKING & MODERASI", value: 90, max: 100 },
      { name: "MANAJEMEN EVENT & LOGISTIK", value: 92, max: 100 },
      { name: "KOORDINASI & KOMUNIKASI", value: 93, max: 100 },
      { name: "RESOLUSI KONFLIK", value: 89, max: 100 },
    ],
    inventory: [
      {
        name: "Kepemimpinan 14 Staf",
        desc: "Memimpin 14 staf departemen dalam perencanaan program kerja sosial kemasyarakatan dan pemantauan kinerja berkala.",
        type: "Leadership",
        rarity: "Utama"
      },
      {
        name: "Manajemen 6 Proker",
        desc: "Mengoordinasi 6 program kerja sosial kemahasiswaan dengan rata-rata 35 panitia pelaksana di setiap acara.",
        type: "Manajemen",
        rarity: "Organisasi"
      },
      {
        name: "Penyusunan LPJ BEM",
        desc: "Menyusun laporan pertanggungjawaban kegiatan resmi dan transparansi administrasi kepada Dewan Pengurus Harian BEM.",
        type: "Administrasi",
        rarity: "Tata Kelola"
      },
      {
        name: "Penggalangan Donasi",
        desc: "Mengelola inisiatif donasi sosial dan kampanye bantuan kemanusiaan untuk program pengabdian masyarakat.",
        type: "Sosial",
        rarity: "Keahlian"
      },
      {
        name: "Public Speaking",
        desc: "Mewakili organisasi dalam forum formal kampus dan membangun kerja sama kolaboratif dengan mitra eksternal.",
        type: "Komunikasi",
        rarity: "Soft Skill"
      },
      {
        name: "Mediasi Konflik Tim",
        desc: "Menjaga keharmonisan tim panitia, resolusi dinamika organisasi, dan menjaga fokus pada keberhasilan misi.",
        type: "Resolusi",
        rarity: "Soft Skill"
      }
    ],
    highlightProjects: [],
    highlightExperiences: ["exp-5", "exp-6", "exp-7"],
    highlightAchievements: ["ach-3", "ach-4"],
  },
  {
    id: "tourguide",
    name: "Ranger / Tour Guide",
    roleTitle: "Field Navigator & Public Storyteller",
    imageSrc: "/assets/hero-tourguide.png",
    perk: "Public Speaking | World Explorer",
    description: "Pemandu wisata aktif di Hayeue Bulud Adventure Banda Aceh sejak 2023 — memandu peserta, memberikan informasi destinasi wisata, mengatur perjalanan, dan menangani kendala lapangan.",
    stats: [
      { name: "KOMUNIKASI PUBLIK & STORYTELLING", value: 96, max: 100 },
      { name: "NAVIGASI LAPANGAN & LOGISTIK", value: 92, max: 100 },
      { name: "ADAPTABILITAS & MANAJEMEN KRISIS", value: 94, max: 100 },
      { name: "INTERCULTURAL AWARENESS", value: 90, max: 100 },
      { name: "ENDURANCE & STAMINA FISIK", value: 95, max: 100 },
    ],
    inventory: [
      {
        name: "Pemandu Hayeue Bulud",
        desc: "Pemandu wisata aktif sejak Januari 2023, mengawal perjalanan wisatawan dengan standar keselamatan dan kepuasan tinggi.",
        type: "Wisata",
        rarity: "Utama"
      },
      {
        name: "Storytelling Wisata",
        desc: "Menyampaikan narasi sejarah, budaya, dan keindahan alam Aceh secara komunikatif dan ramah kepada rombongan.",
        type: "Komunikasi",
        rarity: "Keahlian"
      },
      {
        name: "Navigasi & Itinerary",
        desc: "Perancangan rute terbaik, estimasi waktu perjalanan, dan penguasaan titik medan destinasi wisata.",
        type: "Navigasi",
        rarity: "Lapangan"
      },
      {
        name: "Manajemen Krisis",
        desc: "Kesiapsiagaan menghadapi kendala lapangan tak terduga, pertolongan pertama, dan tanggap darurat outdoor.",
        type: "Krisis",
        rarity: "Penting"
      },
      {
        name: "Logistik Perjalanan",
        desc: "Koordinasi kebutuhan transportasi, akomodasi, konsumsi, dan perlengkapan peserta selama trip berlangsung.",
        type: "Logistik",
        rarity: "Manajemen"
      },
      {
        name: "Ketahanan Fisik Prima",
        desc: "Stamina fisik luar ruangan yang prima serta daya adaptasi tinggi menghadapi ragam karakter wisatawan.",
        type: "Ketahanan",
        rarity: "Karakter"
      }
    ],
    highlightProjects: [],
    highlightExperiences: ["exp-4"],
    highlightAchievements: ["ach-3"],
  }
];

export const CHARACTER_PROFILE = {
  name: "T. Farhan Syah, S.Kom",
  classTitle: "Application Developer & USK Graduate",
  origin: "Universitas Syiah Kuala (USK)",
  level: 21,
  hp: { current: 100, max: 100 },
  mp: { current: 95, max: 100 },
  gpa: { current: 3.54, max: 4.00, display: "3.54 / 4.00" },
  readiness: { current: 100, max: 100, label: "Full-Time / Siap Kerja" },
  exp: { current: 4850, next: 6000, label: "Pengalaman Proyek & Lab" },
  bioSnippet: "Lulusan S1 Informatika Universitas Syiah Kuala (IPK 3,54). Berpengalaman dalam pengembangan back-end, REST API, dan pengelolaan basis data menggunakan NestJS, Express.js, Next.js, TypeScript, dan PostgreSQL. Aktif di organisasi kampus sebagai Ketua Departemen dan berpengalaman sebagai pemandu wisata.",
  quickStats: [
    { label: "DEGREE", value: "S.Kom (IPK 3.54)" },
    { label: "PRIMARY STACK", value: "NestJS / Next.js" },
    { label: "FIELD EXP", value: "Tour Guide" },
    { label: "STATUS", value: "Open for Hire" },
  ],
  inventory: [
    { 
      name: "NestJS & Express.js", 
      desc: "Framework back-end utama untuk membangun arsitektur REST API skala produksi (terbukti hingga 136 endpoint, modular controllers, JWT auth & middleware).", 
      type: "Backend", 
      rarity: "Utama" 
    },
    { 
      name: "TypeScript & JavaScript", 
      desc: "Bahasa pemrograman utama dalam implementasi logika sistem, type safety ketat, dan integrasi modul asynchronous.", 
      type: "Language", 
      rarity: "Keahlian" 
    },
    { 
      name: "PostgreSQL & Supabase", 
      desc: "Pengelolaan basis data relasional, desain skema, relasi tabel efisien, query optimization, serta cloud database hosting.", 
      type: "Database", 
      rarity: "Keahlian" 
    },
    { 
      name: "Next.js & React.js", 
      desc: "Pengembangan antarmuka web modern dengan server-side rendering, integrasi REST API, dan styling responsif berbasis Tailwind CSS.", 
      type: "Frontend", 
      rarity: "Keahlian" 
    },
    { 
      name: "Ijazah S1 USK (IPK 3.54)", 
      desc: "Bukti kelulusan resmi Sarjana Komputer dari Universitas Syiah Kuala dengan fondasi kuat pada rekayasa perangkat lunak dan algoritma.", 
      type: "Akademik", 
      rarity: "Prestasi" 
    },
    { 
      name: "Postman & REST API", 
      desc: "Pengujian fungsional seluruh endpoint API, otomatisasi request testing, serta performance test hingga 100 concurrent users.", 
      type: "Testing", 
      rarity: "Tools" 
    },
  ],
  socialLinks: {
    github: "https://github.com/farhansyaah28",
    linkedin: "https://www.linkedin.com/in/farhansyaah/",
    email: "mailto:teukufarhan028@gmail.com",
    whatsapp: "https://wa.me/62895613105670",
    cvLink: "#"
  }
};
