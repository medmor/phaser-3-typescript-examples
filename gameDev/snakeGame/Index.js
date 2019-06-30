/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./snakeGame/src/game.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./snakeGame/src/game.ts":
/*!*******************************!*\
  !*** ./snakeGame/src/game.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! phaser */ "phaser");
const gameConfig_1 = __webpack_require__(/*! ./gameConfig */ "./snakeGame/src/gameConfig.ts");
const play_1 = __webpack_require__(/*! ./play/play */ "./snakeGame/src/play/play.ts");
const menu_1 = __webpack_require__(/*! ./menu/menu */ "./snakeGame/src/menu/menu.ts");
const load_1 = __webpack_require__(/*! ./load/load */ "./snakeGame/src/load/load.ts");
const init_1 = __webpack_require__(/*! ./init/init */ "./snakeGame/src/init/init.ts");
class Game extends Phaser.Game {
    constructor() {
        super(gameConfig_1.config);
        this.scene.add("init", new init_1.InitState());
        this.scene.add("load", new load_1.LoadState());
        this.scene.add("menu", new menu_1.MenuState());
        this.scene.add("play", new play_1.PlayState());
        this.scene.start("init");
    }
}
exports.Game = Game;
window.onload = () => {
    const game = new Game();
};


/***/ }),

/***/ "./snakeGame/src/gameConfig.ts":
/*!*************************************!*\
  !*** ./snakeGame/src/gameConfig.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! phaser */ "phaser");
exports.gridCellW = 16;
exports.config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    backgroundColor: "#bfcc00",
    parent: "gameDiv"
    // physics: { default: "arcade" }
};
exports.initialData = {};
exports.levels = {};


/***/ }),

/***/ "./snakeGame/src/init/init.ts":
/*!************************************!*\
  !*** ./snakeGame/src/init/init.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! phaser */ "phaser");
class InitState extends Phaser.Scene {
    constructor() {
        super({ key: "init" });
    }
    preload() {
        this.game.config.backgroundColor.setTo(238, 238, 238);
        // get user progress
        this.scene.start("load");
    }
}
exports.InitState = InitState;


/***/ }),

/***/ "./snakeGame/src/load/load.ts":
/*!************************************!*\
  !*** ./snakeGame/src/load/load.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! phaser */ "phaser");
class LoadState extends Phaser.Scene {
    constructor() {
        super({ key: "load" });
    }
    init() {
        const t = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, "Loading ... ", { font: "bolder 30px " });
        t.setOrigin(0.5);
    }
    preload() {
        const g = this.add.graphics();
        g.fillStyle(0x00);
        g.fillRect(0, 0, 16, 16);
        g.generateTexture("head", 16, 16);
        g.fillStyle(0x00ff00);
        g.fillRect(0, 0, 16, 16);
        g.generateTexture("food", 16, 16);
        this.load.audio("bounce", "./assets/audio/bounce.mp3");
        this.load.audio("foodHit", "./assets/audio/brickHit.mp3");
        this.load.audio("lose", "./assets/audio/lose.mp3");
    }
    create() {
        this.scene.start("menu");
    }
}
exports.LoadState = LoadState;


/***/ }),

/***/ "./snakeGame/src/menu/menu.ts":
/*!************************************!*\
  !*** ./snakeGame/src/menu/menu.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! phaser */ "phaser");
class MenuState extends Phaser.Scene {
    constructor() {
        super({ key: "menu" });
    }
    preload() {
        let play = this.add.text(Number(this.game.config.width) / 2, Number(this.game.config.height) / 2, "Click To Play", {
            font: "bolder 50px ",
            color: "#53c1c1"
        });
        play.setOrigin(0.5, 0.5);
        play.setInteractive();
        play.on("pointerdown", () => {
            this.scene.start("play");
        });
        this.input.keyboard.addKey(13).on("down", () => {
            console.log(4);
            this.scene.start("play");
        });
    }
}
exports.MenuState = MenuState;


/***/ }),

/***/ "./snakeGame/src/play/food.ts":
/*!************************************!*\
  !*** ./snakeGame/src/play/food.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const gameConfig_1 = __webpack_require__(/*! ./../gameConfig */ "./snakeGame/src/gameConfig.ts");
