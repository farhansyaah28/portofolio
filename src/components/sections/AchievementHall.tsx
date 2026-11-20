"use client";

import { ACHIEVEMENTS } from "@/data/achievements";
import { CharacterSkin } from "@/data/profile";
import { Trophy, Award, ShieldCheck, HeartHandshake, FileCheck, Star } from "lucide-react";

interface AchievementHallProps {
  activeSkin: CharacterSkin;
}

export function AchievementHall({ activeSkin }: AchievementHallProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "trophy":
        return <Trophy className="w-4 h-4 text-[#F7C531]" />;
      case "medal":
        return <Award className="w-4 h-4 text-[#2F6FED]" />;
      case "shield":
        return <ShieldCheck className="w-4 h-4 text-[#5DBB63]" />;
      case "star":
        return <HeartHandshake className="w-4 h-4 text-[#E25822]" />;
      case "scroll":
      default:
        return <FileCheck className="w-4 h-4 text-[#1B3A8A]" />;
    }
  };

  return (
    <section id="achievements" className="pt-6 pb-10 px-4 max-w-5xl mx-auto scroll-mt-16">
      {/* Header */}
      <div className="text-center mb-5">
        <div className="inline-block bg-[#2F6FED] text-white px-3 py-0.5 font-rpg-header text-[9px] border-2 border-[#1B3A8A] shadow-[2px_2px_0px_#1B3A8A] mb-1.5">
          AREA 4: HALL OF HONORS
        </div>
        <h2 className="font-rpg-header text-base sm:text-lg md:text-xl text-[#1B3A8A] text-3d-title mb-1">
          MEDALS & PRESTIGIOUS HONORS
        </h2>
        <p className="font-rpg-body text-sm sm:text-base text-[#1B3A8A]/90 max-w-xl mx-auto">
          Koleksi trofi kejuaraan kompetisi, medali keahlian, dan kepanitiaan event berskala provinsi, nasional, hingga internasional.
        </p>
      </div>

      {/* Grid of Pedestal Badges (2x2 Layout Simetris & Proporsional) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {ACHIEVEMENTS.map((item) => {
          const isHighlighted = activeSkin.highlightAchievements.includes(item.id);
          return (
            <div
              key={item.id}
              className={`p-3.5 sm:p-4 bg-white flex flex-col justify-between hover:-translate-y-1 transition-transform border-3 border-[#1B3A8A] ${
                isHighlighted
                  ? "shadow-[inset_2px_2px_0px_#FFF275,inset_-2px_-2px_0px_#F7C531,4px_4px_0px_#1B3A8A]"
                  : "shadow-[inset_2px_2px_0px_#8FD3FF,inset_-2px_-2px_0px_#2F6FED,4px_4px_0px_#1B3A8A]"
              }`}
            >
              <div>
                {/* Pedestal Header */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="w-8 h-8 bg-[#FFFDE8] border-2 border-[#1B3A8A] shadow-[2px_2px_0px_#1B3A8A] flex items-center justify-center">
                    {getIcon(item.iconType)}
                  </div>

                  <div className="flex items-center gap-1.5">
                    {isHighlighted && (
                      <span className="font-rpg-header text-[7.5px] bg-[#F7C531] text-[#1B3A8A] px-2 py-0.5 border border-[#1B3A8A] flex items-center gap-1">
                        <Star className="w-2.5 h-2.5 fill-[#1B3A8A]" />
                        KEY TROPHY
                      </span>
                    )}
                    <span className="font-rpg-sub text-[10.5px] bg-[#DCEEFF] text-[#1B3A8A] px-2 py-0.5 border-2 border-[#1B3A8A] font-bold">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <h3 className="font-rpg-header text-xs text-[#1B3A8A] mb-1 leading-snug">
                  {item.title}
                </h3>
                <div className="font-rpg-sub text-[10.5px] text-[#2F6FED] mb-2 font-semibold">
                  {item.issuer} • {item.date}
                </div>

                {/* Description */}
                <p className="font-rpg-body text-sm sm:text-base text-[#1B3A8A] leading-snug">
                  {item.description}
                </p>
              </div>

              {/* Bottom Status Tag */}
              <div className="mt-3 pt-2 border-t border-dashed border-[#1B3A8A]/30 flex items-center justify-between font-rpg-header text-[8px] text-[#1B3A8A]/70">
                <span>STATUS</span>
                <span className="text-[#5DBB63] font-bold">★ UNLOCKED</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
