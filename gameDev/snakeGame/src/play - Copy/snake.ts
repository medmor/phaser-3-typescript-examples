import { PlayState } from "./play";
import { Food } from "./food";
import "phaser";

export enum Dir {
  UP,
  DOWN,
  LEFT,
  RIGHT
}
const gridW = 32;

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
    this.head = this.scene.add.sprite(x * gridW, y * gridW, "snake", "head/headR.png");
    this.head.setOrigin(0);
    const body = this.scene.add.sprite(x * gridW - gridW, y * gridW, "snake", "body/bodyR.png");
    body.setOrigin(0);
    const t = this.scene.add.sprite(x * gridW - 2 * gridW, y * gridW, "snake", "tail/tailR.png");
    t.setOrigin(0);
    this.add(this.head);
    this.add(body);
    this.add(t);
    this.tail = new Phaser.Geom.Point(x - 2 * gridW, y);
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
      this.children.each(c => {
        const fn = (c as Phaser.GameObjects.Sprite).frame.name;
        const ff = fn.substring(0, fn.length - 5);
        const fl = fn.substring(fn.length - 4, fn.length);
        (c as Phaser.GameObjects.Sprite).setFrame(ff + "L" + fl);
      });
    }
  }

  right() {
    if (this.direction === Dir.UP || this.direction === Dir.DOWN) {
      this.heading = Dir.RIGHT;
      this.children.each(c => {
        const fn = (c as Phaser.GameObjects.Sprite).frame.name;
        const ff = fn.substring(0, fn.length - 5);
        const fl = fn.substring(fn.length - 4, fn.length);
        (c as Phaser.GameObjects.Sprite).setFrame(ff + "R" + fl);
      });
    }
  }

  up() {
    if (this.direction === Dir.LEFT || this.direction === Dir.RIGHT) {
      this.heading = Dir.UP;
      this.children.each(c => {
        const fn = (c as Phaser.GameObjects.Sprite).frame.name;
        const ff = fn.substring(0, fn.length - 5);
        const fl = fn.substring(fn.length - 4, fn.length);
        (c as Phaser.GameObjects.Sprite).setFrame(ff + "U" + fl);
      });
    }
  }

  down() {
    if (this.direction === Dir.LEFT || this.direction === Dir.RIGHT) {
      this.heading = Dir.DOWN;
      this.children.each(c => {
        const fn = (c as Phaser.GameObjects.Sprite).frame.name;
        const ff = fn.substring(0, fn.length - 5);
        const fl = fn.substring(fn.length - 4, fn.length);
        (c as Phaser.GameObjects.Sprite).setFrame(ff + "D" + fl);
      });
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
    //  Update the body segments
    // Phaser.Actions.ShiftPosition(this.getChildren(), this.headPosition.x * gridW, this.headPosition.y * gridW, 1, this.tail as Phaser.Math.Vector2);
    let p = [0, 0];
    this.children.each((c, i) => {
      const cc = c as Phaser.GameObjects.Sprite;
      p[0] = cc.x;
      p[1] = cc.y;
      cc.setPosition(this.headPosition.x * gridW, this.headPosition.y * gridW);
      this.headPosition.x = p[0] / gridW;
      this.headPosition.y = p[1] / gridW;
      this.tail.setTo(this.headPosition.x, this.headPosition.y);
    }, this);
    this.headPosition.x = this.head.x / gridW;
    this.headPosition.y = this.head.y / gridW;

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
      var bx = (segment as Phaser.GameObjects.Sprite).x / gridW;
      var by = (segment as Phaser.GameObjects.Sprite).y / gridW;

      grid[by][bx] = false;
    });

    return grid;
  }
}
