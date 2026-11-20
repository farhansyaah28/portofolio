import React from "react";

interface StatBarProps {
  label: string;
  current: number;
  max: number;
  color?: "hp" | "mp" | "exp" | "stat";
  showValues?: boolean;
}

export function StatBar({
  label,
  current,
  max,
  color = "stat",
  showValues = true,
}: StatBarProps) {
  const percentage = Math.min(100, Math.max(0, (current / max) * 100));

  const getColorClass = () => {
    switch (color) {
      case "hp":
        return "bg-[#5DBB63]"; // Grass green
      case "mp":
        return "bg-[#2F6FED]"; // RPG blue
      case "exp":
        return "bg-[#F7C531]"; // Gold
      case "stat":
      default:
        return "bg-[#2F6FED]";
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-0.5 text-[10px] sm:text-[11px] font-rpg-sub text-[#1B3A8A]">
        <span className="font-bold tracking-wide drop-shadow-[1px_1px_0px_#FFFFFF]">
          {label}
        </span>
        {showValues && (
          <span className="font-mono text-[10px] font-bold bg-[#DCEEFF] px-1.5 py-0.2 border border-[#1B3A8A] shadow-[1px_1px_0px_#1B3A8A]">
            {current} / {max}
          </span>
        )}
      </div>
      <div className="w-full h-3.5 bg-[#E8F4FF] border-2 border-[#1B3A8A] shadow-[inset_2px_2px_0px_rgba(27,58,138,0.22),2px_2px_0px_#1B3A8A] p-[1px] relative overflow-hidden">
        <div
          className={`h-full ${getColorClass()} border-r-2 border-[#1B3A8A] shadow-[inset_0_2px_0_rgba(255,255,255,0.45),inset_0_-2px_0_rgba(0,0,0,0.2)] transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
        {/* Pixel grid segments overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #1B3A8A 1px, transparent 1px)",
            backgroundSize: "8px 100%",
          }}
        />
      </div>
    </div>
  );
}
