"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/data/projects";
import { CharacterSkin } from "@/data/profile";
import { PixelButton } from "@/components/common/PixelButton";
import { soundEngine } from "@/hooks/useAudio";
import { ExternalLink, Code2, Scroll, Star, Sparkles, Globe, ChevronDown, ChevronUp, Layers } from "lucide-react";

interface QuestBoardProps {
  activeSkin: CharacterSkin;
  onSelectRole?: (roleId: CharacterSkin["id"]) => void;
}

export function QuestBoard({ activeSkin, onSelectRole }: QuestBoardProps) {
  const [filter, setFilter] = useState<string>("ALL");
  const [expandedNotes, setExpandedNotes] = useState<Record<string, boolean>>({});

  const toggleNote = (id: string) => {
    soundEngine.playClick();
    setExpandedNotes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Proyek hanya diambil dari proyek milik karakter yang sedang aktif
  const availableProjects = PROJECTS.filter((proj) =>
    activeSkin.highlightProjects.includes(proj.id)
  );

  const filteredProjects = availableProjects.filter((proj) => {
    if (filter === "ALL") return true;
    if (filter === "FEATURED") return proj.featured;
    return proj.questRank === filter;
  });

  const hasNoProjects = availableProjects.length === 0;

  return (
    <section id="quests" className="pt-10 pb-14 px-4 max-w-6xl mx-auto scroll-mt-16">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-block bg-[#2F6FED] text-white px-4 py-1 font-rpg-header text-xs border-2 border-[#1B3A8A] shadow-[3px_3px_0px_#1B3A8A] mb-3">
          AREA 2: QUEST BOARD (PROJECTS)
        </div>
        <h2 className="font-rpg-header text-2xl md:text-3xl text-[#1B3A8A] mb-2">
          COMPLETED QUEST BOUNTIES
        </h2>
        <p className="font-rpg-body text-xl md:text-2xl text-[#1B3A8A] max-w-xl mx-auto">
          Misi software & proyek aplikasi yang diselesaikan oleh role{" "}
          <span className="font-bold text-[#2F6FED]">{activeSkin.name}</span>.
        </p>
      </div>

      {/* State jika karakter tidak memiliki project software (Leader Guild & Tour Guide) */}
      {hasNoProjects ? (
        <div className="snes-window-gold p-8 md:p-12 bg-white text-center max-w-3xl mx-auto">
          <div className="inline-block bg-[#DCEEFF] text-[#1B3A8A] px-3.5 py-1 font-rpg-header text-[10px] border-2 border-[#1B3A8A] shadow-[2px_2px_0px_#1B3A8A] mb-4">
            ✦ NON-SOFTWARE QUEST CLASS ✦
          </div>
          <h3 className="font-rpg-header text-lg sm:text-xl text-[#1B3A8A] mb-3 leading-snug">
            TIDAK ADA QUEST PROYEK SOFTWARE PADA ROLE INI
          </h3>
          <p className="font-rpg-body text-xl md:text-2xl text-[#1B3A8A]/85 max-w-xl mx-auto mb-6 leading-relaxed">
            Role <span className="font-bold text-[#2F6FED]">{activeSkin.name}</span> difokuskan pada misi kepemimpinan organisasi, koordinasi sosial masyarakat, dan ekspedisi navigasi lapangan—bukan rekayasa perangkat lunak.
          </p>
          <div className="snes-window-panel p-4 bg-[#F4F9FF] max-w-md mx-auto text-left mb-6 border-2 border-[#1B3A8A]">
            <span className="font-rpg-header text-[9px] text-[#2F6FED] block mb-1">
              SARAN PETUALANG:
            </span>
            <p className="font-rpg-body text-lg text-[#1B3A8A]">
              Jelajahi rekam jejak organisasi role ini di <strong>Area 3: Guild Hall</strong>, atau beralih ke role <strong>Software Engineer</strong> untuk melihat 5 proyek sistem informasi & REST API.
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 font-rpg-header text-xs">
            {["ALL", "S-RANK", "A-RANK", "B-RANK"].map((tab) => {
              const count = tab === "ALL"
                ? availableProjects.length
                : availableProjects.filter(p => p.questRank === tab).length;
              if (count === 0 && tab !== "ALL") return null;

              return (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-3.5 py-2 cursor-pointer border-3 border-[#1B3A8A] transition-all font-bold whitespace-nowrap ${filter === tab
                    ? "bg-[#2F6FED] text-white shadow-[3px_3px_0px_#1B3A8A] translate-x-[1px] translate-y-[1px]"
                    : "bg-white text-[#1B3A8A] hover:bg-[#DCEEFF] shadow-[4px_4px_0px_#1B3A8A]"
                    }`}
                >
                  {tab} ({count})
                </button>
              );
            })}
          </div>

          {/* Parchment Quests Grid with Retro Visual Mockup Frame */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((quest) => {
              const isNoteOpen = !!expandedNotes[quest.id];
              return (
                <div
                  key={quest.id}
                  className="p-4 sm:p-5 flex flex-col justify-between border-4 border-[#1B3A8A] relative bg-white shadow-[inset_3px_3px_0px_#FFF275,inset_-3px_-3px_0px_#F7C531,6px_6px_0px_#1B3A8A] transition-transform hover:-translate-y-0.5"
                >
                  <div>
                    {/* Top Status & Rank Strip */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-rpg-header text-[8px] sm:text-[9px] px-2.5 py-1 border-2 border-[#1B3A8A] shadow-[1px_1px_0px_#1B3A8A] font-bold whitespace-nowrap shrink-0 leading-none ${
                            quest.questRank === "S-RANK"
                              ? "bg-[#F7C531] text-[#1B3A8A]"
                              : "bg-[#8FD3FF] text-[#1B3A8A]"
                          }`}
                        >
                          {quest.questRank}
                        </span>
                        <span className="font-rpg-sub text-xs text-[#2F6FED] font-bold flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-[#F7C531] text-[#1B3A8A]" />
                          {activeSkin.name.toUpperCase()}
                        </span>
                      </div>

                      <span className="font-rpg-sub text-xs text-[#1B3A8A] font-bold">
                        XP: {quest.lootReward}
                      </span>
                    </div>

                    {/* Retro Web / Terminal Mockup Frame */}
                    <div className="bg-[#1B3A8A] border-2 border-[#1B3A8A] mb-3 overflow-hidden shadow-[2px_2px_0px_#1B3A8A]">
                      {/* Window Title Bar */}
                      <div className="bg-[#0F2042] px-2.5 py-1.5 flex items-center justify-between border-b-2 border-[#1B3A8A]">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#FF5F56] inline-block border border-black/40" />
                          <span className="w-2 h-2 rounded-full bg-[#FFBD2E] inline-block border border-black/40" />
                          <span className="w-2 h-2 rounded-full bg-[#27C93F] inline-block border border-black/40" />
                          <span className="font-rpg-header text-[7.5px] sm:text-[8px] text-white/90 ml-1.5 tracking-wider truncate max-w-[130px] sm:max-w-[200px]">
                            {quest.demoUrl
                              ? quest.demoUrl.replace("https://", "")
                              : quest.id === "quest-3"
                              ? "cbt.politeknik.local"
                              : `${quest.id}.app`}
                          </span>
                        </div>

                        {quest.demoUrl ? (
                          <span className="flex items-center gap-1 font-rpg-header text-[7px] bg-[#27C93F] text-black px-1.5 py-0.5 border border-black font-bold">
                            <span className="w-1.5 h-1.5 bg-black rounded-full animate-ping" />
                            ONLINE
                          </span>
                        ) : quest.id === "quest-3" ? (
                          <span className="font-rpg-header text-[7px] bg-[#FFF275] text-[#1B3A8A] px-1.5 py-0.5 border border-[#1B3A8A] font-bold">
                            ON-PREMISE CBT
                          </span>
                        ) : (
                          <span className="font-rpg-header text-[7px] bg-[#8FD3FF] text-[#1B3A8A] px-1.5 py-0.5 border border-[#1B3A8A] font-bold">
                            ARCHIVE
                          </span>
                        )}
                      </div>

                      {/* Mockup Canvas Screen */}
                      {quest.imageSrc ? (
                        <div
                          className="relative w-full h-[145px] sm:h-[165px] bg-[#0F2042] overflow-hidden group/screen cursor-pointer"
                          onClick={() => {
                            if (quest.demoUrl) {
                              soundEngine.playClick();
                              window.open(quest.demoUrl, "_blank", "noopener,noreferrer");
                            }
                          }}
                        >
                          <Image
                            src={quest.imageSrc}
                            alt={quest.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 500px"
                            className="object-cover object-top transition-transform duration-300 group-hover/screen:scale-105"
                          />
                          {/* Subtle CRT Scanline Retro Effect */}
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1B3A8A]/10 to-[#0F2042]/50 pointer-events-none" />
                          <div className="absolute inset-0 opacity-15 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none" />

                          {/* Hover Overlay Badge */}
                          <div className="absolute bottom-2 right-2 bg-[#1B3A8A]/90 backdrop-blur-xs text-white border border-[#8FD3FF] px-2 py-0.5 font-rpg-header text-[7.5px] flex items-center gap-1 shadow-sm opacity-90 group-hover/screen:opacity-100 transition-opacity">
                            {quest.demoUrl ? (
                              <>
                                <ExternalLink className="w-2.5 h-2.5 text-[#F7C531]" />
                                <span>KLIK BUKA WEBSITE</span>
                              </>
                            ) : (
                              <>
                                <Layers className="w-2.5 h-2.5 text-[#8FD3FF]" />
                                <span>INSTALASI CLIENT CBT</span>
                              </>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="bg-gradient-to-br from-[#12224A] via-[#1B3A8A] to-[#2F6FED] p-4 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[85px]">
                          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:10px_10px]" />
                          <div className="relative z-10 flex flex-col items-center gap-1">
                            <div className="w-7 h-7 rounded bg-white/10 border border-white/30 flex items-center justify-center mb-0.5 shadow-sm">
                              {quest.demoUrl ? (
                                <Globe className="w-4 h-4 text-[#8FD3FF]" />
                              ) : (
                                <Code2 className="w-4 h-4 text-[#F7C531]" />
                              )}
                            </div>
                            <h4 className="font-rpg-header text-xs sm:text-sm text-white tracking-wide drop-shadow-sm">
                              {quest.title}
                            </h4>
                            <span className="font-rpg-sub text-[10px] text-[#8FD3FF] font-semibold">
                              {quest.techStack.slice(0, 3).join(" • ")}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Concise Description */}
                    <p className="font-rpg-body text-base sm:text-lg text-[#1B3A8A] mb-2.5 leading-relaxed">
                      {quest.description}
                    </p>

                    {/* Collapsible Architecture / Field Note Toggle */}
                    <div className="mb-3">
                      <button
                        type="button"
                        onClick={() => toggleNote(quest.id)}
                        className="w-full text-left font-rpg-header text-[8px] text-[#2F6FED] hover:text-[#1B3A8A] bg-[#DCEEFF] hover:bg-[#8FD3FF]/40 border border-[#1B3A8A] px-2.5 py-1.5 flex items-center justify-between cursor-pointer transition-colors"
                      >
                        <span className="flex items-center gap-1.5">
                          <Layers className="w-3 h-3 text-[#2F6FED]" />
                          CATATAN ARSITEKTUR & FITUR
                        </span>
                        {isNoteOpen ? (
                          <ChevronUp className="w-3 h-3 text-[#1B3A8A]" />
                        ) : (
                          <ChevronDown className="w-3 h-3 text-[#1B3A8A]" />
                        )}
                      </button>

                      {isNoteOpen && (
                        <div className="snes-window-panel p-2.5 mt-1 border-2 border-[#1B3A8A] bg-[#F4F9FF] animate-fadeIn">
                          <p className="font-rpg-body text-sm sm:text-base text-[#1B3A8A] leading-normal">
                            {quest.context}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {quest.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="font-rpg-sub text-[10px] sm:text-xs bg-[#DCEEFF] text-[#1B3A8A] px-2 py-0.5 border border-[#1B3A8A]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-3 border-t-2 border-dashed border-[#1B3A8A]/30 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {quest.githubUrl && (
                        <a
                          href={quest.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block"
                          onClick={() => soundEngine.playClick()}
                        >
                          <PixelButton variant="white" size="sm">
                            <Code2 className="w-3.5 h-3.5 text-[#1B3A8A]" />
                            REPO GITHUB
                          </PixelButton>
                        </a>
                      )}
                    </div>

                    {quest.demoUrl && (
                      <a
                        href={quest.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                        onClick={() => soundEngine.playClick()}
                      >
                        <PixelButton variant="gold" size="sm">
                          <Globe className="w-3.5 h-3.5 text-[#1B3A8A]" />
                          BUKA WEBSITE
                        </PixelButton>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
}
