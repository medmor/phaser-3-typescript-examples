import "phaser";
export class MenuState extends Phaser.Scene {
  constructor() {
    super({ key: "menu" });
  }
  create() {
    const w = Number(this.game.config.width) / 2;
    const h = Number(this.game.config.height) / 2;

    const t = this.add.text(w, h - 75, " CLICK ENTER OR \nTHE PLAY BUTTON", { font: "45px f1", color: "#ff00ff" });
    t.setOrigin(0.5);
    let play = this.add.text(w, h + 75, "\uf01d", { font: "100px fa", color: "#00ff00" });
    play.setOrigin(0.5);
    play.setInteractive();
    play.on("pointerdown", () => {
      this.scene.start("play");
    });
    play.on("pointerover", () => {
      play.setScale(1.2, 1.2);
    });
    play.on("pointerout", () => {
      play.setScale(1, 1);
    });
    this.input.keyboard.addKey(13).on("down", () => {
      this.scene.start("play");
    });
  }
}
