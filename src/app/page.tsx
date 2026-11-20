"use client";

import { useState } from "react";
import { StartScreen } from "@/components/sections/StartScreen";
import { VillageAbout } from "@/components/sections/VillageAbout";
import { QuestBoard } from "@/components/sections/QuestBoard";
import { GuildHall } from "@/components/sections/GuildHall";
import { AchievementHall } from "@/components/sections/AchievementHall";
import { FinalArea } from "@/components/sections/FinalArea";
import { RpgCanvas } from "@/components/minigame/RpgCanvas";
import { AudioToggle } from "@/components/common/AudioToggle";
import { PixelButton } from "@/components/common/PixelButton";
import { CHARACTER_SKINS, CharacterSkin } from "@/data/profile";
import { soundEngine } from "@/hooks/useAudio";
import { Gamepad2, ArrowDown, Shield, Scroll, Castle, Trophy, Mail, Terminal } from "lucide-react";

export default function HomePage() {
  const [activeSkin, setActiveSkin] = useState<CharacterSkin>(CHARACTER_SKINS[0]);

  const scrollToSection = (id: string) => {
    soundEngine.playClick();
    const elem = document.getElementById(id);
    if (elem) {
      const headerOffset = 65; // Jarak pas & ideal (tinggi navbar ~55px + gap 10px)
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="relative min-h-screen bg-rpg-world">
      {/* Top Retro HUD Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xs border-b-4 border-[#1B3A8A] px-4 py-3 shadow-[0_4px_0px_#1B3A8A]">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer flex items-center gap-2 group select-none"
          >
            <div className="w-3.5 h-3.5 bg-[#2F6FED] border-2 border-[#1B3A8A] group-hover:bg-[#F7C531] transition-colors" />
            <span className="font-rpg-header text-xs md:text-sm text-[#1B3A8A] font-bold tracking-wider">
              T.FARHAN.RPG
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-2 font-rpg-header text-[10px]">
            <button
              onClick={() => scrollToSection("village")}
              className="px-2.5 py-1.5 text-[#1B3A8A] hover:bg-[#DCEEFF] border border-transparent hover:border-[#1B3A8A] cursor-pointer flex items-center gap-1.5"
            >
              <Shield className="w-3 h-3 text-[#2F6FED]" />
              <span>STATUS</span>
            </button>
            <button
              onClick={() => scrollToSection("quests")}
              className="px-2.5 py-1.5 text-[#1B3A8A] hover:bg-[#DCEEFF] border border-transparent hover:border-[#1B3A8A] cursor-pointer flex items-center gap-1.5"
            >
              <Scroll className="w-3 h-3 text-[#2F6FED]" />
              <span>QUESTS</span>
            </button>
            <button
              onClick={() => scrollToSection("guild")}
              className="px-2.5 py-1.5 text-[#1B3A8A] hover:bg-[#DCEEFF] border border-transparent hover:border-[#1B3A8A] cursor-pointer flex items-center gap-1.5"
            >
              <Castle className="w-3 h-3 text-[#2F6FED]" />
              <span>GUILD</span>
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className="px-2.5 py-1.5 text-[#1B3A8A] hover:bg-[#DCEEFF] border border-transparent hover:border-[#1B3A8A] cursor-pointer flex items-center gap-1.5"
            >
              <Trophy className="w-3 h-3 text-[#2F6FED]" />
              <span>HONORS</span>
            </button>
            <button
              onClick={() => scrollToSection("minigame-area")}
              className="px-2.5 py-1.5 text-[#1B3A8A] hover:bg-[#DCEEFF] border border-transparent hover:border-[#1B3A8A] cursor-pointer flex items-center gap-1.5"
            >
              <Gamepad2 className="w-3 h-3 text-[#2F6FED]" />
              <span>MINI GAME</span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-2.5 py-1.5 text-[#1B3A8A] hover:bg-[#DCEEFF] border border-transparent hover:border-[#1B3A8A] cursor-pointer flex items-center gap-1.5"
            >
              <Mail className="w-3 h-3 text-[#2F6FED]" />
              <span>CONTACT</span>
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <PixelButton
              variant="gold"
              size="sm"
              onClick={() => scrollToSection("minigame-area")}
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">MINI GAME</span>
            </PixelButton>
          </div>
        </div>
      </header>

      {/* Start Hero Screen (Dengan Sinkronisasi State Role Karakter) */}
      <StartScreen
        activeSkin={activeSkin}
        onSkinChange={setActiveSkin}
        onStartAdventure={() => scrollToSection("village")}
        onExploreMiniGame={() => scrollToSection("minigame-area")}
      />

      {/* Area 1: Village Party Status (Statistik otomatis menyesuaikan role) */}
      <VillageAbout activeSkin={activeSkin} />

      {/* Area 2: Guild Notice Board (Highlight project yang relevan dengan role terpilih) */}
      <QuestBoard activeSkin={activeSkin} />

      {/* Area 3: Organization Outpost Waypoints (Highlight checkpoint organisasi role) */}
      <GuildHall activeSkin={activeSkin} />

      {/* Area 4: Honors & Trophies Hall (Highlight prestasi & sertifikasi role) */}
      <AchievementHall activeSkin={activeSkin} />

      {/* Area 5: Retro Pixel Dino Runner */}
      <section
        id="minigame-area"
        className="pt-8 pb-12 px-4 max-w-4xl mx-auto border-t-4 border-dashed border-[#1B3A8A]/30 scroll-mt-16"
      >
        <div className="snes-window-gold p-4 sm:p-6 bg-white text-center">
          <div className="inline-block bg-[#2F6FED] text-white px-3 py-0.5 font-rpg-header text-[10px] border-2 border-[#1B3A8A] mb-2 shadow-[2px_2px_0px_#1B3A8A]">
            AREA 5: RETRO ARCADE MINIGAME
          </div>
          <h2 className="font-rpg-header text-lg sm:text-xl text-[#1B3A8A] mb-1.5">
            FARHAN PIXEL DINO RUNNER
          </h2>
          <p className="font-rpg-body text-base sm:text-lg text-[#1B3A8A] max-w-md mx-auto mb-4">
            Game arcade santai pengisi waktu! Tekan <strong>[SPASI]</strong> atau sentuh layar untuk melompat, hindari rintangan bug koding, dan raih skor tertinggi!
          </p>

          <RpgCanvas />

          <div className="mt-4 flex justify-center">
            <PixelButton
              variant="white"
              size="sm"
              onClick={() => scrollToSection("contact")}
            >
              <ArrowDown className="w-3.5 h-3.5" />
              LANJUT KE FORM KONTAK & PESAN
            </PixelButton>
          </div>
        </div>
      </section>

      {/* Area 6: Quest Complete & Contact Scroll */}
      <FinalArea />

      {/* Floating Retro SFX Audio Toggle */}
      <AudioToggle />
    </main>
  );
}
