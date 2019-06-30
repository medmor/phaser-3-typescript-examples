import "phaser";

export class LoadState extends Phaser.Scene {
  constructor() {
    super({ key: "load" });
  }
  preload() {
    let loading = this.add.text(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "Loading ... ",
      { fontFamily: "FontAwesome" }
    );

    this.load.audio("bounce", "./assets/audio/bounce.mp3");
    this.load.audio("brickHit", "./assets/audio/brickHit.mp3");
    this.load.audio("win", "./assets/audio/win.mp3");
    this.load.audio("lose", "./assets/audio/lose.mp3");
    // this.textures.addImage("playButton", document.getElementById(
    //   "playButton"
    // ) as HTMLImageElement);
  }
  create() {
    this.scene.start("menu");
  }
}
