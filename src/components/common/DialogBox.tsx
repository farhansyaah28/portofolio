"use client";

import { useState, useEffect } from "react";
import { soundEngine } from "@/hooks/useAudio";
import { MessageSquare } from "lucide-react";

interface DialogBoxProps {
  speakerName: string;
  speakerRole?: string;
  avatarChar?: string;
  text: string;
  onComplete?: () => void;
  speedMs?: number;
  className?: string;
}

export function DialogBox({
  speakerName,
  speakerRole,
  text,
  onComplete,
  speedMs = 28,
  className = "",
}: DialogBoxProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    setDisplayedText("");
    setIsTyping(true);

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        if (index % 3 === 0) {
          soundEngine.playTyping();
        }
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, speedMs);

    return () => clearInterval(interval);
  }, [text, speedMs, onComplete]);

  const handleSkipTyping = () => {
    if (isTyping) {
      setDisplayedText(text);
      setIsTyping(false);
      if (onComplete) onComplete();
    }
  };

  return (
    <div
      onClick={handleSkipTyping}
      className={`snes-window p-4 md:p-5 relative cursor-pointer select-none bg-white text-[#1B3A8A] ${className}`}
    >
      {/* Header Tag */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b-2 border-[#1B3A8A]">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-[#2F6FED]" />
          <span className="font-rpg-header text-xs md:text-sm text-[#1B3A8A] font-bold">
            {speakerName}
          </span>
          {speakerRole && (
            <span className="font-rpg-sub text-xs text-[#2F6FED]">
              [{speakerRole}]
            </span>
          )}
        </div>
        <span className="font-rpg-sub text-[10px] text-[#1B3A8A]/60">
          {isTyping ? "KLIK UNTUK SKIP" : "SELESAI"}
        </span>
      </div>

      {/* Main Dialogue Content */}
      <div className="font-rpg-body text-xl md:text-2xl leading-relaxed min-h-[60px]">
        {displayedText}
        {isTyping && (
          <span className="inline-block w-2.5 h-4 bg-[#2F6FED] ml-1 animate-pixel-blink" />
        )}
      </div>

      {/* Retro Blinking Arrow when finished */}
      {!isTyping && (
        <div className="absolute right-4 bottom-3 text-[#2F6FED] animate-bounce text-xs font-rpg-header">
          ▼
        </div>
      )}
    </div>
  );
}
