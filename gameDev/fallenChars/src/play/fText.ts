import "phaser";

export class fText extends Phaser.GameObjects.Text {
  speed: number;
  fallTime = 0;
  constructor(scene: Phaser.Scene, x: number, y: number, text: string, speed: number) {
    super(scene, x, y, text, { font: "50px f2", color: "#" + Math.min(0xaaaaaa, (Math.random() * 0xffffff) << 0).toString(16) });
    scene.add.existing(this);
    this.speed = speed;
  }
  update(time: number) {
    if (time >= this.fallTime) {
      return this.fall(time);
    }
    return false;
  }
  hit(s: string) {
    return this.text === s;
  }
  fall(time: number) {
    this.y += 10;
    this.fallTime = time + this.speed;
  }
  out() {
    if (this.scene) return this.y > Number(this.scene.game.config.height);
    return undefined;
  }
}
