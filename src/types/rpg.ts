export interface ProjectItem {
  id: string;
  title: string;
  questRank: 'S-RANK' | 'A-RANK' | 'B-RANK';
  description: string;
  context: string;
  lootReward: string; // e.g., "+350 EXP, Frontend Badge"
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageSrc?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  townName: string; // E.g., "HMIF Outpost"
  role: string;
  organization: string;
  period: string;
  questLog: string[];
  guildPerks: string[]; // skills gained
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Lomba' | 'Magang' | 'Kepanitiaan' | 'Volunteer' | 'Sertifikasi' | 'Kepemimpinan' | 'Akademik';
  date: string;
  issuer: string;
  description: string;
  iconType: 'trophy' | 'scroll' | 'shield' | 'medal' | 'star';
}

export interface NpcDialog {
  id: string;
  name: string;
  title: string;
  avatarChar: string; // pixel icon / emoji / description
  greeting: string;
  topic: string;
  dialogue: string[];
  questTip: string;
}
