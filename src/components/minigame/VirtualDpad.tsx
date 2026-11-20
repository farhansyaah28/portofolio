"use client";

import { PixelButton } from "@/components/common/PixelButton";
import { soundEngine } from "@/hooks/useAudio";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, MessageSquare } from "lucide-react";

interface VirtualDpadProps {
  onMove: (dir: "UP" | "DOWN" | "LEFT" | "RIGHT") => void;
  onInteract: () => void;
}

export function VirtualDpad({ onMove, onInteract }: VirtualDpadProps) {
  const triggerMove = (dir: "UP" | "DOWN" | "LEFT" | "RIGHT") => {
    soundEngine.playClick();
    onMove(dir);
  };

  return (
    <div className="flex items-center justify-between gap-4 p-2 bg-white/95 border-2 border-[#1B3A8A] pixel-box max-w-xs mx-auto select-none touch-none">
      {/* Direction Cross - Compact */}
      <div className="grid grid-cols-3 gap-0.5 w-24 h-24">
        <div />
        <button
          onClick={() => triggerMove("UP")}
          className="p-1 bg-[#DCEEFF] hover:bg-[#8FD3FF] border-2 border-[#1B3A8A] shadow-[1px_1px_0px_#1B3A8A] active:translate-y-[1px] flex items-center justify-center cursor-pointer"
        >
          <ArrowUp className="w-4 h-4 text-[#1B3A8A]" />
        </button>
        <div />

        <button
          onClick={() => triggerMove("LEFT")}
          className="p-1 bg-[#DCEEFF] hover:bg-[#8FD3FF] border-2 border-[#1B3A8A] shadow-[1px_1px_0px_#1B3A8A] active:translate-x-[-1px] flex items-center justify-center cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#1B3A8A]" />
        </button>
        <div className="bg-[#1B3A8A]/10 border border-dashed border-[#1B3A8A]/40 flex items-center justify-center font-rpg-header text-[7px] text-[#1B3A8A]/60">
          DPAD
        </div>
        <button
          onClick={() => triggerMove("RIGHT")}
          className="p-1 bg-[#DCEEFF] hover:bg-[#8FD3FF] border-2 border-[#1B3A8A] shadow-[1px_1px_0px_#1B3A8A] active:translate-x-[1px] flex items-center justify-center cursor-pointer"
        >
          <ArrowRight className="w-4 h-4 text-[#1B3A8A]" />
        </button>

        <div />
        <button
          onClick={() => triggerMove("DOWN")}
          className="p-1 bg-[#DCEEFF] hover:bg-[#8FD3FF] border-2 border-[#1B3A8A] shadow-[1px_1px_0px_#1B3A8A] active:translate-y-[1px] flex items-center justify-center cursor-pointer"
        >
          <ArrowDown className="w-4 h-4 text-[#1B3A8A]" />
        </button>
        <div />
      </div>

      {/* Action A Button (Interact / Talk) - Compact */}
      <div className="flex flex-col items-center gap-1">
        <button
          onClick={() => {
            soundEngine.playCoin();
            onInteract();
          }}
          className="w-12 h-12 rounded-full bg-[#F7C531] hover:bg-[#FFF275] border-2 border-[#1B3A8A] shadow-[2px_2px_0px_#1B3A8A] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none flex flex-col items-center justify-center cursor-pointer text-[#1B3A8A]"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="font-rpg-header text-[8px] font-bold mt-0.5">A</span>
        </button>
        <span className="font-rpg-header text-[7.5px] text-[#1B3A8A]">BICARA / BUKA</span>
      </div>
    </div>
  );
}
