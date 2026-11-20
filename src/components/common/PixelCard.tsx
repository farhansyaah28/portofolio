import React from "react";

interface PixelCardProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "sky";
  title?: string;
  badge?: string;
  className?: string;
}

export function PixelCard({
  children,
  variant = "default",
  title,
  badge,
  className = "",
}: PixelCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "gold":
        return "pixel-box-gold";
      case "sky":
        return "bg-[#FFFFFF] border-3 border-[#1B3A8A] shadow-[4px_4px_0px_#8FD3FF]";
      case "default":
      default:
        return "pixel-box";
    }
  };

  return (
    <div className={`${getVariantStyles()} p-4 md:p-6 relative ${className}`}>
      {(title || badge) && (
        <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b-2 border-dashed border-[#1B3A8A]/30">
          {title && (
            <h3 className="font-rpg-header text-xs md:text-sm text-[#1B3A8A] uppercase tracking-wide flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-[#2F6FED]"></span>
              {title}
            </h3>
          )}
          {badge && (
            <span className="font-rpg-sub text-xs bg-[#F7C531] text-[#1B3A8A] px-2 py-0.5 border border-[#1B3A8A] font-bold">
              {badge}
            </span>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
