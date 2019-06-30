import { PlayState } from "./play";

export function addCursor(this: PlayState) {
  this.cursors = this.input.keyboard.createCursorKeys();
  this.cursors.left.on("down", () => {
    this.snake.left();
  });
  this.cursors.right.on("down", () => {
    this.snake.right();
  });
  this.cursors.up.on("down", () => {
    this.snake.up();
  });
  this.cursors.down.on("down", () => {
    this.snake.down();
  });
}
