import "phaser";

import { config, I_initialData, initialData } from "./gameConfig";

import { PlayState } from "./play/play";
import { MenuState } from "./menu/menu";
import { LoadState } from "./load/load";
import { InitState } from "./init/init";

export class Game extends Phaser.Game {
  constructor() {
    super(config);

    this.scene.add("init", new InitState());
    this.scene.add("load", new LoadState());
    this.scene.add("menu", new MenuState());
    this.scene.add("play", new PlayState());

    this.scene.start("init");
  }
}

window.onload = () => {
  const game = new Game();
};
