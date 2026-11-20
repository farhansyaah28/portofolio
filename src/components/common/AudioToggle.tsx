"use client";

import { useAudio } from "@/hooks/useAudio";
import { Volume2, VolumeX } from "lucide-react";

export function AudioToggle() {
  const { muted, toggleSound } = useAudio();

  return (
    <button
      onClick={toggleSound}
      title={muted ? "Nyalakan SFX Retro" : "Matikan Suara"}
      className="fixed bottom-4 right-4 z-50 pixel-box-sm p-2.5 bg-white text-[#1B3A8A] hover:bg-[#DCEEFF] cursor-pointer flex items-center gap-2 group transition-transform active:scale-95"
    >
      {muted ? (
        <>
          <VolumeX className="w-5 h-5 text-red-600" />
          <span className="font-rpg-sub text-xs hidden group-hover:inline text-red-600">
            MUTED
          </span>
        </>
      ) : (
        <>
          <Volume2 className="w-5 h-5 text-[#2F6FED]" />
          <span className="font-rpg-sub text-xs hidden group-hover:inline text-[#2F6FED]">
            SFX ON
          </span>
        </>
      )}
    </button>
  );
}
