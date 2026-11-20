import { ProjectItem } from "@/types/rpg";

export type { ProjectItem };

export const PROJECTS: ProjectItem[] = [
  {
    id: "quest-1",
    title: "SEHATI – Sekolah Hijau & Anti Plastik",
    questRank: "S-RANK",
    description: "Back-end sistem pengelolaan aktivitas sekolah berbasis REST API dengan 136 endpoint, mendukung 4 jenis hak akses: siswa, guru, kantin, dan administrator.",
    context: "Dikembangkan untuk Sekolah Sukma Bangsa Pidie sebagai solusi digitalisasi program lingkungan anti plastik dengan autentikasi JWT dan pengujian performa hingga 100 pengguna bersamaan.",
    lootReward: "+600 EXP, REST API Master Scroll",
    techStack: ["NestJS", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "JWT", "Postman"],
    demoUrl: "",
    githubUrl: "https://github.com/farhansyaah28/sehati-backend.git",
    featured: true
  },
  {
    id: "quest-2",
    title: "SiSurat – Sistem Administrasi Terpadu",
    questRank: "A-RANK",
    description: "Aplikasi layanan administrasi surat berbasis web untuk mempermudah masyarakat Gampong Ilie mengajukan permohonan surat secara digital.",
    context: "Membangun alur pengajuan dan verifikasi surat oleh operator dan kepala desa, termasuk fitur pemantauan status pengajuan secara realtime.",
    lootReward: "+420 EXP, Civic Tech Badge",
    techStack: ["Node.js", "Express.js", "JavaScript", "Tailwind CSS", "PostgreSQL", "Supabase"],
    demoUrl: "https://sisuratgampong.vercel.app/",
    githubUrl: "https://github.com/farhansyaah28/SiSurat-GampongIlie.git",
    imageSrc: "/assets/projects/sisurat.png",
    featured: true
  },
  {
    id: "quest-3",
    title: "CBT PMB – Sistem Ujian Online Politeknik Aceh",
    questRank: "A-RANK",
    description: "Aplikasi Computer Based Test untuk penerimaan mahasiswa baru Politeknik Aceh dengan bank soal, jadwal ujian, token akses, dan penilaian otomatis.",
    context: "Mendukung proses seleksi mahasiswa baru secara digital dengan fitur pemantauan aktivitas peserta selama ujian dan rekapitulasi hasil seleksi.",
    lootReward: "+380 EXP, Education Tech Seal",
    techStack: ["PHP Native", "MySQL", "JavaScript", "HTML", "CSS"],
    demoUrl: "",
    githubUrl: "https://github.com/farhansyaah28/PBM-Politeknik-Aceh.git",
    imageSrc: "/assets/projects/cbt-politeknik.jpg",
    featured: false
  },
  {
    id: "quest-4",
    title: "Sistem Penyewaan Aset Kampus – Politeknik Aceh",
    questRank: "B-RANK",
    description: "Aplikasi web untuk mendigitalisasi proses pengajuan dan pengelolaan penyewaan aset kampus dengan alur persetujuan multi-level.",
    context: "Mengintegrasikan proses pengajuan, persetujuan, dan penyimpanan data penyewaan aset secara efisien dengan MySQL.",
    lootReward: "+280 EXP, Campus Admin Badge",
    techStack: ["PHP Native", "MySQL", "JavaScript", "Tailwind CSS"],
    demoUrl: "",
    githubUrl: "https://github.com/farhansyaah28/SIPAK-Politeknik-Aceh.git",
    featured: false
  },
  {
    id: "quest-5",
    title: "Sistem Manajemen Magang – BAPPEDA Aceh",
    questRank: "A-RANK",
    description: "Sistem informasi manajemen magang berbasis web untuk mendukung pendaftaran, pengelolaan, dan pemantauan peserta magang di BAPPEDA Aceh.",
    context: "Mengimplementasikan fitur absensi berbasis geofencing dan pencatatan aktivitas harian yang dapat ditinjau dan divalidasi oleh pembimbing.",
    lootReward: "+350 EXP, GovTech Artifact",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Supabase"],
    demoUrl: "https://simang-bappeda.vercel.app/",
    githubUrl: "https://github.com/farhansyaah28/SIMANG-BAPPEDA.git",
    imageSrc: "/assets/projects/simagang.jpg",
    featured: true
  }
];
