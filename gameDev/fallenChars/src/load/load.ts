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
    this.load.audio("foodHit", "./assets/audio/brickHit.mp3");
    this.load.audio("lose", "./assets/audio/lose.mp3");
  }
  create() {
    this.scene.start("menu");
  }
}
