import { levels } from "./../gameConfig";
import { PlayState } from "./play";

export function createPaddle(this: PlayState) {
  this.paddle = this.add.rectangle(this.paddlePos.x, this.paddlePos.y, 100, 20, 0x53c1c1);
  this.paddle.setOrigin(0.5, 0.5);
}
export function createBall(this: PlayState) {
  this.ball = this.add.rectangle(this.ballPos.x, this.ballPos.y, 10, 10, 0x53cccc);
  this.ball.setOrigin(0.5, 0.5);
}
export function createBricks(this: PlayState) {
  const level = levels[this.game.initialData.level];
  this.bricks = this.add.group();
  let offX = 50,
    offY = 60,
    margin = 10,
    rows = level.rows,
    cols = level.cols,
    gridWidth = Number(this.game.config.width) - 2 * offX,
    brickWidth = (gridWidth - margin * (cols - 1)) / cols,
    brickHeight = 20;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let newBrick = this.add.rectangle(offX, offY, brickWidth, brickHeight, Phaser.Display.Color.RandomRGB().color);
      newBrick.setOrigin(0);
      this.bricks.add(newBrick);
      offX += brickWidth + margin;
    }
    offX = 50;
    offY += brickHeight + margin;
  }
}
