import { gridCellW } from "./../gameConfig";
import { PlayState } from "./play";
import { Food } from "./food";
import "phaser";

export enum Dir {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

export class Snake extends Phaser.GameObjects.Group {
  scene: PlayState;
  headPosition: Phaser.Geom.Point;
  head: Phaser.GameObjects.Sprite;
  tail: Phaser.Geom.Point;
  alive: boolean;
  speed = 1000;
  moveTime = 0;
  heading: Dir;
  direction: Dir;

  constructor(scene: PlayState, x: number, y: number) {
    super(scene);
    this.reset(x, y);
  }
  reset(x: number, y: number) {
    this.headPosition = new Phaser.Geom.Point(x, y);
    this.head = this.scene.add.sprite(x * gridCellW, y * gridCellW, "head");
    this.head.setOrigin(0);

    this.add(this.head);

    this.tail = new Phaser.Geom.Point(x - 2 * gridCellW, y);
    this.alive = true;
    this.heading = Dir.RIGHT;
    this.direction = Dir.RIGHT;
  }

  update(time: number) {
    if (time >= this.moveTime) {
      this.scene.sound.play("bounce");
      return this.move(time);
    }
    return false;
  }

  left() {
    if (this.direction === Dir.UP || this.direction === Dir.DOWN) {
      this.heading = Dir.LEFT;
    }
  }

  right() {
    if (this.direction === Dir.UP || this.direction === Dir.DOWN) {
      this.heading = Dir.RIGHT;
    }
  }

  up() {
    if (this.direction === Dir.LEFT || this.direction === Dir.RIGHT) {
      this.heading = Dir.UP;
    }
  }

  down() {
    if (this.direction === Dir.LEFT || this.direction === Dir.RIGHT) {
      this.heading = Dir.DOWN;
    }
  }
  grow() {
    this.scene.sound.play("foodHit");
    var newPart = this.create(this.tail.x, this.tail.y, "head");
    newPart.setOrigin(0);
  }
  collideWithFood(food: Food) {
    if (this.head.x === food.x && this.head.y === food.y) {
      this.grow();
      food.eat();
      if (this.speed > 20 && food.total % 5 === 0) {
        this.speed -= 10;
      }
      return true;
    } else {
      return false;
    }
  }
  move(time: number) {
    switch (this.heading) {
      case Dir.LEFT:
        this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x - 1, 0, 40);
        break;

      case Dir.RIGHT:
        this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x + 1, 0, 40);
        break;

      case Dir.UP:
        this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y - 1, 0, 30);
        break;

      case Dir.DOWN:
        this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y + 1, 0, 30);
        break;
    }
    this.direction = this.heading;

    Phaser.Actions.ShiftPosition(this.getChildren(), this.headPosition.x * gridCellW, this.headPosition.y * gridCellW, 1, this.tail as Phaser.Math.Vector2);

    var hitBody = Phaser.Actions.GetFirst(this.getChildren(), { x: this.head.x, y: this.head.y }, 1);

    if (hitBody) {
      this.alive = false;
      this.scene.food.destroy();
      this.scene.loseSound.play();
      this.scene.loseSound.on("complete", () => {
        this.clear(true, true);
        this.reset(8, 8);
        this.scene.food = new Food(this.scene, Phaser.Math.Between(5, 35), Phaser.Math.Between(5, 25));
      });
      return false;
    } else {
      this.moveTime = time + this.speed;

      return true;
    }
  }

  updateGrid(grid: boolean[][]) {
    //  Remove all body pieces from valid positions list
    this.children.each(function(segment) {
      var bx = (segment as Phaser.GameObjects.Sprite).x / gridCellW;
      var by = (segment as Phaser.GameObjects.Sprite).y / gridCellW;

      grid[by][bx] = false;
    });

    return grid;
  }
}
