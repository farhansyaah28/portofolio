"use client";

import Image from "next/image";
import { PixelButton } from "@/components/common/PixelButton";
import { StatBar } from "@/components/common/StatBar";
import { soundEngine } from "@/hooks/useAudio";
import { CHARACTER_PROFILE, CHARACTER_SKINS, CharacterSkin } from "@/data/profile";
import { Play, Swords, Gamepad2, ChevronDown, Terminal, GraduationCap, Users, MapPin, Code2 } from "lucide-react";

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
        return <GraduationCap className="w-3.5 h-3.5" />;
      case "programmer":
        return <Code2 className="w-3.5 h-3.5" />;
      case "organisasi":
        return <Users className="w-3.5 h-3.5" />;
      case "tourguide":
      default:
        return <MapPin className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-65px)] flex flex-col justify-between items-center pt-4 pb-8 md:pb-12 px-4 md:px-8 bg-rpg-world border-b-4 border-[#1B3A8A] select-none">
      <div className="w-full max-w-6xl mx-auto my-auto h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column (6.5 Cols) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left -mt-2 sm:-mt-4">
            
            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2 snes-window-panel px-3 py-0.5 mb-2 text-[#1B3A8A] font-rpg-header text-[8px] md:text-[9px]">
              <span className="w-2 h-2 bg-[#5DBB63] border border-[#1B3A8A] inline-block animate-pulse" />
              <span>UNIVERSITAS SYIAH KUALA // CLASS: S.KOM</span>
            </div>

            {/* Main Hero Name - Ukuran Medium Proporsional (Pas, tidak kekecilan dan tidak kegedean) */}
            <h1 className="font-rpg-header text-lg sm:text-xl md:text-2xl text-[#1B3A8A] leading-snug mb-1.5 tracking-wide">
              {CHARACTER_PROFILE.name}
            </h1>

            {/* Active Class / Subtitle Tag */}
            <div className="font-rpg-sub text-xs sm:text-sm text-[#2F6FED] font-bold tracking-wider mb-2.5 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#2F6FED]" />
              <span>{activeSkin.roleTitle}</span>
            </div>

            {/* Lore Bio Card */}
            <div className="snes-window-panel p-3 mb-2.5 border-l-4 border-l-[#2F6FED] w-full">
              <p className="font-rpg-body text-base md:text-lg text-[#1B3A8A] leading-relaxed">
                {activeSkin.description}
              </p>
            </div>

            {/* Quick Party Perk Badges - Ukuran font pas 1 baris utuh tanpa terpotong */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 w-full mb-2.5">
              {CHARACTER_PROFILE.quickStats.map((item, idx) => (
                <div
                  key={idx}
                  className="px-2 py-1.5 bg-white border-2 border-[#1B3A8A] shadow-[2px_2px_0px_#1B3A8A] text-left overflow-hidden flex flex-col justify-center"
                >
                  <span className="text-[6.5px] md:text-[7px] font-rpg-header text-[#1B3A8A]/70 block mb-0.5 whitespace-nowrap">
                    {item.label}
                  </span>
                  <span className="text-[8px] sm:text-[8.5px] md:text-[9px] font-rpg-sub font-bold text-[#1B3A8A] block whitespace-nowrap tracking-tight">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full pt-4">
              <PixelButton
                variant="primary"
                size="sm"
                onClick={() => {
                  soundEngine.playFanfare();
                  onStartAdventure();
                }}
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>MULAI PETUALANGAN</span>
              </PixelButton>

              <PixelButton
                variant="gold"
                size="sm"
                onClick={() => {
                  soundEngine.playCoin();
                  onExploreMiniGame();
                }}
              >
                <Gamepad2 className="w-3.5 h-3.5 text-[#1B3A8A]" />
                <span>MINI GAME (DINO RUNNER)</span>
              </PixelButton>
            </div>

          </div>

          {/* Right Column: Character Showcase Card */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center w-full">
            <div className="w-full max-w-sm snes-window-gold p-3.5 md:p-4 bg-white relative text-center">
              
              {/* Badge Corner */}
              <div className="absolute -top-3 right-3 bg-[#5DBB63] text-white px-2.5 py-0.5 font-rpg-header text-[8px] border-2 border-[#1B3A8A] shadow-[2px_2px_0px_#1B3A8A] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                <span>{activeSkin.name.toUpperCase()}</span>
              </div>

              {/* Character Artwork Frame */}
              <div className="relative w-full h-[180px] sm:h-[210px] mx-auto bg-[#DCEEFF] border-3 border-[#1B3A8A] shadow-[inset_3px_3px_0px_#FFFFFF,inset_-3px_-3px_0px_#8FD3FF] p-2 mb-2 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full animate-sprite-idle flex items-center justify-center">
                  <Image
                    key={activeSkin.id}
                    src={activeSkin.imageSrc}
                    alt={activeSkin.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 240px"
                    className="object-contain pixelated p-1"
                  />
                </div>
              </div>

              {/* Class Skin Selector Buttons */}
              <div className="font-rpg-header text-[8px] text-[#1B3A8A]/70 mb-1 text-left flex justify-between">
                <span>PILIH KARAKTER ROLE:</span>
                <span className="text-[#2F6FED]">[KLIK GANTI]</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 mb-2">
                {CHARACTER_SKINS.map((skin) => {
                  const isCurrent = activeSkin.id === skin.id;
                  return (
                    <button
                      key={skin.id}
                      onClick={() => {
                        soundEngine.playCoin();
                        onSkinChange(skin);
                      }}
                      className={`p-1.5 border-2 border-[#1B3A8A] flex flex-col items-center justify-center gap-0.5 cursor-pointer transition-transform ${
                        isCurrent
                          ? "bg-[#2F6FED] text-white shadow-[inset_1px_1px_0px_#8FD3FF,1px_1px_0px_#1B3A8A] translate-y-[1px]"
                          : "bg-white text-[#1B3A8A] hover:bg-[#DCEEFF] shadow-[2px_2px_0px_#1B3A8A]"
                      }`}
                      title={skin.name}
                    >
                      {getSkinIcon(skin.id)}
                      <span className="font-rpg-header text-[7px] truncate max-w-full">
                        {skin.name.split(" ")[0]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* HP & MP Vitals Gauges */}
              <div className="snes-window-panel p-2 mb-2 bg-[#F4F9FF] text-left flex flex-col gap-1 border-2 border-[#1B3A8A]">
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

              {/* Profile Card Footer Details */}
              <div className="snes-window-panel p-1.5 flex items-center justify-between font-rpg-sub text-[11px] text-[#1B3A8A]">
                <div>
                  <span className="text-[8px] text-[#1B3A8A]/60 block font-rpg-header">ALUMNI</span>
                  <span className="font-bold">Univ. Syiah Kuala</span>
                </div>
                <div className="text-right">
                  <span className="text-[8px] text-[#1B3A8A]/60 block font-rpg-header">KEAHLIAN UTAMA</span>
                  <span className="font-bold text-[#2F6FED]">{activeSkin.perk.split("|")[0].trim()}</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div
        onClick={onStartAdventure}
        className="cursor-pointer flex flex-col items-center gap-0,5 text-[#1B3A8A] font-rpg-header text-[9px] hover:text-[#2F6FED] mt-6 select-none"
      >
        <span>SCROLL UNTUK EKSPLORASI GUILD</span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
}
