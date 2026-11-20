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
        return <Trophy className="w-5 h-5 text-[#F7C531]" />;
      case "medal":
        return <Award className="w-5 h-5 text-[#2F6FED]" />;
      case "shield":
        return <ShieldCheck className="w-5 h-5 text-[#5DBB63]" />;
      case "star":
        return <HeartHandshake className="w-5 h-5 text-[#E25822]" />;
      case "scroll":
      default:
        return <FileCheck className="w-5 h-5 text-[#1B3A8A]" />;
    }
  };

  return (
    <section id="achievements" className="pt-10 pb-14 px-4 max-w-6xl mx-auto scroll-mt-16">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-block bg-[#2F6FED] text-white px-4 py-1 font-rpg-header text-xs border-2 border-[#1B3A8A] shadow-[3px_3px_0px_#1B3A8A] mb-3">
          AREA 4: HALL OF HONORS
        </div>
        <h2 className="font-rpg-header text-2xl md:text-3xl text-[#1B3A8A] mb-2">
          MEDALS & PRESTIGIOUS HONORS
        </h2>
        <p className="font-rpg-body text-xl md:text-2xl text-[#1B3A8A] max-w-2xl mx-auto">
          Koleksi trofi kejuaraan kompetisi, medali keahlian, dan kepanitiaan event berskala provinsi, nasional, hingga internasional.
        </p>
      </div>

      {/* Grid of Pedestal Badges (2x2 Layout Simetris & Elegan) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {ACHIEVEMENTS.map((item) => {
          const isHighlighted = activeSkin.highlightAchievements.includes(item.id);
          return (
            <div
              key={item.id}
              className={`p-5 bg-white flex flex-col justify-between hover:-translate-y-1.5 transition-transform border-4 border-[#1B3A8A] ${
                isHighlighted
                  ? "shadow-[inset_3px_3px_0px_#FFF275,inset_-3px_-3px_0px_#F7C531,5px_5px_0px_#1B3A8A]"
                  : "shadow-[inset_3px_3px_0px_#8FD3FF,inset_-3px_-3px_0px_#2F6FED,5px_5px_0px_#1B3A8A]"
              }`}
            >
              <div>
                {/* Pedestal Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-10 h-10 bg-[#FFFDE8] border-2 border-[#1B3A8A] shadow-[2px_2px_0px_#1B3A8A] flex items-center justify-center">
                    {getIcon(item.iconType)}
                  </div>

                  <div className="flex items-center gap-1.5">
                    {isHighlighted && (
                      <span className="font-rpg-header text-[8px] bg-[#F7C531] text-[#1B3A8A] px-2 py-0.5 border border-[#1B3A8A] flex items-center gap-1">
                        <Star className="w-2.5 h-2.5 fill-[#1B3A8A]" />
                        KEY TROPHY
                      </span>
                    )}
                    <span className="font-rpg-sub text-xs bg-[#DCEEFF] text-[#1B3A8A] px-2.5 py-0.5 border-2 border-[#1B3A8A] font-bold">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <h3 className="font-rpg-header text-xs md:text-sm text-[#1B3A8A] mb-1 leading-snug">
                  {item.title}
                </h3>
                <div className="font-rpg-sub text-xs text-[#2F6FED] mb-3 font-semibold">
                  {item.issuer} • {item.date}
                </div>

                {/* Description */}
                <p className="font-rpg-body text-xl text-[#1B3A8A] leading-snug">
                  {item.description}
                </p>
              </div>

              {/* Bottom Status Tag */}
              <div className="mt-4 pt-2.5 border-t border-dashed border-[#1B3A8A]/30 flex items-center justify-between font-rpg-header text-[9px] text-[#1B3A8A]/70">
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
