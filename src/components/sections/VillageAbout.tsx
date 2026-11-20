"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CHARACTER_PROFILE, CharacterSkin, InventoryItem } from "@/data/profile";
import { StatBar } from "@/components/common/StatBar";
import { soundEngine } from "@/hooks/useAudio";
import {
  Server,
  Code2,
  Database,
  Layout,
  GraduationCap,
  CheckCircle2,
  Sparkles,
  Users,
  Compass,
  Shield,
  Award,
  BookOpen,
  MapPin,
  HeartHandshake,
  MessageSquare,
  AlertCircle,
  PackageCheck,
  Zap,
} from "lucide-react";

interface VillageAboutProps {
  activeSkin: CharacterSkin;
}

export function VillageAbout({ activeSkin }: VillageAboutProps) {
  const [selectedItem, setSelectedItem] = useState<InventoryItem>(
    activeSkin.inventory?.[0] || CHARACTER_PROFILE.inventory[0]
  );

  useEffect(() => {
    if (activeSkin.inventory && activeSkin.inventory.length > 0) {
      setSelectedItem(activeSkin.inventory[0]);
    }
  }, [activeSkin.id, activeSkin.inventory]);

  const getSlotIcon = (type: string) => {
    switch (type) {
      case "Backend":
        return <Server className="w-3.5 h-3.5 text-[#2F6FED] shrink-0" />;
      case "Language":
        return <Code2 className="w-3.5 h-3.5 text-[#E25822] shrink-0" />;
      case "Database":
        return <Database className="w-3.5 h-3.5 text-[#5DBB63] shrink-0" />;
      case "Frontend":
        return <Layout className="w-3.5 h-3.5 text-[#2F6FED] shrink-0" />;
      case "Testing":
        return <CheckCircle2 className="w-3.5 h-3.5 text-[#1B3A8A] shrink-0" />;
      case "Metodologi":
        return <Zap className="w-3.5 h-3.5 text-[#F7C531] shrink-0" />;
      case "Akademik":
      case "Pengajaran":
      case "Praktikum":
        return <GraduationCap className="w-3.5 h-3.5 text-[#F7C531] shrink-0" />;
      case "Fondasi":
        return <BookOpen className="w-3.5 h-3.5 text-[#2F6FED] shrink-0" />;
      case "Prestasi":
        return <Award className="w-3.5 h-3.5 text-[#F7C531] shrink-0" />;
      case "Leadership":
      case "Manajemen":
        return <Users className="w-3.5 h-3.5 text-[#2F6FED] shrink-0" />;
      case "Sosial":
      case "Resolusi":
        return <HeartHandshake className="w-3.5 h-3.5 text-[#E25822] shrink-0" />;
      case "Administrasi":
        return <Shield className="w-3.5 h-3.5 text-[#1B3A8A] shrink-0" />;
      case "Komunikasi":
        return <MessageSquare className="w-3.5 h-3.5 text-[#2F6FED] shrink-0" />;
      case "Wisata":
        return <Compass className="w-3.5 h-3.5 text-[#5DBB63] shrink-0" />;
      case "Navigasi":
        return <MapPin className="w-3.5 h-3.5 text-[#E25822] shrink-0" />;
      case "Krisis":
        return <AlertCircle className="w-3.5 h-3.5 text-[#E25822] shrink-0" />;
      case "Logistik":
        return <PackageCheck className="w-3.5 h-3.5 text-[#2F6FED] shrink-0" />;
      case "Ketahanan":
        return <Zap className="w-3.5 h-3.5 text-[#F7C531] shrink-0" />;
      default:
        return <CheckCircle2 className="w-3.5 h-3.5 text-[#1B3A8A] shrink-0" />;
    }
  };

  const currentInventory =
    activeSkin.inventory && activeSkin.inventory.length > 0
      ? activeSkin.inventory
      : CHARACTER_PROFILE.inventory;

  return (
    <section id="village" className="pt-6 pb-10 px-4 max-w-5xl mx-auto scroll-mt-16">
      {/* Compact Header Banner with 3D Shadow */}
      <div className="text-center mb-4">
        <div className="inline-block bg-[#2F6FED] text-white px-3 py-1 font-rpg-header text-[9px] border-2 border-[#1B3A8A] shadow-[inset_2px_2px_0px_#8FD3FF,3px_3px_0px_#1B3A8A] mb-1.5">
          AREA 1: VILLAGE INFORMATIKA
        </div>
        <h2 className="font-rpg-header text-base sm:text-lg md:text-xl text-[#1B3A8A] text-3d-title mb-1">
          BIODATA & STATUS KELULUSAN
        </h2>
        <p className="font-rpg-body text-sm sm:text-base text-[#1B3A8A]/90 max-w-xl mx-auto">
          Ringkasan profil akademik, indikator kompetensi role, dan peralatan keahlian yang dikuasai.
        </p>
      </div>

      {/* SNES Classic Party Menu Window */}
      <div className="snes-window-gold p-3.5 sm:p-4.5 bg-white">
        {/* Top Split Section: Kolom Kiri (Profil + Stats) vs Kolom Kanan (Tech Arsenal) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch mb-4">
          
          {/* Sisi Kiri: Profil Hero & Atribut Skill (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-3.5">
            {/* Box Header Profil Hero (3D Beveled Card) */}
            <div className="snes-window p-2.5 sm:p-3 bg-white flex flex-row items-center gap-3 sm:gap-3.5">
              {/* Avatar Box with 3D Frame & Pedestal Shadow */}
              <div className="relative w-16 h-16 sm:w-24 sm:h-24 shrink-0 bg-gradient-to-b from-[#DCEEFF] to-[#B8E0FF] border-2 border-[#1B3A8A] shadow-[inset_2px_2px_0px_#FFFFFF,inset_-2px_-2px_0px_#8FD3FF,3px_3px_0px_#1B3A8A] p-1 sm:p-1.5 flex items-center justify-center overflow-hidden">
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-12 h-2 bg-[#1B3A8A]/20 rounded-full blur-[1px]" />
                <div className="relative w-full h-[90%] animate-sprite-idle z-10">
                  <Image
                    key={activeSkin.id}
                    src={activeSkin.imageSrc}
                    alt={activeSkin.name}
                    fill
                    sizes="96px"
                    className="object-contain pixelated"
                  />
                </div>
              </div>

              {/* Biodata Singkat */}
              <div className="flex flex-col text-left min-w-0">
                <div className="inline-block self-start bg-[#F7C531] text-[#1B3A8A] font-rpg-header text-[6.5px] sm:text-[7.5px] px-2 py-0.5 border-2 border-[#1B3A8A] shadow-[2px_2px_0px_#1B3A8A] mb-1 font-bold">
                  ✦ S1 INFORMATIKA USK
                </div>
                <h3 className="font-rpg-header text-xs sm:text-base text-[#1B3A8A] text-3d-title leading-snug">
                  {CHARACTER_PROFILE.name}
                </h3>
                <div className="font-rpg-sub text-[10px] sm:text-[11px] text-[#2F6FED] font-bold mt-0.5">
                  ROLE AKTIF: {activeSkin.name.toUpperCase()}
                </div>
                <div className="font-rpg-body text-xs sm:text-base text-[#1B3A8A]/85 mt-0.5">
                  Alumni: {CHARACTER_PROFILE.origin} (IPK 3,54)
                </div>
              </div>
            </div>

            {/* Atribut Skill Khusus Role */}
            <div className="snes-window p-3 sm:p-3.5 bg-white flex-1 flex flex-col justify-between">
              <div className="bg-[#0F2042] text-white px-2.5 py-1.5 border-2 border-[#1B3A8A] shadow-[2px_2px_0px_#2F6FED] mb-3 flex items-center justify-between">
                <span className="font-rpg-header text-[8px] sm:text-[9px] text-[#FFF275] tracking-wider">
                  KOMPETENSI // {activeSkin.name.toUpperCase()}
                </span>
                <span className="bg-[#2F6FED] text-white px-1.5 py-0.5 border border-[#8FD3FF] text-[8px] font-rpg-sub font-bold">
                  TERUKUR
                </span>
              </div>

              <div className="flex flex-col gap-2.5">
                {activeSkin.stats.map((st, i) => (
                  <div key={i}>
                    <StatBar
                      label={st.name}
                      current={st.value}
                      max={st.max}
                      color="stat"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Keahlian & Peralatan Karakter (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="snes-window p-3 sm:p-3.5 bg-white h-full flex flex-col justify-between">
              <div>
                <div className="bg-[#0F2042] text-white px-2.5 py-1.5 border-2 border-[#1B3A8A] shadow-[2px_2px_0px_#2F6FED] mb-2.5 flex items-center justify-between">
                  <span className="font-rpg-header text-[8px] sm:text-[9px] text-[#FFF275] tracking-wider">
                    KEAHLIAN & PERALATAN
                  </span>
                  <span className="text-[8px] text-[#8FD3FF] font-rpg-sub font-bold">
                    [KLIK ITEM]
                  </span>
                </div>

                {/* List Keahlian & Peralatan Spesifik Karakter dengan 3D Cartridge Shadow */}
                <div className="flex flex-col gap-2">
                  {currentInventory.map((item, idx) => {
                    const isSelected = selectedItem?.name === item.name;
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          soundEngine.playClick();
                          setSelectedItem(item);
                        }}
                        className={`w-full text-left py-1.5 px-2.5 flex items-center justify-between gap-2 border-2 border-[#1B3A8A] cursor-pointer transition-all ${
                          isSelected
                            ? "bg-[#DCEEFF] border-[#2F6FED] shadow-[inset_2px_2px_0px_#FFFFFF,inset_-2px_-2px_0px_#8FD3FF,3px_3px_0px_#1B3A8A] -translate-y-[1px]"
                            : "bg-white hover:bg-[#F4F9FF] shadow-[inset_2px_2px_0px_#FFFFFF,inset_-2px_-2px_0px_#E2E8F0,2px_2px_0px_#1B3A8A] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_#1B3A8A] active:translate-y-[1px]"
                        }`}
                      >
                        <div className="flex items-center gap-1.5 min-w-0">
                          {getSlotIcon(item.type)}
                          <span className="font-rpg-header text-[7.5px] sm:text-[8px] text-[#1B3A8A] tracking-tight leading-snug">
                            {item.name}
                          </span>
                        </div>
                        <span className="font-rpg-sub text-[7.5px] px-1.5 py-0.5 bg-white border border-[#1B3A8A] shadow-[1px_1px_0px_#1B3A8A] text-[#1B3A8A] shrink-0 font-bold uppercase">
                          {item.type}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Item Detail Box with 3D Bevel & Shadow */}
              {selectedItem && (
                <div className="mt-3 snes-window-gold p-2.5 sm:p-3 bg-[#FFFDE8] text-left">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-rpg-header text-[8.5px] sm:text-[9px] text-[#1B3A8A] font-bold">
                      ► {selectedItem.name}
                    </span>
                    <span className="font-rpg-sub text-[7.5px] px-1.5 py-0.5 bg-[#F7C531] border border-[#1B3A8A] shadow-[1px_1px_0px_#1B3A8A] font-bold text-[#1B3A8A]">
                      {selectedItem.rarity}
                    </span>
                  </div>
                  <p className="font-rpg-body text-sm sm:text-base text-[#1B3A8A] leading-snug">
                    {selectedItem.desc}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Banner Section: Vitals (Metrik Nyata) & Ringkasan Peran */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          {/* Gauges Bar: Metrik Nyata dari CV (6 Cols) */}
          <div className="lg:col-span-6 snes-window p-3 sm:p-3.5 bg-white flex flex-col justify-center gap-2">
            <StatBar
              label="IPK KELULUSAN (S1 INFORMATIKA USK)"
              current={354}
              max={400}
              color="hp"
            />
            <StatBar
              label="STATUS KESIAPAN KERJA (FULL-TIME / OPEN)"
              current={100}
              max={100}
              color="mp"
            />
            <StatBar
              label="TOTAL MISI / PROYEK SELESAI (CV PORTFOLIO)"
              current={5}
              max={5}
              color="exp"
            />
          </div>

          {/* Role Perk Description (6 Cols) */}
          <div className="lg:col-span-6 snes-window p-3 sm:p-3.5 flex flex-col justify-center bg-[#F4F9FF]">
            <div className="font-rpg-header text-[8.5px] text-[#2F6FED] mb-1 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#F7C531] drop-shadow-[1px_1px_0px_#1B3A8A]" />
              <span>RINGKASAN PROFIL // {activeSkin.name.toUpperCase()}</span>
            </div>
            <p className="font-rpg-body text-sm sm:text-base text-[#1B3A8A] leading-snug">
              &ldquo;{activeSkin.description}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
