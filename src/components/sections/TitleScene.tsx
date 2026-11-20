"use client";

import { useState } from "react";
import Image from "next/image";
import { soundEngine } from "@/hooks/useAudio";
import { CHARACTER_PROFILE } from "@/data/profile";
import { Sparkles, Play, Compass, Shield, Scroll, Trophy, Mail } from "lucide-react";

interface TitleSceneProps {
  onNavigate: (scene: string) => void;
}

export function TitleScene({ onNavigate }: TitleSceneProps) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const menuItems = [
    { id: "village", label: "START ADVENTURE (STATUS)", icon: "🛡️", desc: "Inspeksi status karakter, level, dan persenjataan teknologi." },
    { id: "quests", label: "QUEST LOG (PROJECTS)", icon: "📜", desc: "Papan misi proyek web, visualizer logika, dan repositori kode." },
    { id: "guild", label: "EXPEDITION MAP (GUILD)", icon: "🏰", desc: "Riwayat kepengurusan organisasi kampus & perk kolaborasi." },
    { id: "achievements", label: "HONORS & TROPHIES", icon: "🏆", desc: "Koleksi lencana lomba, magang industri, dan kegiatan relawan." },
    { id: "game", label: "PLAY VILLAGE MINI GAME", icon: "🎮", desc: "Kendalikan karakter secara real-time & temukan peti harta karun!" },
    { id: "contact", label: "QUEST COMPLETE (CONTACT)", icon: "✉️", desc: "Saluran pesan guild, WhatsApp, dan unduh gulungan PDF resume." },
  ];

  const handleSelect = (idx: number, sceneId: string) => {
    setSelectedIdx(idx);
    soundEngine.playFanfare();
    onNavigate(sceneId);
  };

  return (
    <div className="relative w-full h-full min-h-[500px] flex flex-col justify-between items-center py-4">
      {/* Top Floating Badge */}
      <div className="w-full flex justify-between items-center font-rpg-header text-[10px] text-[#1B3A8A]">
        <div className="snes-window-panel px-3 py-1 bg-white flex items-center gap-2">
          <span className="w-2 h-2 bg-[#5DBB63] inline-block animate-pulse" />
          <span>SAVE FILE 01: READY</span>
        </div>
        <div className="snes-window-panel px-3 py-1 bg-white">
          <span>WORLD: INFORMATIKA 2026</span>
        </div>
      </div>

      {/* Main Title & Sprite Stage Center */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 my-auto py-2">
        {/* Left Character Pedestal */}
        <div className="flex flex-col items-center">
          <div className="relative">
            {/* Ground Shadow */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1B3A8A]/25 rounded-full blur-[1px]" />
            
            {/* Sprite Box */}
            <div className="relative w-36 h-36 md:w-44 md:h-44 snes-window p-2 bg-white flex items-center justify-center">
              <div className="relative w-full h-full animate-sprite-idle">
                <Image
                  src="/assets/hero.png"
                  alt="Character Sprite"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 176px"
                  className="object-contain pixelated"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-3 snes-window-gold px-3 py-1 text-center font-rpg-header text-[10px] text-[#1B3A8A]">
            LVL {CHARACTER_PROFILE.level} HERO
          </div>
        </div>

        {/* Right Menu Box */}
        <div className="w-full max-w-md flex flex-col">
          {/* Logo Box */}
          <div className="snes-window-gold p-4 text-center mb-3 bg-white">
            <span className="inline-block bg-[#2F6FED] text-white px-2.5 py-0.5 font-rpg-header text-[8px] border border-[#1B3A8A] mb-1">
              THE 16-BIT PORTFOLIO
            </span>
            <h1 className="font-rpg-header text-xl md:text-2xl text-[#1B3A8A] leading-tight">
              {CHARACTER_PROFILE.name}
            </h1>
            <div className="font-rpg-sub text-xs text-[#2F6FED] font-bold mt-1">
              ✦ {CHARACTER_PROFILE.classTitle} ✦
            </div>
          </div>

          {/* Vertical JRPG Menu List */}
          <div className="snes-window p-3 bg-white flex flex-col gap-1.5 shadow-[4px_4px_0px_#1B3A8A]">
            <div className="font-rpg-header text-[9px] text-[#1B3A8A]/60 px-2 pb-1 border-b border-dashed border-[#1B3A8A]/30 flex justify-between">
              <span>PILIS MENU DENGAN MOUSE / TAP:</span>
              <span className="text-[#2F6FED]">SELECT</span>
            </div>

            {menuItems.map((item, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={item.id}
                  onMouseEnter={() => {
                    setSelectedIdx(idx);
                    soundEngine.playClick();
                  }}
                  onClick={() => handleSelect(idx, item.id)}
                  className={`w-full text-left px-3 py-2 flex items-center justify-between transition-colors cursor-pointer border ${
                    isSelected
                      ? "bg-[#DCEEFF] border-[#2F6FED] text-[#1B3A8A] shadow-[2px_2px_0px_#1B3A8A]"
                      : "bg-white hover:bg-[#F4F9FF] border-transparent text-[#1B3A8A]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-rpg-header text-xs ${
                        isSelected
                          ? "text-[#2F6FED] animate-cursor-point inline-block"
                          : "opacity-0"
                      }`}
                    >
                      ►
                    </span>
                    <span className="text-sm">{item.icon}</span>
                    <span className="font-rpg-header text-[10px] md:text-[11px] tracking-wide">
                      {item.label}
                    </span>
                  </div>
                  {isSelected && (
                    <Sparkles className="w-3.5 h-3.5 text-[#F7C531] animate-spin" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Dynamic Dialogue Box */}
          <div className="mt-2.5 snes-window-panel p-2.5 text-center font-rpg-body text-xl text-[#1B3A8A] leading-tight">
            &ldquo;{menuItems[selectedIdx].desc}&rdquo;
          </div>
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="text-center font-rpg-header text-[9px] text-[#1B3A8A]/80 animate-pulse pt-2">
        ▼ KLIK SALAH SATU MENU DI ATAS ATAU TOMBOL KONSOL DI BAWAH ▼
      </div>
    </div>
  );
}
