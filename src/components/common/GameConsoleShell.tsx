"use client";

import React from "react";
import { soundEngine } from "@/hooks/useAudio";
import { Volume2, VolumeX, Maximize2 } from "lucide-react";

interface GameConsoleShellProps {
  children: React.ReactNode;
  activeScene: string;
  onSceneChange: (scene: string) => void;
  muted: boolean;
  onToggleSound: () => void;
}

export function GameConsoleShell({
  children,
  activeScene,
  onSceneChange,
  muted,
  onToggleSound,
}: GameConsoleShellProps) {
  const menuButtons = [
    { id: "title", label: "TITLE", icon: "⚔️" },
    { id: "village", label: "STATUS", icon: "🛡️" },
    { id: "quests", label: "QUESTS", icon: "📜" },
    { id: "guild", label: "EXPEDITION", icon: "🏰" },
    { id: "achievements", label: "HONORS", icon: "🏆" },
    { id: "game", label: "OVERWORLD", icon: "🎮" },
    { id: "contact", label: "CONTACT", icon: "✉️" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-2 sm:p-4 md:p-6 select-none">
      {/* Handheld/Arcade Console Outer Casing */}
      <div className="bg-[#FFFFFF] border-4 md:border-6 border-[#1B3A8A] shadow-[8px_8px_0px_#1B3A8A] p-3 sm:p-5 md:p-7 relative">
        
        {/* Top Console Bezel Header */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b-4 border-[#1B3A8A]">
          {/* Brand Logo & Model */}
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <span className="w-3 h-3 bg-[#2F6FED] border border-[#1B3A8A]" />
              <span className="w-3 h-3 bg-[#F7C531] border border-[#1B3A8A]" />
              <span className="w-3 h-3 bg-[#5DBB63] border border-[#1B3A8A]" />
            </div>
            <span className="font-rpg-header text-xs md:text-sm text-[#1B3A8A] tracking-wider font-bold">
              PORTFOLIO BOY ADVANCE // 16-BIT
            </span>
          </div>

          {/* Hardware Lights & Controls */}
          <div className="flex items-center gap-4">
            {/* Battery / Power LED */}
            <div className="flex items-center gap-1.5 font-rpg-sub text-[10px] text-[#1B3A8A] font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#5DBB63] border border-[#1B3A8A] animate-pulse" />
              <span className="hidden sm:inline">POWER</span>
            </div>

            {/* Speaker Slits */}
            <div className="hidden sm:flex gap-1">
              <div className="w-1 h-4 bg-[#1B3A8A]/30" />
              <div className="w-1 h-4 bg-[#1B3A8A]/30" />
              <div className="w-1 h-4 bg-[#1B3A8A]/30" />
              <div className="w-1 h-4 bg-[#1B3A8A]/30" />
            </div>

            {/* Sound Toggle Button */}
            <button
              onClick={onToggleSound}
              className="p-1.5 snes-window-panel hover:bg-[#DCEEFF] cursor-pointer flex items-center gap-1 text-[#1B3A8A]"
              title={muted ? "Nyalakan Suara" : "Matikan Suara"}
            >
              {muted ? <VolumeX className="w-4 h-4 text-red-600" /> : <Volume2 className="w-4 h-4 text-[#2F6FED]" />}
              <span className="font-rpg-header text-[9px] hidden md:inline">
                {muted ? "MUTE" : "SFX"}
              </span>
            </button>
          </div>
        </div>

        {/* The Game Screen CRT Bezel Window */}
        <div className="relative border-4 border-[#1B3A8A] shadow-[inset_4px_4px_0px_#8FD3FF,inset_-4px_-4px_0px_#1B3A8A] bg-[#DCEEFF] min-h-[580px] overflow-hidden flex flex-col justify-between">
          {/* Inside Screen Content Area */}
          <div className="relative z-10 w-full h-full flex-1 p-3 sm:p-6 overflow-y-auto max-h-[72vh]">
            {children}
          </div>
        </div>

        {/* Bottom Hardware Console Navigation Bar (Cartridge Action Pad) */}
        <div className="mt-4 pt-3 border-t-4 border-[#1B3A8A] flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Scene Switcher Cartridges */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {menuButtons.map((btn) => {
              const isActive = activeScene === btn.id;
              return (
                <button
                  key={btn.id}
                  onClick={() => {
                    soundEngine.playClick();
                    onSceneChange(btn.id);
                  }}
                  className={`px-3 py-2 font-rpg-header text-[10px] md:text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#2F6FED] text-white border-3 border-[#1B3A8A] shadow-[inset_2px_2px_0px_#8FD3FF,2px_2px_0px_#1B3A8A] translate-y-[1px]"
                      : "bg-[#FFFFFF] text-[#1B3A8A] border-3 border-[#1B3A8A] shadow-[3px_3px_0px_#1B3A8A] hover:bg-[#DCEEFF] active:translate-y-[2px]"
                  }`}
                >
                  <span>{btn.icon}</span>
                  <span>{btn.label}</span>
                </button>
              );
            })}
          </div>

          {/* D-Pad Decorative Badge */}
          <div className="font-rpg-sub text-xs text-[#1B3A8A]/70 flex items-center gap-2 font-bold">
            <span>© 2026 T. FARHAN SYAH</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline text-[#2F6FED]">SNES CHIP READY</span>
          </div>
        </div>

      </div>
    </div>
  );
}
