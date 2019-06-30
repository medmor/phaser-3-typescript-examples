import "phaser";

export class InitState extends Phaser.Scene {
  constructor() {
    super({ key: "init" });
  }
  preload() {
    this.game.config.backgroundColor.setTo(238, 238, 238);

    // get user progress

    this.scene.start("load");
  }
}
