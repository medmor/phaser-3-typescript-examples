import { fText } from "./fText";
import "phaser";
const LEFT = "QWERTASDFGZXCVB";
const RIGHT = "YUIOPHJKLNM,.;/";
const padding = 300;
export class TextGenerator extends Phaser.GameObjects.Group {
  speed = 5000;
  charSpeed = 1000;
  generate = true;
  newCharTime = 0;
  count = 0;
  errors = 0;
  min = 0;
  max = 3;
  constructor(scene: Phaser.Scene) {
    super(scene);
  }
  score() {
    get: return this.count - this.errors;
  }
  update(time: number) {
    if (this.generate && (this.empty() || time > this.newCharTime)) {
      this.addNewChar(time);
    }
  }
  updateChildren(time: number): boolean {
    let f = false;
    this.children.each(c => {
      c.update(time);
      if ((c as fText).out()) {
        f = true;
      }
    });
    return f;
  }

  empty() {
    return this.countActive() === 0;
  }

  addNewChar(time: number) {
    const x = Phaser.Math.Between(10, Number(this.scene.game.config.width) - padding);
    const y = 0;
    let t = "";
    for (let i = this.min; i < Phaser.Math.Between(this.min + 1, this.max); i++) {
      if (Math.random() > 0.5) t += LEFT[Phaser.Math.Between(0, LEFT.length - 1)];
      else t += RIGHT[Phaser.Math.Between(0, RIGHT.length - 1)];
    }
    const char = new fText(this.scene, x, y, t, this.charSpeed);
    this.add(char);

    this.newCharTime = time + this.speed;
  }

  checkInput(t: string) {
    const tt = this.getFirst(true);
    if (tt) {
      console.log(tt.text);
      if (t === tt.text) {
        this.remove(tt, true, true);
        this.count++;
        if (this.charSpeed > 500) this.charSpeed -= this.charSpeed * 0.01;
        if (this.speed > 2000) this.speed -= this.speed * 0.01;
        this.updateTextLength();
        return false;
      }
      if (tt.text.startsWith(t)) {
        return true;
      } else {
        this.errors++;
        return false;
      }
    }
    return false;
  }

  updateTextLength() {
    if (this.max * 15 < this.count) {
      this.max += 2;
      this.min += 1;
    }
  }
  reset() {
    this.clear(false, true);
    this.generate = false;
    this.count = 0;
    this.errors = 0;
    this.speed = 5000;
    this.charSpeed = 1000;
    this.min = 0;
    this.max = 3;
  }
}
