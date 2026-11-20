"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { soundEngine } from "@/hooks/useAudio";
import { PixelButton } from "@/components/common/PixelButton";
import { RUN_STRIP_FRAMES, JUMP_FRAME, IDLE_FRAME, SpriteFrame } from "./runFrames";
import { Play, RotateCcw, Trophy, Zap, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface Obstacle {
  x: number;
  width: number;
  height: number;
  type: "BUG" | "CACTUS" | "ERROR";
  label: string;
}

interface Collectible {
  x: number;
  y: number;
  type: "COFFEE" | "COIN";
  collected: boolean;
}

export function RpgCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Game Loop & State
  const [gameState, setGameState] = useState<"IDLE" | "PLAYING" | "GAMEOVER">("IDLE");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Physics refs for requestAnimationFrame
  const playerYRef = useRef(140);
  const velocityYRef = useRef(0);
  const isGroundedRef = useRef(true);
  const scoreRef = useRef(0);
  const speedRef = useRef(4.5);
  const frameRef = useRef(0);
  const obstaclesRef = useRef<Obstacle[]>([]);
  const collectiblesRef = useRef<Collectible[]>([]);
  const runSheetRef = useRef<HTMLImageElement | null>(null);

  const GROUND_Y = 140; // Ground position
  const GRAVITY = 0.65;
  const JUMP_STRENGTH = -12.5;

  // Load HighScore from localStorage & Spritesheet
  useEffect(() => {
    const saved = localStorage.getItem("farhan_dino_highscore");
    if (saved) setHighScore(parseInt(saved, 10));

    const img = new Image();
    img.src = "/assets/hero-run-strip.png";
    img.onload = () => {
      runSheetRef.current = img;
    };
  }, []);

  // Jump Action
  const jump = useCallback(() => {
    if (gameState === "IDLE" || gameState === "GAMEOVER") {
      startGame();
      return;
    }

    if (isGroundedRef.current) {
      velocityYRef.current = JUMP_STRENGTH;
      isGroundedRef.current = false;
      soundEngine.playJump();
    }
  }, [gameState]);

  // Start / Restart Game
  const startGame = () => {
    soundEngine.playCoin();
    playerYRef.current = GROUND_Y;
    velocityYRef.current = 0;
    isGroundedRef.current = true;
    scoreRef.current = 0;
    speedRef.current = 4.5;
    frameRef.current = 0;
    obstaclesRef.current = [];
    collectiblesRef.current = [];
    setScore(0);
    setGameState("PLAYING");
  };

  // Keyboard Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["Space", "ArrowUp", "KeyW"].includes(e.code)) {
        e.preventDefault();
        jump();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [jump]);

  // Main Canvas Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw Retro Sky Background
      ctx.fillStyle = "#F8FAFC";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Parallax Clouds
      const cloudOffset1 = (frameRef.current * 0.5) % (canvas.width + 100);
      const cloudOffset2 = (frameRef.current * 0.8) % (canvas.width + 150);
      ctx.fillStyle = "#E2E8F0";
      // Cloud 1
      ctx.fillRect(canvas.width - cloudOffset1, 25, 45, 12);
      ctx.fillRect(canvas.width - cloudOffset1 + 8, 18, 25, 12);
      // Cloud 2
      ctx.fillRect(canvas.width - cloudOffset2 + 100, 45, 35, 10);
      ctx.fillRect(canvas.width - cloudOffset2 + 108, 40, 18, 10);

      // 2. Draw Ground Line
      ctx.fillStyle = "#1B3A8A";
      ctx.fillRect(0, GROUND_Y + 36, canvas.width, 3);
      // Ground dash texture
      ctx.fillStyle = "#CBD5E1";
      for (let i = 0; i < canvas.width; i += 18) {
        const dotOffset = (frameRef.current * speedRef.current) % 18;
        ctx.fillRect(i - dotOffset, GROUND_Y + 44, 8, 2);
      }

      if (gameState === "PLAYING") {
        frameRef.current += 1;
        scoreRef.current += 1;

        // Score update to React state every 5 frames
        if (frameRef.current % 5 === 0) {
          setScore(scoreRef.current);
        }

        // Slowly increase speed
        if (frameRef.current % 300 === 0 && speedRef.current < 9) {
          speedRef.current += 0.4;
        }

        // Apply Player Gravity
        velocityYRef.current += GRAVITY;
        playerYRef.current += velocityYRef.current;

        if (playerYRef.current >= GROUND_Y) {
          playerYRef.current = GROUND_Y;
          velocityYRef.current = 0;
          isGroundedRef.current = true;
        }

        // Spawn Obstacles (Bug / Cactus)
        const lastObstacle = obstaclesRef.current[obstaclesRef.current.length - 1];
        const minGap = 220 + Math.random() * 140;

        if (!lastObstacle || canvas.width - lastObstacle.x > minGap) {
          const typeRand = Math.random();
          let obs: Obstacle;
          if (typeRand < 0.4) {
            obs = { x: canvas.width + 10, width: 22, height: 32, type: "BUG", label: "BUG" };
          } else if (typeRand < 0.75) {
            obs = { x: canvas.width + 10, width: 20, height: 36, type: "CACTUS", label: "404" };
          } else {
            obs = { x: canvas.width + 10, width: 32, height: 28, type: "ERROR", label: "DEADLINE" };
          }
          obstaclesRef.current.push(obs);

          // Chance to spawn Collectible Coffee / Coin
          if (Math.random() < 0.4) {
            collectiblesRef.current.push({
              x: canvas.width + 60,
              y: GROUND_Y - 30 - Math.random() * 25,
              type: Math.random() < 0.5 ? "COFFEE" : "COIN",
              collected: false
            });
          }
        }

        // Update Obstacles position & Collision
        for (let i = obstaclesRef.current.length - 1; i >= 0; i--) {
          const obs = obstaclesRef.current[i];
          obs.x -= speedRef.current;

          // Precise Hitbox collision check for Farhan character
          const pLeft = 45;
          const pRight = 45 + 24;
          const pTop = playerYRef.current + 8;
          const pBottom = playerYRef.current + 36;

          const oLeft = obs.x + 3;
          const oRight = obs.x + obs.width - 3;
          const oTop = GROUND_Y + 36 - obs.height + 4;
          const oBottom = GROUND_Y + 36;

          if (pRight > oLeft && pLeft < oRight && pBottom > oTop && pTop < oBottom) {
            // Collision detected! GAME OVER
            soundEngine.playHit();
            setGameState("GAMEOVER");
            setScore(scoreRef.current);
            setHighScore((prevHigh) => {
              const newHigh = Math.max(prevHigh, scoreRef.current);
              localStorage.setItem("farhan_dino_highscore", newHigh.toString());
              if (scoreRef.current > prevHigh) {
                confetti({ particleCount: 70, spread: 60 });
              }
              return newHigh;
            });
            break;
          }

          if (obs.x < -60) {
            obstaclesRef.current.splice(i, 1);
          }
        }

        // Update Collectibles
        for (let i = collectiblesRef.current.length - 1; i >= 0; i--) {
          const col = collectiblesRef.current[i];
          col.x -= speedRef.current;

          // Pickup check
          const pLeft = 45;
          const pRight = 45 + 28;
          const pTop = playerYRef.current;
          const pBottom = playerYRef.current + 36;

          if (
            !col.collected &&
            pRight > col.x &&
            pLeft < col.x + 16 &&
            pBottom > col.y &&
            pTop < col.y + 16
          ) {
            col.collected = true;
            soundEngine.playCoin();
            scoreRef.current += col.type === "COFFEE" ? 50 : 25;
            setScore(scoreRef.current);
          }

          if (col.x < -30) {
            collectiblesRef.current.splice(i, 1);
          }
        }
      }

      // 3. Draw Collectibles
      collectiblesRef.current.forEach((col) => {
        if (!col.collected) {
          if (col.type === "COFFEE") {
            // Hot Coffee Cup
            ctx.fillStyle = "#854D0E";
            ctx.fillRect(col.x, col.y + 4, 14, 12);
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(col.x + 2, col.y + 6, 10, 3);
            ctx.strokeStyle = "#1B3A8A";
            ctx.lineWidth = 1.5;
            ctx.strokeRect(col.x, col.y + 4, 14, 12);
          } else {
            // Gold Coin
            ctx.fillStyle = "#F7C531";
            ctx.beginPath();
            ctx.arc(col.x + 7, col.y + 7, 7, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = "#1B3A8A";
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        }
      });

      // 4. Draw Obstacles (Pixel Bugs / Cacti)
      obstaclesRef.current.forEach((obs) => {
        const oy = GROUND_Y + 36 - obs.height;

        if (obs.type === "BUG") {
          // Red Bug Monster
          ctx.fillStyle = "#EF4444";
          ctx.fillRect(obs.x, oy + 8, obs.width, obs.height - 8);
          ctx.strokeStyle = "#1B3A8A";
          ctx.lineWidth = 1.5;
          ctx.strokeRect(obs.x, oy + 8, obs.width, obs.height - 8);

          // Bug Antenna & Eyes
          ctx.fillStyle = "#1B3A8A";
          ctx.fillRect(obs.x + 4, oy + 2, 3, 6);
          ctx.fillRect(obs.x + 14, oy + 2, 3, 6);
          ctx.fillStyle = "#FFFFFF";
          ctx.fillRect(obs.x + 5, oy + 12, 4, 4);
          ctx.fillRect(obs.x + 13, oy + 12, 4, 4);
        } else if (obs.type === "CACTUS") {
          // Retro Cactus
          ctx.fillStyle = "#10B981";
          ctx.fillRect(obs.x + 6, oy, 8, obs.height);
          ctx.fillRect(obs.x, oy + 10, 6, 10);
          ctx.fillRect(obs.x + 14, oy + 6, 6, 12);
          ctx.strokeStyle = "#1B3A8A";
          ctx.lineWidth = 1.5;
          ctx.strokeRect(obs.x + 6, oy, 8, obs.height);
        } else {
          // Block Deadline
          ctx.fillStyle = "#F59E0B";
          ctx.fillRect(obs.x, oy, obs.width, obs.height);
          ctx.strokeStyle = "#1B3A8A";
          ctx.lineWidth = 2;
          ctx.strokeRect(obs.x, oy, obs.width, obs.height);

          ctx.fillStyle = "#1B3A8A";
          ctx.font = "bold 7px 'Press Start 2P', monospace";
          ctx.textAlign = "center";
          ctx.fillText("BUG", obs.x + obs.width / 2, oy + 17);
        }
      });

      // 5. Draw Animated Farhan Spritesheet Character
      const px = 45;
      const py = playerYRef.current;

      if (runSheetRef.current && runSheetRef.current.complete) {
        ctx.imageSmoothingEnabled = false;

        let f: SpriteFrame;
        if (!isGroundedRef.current) {
          // Dynamic Jump frame
          f = JUMP_FRAME;
        } else if (gameState === "PLAYING") {
          // Ganti frame setiap 5 tick agar animasi lari terlihat santai, natural, dan tidak terlalu cepat
          const frameIndex = Math.floor(frameRef.current / 5) % RUN_STRIP_FRAMES.length;
          f = RUN_STRIP_FRAMES[frameIndex];
        } else {
          // Idle frame saat standby/start
          f = IDLE_FRAME;
        }

        const targetH = 46;
        const targetW = (f.sw / f.sh) * targetH;
        const drawX = px - 4;
        const drawY = py + 36 - targetH;

        ctx.drawImage(
          runSheetRef.current,
          f.sx,
          f.sy,
          f.sw,
          f.sh,
          drawX,
          drawY,
          targetW,
          targetH
        );
      } else {
        ctx.fillStyle = "#2F6FED";
        ctx.fillRect(px, py, 26, 36);
        ctx.strokeStyle = "#1B3A8A";
        ctx.lineWidth = 2;
        ctx.strokeRect(px, py, 26, 36);
      }

      // Loop animation
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [gameState]);

  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto select-none">
      {/* Top Retro Arcade Score Header */}
      <div className="w-full flex items-center justify-between px-3 py-1.5 bg-[#0F2042] text-white border-2 border-[#1B3A8A] mb-1.5 font-rpg-header text-[9px] shadow-[2px_2px_0px_#1B3A8A]">
        <div className="flex items-center gap-2">
          <Zap className="w-3.5 h-3.5 text-[#F7C531] animate-bounce" />
          <span className="text-[#F7C531] font-bold">FARHAN DINO RUNNER</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-white">
            <span>SCORE:</span>
            <span className="text-[#F7C531] font-bold">{score.toString().padStart(5, "0")}</span>
          </div>

          <div className="flex items-center gap-1 text-[#8FD3FF]">
            <Trophy className="w-3 h-3 text-[#F7C531]" />
            <span>HI: {highScore.toString().padStart(5, "0")}</span>
          </div>
        </div>
      </div>

      {/* Main Game Screen Canvas */}
      <div 
        onClick={jump}
        className="relative w-full aspect-[20/9] border-4 border-[#1B3A8A] bg-[#F8FAFC] overflow-hidden shadow-[inset_2px_2px_0px_#8FD3FF,inset_-2px_-2px_0px_#2F6FED,5px_5px_0px_#1B3A8A] cursor-pointer"
      >
        <canvas
          ref={canvasRef}
          width={600}
          height={190}
          className="w-full h-full pixelated block"
        />

        {/* Start Game Prompt Overlay */}
        {gameState === "IDLE" && (
          <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex flex-col items-center justify-center p-3 text-center animate-fadeIn">
            <h3 className="font-rpg-header text-sm text-[#F7C531] mb-1.5 drop-shadow">
              TEKAN SPASI / KLIK UNTUK LARI
            </h3>
            <p className="font-rpg-body text-xs text-white max-w-xs mb-3">
              Lompati rintangan bug & kumpulkan cangkir kopi untuk mencetak skor tertinggi!
            </p>
            <PixelButton variant="gold" size="sm" onClick={startGame}>
              <Play className="w-3.5 h-3.5 fill-[#1B3A8A]" />
              MULAI LARI!
            </PixelButton>
          </div>
        )}

        {/* Game Over Screen Overlay */}
        {gameState === "GAMEOVER" && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex flex-col items-center justify-center p-3 text-center animate-fadeIn">
            <h3 className="font-rpg-header text-sm text-[#EF4444] mb-1 drop-shadow">
              GAME OVER!
            </h3>
            <p className="font-rpg-body text-xs text-white mb-2">
              Skor Kamu: <span className="text-[#F7C531] font-bold">{score}</span> | Tertinggi: {highScore}
            </p>
            <PixelButton variant="gold" size="sm" onClick={startGame}>
              <RotateCcw className="w-3.5 h-3.5 text-[#1B3A8A]" />
              MAIN LAGI (SPASI)
            </PixelButton>
          </div>
        )}
      </div>

      {/* Control Instruction Tip */}
      <div className="w-full mt-2 flex items-center justify-between font-rpg-sub text-[10px] text-[#1B3A8A]/75 px-1">
        <span>KONTROL: TEKAN <strong>[SPASI]</strong>, <strong>[PANAH ATAS]</strong>, ATAU <strong>KLIK LAYAR</strong> UNTUK LOMPAT</span>
        <span className="hidden sm:inline">☕ KOPI: +50 PTS</span>
      </div>
    </div>
  );
}
