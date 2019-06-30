import { Game } from "./../game";
import "phaser";
import { leftInput, rightInput } from "./inputs";
import { ballPhysics, movePaddle, paddlePhysics, brickPhysics, worldPhysics } from "./physics";
import { createBall, createPaddle, createBricks } from "./objects";
import { createInfo } from "./info";

export class PlayState extends Phaser.Scene {
  game!: Game;
  paddle!: Phaser.GameObjects.Rectangle;
  paddlePos!: Phaser.Geom.Point;
  ball!: Phaser.GameObjects.Rectangle;
  ballPos!: Phaser.Geom.Point;
  bricks!: Phaser.GameObjects.Group;
  left!: Phaser.Input.Keyboard.Key;
  right!: Phaser.Input.Keyboard.Key;
  paddleMoveLeft = false;
  paddleMoveRight = false;
  scoreT!: Phaser.GameObjects.Text;
  timerT!: Phaser.GameObjects.Text;
  ballsT!: Phaser.GameObjects.Text;
  timer!: Phaser.Time.TimerEvent;
  timerV = 0;
  score = 0;
  balls = 5;
  winSound: Phaser.Sound.BaseSound;

  constructor() {
    super({ key: "play" });
  }

  init() {
    const w = Number(this.game.config.width);
    const h = Number(this.game.config.height);
    this.paddlePos = new Phaser.Geom.Point(w / 2, h - 50);
    this.ballPos = new Phaser.Geom.Point(w / 2, h - 65);
  }

  create() {
    // game objects
    createBall.call(this);
    createPaddle.call(this);
    createBricks.call(this);
    // game input
    leftInput.call(this);
    rightInput.call(this);
    // game physics and logic
    ballPhysics.call(this);
    paddlePhysics.call(this);
    brickPhysics.call(this);
    worldPhysics.call(this);
    // game info
    createInfo.call(this);
    // game sound
    this.winSound = this.sound.add("win");
  }
  update() {
    movePaddle.call(this);
  }
}
