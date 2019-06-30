import "phaser";
import { Game } from "../game";

export class InitState extends Phaser.Scene {
  game!: Game;
  constructor() {
    super({ key: "init" });
  }
  preload() {
    this.game.config.backgroundColor.setTo(238, 238, 238);

    // get user progress
    const player = localStorage.getItem(this.game.initialData.player);
    if (player != null) {
      this.game.initialData = JSON.parse(player);
    }
    this.scene.start("load");
  }
}
