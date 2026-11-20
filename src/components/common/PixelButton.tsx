"use client";

import React from "react";
import { soundEngine } from "@/hooks/useAudio";

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "gold" | "white";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function PixelButton({
  variant = "primary",
  size = "md",
  children,
  className = "",
  onClick,
  ...props
}: PixelButtonProps) {
  const getVariantClass = () => {
    switch (variant) {
      case "gold":
        return "pixel-btn-gold";
      case "white":
        return "bg-white text-[#1B3A8A] hover:bg-[#DCEEFF] border-3 border-[#1B3A8A] shadow-[4px_4px_0px_#1B3A8A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#1B3A8A]";
      case "primary":
      default:
        return "pixel-btn";
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return "px-3 py-1.5 text-xs font-rpg-header";
      case "lg":
        return "px-6 py-3.5 text-sm md:text-base font-rpg-header tracking-wider";
      case "md":
      default:
        return "px-4 py-2 text-xs md:text-sm font-rpg-header";
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    soundEngine.playClick();
    if (onClick) onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 cursor-pointer font-bold ${getVariantClass()} ${getSizeClass()} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
