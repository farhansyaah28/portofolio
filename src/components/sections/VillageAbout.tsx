"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CHARACTER_PROFILE, CharacterSkin, InventoryItem } from "@/data/profile";
import { StatBar } from "@/components/common/StatBar";
import { soundEngine } from "@/hooks/useAudio";
import { 
  Server, Code2, Database, Layout, GraduationCap, CheckCircle2, 
  Sparkles, Users, Compass, Shield, Award, BookOpen, MapPin, 
  HeartHandshake, MessageSquare, AlertCircle, PackageCheck, Zap 
} from "lucide-react";

interface VillageAboutProps {
  activeSkin: CharacterSkin;
}

export function VillageAbout({ activeSkin }: VillageAboutProps) {
  // Selalu default ke item pertama dari role yang sedang aktif
  const [selectedItem, setSelectedItem] = useState<InventoryItem>(
    activeSkin.inventory?.[0] || CHARACTER_PROFILE.inventory[0]
  );

  // Otomatis sinkronkan pilihan item saat user mengganti role karakter
  useEffect(() => {
    if (activeSkin.inventory && activeSkin.inventory.length > 0) {
      setSelectedItem(activeSkin.inventory[0]);
    }
  }, [activeSkin.id, activeSkin.inventory]);

  const getSlotIcon = (type: string) => {
    switch (type) {
      // Tech & Dev
      case "Backend":
        return <Server className="w-4 h-4 text-[#2F6FED]" />;
      case "Language":
        return <Code2 className="w-4 h-4 text-[#E25822]" />;
      case "Database":
        return <Database className="w-4 h-4 text-[#5DBB63]" />;
      case "Frontend":
        return <Layout className="w-4 h-4 text-[#2F6FED]" />;
      case "Testing":
        return <CheckCircle2 className="w-4 h-4 text-[#1B3A8A]" />;
      case "Metodologi":
        return <Zap className="w-4 h-4 text-[#F7C531]" />;

      // Akademik & Prestasi
      case "Akademik":
      case "Pengajaran":
      case "Praktikum":
        return <GraduationCap className="w-4 h-4 text-[#F7C531]" />;
      case "Fondasi":
        return <BookOpen className="w-4 h-4 text-[#2F6FED]" />;
      case "Prestasi":
        return <Award className="w-4 h-4 text-[#F7C531]" />;

      // Organisasi & Kepemimpinan
      case "Leadership":
      case "Manajemen":
        return <Users className="w-4 h-4 text-[#2F6FED]" />;
      case "Sosial":
      case "Resolusi":
        return <HeartHandshake className="w-4 h-4 text-[#E25822]" />;
      case "Administrasi":
        return <Shield className="w-4 h-4 text-[#1B3A8A]" />;
      case "Komunikasi":
        return <MessageSquare className="w-4 h-4 text-[#2F6FED]" />;

      // Tour Guide & Lapangan
      case "Wisata":
        return <Compass className="w-4 h-4 text-[#5DBB63]" />;
      case "Navigasi":
        return <MapPin className="w-4 h-4 text-[#E25822]" />;
      case "Krisis":
        return <AlertCircle className="w-4 h-4 text-[#E25822]" />;
      case "Logistik":
        return <PackageCheck className="w-4 h-4 text-[#2F6FED]" />;
      case "Ketahanan":
        return <Zap className="w-4 h-4 text-[#F7C531]" />;

      default:
        return <CheckCircle2 className="w-4 h-4 text-[#1B3A8A]" />;
    }
  };

  const currentInventory = activeSkin.inventory && activeSkin.inventory.length > 0
    ? activeSkin.inventory
    : CHARACTER_PROFILE.inventory;

  return (
    <section id="village" className="pt-10 pb-14 px-4 max-w-6xl mx-auto scroll-mt-16">
      {/* Header Banner */}
      <div className="text-center mb-8">
        <div className="inline-block bg-[#2F6FED] text-white px-4 py-1 font-rpg-header text-xs border-2 border-[#1B3A8A] shadow-[3px_3px_0px_#1B3A8A] mb-3">
          AREA 1: VILLAGE INFORMATIKA
        </div>
        <h2 className="font-rpg-header text-xl md:text-2xl text-[#1B3A8A] mb-2">
          BIODATA & STATUS KELULUSAN
        </h2>
        <p className="font-rpg-body text-lg md:text-xl text-[#1B3A8A] max-w-2xl mx-auto">
          Ringkasan profil akademik, fondasi keahlian pemrograman, dan peralatan teknologi yang dikuasai.
        </p>
      </div>

      {/* SNES Classic Party Menu Window */}
      <div className="snes-window-gold p-4 md:p-6 bg-white">

        {/* Top Split Section: Kolom Kiri (Profil + Stats) vs Kolom Kanan (Tech Arsenal) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-6">

          {/* Sisi Kiri: Profil Hero & Atribut Skill (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">

            {/* Box Header Profil Hero */}
            <div className="snes-window p-4 bg-white flex flex-col sm:flex-row items-center gap-5">
              {/* Avatar Box */}
              <div className="relative w-36 h-36 shrink-0 bg-[#DCEEFF] border-3 border-[#1B3A8A] shadow-[inset_2px_2px_0px_#FFFFFF,inset_-2px_-2px_0px_#8FD3FF] p-2 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-[88%] animate-sprite-idle">
                  <Image
                    key={activeSkin.id}
                    src={activeSkin.imageSrc}
                    alt={activeSkin.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 144px"
                    className="object-contain pixelated"
                  />
                </div>
              </div>

              {/* Biodata Singkat */}
              <div className="flex flex-col text-center sm:text-left">
                <div className="inline-block self-center sm:self-start bg-[#F7C531] text-[#1B3A8A] font-rpg-header text-[9px] px-2.5 py-0.5 border border-[#1B3A8A] mb-1.5 font-bold">
                  ✦ S1 INFORMATIKA USK
                </div>
                <h3 className="font-rpg-header text-base md:text-lg text-[#1B3A8A] leading-snug">
                  {CHARACTER_PROFILE.name}
                </h3>
                <div className="font-rpg-sub text-xs text-[#2F6FED] font-bold mt-1">
                  ROLE AKTIF: {activeSkin.name}
                </div>
                <div className="font-rpg-body text-base text-[#1B3A8A]/80 mt-1">
                  Alumni: {CHARACTER_PROFILE.origin} (IPK 3,54)
                </div>
              </div>
            </div>

            {/* Atribut Skill Khusus Role */}
            <div className="snes-window p-4 bg-white flex-1 flex flex-col justify-between">
              <div className="font-rpg-header text-xs text-[#1B3A8A] pb-2 mb-3 border-b-2 border-dashed border-[#1B3A8A]/30 flex items-center justify-between">
                <span>KOMPETENSI // {activeSkin.name.toUpperCase()}</span>
                <span className="text-[#2F6FED] text-[10px] font-rpg-sub">[TERUKUR]</span>
              </div>

              <div className="flex flex-col gap-3">
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
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="snes-window p-4 bg-white h-full flex flex-col justify-between">
              <div>
                <div className="font-rpg-header text-xs text-[#1B3A8A] pb-2 mb-3 border-b-2 border-dashed border-[#1B3A8A]/30 flex items-center justify-between">
                  <span>KEAHLIAN & PERALATAN</span>
                  <span className="text-[9px] text-[#2F6FED] font-rpg-sub">[KLIK UNTUK DETAIL]</span>
                </div>

                {/* List Keahlian & Peralatan Spesifik Karakter */}
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
                        className={`w-full text-left p-2 px-2.5 flex items-center justify-between gap-2 border-2 cursor-pointer transition-colors ${isSelected
                          ? "bg-[#DCEEFF] border-[#2F6FED] shadow-[2px_2px_0px_#1B3A8A]"
                          : "bg-white hover:bg-[#F4F9FF] border-[#1B3A8A]/40"
                          }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          {getSlotIcon(item.type)}
                          <span className="font-rpg-header text-[8.5px] sm:text-[9px] md:text-[9.5px] text-[#1B3A8A] truncate tracking-tight">
                            {item.name}
                          </span>
                        </div>
                        <span className="font-rpg-sub text-[8px] px-1.5 py-0.5 bg-white border border-[#1B3A8A] text-[#1B3A8A] shrink-0 font-bold uppercase tracking-wider">
                          {item.type}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Item Detail Box */}
              {selectedItem && (
                <div className="mt-4 snes-window-gold p-3 bg-[#FFFDE8] text-left border-2 border-[#1B3A8A]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-rpg-header text-[11px] text-[#1B3A8A] font-bold">
                      {selectedItem.name}
                    </span>
                    <span className="font-rpg-sub text-[8px] px-1.5 py-0.5 bg-[#F7C531] border border-[#1B3A8A] font-bold text-[#1B3A8A]">
                      {selectedItem.rarity}
                    </span>
                  </div>
                  <p className="font-rpg-body text-lg text-[#1B3A8A] leading-relaxed">
                    {selectedItem.desc}
                  </p>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Bottom Banner Section: Vitals (Metrik Nyata) & Ringkasan Peran */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Gauges Bar: Metrik Nyata dari CV (6 Cols) */}
          <div className="lg:col-span-6 snes-window p-4 bg-white flex flex-col justify-center gap-3">
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
          <div className="lg:col-span-6 snes-window-panel p-4 flex flex-col justify-center border-2 border-[#1B3A8A] bg-[#F4F9FF]">
            <div className="font-rpg-header text-[10px] text-[#2F6FED] mb-1.5 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#F7C531]" />
              <span>RINGKASAN PROFIL // {activeSkin.name.toUpperCase()}</span>
            </div>
            <p className="font-rpg-body text-xl text-[#1B3A8A] leading-relaxed">
              &ldquo;{activeSkin.description}&rdquo;
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
