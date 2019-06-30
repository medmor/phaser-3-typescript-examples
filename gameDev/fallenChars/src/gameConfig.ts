import "phaser";

export const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 480,
  backgroundColor: "#bfcc00",
  parent: "gameDiv"
  // physics: { default: "arcade" }
};

export interface I_initialData {}

export const initialData: I_initialData = {};

export const levels = {};
