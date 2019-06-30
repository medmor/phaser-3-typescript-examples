import "phaser";

export class LoadState extends Phaser.Scene {
  constructor() {
    super({ key: "load" });
  }
  init() {
    const t = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, "Loading ... ", { font: "bolder 30px " });
    t.setOrigin(0.5);
  }
  preload() {
    const g = this.add.graphics();
    g.fillStyle(0x00);
    g.fillRect(0, 0, 16, 16);
    g.generateTexture("head", 16, 16);
    g.fillStyle(0x00ff00);
    g.fillRect(0, 0, 16, 16);
    g.generateTexture("food", 16, 16);

    this.load.audio("bounce", "./assets/audio/bounce.mp3");
    this.load.audio("foodHit", "./assets/audio/brickHit.mp3");
    this.load.audio("lose", "./assets/audio/lose.mp3");
  }
  create() {
    this.scene.start("menu");
  }
}
