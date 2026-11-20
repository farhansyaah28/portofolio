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
        return "snes-btn-gold";
      case "white":
        return "snes-btn-white";
      case "primary":
      default:
        return "snes-btn";
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
