"use client";

import Image from "next/image";
import { PixelButton } from "@/components/common/PixelButton";
import { StatBar } from "@/components/common/StatBar";
import { soundEngine } from "@/hooks/useAudio";
import { CHARACTER_PROFILE, CHARACTER_SKINS, CharacterSkin } from "@/data/profile";
import {
  Play,
  Gamepad2,
  ChevronDown,
  Terminal,
  GraduationCap,
  Users,
  MapPin,
  Code2,
  Sparkles,
  Shield,
  Award,
} from "lucide-react";

interface StartScreenProps {
  activeSkin: CharacterSkin;
  onSkinChange: (skin: CharacterSkin) => void;
  onStartAdventure: () => void;
  onExploreMiniGame: () => void;
}

export function StartScreen({
  activeSkin,
  onSkinChange,
  onStartAdventure,
  onExploreMiniGame,
}: StartScreenProps) {
  const getSkinIcon = (id: string) => {
    switch (id) {
      case "graduated":
        return <GraduationCap className="w-3 h-3" />;
      case "programmer":
        return <Code2 className="w-3 h-3" />;
      case "organisasi":
        return <Users className="w-3 h-3" />;
      case "tourguide":
      default:
        return <MapPin className="w-3 h-3" />;
    }
  };

  return (
    <section className="relative w-full lg:min-h-[calc(100vh-56px)] flex flex-col justify-between items-center py-3 px-3 sm:px-4 md:px-6 bg-rpg-world border-b-4 border-[#1B3A8A] select-none">
      <div className="w-full max-w-5xl mx-auto lg:my-auto flex flex-col gap-2.5">
        
        {/* Top Retro HUD Status Bar - Selalu pas 1 baris di HP & Desktop */}
        <div className="flex items-center justify-between gap-2 px-2.5 sm:px-3 py-1 bg-[#0F2042] text-white border-2 border-[#1B3A8A] shadow-[2px_2px_0px_#1B3A8A]">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <div className="flex items-center gap-1 shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#FF5F56] border border-black/40 inline-block" />
              <span className="w-2 h-2 rounded-full bg-[#FFBD2E] border border-black/40 inline-block" />
              <span className="w-2 h-2 rounded-full bg-[#27C93F] border border-black/40 inline-block" />
            </div>
            <span className="font-rpg-header text-[6.5px] sm:text-[7.5px] text-[#8FD3FF] tracking-wider whitespace-nowrap">
              <span className="sm:hidden">SAVE_01 // INFORMATIKA USK</span>
              <span className="hidden sm:inline">SAVE_FILE_01 // WORLD: INFORMATIKA USK</span>
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="hidden sm:inline-flex items-center gap-1 font-rpg-sub text-[9px] text-[#F7C531] font-bold">
              <Sparkles className="w-2.5 h-2.5 text-[#F7C531]" />
              16-BIT SNES EDITION
            </span>
            <span className="inline-flex items-center gap-1 bg-[#27C93F] text-[#0F2042] px-1.5 py-0.5 font-rpg-header text-[6px] sm:text-[6.5px] border border-black font-bold whitespace-nowrap">
              <span className="w-1.5 h-1.5 bg-[#0F2042] rounded-full animate-ping" />
              PLAYER 1 READY
            </span>
          </div>
        </div>

        {/* Main 2-Column SNES Hero Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-3.5 items-stretch">
          
          {/* Left Column (7 Cols): Hero Dossier & Quest Briefing Window */}
          <div className="lg:col-span-7 snes-window p-3 sm:p-3.5 bg-white flex flex-col justify-between">
            <div>
              {/* Top Class & Level Badges - Selalu 1 baris di HP maupun Desktop */}
              <div className="flex items-center justify-between gap-1.5 pb-2 mb-2 border-b-2 border-dashed border-[#1B3A8A]/30">
                <div className="flex items-center gap-1.5">
                  <span className="bg-[#F7C531] text-[#1B3A8A] px-1.5 sm:px-2 py-0.5 font-rpg-header text-[6.5px] sm:text-[7.5px] border-2 border-[#1B3A8A] shadow-[2px_2px_0px_#1B3A8A] font-bold flex items-center gap-1 whitespace-nowrap">
                    <Award className="w-2.5 h-2.5 text-[#1B3A8A] shrink-0" />
                    <span>LVL {CHARACTER_PROFILE.level}</span>
                  </span>
                  <span className="bg-[#DCEEFF] text-[#1B3A8A] px-1.5 sm:px-2 py-0.5 font-rpg-header text-[6.5px] sm:text-[7.5px] border-2 border-[#1B3A8A] shadow-[2px_2px_0px_#1B3A8A] font-bold whitespace-nowrap">
                    S1 INFORMATIKA USK
                  </span>
                </div>

                <span className="font-rpg-sub text-[9px] sm:text-[10px] text-[#2F6FED] font-bold bg-[#F4F9FF] px-1.5 sm:px-2 py-0.5 border border-[#1B3A8A] whitespace-nowrap">
                  IPK 3.54
                </span>
              </div>

              {/* Main Hero Name - Pas 1 baris di layar HP dengan 3D text shadow */}
              <h1 className="font-rpg-header text-[13px] sm:text-lg md:text-xl text-[#1B3A8A] text-3d-title leading-tight tracking-wide mb-1.5 whitespace-nowrap">
                {CHARACTER_PROFILE.name}
              </h1>

              {/* Active Role Title Banner */}
              <div className="mb-2 py-1 px-2 sm:px-2.5 bg-[#0F2042] text-white border-2 border-[#1B3A8A] shadow-[2px_2px_0px_#2F6FED] flex items-center gap-1.5 sm:gap-2">
                <Terminal className="w-3 h-3 text-[#8FD3FF] shrink-0" />
                <span className="font-rpg-sub text-[9px] sm:text-[10.5px] text-[#F7C531] font-bold tracking-normal leading-snug">
                  {activeSkin.roleTitle}
                </span>
              </div>

              {/* Lore Bio Dialog Box */}
              <div className="snes-window-panel p-2 sm:p-2.5 mb-2.5 border-l-4 border-l-[#2F6FED] bg-[#F4F9FF] relative">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <span className="font-rpg-header text-[6.5px] sm:text-[7px] text-[#2F6FED] flex items-center gap-1">
                    <Shield className="w-2.5 h-2.5 text-[#2F6FED] shrink-0" />
                    <span>QUEST BRIEFING // {activeSkin.name.toUpperCase()}</span>
                  </span>
                  <span className="hidden sm:inline font-rpg-sub text-[9px] text-[#1B3A8A]/70 font-bold">
                    {activeSkin.perk}
                  </span>
                </div>
                <p className="font-rpg-body text-sm sm:text-base text-[#1B3A8A] leading-snug pr-3">
                  &ldquo;{activeSkin.description}&rdquo;
                </p>
                <span className="absolute right-2 bottom-1 text-[#2F6FED] animate-bounce text-[7px] font-rpg-header">
                  ▼
                </span>
              </div>

              {/* Quick Party Perk Badges (Tampil di layar >= sm) */}
              <div className="hidden sm:grid sm:grid-cols-4 gap-1.5 w-full mb-2.5">
                {CHARACTER_PROFILE.quickStats.map((item, idx) => (
                  <div
                    key={idx}
                    className="py-1 px-1.5 bg-white border-2 border-[#1B3A8A] shadow-[2px_2px_0px_#1B3A8A] hover:bg-[#F4F9FF] transition-colors flex flex-col justify-center"
                  >
                    <span className="text-[6px] font-rpg-header text-[#1B3A8A]/70 block mb-0.5 leading-tight">
                      {item.label}
                    </span>
                    <span className="text-[8px] sm:text-[8.5px] font-rpg-sub font-bold text-[#1B3A8A] block leading-tight tracking-tight">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA Action Buttons - Sejajar 1 baris & tinggi sama */}
            <div className="pt-2 border-t-2 border-dashed border-[#1B3A8A]/30 grid grid-cols-2 sm:flex items-center gap-2.5">
              <PixelButton
                variant="primary"
                size="sm"
                onClick={() => {
                  soundEngine.playFanfare();
                  onStartAdventure();
                }}
                className="w-full sm:w-auto !px-2.5 sm:!px-3.5 !py-2 !text-[8px] sm:!text-[10px] whitespace-nowrap"
              >
                <Play className="w-3 h-3 fill-white shrink-0" />
                <span className="sm:hidden">PETUALANGAN</span>
                <span className="hidden sm:inline">MULAI PETUALANGAN</span>
              </PixelButton>

              <PixelButton
                variant="gold"
                size="sm"
                onClick={() => {
                  soundEngine.playCoin();
                  onExploreMiniGame();
                }}
                className="w-full sm:w-auto !px-2.5 sm:!px-3.5 !py-2 !text-[8px] sm:!text-[10px] whitespace-nowrap"
              >
                <Gamepad2 className="w-3.5 h-3.5 text-[#1B3A8A] shrink-0" />
                <span>MINI GAME</span>
              </PixelButton>
            </div>
          </div>

          {/* Right Column (5 Cols): Character Showcase & Class Switcher Window */}
          <div className="lg:col-span-5 snes-window-gold p-2.5 sm:p-3 bg-white flex flex-col justify-between relative">
            <div>
              {/* Top Card Header Strip */}
              <div className="bg-[#0F2042] text-white px-2.5 py-1 border-2 border-[#1B3A8A] mb-1.5 flex items-center justify-between gap-2 shadow-[2px_2px_0px_#1B3A8A]">
                <span className="font-rpg-header text-[7px] text-[#FFF275] tracking-wider">
                  CHARACTER SPRITE
                </span>
                <span className="bg-[#5DBB63] text-white px-1.5 py-0.5 font-rpg-header text-[6px] sm:text-[6.5px] border border-black flex items-center gap-1 shrink-0">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                  {activeSkin.name.toUpperCase()}
                </span>
              </div>

              {/* Character Artwork Stage Frame */}
              <div className="relative w-full h-[120px] sm:h-[125px] mx-auto bg-gradient-to-b from-[#DCEEFF] via-[#EAF5FF] to-[#B8E0FF] border-2 border-[#1B3A8A] shadow-[inset_2px_2px_0px_#FFFFFF,inset_-2px_-2px_0px_#8FD3FF] p-1 mb-1.5 flex items-center justify-center overflow-hidden">
                {/* Subtle Pixel Grid Overlay */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#1B3A8A_1px,transparent_1px)] [background-size:10px_10px] pointer-events-none" />

                {/* Corner Overlays inside Sprite Stage */}
                <div className="absolute top-1 left-1 bg-white/90 border border-[#1B3A8A] px-1.5 py-0.5 font-rpg-header text-[6px] text-[#1B3A8A] shadow-[1px_1px_0px_#1B3A8A] z-10">
                  ROLE #{CHARACTER_SKINS.findIndex((s) => s.id === activeSkin.id) + 1}/4
                </div>
                <div className="absolute top-1 right-1 bg-[#F7C531] border border-[#1B3A8A] px-1.5 py-0.5 font-rpg-header text-[6px] text-[#1B3A8A] shadow-[1px_1px_0px_#1B3A8A] z-10 font-bold">
                  ★ S.KOM
                </div>

                {/* Pedestal Shadow */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-16 h-2.5 bg-[#1B3A8A]/20 rounded-full blur-[1px]" />

                {/* Animated Sprite */}
                <div className="relative w-full h-full animate-sprite-idle flex items-center justify-center z-10">
                  <Image
                    key={activeSkin.id}
                    src={activeSkin.imageSrc}
                    alt={activeSkin.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 180px"
                    className="object-contain pixelated p-0.5"
                  />
                </div>
              </div>

              {/* Class Skin Selector Buttons */}
              <div className="font-rpg-header text-[7px] text-[#1B3A8A] mb-1 flex items-center justify-between">
                <span>PILIH KARAKTER ROLE:</span>
                <span className="text-[#2F6FED]">[KLIK GANTI]</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 mb-2 sm:mb-1.5">
                {CHARACTER_SKINS.map((skin) => {
                  const isCurrent = activeSkin.id === skin.id;
                  return (
                    <button
                      key={skin.id}
                      onClick={() => {
                        soundEngine.playCoin();
                        onSkinChange(skin);
                      }}
                      className={`py-1.5 sm:py-1 px-1 border-2 border-[#1B3A8A] flex flex-col items-center justify-center gap-0.5 cursor-pointer transition-all ${
                        isCurrent
                          ? "bg-[#2F6FED] text-white shadow-[inset_1px_1px_0px_#8FD3FF,1px_1px_0px_#1B3A8A] translate-y-[1px]"
                          : "bg-white text-[#1B3A8A] hover:bg-[#DCEEFF] shadow-[2px_2px_0px_#1B3A8A] active:translate-y-[1px]"
                      }`}
                      title={skin.name}
                    >
                      {getSkinIcon(skin.id)}
                      <span className="font-rpg-sub text-[8px] sm:text-[8.5px] font-bold leading-none tracking-tight">
                        {skin.name.split(" ")[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              {/* HP/MP Vitals Gauges (Desktop/Tablet only) */}
              <div className="hidden sm:flex snes-window-panel p-1.5 px-2 mb-1.5 bg-[#F4F9FF] text-left flex-col gap-1 border-2 border-[#1B3A8A]">
                <StatBar
                  label="HP (FOCUS)"
                  current={CHARACTER_PROFILE.hp.current}
                  max={CHARACTER_PROFILE.hp.max}
                  color="hp"
                  showValues={true}
                />
                <StatBar
                  label="MP (STAMINA)"
                  current={CHARACTER_PROFILE.mp.current}
                  max={CHARACTER_PROFILE.mp.max}
                  color="mp"
                  showValues={true}
                />
              </div>

              {/* Profile Card Footer Details (Tampil di semua ukuran layar) */}
              <div className="snes-window-panel py-1 px-2 bg-white flex items-center justify-between gap-2 font-rpg-sub text-[9.5px] sm:text-[10px] text-[#1B3A8A] border-2 border-[#1B3A8A]">
                <div className="text-left">
                  <span className="text-[6px] text-[#1B3A8A]/60 block font-rpg-header">
                    ALUMNI
                  </span>
                  <span className="font-bold">Univ. Syiah Kuala</span>
                </div>
                <div className="text-right">
                  <span className="text-[6px] text-[#1B3A8A]/60 block font-rpg-header">
                    KEAHLIAN UTAMA
                  </span>
                  <span className="font-bold text-[#2F6FED]">
                    {activeSkin.perk.split("|")[0].trim()}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div
        onClick={onStartAdventure}
        className="cursor-pointer flex flex-col items-center gap-0.5 text-[#1B3A8A] font-rpg-header text-[7.5px] sm:text-[8.5px] hover:text-[#2F6FED] transition-colors mt-3 select-none"
      >
        <span>SCROLL UNTUK EKSPLORASI GUILD</span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
}
