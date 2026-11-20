"use client";

import { CHARACTER_PROFILE } from "@/data/profile";
import { PixelButton } from "@/components/common/PixelButton";
import { soundEngine } from "@/hooks/useAudio";
import { Mail, MessageCircle, FileDown, Code2, Globe, Trophy, Scroll } from "lucide-react";

export function FinalArea() {
  return (
    <section id="contact" className="pt-10 pb-16 px-4 max-w-4xl mx-auto text-center scroll-mt-16">
      <div className="snes-window-gold p-6 md:p-10 bg-white">
        {/* Top Trophy Banner */}
        <div className="inline-flex items-center gap-2 bg-[#F7C531] text-[#1B3A8A] font-rpg-header text-xs md:text-sm px-4 py-2 border-2 border-[#1B3A8A] shadow-[3px_3px_0px_#1B3A8A] mb-4">
          <Trophy className="w-4 h-4" />
          <span>QUEST COMPLETE!</span>
        </div>

        <h2 className="font-rpg-header text-xl sm:text-2xl md:text-3xl text-[#1B3A8A] mb-3 leading-tight">
          TERIMA KASIH TELAH MENJELAJAH!
        </h2>

        <p className="font-rpg-body text-xl md:text-2xl text-[#1B3A8A] max-w-xl mx-auto mb-8 leading-relaxed">
          Petualangan di portfolio ini selesai, tapi misi baru selalu terbuka. Tertarik untuk berkolaborasi dalam proyek software, riset kampus, atau magang? Hubungi saya lewat saluran guild di bawah!
        </p>

        {/* Contact Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto mb-8">
          <a
            href={CHARACTER_PROFILE.socialLinks.email}
            className="w-full"
            onClick={() => soundEngine.playClick()}
          >
            <PixelButton variant="primary" size="md" className="w-full">
              <Mail className="w-4 h-4" />
              SEND EMAIL
            </PixelButton>
          </a>

          <a
            href={CHARACTER_PROFILE.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
            onClick={() => soundEngine.playClick()}
          >
            <PixelButton variant="gold" size="md" className="w-full">
              <MessageCircle className="w-4 h-4" />
              WHATSAPP
            </PixelButton>
          </a>

          <a
            href={CHARACTER_PROFILE.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
            onClick={() => soundEngine.playClick()}
          >
            <PixelButton variant="white" size="md" className="w-full">
              <Globe className="w-4 h-4 text-[#2F6FED]" />
              LINKEDIN
            </PixelButton>
          </a>

          <a
            href={CHARACTER_PROFILE.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
            onClick={() => soundEngine.playClick()}
          >
            <PixelButton variant="white" size="md" className="w-full">
              <Code2 className="w-4 h-4" />
              GITHUB
            </PixelButton>
          </a>
        </div>

        {/* Secret CV Loot Box Download */}
        <div className="snes-window-panel p-4 max-w-md mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
          <div>
            <div className="font-rpg-header text-xs text-[#1B3A8A] flex items-center gap-1.5">
              <Scroll className="w-4 h-4 text-[#2F6FED]" />
              <span>RESUME / CV SCROLL</span>
            </div>
            <div className="font-rpg-body text-lg text-[#1B3A8A]/80">
              Dokumen rekapitulasi data diri format PDF.
            </div>
          </div>

          <a
            href={CHARACTER_PROFILE.socialLinks.cvLink}
            download
            onClick={() => soundEngine.playCoin()}
          >
            <PixelButton variant="gold" size="sm" className="whitespace-nowrap">
              <FileDown className="w-3.5 h-3.5" />
              UNDUH CV
            </PixelButton>
          </a>
        </div>

        {/* Footer Credit & Konami Code Hint */}
        <div className="mt-10 pt-4 border-t-2 border-dashed border-[#1B3A8A]/20 flex flex-col sm:flex-row items-center justify-between text-xs font-rpg-sub text-[#1B3A8A]/70 gap-2">
          <span>MADE WITH ☕ & RETRO SPIRIT © 2026</span>
          <span className="font-mono">EASTER EGG: ↑ ↑ ↓ ↓ ← → ← → B A</span>
        </div>
      </div>
    </section>
  );
}
