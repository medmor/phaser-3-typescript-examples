import { PlayState } from "./play";
export function keyboardInput(this: PlayState) {
  this.input.keyboard.on("keydown", (k: KeyboardEvent) => {
    this.text += k.key.toUpperCase();
    this.textD.text = this.text;
    if (!this.chars.checkInput(this.text)) {
      this.text = "";
    }
    this.textD.text = this.text;
    this.info.text = `Exact: ${this.chars.count}   Errors: ${this.chars.errors}   Score: ${this.chars.score()}  Best Score: ${this.bestScore}`;
  });
}

export function pointerInput(this: PlayState) {
  this.input.on("pointerdown", () => {
    this.chars.generate = true;
  });
}
