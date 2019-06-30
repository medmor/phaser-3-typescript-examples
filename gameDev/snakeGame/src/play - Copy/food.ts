import "phaser";
const gridW = 32;

export class Food extends Phaser.GameObjects.Image {
  total = 0;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "food");
    this.setPosition(x * gridW, y * gridW);
    this.setOrigin(0);
    scene.children.add(this);
  }

  eat() {
    this.total++;
  }
}
