export interface SpriteFrame {
  sx: number;
  sy: number;
  sw: number;
  sh: number;
}

// 11 Key running animation frames (half of the 22 frames) from the horizontal strip
// Selected to produce a natural, clear, and well-paced running stride
export const RUN_STRIP_FRAMES: SpriteFrame[] = [
  { sx: 5, sy: 4, sw: 36, sh: 53 },     // frame 0: right leg forward extension
  { sx: 99, sy: 2, sw: 35, sh: 55 },    // frame 2: body drop & drive
  { sx: 195, sy: 4, sw: 28, sh: 53 },   // frame 4: passing position
  { sx: 285, sy: 4, sw: 35, sh: 53 },   // frame 6: left leg forward swing
  { sx: 375, sy: 5, sw: 41, sh: 52 },   // frame 8: left leg full stride reach
  { sx: 472, sy: 2, sw: 33, sh: 55 },   // frame 10: contact & push off
  { sx: 568, sy: 3, sw: 28, sh: 54 },   // frame 12: upright passing
  { sx: 658, sy: 4, sw: 33, sh: 53 },   // frame 14: right leg swing back
  { sx: 748, sy: 4, sw: 39, sh: 53 },   // frame 16: high flight phase
  { sx: 844, sy: 3, sw: 34, sh: 54 },   // frame 18: landing preparation
  { sx: 940, sy: 3, sw: 28, sh: 54 },   // frame 20: mid-stride transition
];

// Jump pose: airborne frame with dynamic stride (frame 8 / index 4)
export const JUMP_FRAME: SpriteFrame = { sx: 375, sy: 5, sw: 41, sh: 52 };

// Idle / Ready pose: frame 12 (index 6)
export const IDLE_FRAME: SpriteFrame = { sx: 568, sy: 3, sw: 28, sh: 54 };
