export const TILE_SIZE = 32;
export const MAP_WIDTH = 20; // 20 * 32 = 640px
export const MAP_HEIGHT = 14; // 14 * 32 = 448px

// Tile types:
// 0: Grass (Walkable)
// 1: Path / Stone pavement (Walkable)
// 2: Water (Solid / Blocked)
// 3: Tree (Solid / Blocked)
// 4: Wooden House / Guild Roof (Solid / Blocked)
// 5: House Door (Walkable entrance accent)
// 6: Flower / Grass accent (Walkable)

export const VILLAGE_TILE_MAP: number[][] = [
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [3, 0, 0, 0, 0, 0, 3, 4, 4, 4, 4, 3, 0, 0, 0, 0, 0, 0, 0, 3],
  [3, 0, 6, 0, 0, 0, 3, 4, 4, 4, 4, 3, 0, 1, 1, 1, 0, 6, 0, 3],
  [3, 0, 0, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 3],
  [3, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3],
  [3, 4, 4, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 3],
  [3, 4, 4, 4, 0, 6, 0, 0, 1, 0, 2, 2, 2, 0, 0, 0, 1, 0, 0, 3],
  [3, 1, 5, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 0, 0, 0, 1, 0, 0, 3],
  [3, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3],
  [3, 0, 1, 0, 0, 4, 4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 3],
  [3, 0, 1, 0, 0, 4, 4, 4, 1, 0, 0, 6, 0, 0, 0, 0, 1, 6, 0, 3],
  [3, 0, 1, 1, 1, 1, 5, 1, 1, 0, 0, 0, 0, 4, 4, 4, 1, 0, 0, 3],
  [3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 5, 1, 1, 0, 0, 3],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
];

export interface ChestEntity {
  id: string;
  x: number; // tile x
  y: number; // tile y
  collected: boolean;
  lootName: string;
  points: number;
}

export const INITIAL_CHESTS: ChestEntity[] = [
  { id: "chest-1", x: 2, y: 2, collected: false, lootName: "Koin Emas Algoritma (+100 XP)", points: 100 },
  { id: "chest-2", x: 17, y: 2, collected: false, lootName: "Kristal Logika Frontend (+150 XP)", points: 150 },
  { id: "chest-3", x: 11, y: 10, collected: false, lootName: "Gulungan Rahasia CV (+200 XP)", points: 200 },
];

export interface CoinEntity {
  id: string;
  x: number;
  y: number;
  collected: boolean;
}

export const INITIAL_COINS: CoinEntity[] = [
  { id: "c-1", x: 4, y: 3, collected: false },
  { id: "c-2", x: 5, y: 3, collected: false },
  { id: "c-3", x: 8, y: 5, collected: false },
  { id: "c-4", x: 13, y: 3, collected: false },
  { id: "c-5", x: 16, y: 5, collected: false },
  { id: "c-6", x: 16, y: 8, collected: false },
  { id: "c-7", x: 12, y: 8, collected: false },
  { id: "c-8", x: 3, y: 8, collected: false },
  { id: "c-9", x: 3, y: 10, collected: false },
  { id: "c-10", x: 8, y: 11, collected: false },
];

export interface NpcEntity {
  id: string;
  name: string;
  title: string;
  x: number;
  y: number;
  color: string;
  hatColor?: string;
  bubbleHint?: string;
  dialogues: string[];
}

export const GAME_NPCS: NpcEntity[] = [
  {
    id: "npc-1",
    name: "Dosen USK",
    title: "Dosen Pembimbing Informatika",
    x: 8,
    y: 3, // Di dekat pintu balai atas
    color: "#1B3A8A",
    hatColor: "#F7C531",
    bubbleHint: "SKRIPSI & API",
    dialogues: [
      "Wah, Farhan! Dulu dia memimpin pengujian 136 endpoint API NestJS di lab sampai larut malam!",
      "Lulus dengan IPK 3.54 itu bukan kebetulan, fondasi algoritma dan rekayasa perangkat lunaknya memang solid.",
      "Coba cek proyek SEHATI dan riset skripsinya di atas, arsitektur backend-nya sangat rapi!"
    ]
  },
  {
    id: "npc-2",
    name: "Pejabat BAPPEDA",
    title: "Mentor Magang Pemerintah",
    x: 7,
    y: 7, // Di persimpangan jalan tengah
    color: "#2F6FED",
    hatColor: "#DCEEFF",
    bubbleHint: "SIMAGANG ACEH",
    dialogues: [
      "Halo pengelana! Farhan pernah magang di BAPPEDA Aceh dan membangun Sistem Informasi Manajemen Magang.",
      "Sistemnya memakai Next.js, TypeScript, dan Supabase dengan fitur absensi geofencing!",
      "Kalian bisa lihat preview web aslinya yang live di Quest Board!"
    ]
  },
  {
    id: "npc-3",
    name: "Warga Gampong",
    title: "Warga Ilie Digital",
    x: 15,
    y: 6, // Di dekat jalan kanan
    color: "#5DBB63",
    hatColor: "#E25822",
    bubbleHint: "SISURAT GAMPONG",
    dialogues: [
      "Sejak Farhan dan tim membuat web SiSurat Gampong, kami warga desa tidak perlu antre lagi untuk urus surat pengantar!",
      "Desain webnya hijau minimalis, clean, dan langsung online di Vercel.",
      "Jangan lupa klik tombol 'BUKA WEBSITE' di Quest Board untuk mencoba sendiri!"
    ]
  },
  {
    id: "npc-4",
    name: "Ketua HMIF",
    title: "Rekan Pengurus Guild",
    x: 14,
    y: 11, // Di area rumah kanan bawah
    color: "#E25822",
    hatColor: "#F7C531",
    bubbleHint: "KADEP SOSMAS",
    dialogues: [
      "Farhan itu mantan Ketua Departemen Sosial Masyarakat HMIF USK!",
      "Dia memimpin 14 staf dan mengoordinasikan 6 program kerja sosial kemasyarakatan dengan sukses.",
      "Selain jago ngoding, jiwa kepemimpinan dan public speaking-nya jempolan!"
    ]
  }
];
