"use client";

import { useState } from "react";
import { EXPERIENCES } from "@/data/experience";
import { CharacterSkin } from "@/data/profile";
import { soundEngine } from "@/hooks/useAudio";
import { Castle, MapPin, ChevronDown, ChevronUp, ScrollText, Award } from "lucide-react";

interface GuildHallProps {
  activeSkin: CharacterSkin;
}

export function GuildHall({ activeSkin }: GuildHallProps) {
  const [expandedLogs, setExpandedLogs] = useState<Record<string, boolean>>({});

  const toggleLog = (id: string) => {
    soundEngine.playClick();
    setExpandedLogs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="guild" className="pt-6 pb-10 px-4 max-w-5xl mx-auto scroll-mt-16">
      {/* Header */}
      <div className="text-center mb-5">
        <div className="inline-block bg-[#2F6FED] text-white px-3 py-0.5 font-rpg-header text-[9px] border-2 border-[#1B3A8A] shadow-[2px_2px_0px_#1B3A8A] mb-1.5">
          AREA 3: GUILD HALL (ORGANISASI)
        </div>
        <h2 className="font-rpg-header text-base sm:text-lg md:text-xl text-[#1B3A8A] text-3d-title mb-1">
          GUILD HALL & EXPEDITION LOG
        </h2>
        <p className="font-rpg-body text-sm sm:text-base text-[#1B3A8A]/90 max-w-xl mx-auto">
          Benteng guild organisasi kemahasiswaan dan pos ekspedisi lapangan dalam membangun sinergi tim.
        </p>
      </div>

      {/* RPG Castle Waypoint Nodes */}
      <div className="relative border-l-4 border-dashed border-[#2F6FED] ml-4 md:ml-10 pl-5 md:pl-8 space-y-4">
        {EXPERIENCES.map((exp, index) => {
          const isHighlighted = activeSkin.highlightExperiences.includes(exp.id);
          const isExpanded = !!expandedLogs[exp.id];
          const hasMultipleLogs = exp.questLog.length > 1;

          return (
            <div key={exp.id} className="relative group">
              {/* Castle Waypoint Pin */}
              <div
                className={`absolute -left-[35px] md:-left-[49px] top-2 w-8 h-8 border-2 border-[#1B3A8A] shadow-[2px_2px_0px_#1B3A8A] flex items-center justify-center transition-colors ${isHighlighted ? "bg-[#F7C531] text-[#1B3A8A]" : "bg-white text-[#2F6FED]"
                  }`}
              >
                <Castle className="w-4 h-4" />
              </div>

              {/* Exp Card Window */}
              <div
                className={`p-3.5 sm:p-4 bg-white border-3 border-[#1B3A8A] transition-all ${isHighlighted
                  ? "shadow-[inset_2px_2px_0px_#FFF275,inset_-2px_-2px_0px_#F7C531,4px_4px_0px_#1B3A8A]"
                  : "shadow-[inset_2px_2px_0px_#8FD3FF,inset_-2px_-2px_0px_#2F6FED,4px_4px_0px_#1B3A8A]"
                  }`}
              >
                {/* Header Outpost: Terstruktur & Rapi */}
                <div className="pb-2 mb-2 border-b-2 border-dashed border-[#1B3A8A]/30">
                  {/* Top Bar: Outpost Tag & Lokasi di Kiri, Tanggal & Checkpoint di Kanan */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-rpg-header text-[8px] bg-[#1B3A8A] text-[#F7C531] px-2 py-0.5 border border-[#1B3A8A] tracking-wider shadow-[1px_1px_0px_#2F6FED]">
                        OUTPOST {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </span>
                      <div className="flex items-center gap-1 font-rpg-sub text-[11px] text-[#2F6FED] font-bold">
                        <MapPin className="w-3 h-3 shrink-0" />
                        <span>{exp.townName}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap ml-auto sm:ml-0">
                      {isHighlighted && (
                        <span className="font-rpg-header text-[7.5px] bg-[#F7C531] text-[#1B3A8A] px-2 py-0.5 border border-[#1B3A8A] shadow-[1px_1px_0px_#1B3A8A] font-bold">
                          ★ KEY CHECKPOINT
                        </span>
                      )}
                      <div className="font-rpg-sub text-[11px] bg-[#DCEEFF] text-[#1B3A8A] px-2 py-0.5 border-2 border-[#1B3A8A] shadow-[2px_2px_0px_#1B3A8A] font-bold whitespace-nowrap">
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  {/* Title & Organization Subtitle */}
                  <h3 className="font-rpg-header text-xs sm:text-sm text-[#1B3A8A] leading-snug">
                    {exp.role}
                  </h3>
                  <p className="font-rpg-body text-sm sm:text-base text-[#1B3A8A]/75 mt-0.5">
                    {exp.organization}
                  </p>
                </div>

                {/* Primary Log / Highlight */}
                <div className="mb-2.5">
                  <div className="flex items-start gap-2 font-rpg-body text-sm sm:text-base text-[#1B3A8A]">
                    <span className="text-[#2F6FED] font-bold shrink-0 mt-0.5">►</span>
                    <span className="leading-snug">{exp.questLog[0]}</span>
                  </div>

                  {/* Additional Logs (Collapsible to prevent text fatigue) */}
                  {hasMultipleLogs && isExpanded && (
                    <div className="mt-2 pt-2 border-t border-dashed border-[#1B3A8A]/20 space-y-1.5 animate-fadeIn pl-2">
                      {exp.questLog.slice(1).map((log, i) => (
                        <div key={i} className="flex items-start gap-2 font-rpg-body text-sm sm:text-base text-[#1B3A8A]">
                          <span className="text-[#2F6FED] font-bold shrink-0 mt-0.5">►</span>
                          <span className="leading-snug">{log}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Expand/Collapse Trigger */}
                  {hasMultipleLogs && (
                    <button
                      type="button"
                      onClick={() => toggleLog(exp.id)}
                      className="mt-2.5 font-rpg-header text-[8px] text-[#2F6FED] hover:text-[#1B3A8A] bg-[#DCEEFF]/70 hover:bg-[#DCEEFF] border border-[#1B3A8A] px-2 py-1 flex items-center gap-1.5 cursor-pointer transition-colors"
                    >
                      <ScrollText className="w-3 h-3 text-[#2F6FED]" />
                      <span>
                        {isExpanded
                          ? "SEMBUNYIKAN LOG TAMBAHAN"
                          : `LIHAT LOG LENGKAP (+${exp.questLog.length - 1} CATATAN TUGAS)`}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-3 h-3 text-[#1B3A8A]" />
                      ) : (
                        <ChevronDown className="w-3 h-3 text-[#1B3A8A]" />
                      )}
                    </button>
                  )}
                </div>

                {/* Perks / Buffs Unlocked */}
                <div className="pt-2.5 border-t border-[#1B3A8A]/20 flex flex-wrap items-center gap-2">
                  <span className="font-rpg-sub text-[11px] text-[#1B3A8A] font-bold flex items-center gap-1">
                    <Award className="w-3 h-3 text-[#2F6FED]" />
                    PERKS:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.guildPerks.map((perk, pIdx) => (
                      <span
                        key={pIdx}
                        className="font-rpg-sub text-[10px] bg-[#FFF275] text-[#1B3A8A] px-2 py-0.5 border border-[#1B3A8A] shadow-[1px_1px_0px_#1B3A8A] font-semibold"
                      >
                        +{perk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
