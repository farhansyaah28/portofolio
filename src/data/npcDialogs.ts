import { NpcDialog } from "@/types/rpg";

export const NPC_DATA: NpcDialog[] = [
  {
    id: "npc-blacksmith",
    name: "Master Brokk",
    title: "Pandai Besi Kode",
    avatarChar: "BROKK",
    greeting: "Selamat datang di bengkel tempa kode!",
    topic: "Projects & Tech Stack",
    dialogue: [
      "Setiap baris kode di papan quest itu kutempa dengan tangan sendiri.",
      "Mulai dari sistem tugas guild sampai visualizer algoritma, semuanya tahan banting!",
      "Coba periksa Quest Board di bawah untuk melihat repositori GitHub di setiap quest card."
    ],
    questTip: "Tips Brokk: Jangan lupa intip demo interaktif dan repositori GitHub di setiap quest card!"
  },
  {
    id: "npc-guildmaster",
    name: "Alyssa",
    title: "Ketua Guild Ekspedisi",
    avatarChar: "ALYSSA",
    greeting: "Salam petualang! Organisasi mana yang sedang kau pantau?",
    topic: "Organisasi & Ekspedisi",
    dialogue: [
      "Bekerja sendiri memang cepat, tapi bertualang bersama guild bikin kita tahan badai.",
      "Di HMIF dan BEM FMIPA, aku belajar bagaimana menjaga moral pasukan dan menyelesaikan program kerja kemahasiswaan.",
      "Peta perjalanan kami terpampang rapi di Guild Hall. Jelajahilah pos-pos kami!"
    ],
    questTip: "Tips Alyssa: Kolaborasi adalah senjata paling ampuh di semester akhir."
  },
  {
    id: "npc-elder",
    name: "Tetua Eldrin",
    title: "Sage Prestasi",
    avatarChar: "ELDRIN",
    greeting: "Ah, pemuda yang haus ilmu! Sudah mengoleksi berapa medali hari ini?",
    topic: "Prestasi, Lomba & Pengabdian",
    dialogue: [
      "Menang hackathon itu membanggakan, tapi turun ke desa mengajar adik-adik adalah kepuasan jiwa sejati.",
      "Semua lencana yang terkumpul di Achievement Hall adalah saksi dedikasi waktu dan riset.",
      "Jelajahi peta mini ini! Kumpulkan 3 peti koin tersembunyi untuk membuka kunci berkas CV!"
    ],
    questTip: "Tips Eldrin: Kumpulkan seluruh peti koin di desa ini untuk klaim hadiah khusus."
  }
];
