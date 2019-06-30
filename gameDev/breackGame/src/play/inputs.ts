import { PlayState } from "./play";

export function leftInput(this: PlayState) {
  this.left = this.input.keyboard.addKey("left");

  this.left.on("down", () => {
    this.paddleMoveLeft = true;
  });

  this.left.on("up", () => {
    this.paddleMoveLeft = false;
  });
}

export function rightInput(this: PlayState) {
  this.right = this.input.keyboard.addKey("right");

  this.right.on("down", () => {
    this.paddleMoveRight = true;
  });

  this.right.on("up", () => {
    this.paddleMoveRight = false;
  });
}
