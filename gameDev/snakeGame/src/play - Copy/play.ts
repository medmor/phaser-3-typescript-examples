import "phaser";
import { Snake } from "./snake";
import { Food } from "./food";
import { addCursor } from "./input";

const gridW = 32;

export class PlayState extends Phaser.Scene {
  snake!: Snake;
  food!: Food;
  cursors!: Phaser.Input.Keyboard.CursorKeys;
  loseSound!: Phaser.Sound.BaseSound;
  constructor() {
    super({ key: "play" });
  }

  init() {}
  create() {
    // game objects
    this.snake = new Snake(this, 8, 8);
    this.food = new Food(this, 3, 5);

    // game inputs
    addCursor.call(this);

    // game sounds
    this.loseSound = this.sound.add("lose");
  }
  update(time: number) {
    if (!this.snake.alive) {
      return;
    }
    if (this.snake.update(time)) if (this.snake.collideWithFood(this.food)) this.repositionFood();
  }
  repositionFood() {
    var testGrid: boolean[][] = [];
    for (var y = 0; y < 30; y++) {
      testGrid[y] = [];
      for (var x = 0; x < 40; x++) {
        testGrid[y][x] = true;
      }
    }
    this.snake.updateGrid(testGrid);
    var validLocations = [];
    for (var y = 0; y < 30; y++) {
      for (var x = 0; x < 40; x++) {
        if (testGrid[y][x] === true) {
          validLocations.push({ x: x, y: y });
        }
      }
    }
    if (validLocations.length > 0) {
      var pos = Phaser.Math.RND.pick(validLocations);
      this.food.setPosition(pos.x * gridW, pos.y * gridW);
      return true;
    } else {
      return false;
    }
  }
}
