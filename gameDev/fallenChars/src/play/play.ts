import { TextGenerator } from "./textGenerator";
import "phaser";
import { keyboardInput, pointerInput } from "./input";

export class PlayState extends Phaser.Scene {
  chars!: TextGenerator;
  text = "";
  textD: Phaser.GameObjects.Text;
  info: Phaser.GameObjects.Text;
  bestScore = 0;
  constructor() {
    super({ key: "play" });
    const ls = localStorage.getItem("fallenChars");
    if (ls !== null) {
      this.bestScore = JSON.parse(ls).bestScore;
    }
  }

  create() {
    this.chars = new TextGenerator(this);
    this.textD = this.add.text(400, 250, "", { font: "bold 15px Arial", color: "#ff0000" });
    this.info = this.add.text(100, 50, "", { font: "bold 15px Arial" });

    keyboardInput.call(this);
    pointerInput.call(this);
  }
  update(time: number) {
    this.chars.update(time);
    if (this.chars.updateChildren(time) === true) {
      this.saveBestScore();
      this.chars.reset();
    }
  }
  saveBestScore() {
    const ls = localStorage.getItem("fallenChars");
    if (ls === null) localStorage.setItem("fallenChars", JSON.stringify({ bestScore: this.chars.score() }));
    else if (JSON.parse(ls).bestScore < this.chars.score()) localStorage.setItem("fallenChars", JSON.stringify({ bestScore: this.chars.score() }));
  }
}