__webpack_require__(/*! phaser */ "phaser");
class Food extends Phaser.GameObjects.Image {
    constructor(scene, x, y) {
        super(scene, x, y, "food");
        this.total = 0;
        this.setPosition(x * gameConfig_1.gridCellW, y * gameConfig_1.gridCellW);
        this.setOrigin(0);
        scene.children.add(this);
    }
    eat() {
        this.total++;
    }
}
exports.Food = Food;


/***/ }),

/***/ "./snakeGame/src/play/input.ts":
/*!*************************************!*\
  !*** ./snakeGame/src/play/input.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function addCursor() {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.cursors.left.on("down", () => {
        this.snake.left();
    });
    this.cursors.right.on("down", () => {
        this.snake.right();
    });
    this.cursors.up.on("down", () => {
        this.snake.up();
    });
    this.cursors.down.on("down", () => {
        this.snake.down();
    });
}
exports.addCursor = addCursor;


/***/ }),

/***/ "./snakeGame/src/play/play.ts":
/*!************************************!*\
  !*** ./snakeGame/src/play/play.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const gameConfig_1 = __webpack_require__(/*! ./../gameConfig */ "./snakeGame/src/gameConfig.ts");
__webpack_require__(/*! phaser */ "phaser");
const snake_1 = __webpack_require__(/*! ./snake */ "./snakeGame/src/play/snake.ts");
const food_1 = __webpack_require__(/*! ./food */ "./snakeGame/src/play/food.ts");
const input_1 = __webpack_require__(/*! ./input */ "./snakeGame/src/play/input.ts");
class PlayState extends Phaser.Scene {
    constructor() {
        super({ key: "play" });
    }
    init() { }
    create() {
        // game objects
        this.snake = new snake_1.Snake(this, 8, 8);
        this.food = new food_1.Food(this, 3, 5);
        // game inputs
        input_1.addCursor.call(this);
        // game sounds
        this.loseSound = this.sound.add("lose");
    }
    update(time) {
        if (!this.snake.alive) {
            return;
        }
        if (this.snake.update(time))
            if (this.snake.collideWithFood(this.food))
                this.repositionFood();
    }
    repositionFood() {
        var testGrid = [];
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
            this.food.setPosition(pos.x * gameConfig_1.gridCellW, pos.y * gameConfig_1.gridCellW);
            return true;
        }
        else {
            return false;
        }
    }
}
exports.PlayState = PlayState;


/***/ }),

/***/ "./snakeGame/src/play/snake.ts":
/*!*************************************!*\
  !*** ./snakeGame/src/play/snake.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const gameConfig_1 = __webpack_require__(/*! ./../gameConfig */ "./snakeGame/src/gameConfig.ts");
const food_1 = __webpack_require__(/*! ./food */ "./snakeGame/src/play/food.ts");
__webpack_require__(/*! phaser */ "phaser");
var Dir;
(function (Dir) {
    Dir[Dir["UP"] = 0] = "UP";
    Dir[Dir["DOWN"] = 1] = "DOWN";
    Dir[Dir["LEFT"] = 2] = "LEFT";
    Dir[Dir["RIGHT"] = 3] = "RIGHT";
})(Dir = exports.Dir || (exports.Dir = {}));
class Snake extends Phaser.GameObjects.Group {
    constructor(scene, x, y) {
        super(scene);
        this.speed = 1000;
        this.moveTime = 0;
        this.reset(x, y);
    }
    reset(x, y) {
        this.headPosition = new Phaser.Geom.Point(x, y);
        this.head = this.scene.add.sprite(x * gameConfig_1.gridCellW, y * gameConfig_1.gridCellW, "head");
        this.head.setOrigin(0);
        this.add(this.head);
        this.tail = new Phaser.Geom.Point(x - 2 * gameConfig_1.gridCellW, y);
        this.alive = true;
        this.heading = Dir.RIGHT;
        this.direction = Dir.RIGHT;
    }
    update(time) {
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
    collideWithFood(food) {
        if (this.head.x === food.x && this.head.y === food.y) {
            this.grow();
            food.eat();
            if (this.speed > 20 && food.total % 5 === 0) {
                this.speed -= 10;
            }
            return true;
        }
        else {
            return false;
        }
    }
    move(time) {
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
        Phaser.Actions.ShiftPosition(this.getChildren(), this.headPosition.x * gameConfig_1.gridCellW, this.headPosition.y * gameConfig_1.gridCellW, 1, this.tail);
        var hitBody = Phaser.Actions.GetFirst(this.getChildren(), { x: this.head.x, y: this.head.y }, 1);
        if (hitBody) {
            this.alive = false;
            this.scene.food.destroy();
            this.scene.loseSound.play();
            this.scene.loseSound.on("complete", () => {
                this.clear(true, true);
                this.reset(8, 8);
                this.scene.food = new food_1.Food(this.scene, Phaser.Math.Between(5, 35), Phaser.Math.Between(5, 25));
            });
            return false;
        }
        else {
            this.moveTime = time + this.speed;
            return true;
        }
    }
    updateGrid(grid) {
        //  Remove all body pieces from valid positions list
        this.children.each(function (segment) {
            var bx = segment.x / gameConfig_1.gridCellW;
            var by = segment.y / gameConfig_1.gridCellW;
            grid[by][bx] = false;
        });
        return grid;
    }
}
exports.Snake = Snake;


/***/ }),

