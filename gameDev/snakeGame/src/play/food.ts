import { gridCellW } from "./../gameConfig";
import "phaser";

export class Food extends Phaser.GameObjects.Image {
  total = 0;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "food");
    this.setPosition(x * gridCellW, y * gridCellW);
    this.setOrigin(0);
    scene.children.add(this);
  }

  eat() {
    this.total++;
  }
}
