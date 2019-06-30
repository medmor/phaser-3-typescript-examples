import "phaser";
export class MenuState extends Phaser.Scene {
  constructor() {
    super({ key: "menu" });
  }
  preload() {
    let play = this.add.text(Number(this.game.config.width) / 2, Number(this.game.config.height) / 2, "Click To Play", {
      font: "bolder 50px ",
      color: "#53c1c1"
    });
    play.setOrigin(0.5, 0.5);
    play.setInteractive();
    play.on("pointerdown", () => {
      this.scene.start("play");
    });
    this.input.keyboard.addKey(13).on("down", () => {
      console.log(4);
      this.scene.start("play");
    });
  }
}
