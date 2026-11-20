# 🎮 T. Farhan Syah — 16-Bit RPG Portfolio

> A personal portfolio built as an interactive 16-bit RPG adventure. Explore different "areas" to discover skills, projects, experience, and achievements — all wrapped in a retro pixel-art game shell.

---

## ✨ Features

| Area | Description |
|------|-------------|
| 🏰 **Start Screen** | Animated title screen with character selection |
| 🌿 **Village (About)** | Introduction & bio with NPC-style dialog boxes |
| 📋 **Quest Board** | Projects showcase with status badges |
| 🏛️ **Guild Hall** | Work experience & tech stack |
| 🏆 **Achievement Hall** | Certifications & academic achievements |
| 🎯 **Final Area** | Contact & social links |
| 🦕 **Dino Runner Mini-Game** | Custom dino runner with animated pixel-art character sprite |

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Canvas:** HTML5 Canvas API (custom game engine)
- **Icons:** Lucide React
- **Font:** Press Start 2P (Google Fonts — pixel aesthetic)
- **Deployment:** Vercel

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/farhansyaah28/portofolio.git
cd portofolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main entry point
│   └── layout.tsx            # Root layout
├── components/
│   ├── common/               # Reusable UI components (PixelButton, StatBar, DialogBox, etc.)
│   ├── sections/             # RPG area sections (StartScreen, VillageAbout, QuestBoard, etc.)
│   └── minigame/             # Dino runner mini-game (RpgCanvas, VirtualDpad, gameData)
├── data/                     # Portfolio data (profile, projects, experience, achievements)
├── hooks/                    # Custom hooks (useAudio)
└── types/                    # TypeScript types
public/
└── assets/                   # Images, sprites, and spritesheets
```

---

## 🎮 Mini-Game

The embedded **Dino Runner** mini-game features:
- Custom **pixel-art character sprite** (animated spritesheet)
- Procedurally generated obstacles
- Score tracking with high score
- Mobile-friendly virtual D-pad controls
- Keyboard support (Space / Arrow Up to jump)

---

## 👤 About Me

**T. Farhan Syah, S.Kom**  
Fresh Graduate — Universitas Syiah Kuala  
Software Engineer | Full-Stack Developer

- 📧 Email: farhansyah471@gmail.com  
- 📱 WhatsApp: +62 812-6938-9500  
- 🐙 GitHub: [@farhansyaah28](https://github.com/farhansyaah28)

---

## 📄 License

This project is for personal portfolio use. Feel free to fork and adapt for your own portfolio with attribution.

---

<div align="center">
  Made with ❤️ and lots of pixel art
</div>
