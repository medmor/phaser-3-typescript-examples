import "phaser";
export const gridCellW = 16;

export const config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  backgroundColor: "#bfcc00",
  parent: "gameDiv"
  // physics: { default: "arcade" }
};

export interface I_initialData {}

export const initialData: I_initialData = {};

export const levels = {};