/***/ "phaser":
/*!*************************!*\
  !*** external "Phaser" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Phaser;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc25ha2VHYW1lL3NyYy9nYW1lLnRzIiwid2VicGFjazovLy8uL3NuYWtlR2FtZS9zcmMvZ2FtZUNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zbmFrZUdhbWUvc3JjL2luaXQvaW5pdC50cyIsIndlYnBhY2s6Ly8vLi9zbmFrZUdhbWUvc3JjL2xvYWQvbG9hZC50cyIsIndlYnBhY2s6Ly8vLi9zbmFrZUdhbWUvc3JjL21lbnUvbWVudS50cyIsIndlYnBhY2s6Ly8vLi9zbmFrZUdhbWUvc3JjL3BsYXkvZm9vZC50cyIsIndlYnBhY2s6Ly8vLi9zbmFrZUdhbWUvc3JjL3BsYXkvaW5wdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc25ha2VHYW1lL3NyYy9wbGF5L3BsYXkudHMiLCJ3ZWJwYWNrOi8vLy4vc25ha2VHYW1lL3NyYy9wbGF5L3NuYWtlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlBoYXNlclwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFl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SyxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqRyxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sS0FBSyxDQUFDO1NBQ2Q7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFFbEMsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsSUFBaUI7UUFDMUIsb0RBQW9EO1FBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVMsT0FBTztZQUNqQyxJQUFJLEVBQUUsR0FBSSxPQUFxQyxDQUFDLENBQUMsR0FBRyxzQkFBUyxDQUFDO1lBQzlELElBQUksRUFBRSxHQUFJLE9BQXFDLENBQUMsQ0FBQyxHQUFHLHNCQUFTLENBQUM7WUFFOUQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGO0FBaElELHNCQWdJQzs7Ozs7Ozs7Ozs7O0FDNUlELHdCIiwiZmlsZSI6IkluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zbmFrZUdhbWUvc3JjL2dhbWUudHNcIik7XG4iLCJpbXBvcnQgXCJwaGFzZXJcIjtcclxuXHJcbmltcG9ydCB7IGNvbmZpZywgSV9pbml0aWFsRGF0YSwgaW5pdGlhbERhdGEgfSBmcm9tIFwiLi9nYW1lQ29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBQbGF5U3RhdGUgfSBmcm9tIFwiLi9wbGF5L3BsYXlcIjtcclxuaW1wb3J0IHsgTWVudVN0YXRlIH0gZnJvbSBcIi4vbWVudS9tZW51XCI7XHJcbmltcG9ydCB7IExvYWRTdGF0ZSB9IGZyb20gXCIuL2xvYWQvbG9hZFwiO1xyXG5pbXBvcnQgeyBJbml0U3RhdGUgfSBmcm9tIFwiLi9pbml0L2luaXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIGV4dGVuZHMgUGhhc2VyLkdhbWUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoY29uZmlnKTtcclxuXHJcbiAgICB0aGlzLnNjZW5lLmFkZChcImluaXRcIiwgbmV3IEluaXRTdGF0ZSgpKTtcclxuICAgIHRoaXMuc2NlbmUuYWRkKFwibG9hZFwiLCBuZXcgTG9hZFN0YXRlKCkpO1xyXG4gICAgdGhpcy5zY2VuZS5hZGQoXCJtZW51XCIsIG5ldyBNZW51U3RhdGUoKSk7XHJcbiAgICB0aGlzLnNjZW5lLmFkZChcInBsYXlcIiwgbmV3IFBsYXlTdGF0ZSgpKTtcclxuXHJcbiAgICB0aGlzLnNjZW5lLnN0YXJ0KFwiaW5pdFwiKTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XHJcbn07XHJcbiIsImltcG9ydCBcInBoYXNlclwiO1xyXG5leHBvcnQgY29uc3QgZ3JpZENlbGxXID0gMTY7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIHR5cGU6IFBoYXNlci5BVVRPLFxyXG4gIHdpZHRoOiA2NDAsXHJcbiAgaGVpZ2h0OiA0ODAsXHJcbiAgYmFja2dyb3VuZENvbG9yOiBcIiNiZmNjMDBcIixcclxuICBwYXJlbnQ6IFwiZ2FtZURpdlwiXHJcbiAgLy8gcGh5c2ljczogeyBkZWZhdWx0OiBcImFyY2FkZVwiIH1cclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSV9pbml0aWFsRGF0YSB7fVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxEYXRhOiBJX2luaXRpYWxEYXRhID0ge307XHJcblxyXG5leHBvcnQgY29uc3QgbGV2ZWxzID0ge307XHJcbiIsImltcG9ydCBcInBoYXNlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluaXRTdGF0ZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcih7IGtleTogXCJpbml0XCIgfSk7XHJcbiAgfVxyXG4gIHByZWxvYWQoKSB7XHJcbiAgICB0aGlzLmdhbWUuY29uZmlnLmJhY2tncm91bmRDb2xvci5zZXRUbygyMzgsIDIzOCwgMjM4KTtcclxuXHJcbiAgICAvLyBnZXQgdXNlciBwcm9ncmVzc1xyXG5cclxuICAgIHRoaXMuc2NlbmUuc3RhcnQoXCJsb2FkXCIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgXCJwaGFzZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkU3RhdGUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoeyBrZXk6IFwibG9hZFwiIH0pO1xyXG4gIH1cclxuICBpbml0KCkge1xyXG4gICAgY29uc3QgdCA9IHRoaXMuYWRkLnRleHQodGhpcy5jYW1lcmFzLm1haW4uY2VudGVyWCwgdGhpcy5jYW1lcmFzLm1haW4uY2VudGVyWSwgXCJMb2FkaW5nIC4uLiBcIiwgeyBmb250OiBcImJvbGRlciAzMHB4IFwiIH0pO1xyXG4gICAgdC5zZXRPcmlnaW4oMC41KTtcclxuICB9XHJcbiAgcHJlbG9hZCgpIHtcclxuICAgIGNvbnN0IGcgPSB0aGlzLmFkZC5ncmFwaGljcygpO1xyXG4gICAgZy5maWxsU3R5bGUoMHgwMCk7XHJcbiAgICBnLmZpbGxSZWN0KDAsIDAsIDE2LCAxNik7XHJcbiAgICBnLmdlbmVyYXRlVGV4dHVyZShcImhlYWRcIiwgMTYsIDE2KTtcclxuICAgIGcuZmlsbFN0eWxlKDB4MDBmZjAwKTtcclxuICAgIGcuZmlsbFJlY3QoMCwgMCwgMTYsIDE2KTtcclxuICAgIGcuZ2VuZXJhdGVUZXh0dXJlKFwiZm9vZFwiLCAxNiwgMTYpO1xyXG5cclxuICAgIHRoaXMubG9hZC5hdWRpbyhcImJvdW5jZVwiLCBcIi4vYXNzZXRzL2F1ZGlvL2JvdW5jZS5tcDNcIik7XHJcbiAgICB0aGlzLmxvYWQuYXVkaW8oXCJmb29kSGl0XCIsIFwiLi9hc3NldHMvYXVkaW8vYnJpY2tIaXQubXAzXCIpO1xyXG4gICAgdGhpcy5sb2FkLmF1ZGlvKFwibG9zZVwiLCBcIi4vYXNzZXRzL2F1ZGlvL2xvc2UubXAzXCIpO1xyXG4gIH1cclxuICBjcmVhdGUoKSB7XHJcbiAgICB0aGlzLnNjZW5lLnN0YXJ0KFwibWVudVwiKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFwicGhhc2VyXCI7XHJcbmV4cG9ydCBjbGFzcyBNZW51U3RhdGUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoeyBrZXk6IFwibWVudVwiIH0pO1xyXG4gIH1cclxuICBwcmVsb2FkKCkge1xyXG4gICAgbGV0IHBsYXkgPSB0aGlzLmFkZC50ZXh0KE51bWJlcih0aGlzLmdhbWUuY29uZmlnLndpZHRoKSAvIDIsIE51bWJlcih0aGlzLmdhbWUuY29uZmlnLmhlaWdodCkgLyAyLCBcIkNsaWNrIFRvIFBsYXlcIiwge1xyXG4gICAgICBmb250OiBcImJvbGRlciA1MHB4IFwiLFxyXG4gICAgICBjb2xvcjogXCIjNTNjMWMxXCJcclxuICAgIH0pO1xyXG4gICAgcGxheS5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG4gICAgcGxheS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgcGxheS5vbihcInBvaW50ZXJkb3duXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5zY2VuZS5zdGFydChcInBsYXlcIik7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KDEzKS5vbihcImRvd25cIiwgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyg0KTtcclxuICAgICAgdGhpcy5zY2VuZS5zdGFydChcInBsYXlcIik7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ3JpZENlbGxXIH0gZnJvbSBcIi4vLi4vZ2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgXCJwaGFzZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGb29kIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlIHtcclxuICB0b3RhbCA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICBzdXBlcihzY2VuZSwgeCwgeSwgXCJmb29kXCIpO1xyXG4gICAgdGhpcy5zZXRQb3NpdGlvbih4ICogZ3JpZENlbGxXLCB5ICogZ3JpZENlbGxXKTtcclxuICAgIHRoaXMuc2V0T3JpZ2luKDApO1xyXG4gICAgc2NlbmUuY2hpbGRyZW4uYWRkKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgZWF0KCkge1xyXG4gICAgdGhpcy50b3RhbCsrO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQbGF5U3RhdGUgfSBmcm9tIFwiLi9wbGF5XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ3Vyc29yKHRoaXM6IFBsYXlTdGF0ZSkge1xyXG4gIHRoaXMuY3Vyc29ycyA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xyXG4gIHRoaXMuY3Vyc29ycy5sZWZ0Lm9uKFwiZG93blwiLCAoKSA9PiB7XHJcbiAgICB0aGlzLnNuYWtlLmxlZnQoKTtcclxuICB9KTtcclxuICB0aGlzLmN1cnNvcnMucmlnaHQub24oXCJkb3duXCIsICgpID0+IHtcclxuICAgIHRoaXMuc25ha2UucmlnaHQoKTtcclxuICB9KTtcclxuICB0aGlzLmN1cnNvcnMudXAub24oXCJkb3duXCIsICgpID0+IHtcclxuICAgIHRoaXMuc25ha2UudXAoKTtcclxuICB9KTtcclxuICB0aGlzLmN1cnNvcnMuZG93bi5vbihcImRvd25cIiwgKCkgPT4ge1xyXG4gICAgdGhpcy5zbmFrZS5kb3duKCk7XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ3JpZENlbGxXIH0gZnJvbSBcIi4vLi4vZ2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgXCJwaGFzZXJcIjtcclxuaW1wb3J0IHsgU25ha2UgfSBmcm9tIFwiLi9zbmFrZVwiO1xyXG5pbXBvcnQgeyBGb29kIH0gZnJvbSBcIi4vZm9vZFwiO1xyXG5pbXBvcnQgeyBhZGRDdXJzb3IgfSBmcm9tIFwiLi9pbnB1dFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXlTdGF0ZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgc25ha2UhOiBTbmFrZTtcclxuICBmb29kITogRm9vZDtcclxuICBjdXJzb3JzITogUGhhc2VyLklucHV0LktleWJvYXJkLkN1cnNvcktleXM7XHJcbiAgbG9zZVNvdW5kITogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHsga2V5OiBcInBsYXlcIiB9KTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7fVxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIC8vIGdhbWUgb2JqZWN0c1xyXG4gICAgdGhpcy5zbmFrZSA9IG5ldyBTbmFrZSh0aGlzLCA4LCA4KTtcclxuICAgIHRoaXMuZm9vZCA9IG5ldyBGb29kKHRoaXMsIDMsIDUpO1xyXG5cclxuICAgIC8vIGdhbWUgaW5wdXRzXHJcbiAgICBhZGRDdXJzb3IuY2FsbCh0aGlzKTtcclxuXHJcbiAgICAvLyBnYW1lIHNvdW5kc1xyXG4gICAgdGhpcy5sb3NlU291bmQgPSB0aGlzLnNvdW5kLmFkZChcImxvc2VcIik7XHJcbiAgfVxyXG4gIHVwZGF0ZSh0aW1lOiBudW1iZXIpIHtcclxuICAgIGlmICghdGhpcy5zbmFrZS5hbGl2ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zbmFrZS51cGRhdGUodGltZSkpIGlmICh0aGlzLnNuYWtlLmNvbGxpZGVXaXRoRm9vZCh0aGlzLmZvb2QpKSB0aGlzLnJlcG9zaXRpb25Gb29kKCk7XHJcbiAgfVxyXG4gIHJlcG9zaXRpb25Gb29kKCkge1xyXG4gICAgdmFyIHRlc3RHcmlkOiBib29sZWFuW11bXSA9IFtdO1xyXG4gICAgZm9yICh2YXIgeSA9IDA7IHkgPCAzMDsgeSsrKSB7XHJcbiAgICAgIHRlc3RHcmlkW3ldID0gW107XHJcbiAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgNDA7IHgrKykge1xyXG4gICAgICAgIHRlc3RHcmlkW3ldW3hdID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zbmFrZS51cGRhdGVHcmlkKHRlc3RHcmlkKTtcclxuICAgIHZhciB2YWxpZExvY2F0aW9ucyA9IFtdO1xyXG4gICAgZm9yICh2YXIgeSA9IDA7IHkgPCAzMDsgeSsrKSB7XHJcbiAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgNDA7IHgrKykge1xyXG4gICAgICAgIGlmICh0ZXN0R3JpZFt5XVt4XSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgdmFsaWRMb2NhdGlvbnMucHVzaCh7IHg6IHgsIHk6IHkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodmFsaWRMb2NhdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICB2YXIgcG9zID0gUGhhc2VyLk1hdGguUk5ELnBpY2sodmFsaWRMb2NhdGlvbnMpO1xyXG4gICAgICB0aGlzLmZvb2Quc2V0UG9zaXRpb24ocG9zLnggKiBncmlkQ2VsbFcsIHBvcy55ICogZ3JpZENlbGxXKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdyaWRDZWxsVyB9IGZyb20gXCIuLy4uL2dhbWVDb25maWdcIjtcclxuaW1wb3J0IHsgUGxheVN0YXRlIH0gZnJvbSBcIi4vcGxheVwiO1xyXG5pbXBvcnQgeyBGb29kIH0gZnJvbSBcIi4vZm9vZFwiO1xyXG5pbXBvcnQgXCJwaGFzZXJcIjtcclxuXHJcbmV4cG9ydCBlbnVtIERpciB7XHJcbiAgVVAsXHJcbiAgRE9XTixcclxuICBMRUZULFxyXG4gIFJJR0hUXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTbmFrZSBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cCB7XHJcbiAgc2NlbmU6IFBsYXlTdGF0ZTtcclxuICBoZWFkUG9zaXRpb246IFBoYXNlci5HZW9tLlBvaW50O1xyXG4gIGhlYWQ6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgdGFpbDogUGhhc2VyLkdlb20uUG9pbnQ7XHJcbiAgYWxpdmU6IGJvb2xlYW47XHJcbiAgc3BlZWQgPSAxMDAwO1xyXG4gIG1vdmVUaW1lID0gMDtcclxuICBoZWFkaW5nOiBEaXI7XHJcbiAgZGlyZWN0aW9uOiBEaXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQbGF5U3RhdGUsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICBzdXBlcihzY2VuZSk7XHJcbiAgICB0aGlzLnJlc2V0KHgsIHkpO1xyXG4gIH1cclxuICByZXNldCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgdGhpcy5oZWFkUG9zaXRpb24gPSBuZXcgUGhhc2VyLkdlb20uUG9pbnQoeCwgeSk7XHJcbiAgICB0aGlzLmhlYWQgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUoeCAqIGdyaWRDZWxsVywgeSAqIGdyaWRDZWxsVywgXCJoZWFkXCIpO1xyXG4gICAgdGhpcy5oZWFkLnNldE9yaWdpbigwKTtcclxuXHJcbiAgICB0aGlzLmFkZCh0aGlzLmhlYWQpO1xyXG5cclxuICAgIHRoaXMudGFpbCA9IG5ldyBQaGFzZXIuR2VvbS5Qb2ludCh4IC0gMiAqIGdyaWRDZWxsVywgeSk7XHJcbiAgICB0aGlzLmFsaXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuaGVhZGluZyA9IERpci5SSUdIVDtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gRGlyLlJJR0hUO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWU6IG51bWJlcikge1xyXG4gICAgaWYgKHRpbWUgPj0gdGhpcy5tb3ZlVGltZSkge1xyXG4gICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoXCJib3VuY2VcIik7XHJcbiAgICAgIHJldHVybiB0aGlzLm1vdmUodGltZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBsZWZ0KCkge1xyXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBEaXIuVVAgfHwgdGhpcy5kaXJlY3Rpb24gPT09IERpci5ET1dOKSB7XHJcbiAgICAgIHRoaXMuaGVhZGluZyA9IERpci5MRUZUO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmlnaHQoKSB7XHJcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IERpci5VUCB8fCB0aGlzLmRpcmVjdGlvbiA9PT0gRGlyLkRPV04pIHtcclxuICAgICAgdGhpcy5oZWFkaW5nID0gRGlyLlJJR0hUO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXAoKSB7XHJcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IERpci5MRUZUIHx8IHRoaXMuZGlyZWN0aW9uID09PSBEaXIuUklHSFQpIHtcclxuICAgICAgdGhpcy5oZWFkaW5nID0gRGlyLlVQO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG93bigpIHtcclxuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gRGlyLkxFRlQgfHwgdGhpcy5kaXJlY3Rpb24gPT09IERpci5SSUdIVCkge1xyXG4gICAgICB0aGlzLmhlYWRpbmcgPSBEaXIuRE9XTjtcclxuICAgIH1cclxuICB9XHJcbiAgZ3JvdygpIHtcclxuICAgIHRoaXMuc2NlbmUuc291bmQucGxheShcImZvb2RIaXRcIik7XHJcbiAgICB2YXIgbmV3UGFydCA9IHRoaXMuY3JlYXRlKHRoaXMudGFpbC54LCB0aGlzLnRhaWwueSwgXCJoZWFkXCIpO1xyXG4gICAgbmV3UGFydC5zZXRPcmlnaW4oMCk7XHJcbiAgfVxyXG4gIGNvbGxpZGVXaXRoRm9vZChmb29kOiBGb29kKSB7XHJcbiAgICBpZiAodGhpcy5oZWFkLnggPT09IGZvb2QueCAmJiB0aGlzLmhlYWQueSA9PT0gZm9vZC55KSB7XHJcbiAgICAgIHRoaXMuZ3JvdygpO1xyXG4gICAgICBmb29kLmVhdCgpO1xyXG4gICAgICBpZiAodGhpcy5zcGVlZCA+IDIwICYmIGZvb2QudG90YWwgJSA1ID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCAtPSAxMDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgbW92ZSh0aW1lOiBudW1iZXIpIHtcclxuICAgIHN3aXRjaCAodGhpcy5oZWFkaW5nKSB7XHJcbiAgICAgIGNhc2UgRGlyLkxFRlQ6XHJcbiAgICAgICAgdGhpcy5oZWFkUG9zaXRpb24ueCA9IFBoYXNlci5NYXRoLldyYXAodGhpcy5oZWFkUG9zaXRpb24ueCAtIDEsIDAsIDQwKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgRGlyLlJJR0hUOlxyXG4gICAgICAgIHRoaXMuaGVhZFBvc2l0aW9uLnggPSBQaGFzZXIuTWF0aC5XcmFwKHRoaXMuaGVhZFBvc2l0aW9uLnggKyAxLCAwLCA0MCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIERpci5VUDpcclxuICAgICAgICB0aGlzLmhlYWRQb3NpdGlvbi55ID0gUGhhc2VyLk1hdGguV3JhcCh0aGlzLmhlYWRQb3NpdGlvbi55IC0gMSwgMCwgMzApO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBEaXIuRE9XTjpcclxuICAgICAgICB0aGlzLmhlYWRQb3NpdGlvbi55ID0gUGhhc2VyLk1hdGguV3JhcCh0aGlzLmhlYWRQb3NpdGlvbi55ICsgMSwgMCwgMzApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmhlYWRpbmc7XHJcblxyXG4gICAgUGhhc2VyLkFjdGlvbnMuU2hpZnRQb3NpdGlvbih0aGlzLmdldENoaWxkcmVuKCksIHRoaXMuaGVhZFBvc2l0aW9uLnggKiBncmlkQ2VsbFcsIHRoaXMuaGVhZFBvc2l0aW9uLnkgKiBncmlkQ2VsbFcsIDEsIHRoaXMudGFpbCBhcyBQaGFzZXIuTWF0aC5WZWN0b3IyKTtcclxuXHJcbiAgICB2YXIgaGl0Qm9keSA9IFBoYXNlci5BY3Rpb25zLkdldEZpcnN0KHRoaXMuZ2V0Q2hpbGRyZW4oKSwgeyB4OiB0aGlzLmhlYWQueCwgeTogdGhpcy5oZWFkLnkgfSwgMSk7XHJcblxyXG4gICAgaWYgKGhpdEJvZHkpIHtcclxuICAgICAgdGhpcy5hbGl2ZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNjZW5lLmZvb2QuZGVzdHJveSgpO1xyXG4gICAgICB0aGlzLnNjZW5lLmxvc2VTb3VuZC5wbGF5KCk7XHJcbiAgICAgIHRoaXMuc2NlbmUubG9zZVNvdW5kLm9uKFwiY29tcGxldGVcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xlYXIodHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5yZXNldCg4LCA4KTtcclxuICAgICAgICB0aGlzLnNjZW5lLmZvb2QgPSBuZXcgRm9vZCh0aGlzLnNjZW5lLCBQaGFzZXIuTWF0aC5CZXR3ZWVuKDUsIDM1KSwgUGhhc2VyLk1hdGguQmV0d2Vlbig1LCAyNSkpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tb3ZlVGltZSA9IHRpbWUgKyB0aGlzLnNwZWVkO1xyXG5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVHcmlkKGdyaWQ6IGJvb2xlYW5bXVtdKSB7XHJcbiAgICAvLyAgUmVtb3ZlIGFsbCBib2R5IHBpZWNlcyBmcm9tIHZhbGlkIHBvc2l0aW9ucyBsaXN0XHJcbiAgICB0aGlzLmNoaWxkcmVuLmVhY2goZnVuY3Rpb24oc2VnbWVudCkge1xyXG4gICAgICB2YXIgYnggPSAoc2VnbWVudCBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKS54IC8gZ3JpZENlbGxXO1xyXG4gICAgICB2YXIgYnkgPSAoc2VnbWVudCBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKS55IC8gZ3JpZENlbGxXO1xyXG5cclxuICAgICAgZ3JpZFtieV1bYnhdID0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZ3JpZDtcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBQaGFzZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==