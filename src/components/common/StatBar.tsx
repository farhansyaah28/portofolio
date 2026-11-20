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
      <div className="flex justify-between items-center mb-1 text-xs font-rpg-sub text-[#1B3A8A]">
        <span className="font-bold tracking-wider">{label}</span>
        {showValues && (
          <span className="font-mono text-[11px] font-bold">
            {current} / {max}
          </span>
        )}
      </div>
      <div className="w-full h-4 bg-white border-2 border-[#1B3A8A] pixel-box-inset p-[1px] relative overflow-hidden">
        <div
          className={`h-full ${getColorClass()} transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
        {/* Pixel grid segments overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
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
