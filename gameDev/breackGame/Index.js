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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/game.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! phaser */ "phaser");
const gameConfig_1 = __webpack_require__(/*! ./gameConfig */ "./src/gameConfig.ts");
const play_1 = __webpack_require__(/*! ./play/play */ "./src/play/play.ts");
const menu_1 = __webpack_require__(/*! ./menu/menu */ "./src/menu/menu.ts");
const load_1 = __webpack_require__(/*! ./load/load */ "./src/load/load.ts");
const init_1 = __webpack_require__(/*! ./init/init */ "./src/init/init.ts");
class Game extends Phaser.Game {
    constructor() {
        super(gameConfig_1.config);
        this.initialData = gameConfig_1.initialData;
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

/***/ "./src/gameConfig.ts":
/*!***************************!*\
  !*** ./src/gameConfig.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! phaser */ "phaser");
exports.config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: "gameDiv",
    physics: { default: "arcade" }
};
exports.initialData = {
    player: "med",
    topScore: 0,
    level: 1
};
exports.levels = {
    1: {
        rows: 3,
        cols: 5,
        v0: 100
    },
    2: {
        rows: 4,
        cols: 7,
        v0: 200
    },
    3: {
        rows: 5,
        cols: 9,
        v0: 300
    },
    4: {
        rows: 5,
        cols: 11,
        v0: 400
    },
    5: {
        rows: 5,
        cols: 13,
        v0: 500
    },
    6: {
        rows: 5,
        cols: 15,
        v0: 600
    }
};


/***/ }),

/***/ "./src/init/init.ts":
/*!**************************!*\
  !*** ./src/init/init.ts ***!
  \**************************/
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
        const player = localStorage.getItem(this.game.initialData.player);
        if (player != null) {
            this.game.initialData = JSON.parse(player);
        }
        this.scene.start("load");
    }
}
exports.InitState = InitState;


/***/ }),

/***/ "./src/load/load.ts":
/*!**************************!*\
  !*** ./src/load/load.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! phaser */ "phaser");
class LoadState extends Phaser.Scene {
    constructor() {
        super({ key: "load" });
    }
    preload() {
        let loading = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, "Loading ... ", { fontFamily: "FontAwesome" });
        this.load.audio("bounce", "./assets/audio/bounce.mp3");
        this.load.audio("brickHit", "./assets/audio/brickHit.mp3");
        this.load.audio("win", "./assets/audio/win.mp3");
        this.load.audio("lose", "./assets/audio/lose.mp3");
        // this.textures.addImage("playButton", document.getElementById(
        //   "playButton"
        // ) as HTMLImageElement);
    }
    create() {
        this.scene.start("menu");
    }
}
exports.LoadState = LoadState;


/***/ }),

/***/ "./src/menu/menu.ts":
/*!**************************!*\
  !*** ./src/menu/menu.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class MenuState extends Phaser.Scene {
    constructor() {
        super({ key: "menu" });
    }
    preload() {
        let play = this.add.text(Number(this.game.config.width) / 2, Number(this.game.config.height) / 2, "Click To Play", { font: "bolder 50px ", color: "#53c1c1" });
        play.setOrigin(0.5, 0.5);
        play.setInteractive();
        play.on("pointerdown", () => {
            this.scene.start("play");
        });
    }
}
exports.MenuState = MenuState;


/***/ }),

/***/ "./src/play/info.ts":
/*!**************************!*\
  !*** ./src/play/info.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! phaser */ "phaser");
function createInfo() {
    const style = { font: "bolder 20px ", color: "#99a0aa" };
    this.scoreT = this.add.text(40, 580, "Score: " + this.score, style);
    this.ballsT = this.add.text(440, 580, "Balls: " + this.balls, style);
    this.timerT = this.add.text(240, 580, "Time: " + this.timerV, style);
    this.timer = this.time.addEvent({
        delay: 100,
        loop: true,
        callback: () => {
            this.timerV += this.timer.getElapsedSeconds();
            this.timerT.text = "Time: " + (this.timerV / 60).toFixed(2);
        }
    });
}
exports.createInfo = createInfo;


/***/ }),

/***/ "./src/play/inputs.ts":
/*!****************************!*\
  !*** ./src/play/inputs.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function leftInput() {
    this.left = this.input.keyboard.addKey("left");
    this.left.on("down", () => {
        this.paddleMoveLeft = true;
    });
    this.left.on("up", () => {
        this.paddleMoveLeft = false;
    });
}
exports.leftInput = leftInput;
function rightInput() {
    this.right = this.input.keyboard.addKey("right");
    this.right.on("down", () => {
        this.paddleMoveRight = true;
    });
    this.right.on("up", () => {
        this.paddleMoveRight = false;
    });
}
exports.rightInput = rightInput;


/***/ }),

/***/ "./src/play/objects.ts":
/*!*****************************!*\
  !*** ./src/play/objects.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const gameConfig_1 = __webpack_require__(/*! ./../gameConfig */ "./src/gameConfig.ts");
function createPaddle() {
    this.paddle = this.add.rectangle(this.paddlePos.x, this.paddlePos.y, 100, 20, 0x53c1c1);
    this.paddle.setOrigin(0.5, 0.5);
}
exports.createPaddle = createPaddle;
function createBall() {
    this.ball = this.add.rectangle(this.ballPos.x, this.ballPos.y, 10, 10, 0x53cccc);
    this.ball.setOrigin(0.5, 0.5);
}
exports.createBall = createBall;
function createBricks() {
    const level = gameConfig_1.levels[this.game.initialData.level];
    this.bricks = this.add.group();
    let offX = 50, offY = 60, margin = 10, rows = level.rows, cols = level.cols, gridWidth = Number(this.game.config.width) - 2 * offX, brickWidth = (gridWidth - margin * (cols - 1)) / cols, brickHeight = 20;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let newBrick = this.add.rectangle(offX, offY, brickWidth, brickHeight, Phaser.Display.Color.RandomRGB().color);
            newBrick.setOrigin(0);
            this.bricks.add(newBrick);
            offX += brickWidth + margin;
        }
        offX = 50;
        offY += brickHeight + margin;
    }
}
exports.createBricks = createBricks;


/***/ }),

/***/ "./src/play/physics.ts":
/*!*****************************!*\
  !*** ./src/play/physics.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const gameConfig_1 = __webpack_require__(/*! ./../gameConfig */ "./src/gameConfig.ts");
function ballPhysics() {
    this.physics.add.existing(this.ball);
    if (this.ball.body instanceof Phaser.Physics.Arcade.Body) {
        const level = gameConfig_1.levels[this.game.initialData.level];
        this.ball.body.velocity.setTo(level.v0, -level.v0);
        this.ball.body.bounce.setTo(1);
        this.ball.body.setCollideWorldBounds(true);
        this.ball.body.onWorldBounds = true;
    }
}
exports.ballPhysics = ballPhysics;
function paddlePhysics() {
    this.physics.add.existing(this.paddle);
    if (this.paddle.body instanceof Phaser.Physics.Arcade.Body) {
        this.paddle.body.immovable = true;
    }
    this.physics.add.collider(this.ball, this.paddle, () => {
        this.sound.play("bounce");
    });
}
exports.paddlePhysics = paddlePhysics;
function movePaddle() {
    if (this.paddleMoveLeft && this.paddle.x > 75) {
        this.paddle.x -= 10;
    }
    if (this.paddleMoveRight && this.paddle.x < Number(this.game.config.width) - 75) {
        this.paddle.x += 10;
    }
}
exports.movePaddle = movePaddle;
function brickPhysics() {
    this.bricks.children.iterate(brick => {
        this.physics.add.existing(brick);
        if (brick.body instanceof Phaser.Physics.Arcade.Body) {
            brick.body.immovable = true;
            this.physics.add.collider(this.ball, brick, () => {
                this.sound.play("brickHit");
                brick.destroy();
                this.score += 10;
                this.scoreT.text = "Score: " + this.score;
                if (this.bricks.countActive() <= 0) {
                    this.ball.destroy();
                    this.winSound.play();
                    this.winSound.on("complete", () => {
                        this.game.initialData.topScore = this.score;
                        if (this.game.initialData.level < 6)
                            this.game.initialData.level += 1;
                        localStorage.setItem(this.game.initialData.player, JSON.stringify(this.game.initialData));
                        this.scene.start("init");
                    });
                }
            });
        }
    });
}
exports.brickPhysics = brickPhysics;
function worldPhysics() {
    this.physics.world.on("worldbounds", (body, _, b) => {
        if (b) {
            this.sound.play("lose");
            if (this.ball.body instanceof Phaser.Physics.Arcade.Body) {
                this.ball.body.velocity.setTo(0);
            }
            this.paddle.setPosition(this.paddlePos.x, this.paddlePos.y);
            this.time.addEvent({
                delay: 1000,
                callback: () => {
                    this.ball.setPosition(this.ballPos.x, this.ballPos.y);
                    if (this.ball.body instanceof Phaser.Physics.Arcade.Body) {
                        const level = gameConfig_1.levels[this.game.initialData.level];
                        this.ball.body.velocity.setTo(level.v0, -level.v0);
                    }
                }
            });
            this.balls--;
            this.ballsT.text = "Balls: " + this.balls;
            if (this.balls <= 0) {
                this.ball.destroy();
            }
        }
        else {
            this.sound.play("bounce");
        }
    }, this);
}
exports.worldPhysics = worldPhysics;


/***/ }),

/***/ "./src/play/play.ts":
/*!**************************!*\
  !*** ./src/play/play.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! phaser */ "phaser");
const inputs_1 = __webpack_require__(/*! ./inputs */ "./src/play/inputs.ts");
const physics_1 = __webpack_require__(/*! ./physics */ "./src/play/physics.ts");
const objects_1 = __webpack_require__(/*! ./objects */ "./src/play/objects.ts");
const info_1 = __webpack_require__(/*! ./info */ "./src/play/info.ts");
class PlayState extends Phaser.Scene {
    constructor() {
        super({ key: "play" });
        this.paddleMoveLeft = false;
        this.paddleMoveRight = false;
        this.timerV = 0;
        this.score = 0;
        this.balls = 5;
    }
    init() {
        const w = Number(this.game.config.width);
        const h = Number(this.game.config.height);
        this.paddlePos = new Phaser.Geom.Point(w / 2, h - 50);
        this.ballPos = new Phaser.Geom.Point(w / 2, h - 65);
    }
    create() {
        // game objects
        objects_1.createBall.call(this);
        objects_1.createPaddle.call(this);
        objects_1.createBricks.call(this);
        // game input
        inputs_1.leftInput.call(this);
        inputs_1.rightInput.call(this);
        // game physics and logic
        physics_1.ballPhysics.call(this);
        physics_1.paddlePhysics.call(this);
        physics_1.brickPhysics.call(this);
        physics_1.worldPhysics.call(this);
        // game info
        info_1.createInfo.call(this);
        // game sound
        this.winSound = this.sound.add("win");
    }
    update() {
        physics_1.movePaddle.call(this);
    }
}
exports.PlayState = PlayState;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXQvaW5pdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9hZC9sb2FkLnRzIiwid2VicGFjazovLy8uL3NyYy9tZW51L21lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXkvaW5mby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheS9pbnB1dHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXkvb2JqZWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheS9waHlzaWNzLnRzIiwid2VicGFjazovLy8uL3NyYy9wbGF5L3BsYXkudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUGhhc2VyXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFD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VSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixzQkFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixzQkFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixhQUFhO1FBQ2Isa0JBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsbUJBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIseUJBQXlCO1FBQ3pCLHFCQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLHVCQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLHNCQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLHNCQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLFlBQVk7UUFDWixpQkFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixhQUFhO1FBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsTUFBTTtRQUNKLG9CQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Q0FDRjtBQXBERCw4QkFvREM7Ozs7Ozs7Ozs7OztBQzNERCx3QiIsImZpbGUiOiJJbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2dhbWUudHNcIik7XG4iLCJpbXBvcnQgXCJwaGFzZXJcIjtcclxuXHJcbmltcG9ydCB7IGNvbmZpZywgSV9pbml0aWFsRGF0YSwgaW5pdGlhbERhdGEgfSBmcm9tIFwiLi9nYW1lQ29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBQbGF5U3RhdGUgfSBmcm9tIFwiLi9wbGF5L3BsYXlcIjtcclxuaW1wb3J0IHsgTWVudVN0YXRlIH0gZnJvbSBcIi4vbWVudS9tZW51XCI7XHJcbmltcG9ydCB7IExvYWRTdGF0ZSB9IGZyb20gXCIuL2xvYWQvbG9hZFwiO1xyXG5pbXBvcnQgeyBJbml0U3RhdGUgfSBmcm9tIFwiLi9pbml0L2luaXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIGV4dGVuZHMgUGhhc2VyLkdhbWUge1xyXG4gIGluaXRpYWxEYXRhOiBJX2luaXRpYWxEYXRhID0gaW5pdGlhbERhdGE7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihjb25maWcpO1xyXG5cclxuICAgIHRoaXMuc2NlbmUuYWRkKFwiaW5pdFwiLCBuZXcgSW5pdFN0YXRlKCkpO1xyXG4gICAgdGhpcy5zY2VuZS5hZGQoXCJsb2FkXCIsIG5ldyBMb2FkU3RhdGUoKSk7XHJcbiAgICB0aGlzLnNjZW5lLmFkZChcIm1lbnVcIiwgbmV3IE1lbnVTdGF0ZSgpKTtcclxuICAgIHRoaXMuc2NlbmUuYWRkKFwicGxheVwiLCBuZXcgUGxheVN0YXRlKCkpO1xyXG5cclxuICAgIHRoaXMuc2NlbmUuc3RhcnQoXCJpbml0XCIpO1xyXG4gIH1cclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcclxufTtcclxuIiwiaW1wb3J0IFwicGhhc2VyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIHdpZHRoOiA4MDAsXHJcbiAgaGVpZ2h0OiA2MDAsXHJcbiAgdHlwZTogUGhhc2VyLkFVVE8sXHJcbiAgcGFyZW50OiBcImdhbWVEaXZcIixcclxuICBwaHlzaWNzOiB7IGRlZmF1bHQ6IFwiYXJjYWRlXCIgfVxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJX2luaXRpYWxEYXRhIHtcclxuICBwbGF5ZXI6IHN0cmluZztcclxuICB0b3BTY29yZTogbnVtYmVyO1xyXG4gIGxldmVsOiAxIHwgMiB8IDMgfCA0IHwgNSB8IDY7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsRGF0YTogSV9pbml0aWFsRGF0YSA9IHtcclxuICBwbGF5ZXI6IFwibWVkXCIsXHJcbiAgdG9wU2NvcmU6IDAsXHJcbiAgbGV2ZWw6IDFcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsZXZlbHMgPSB7XHJcbiAgMToge1xyXG4gICAgcm93czogMyxcclxuICAgIGNvbHM6IDUsXHJcbiAgICB2MDogMTAwXHJcbiAgfSxcclxuICAyOiB7XHJcbiAgICByb3dzOiA0LFxyXG4gICAgY29sczogNyxcclxuICAgIHYwOiAyMDBcclxuICB9LFxyXG4gIDM6IHtcclxuICAgIHJvd3M6IDUsXHJcbiAgICBjb2xzOiA5LFxyXG4gICAgdjA6IDMwMFxyXG4gIH0sXHJcbiAgNDoge1xyXG4gICAgcm93czogNSxcclxuICAgIGNvbHM6IDExLFxyXG4gICAgdjA6IDQwMFxyXG4gIH0sXHJcbiAgNToge1xyXG4gICAgcm93czogNSxcclxuICAgIGNvbHM6IDEzLFxyXG4gICAgdjA6IDUwMFxyXG4gIH0sXHJcbiAgNjoge1xyXG4gICAgcm93czogNSxcclxuICAgIGNvbHM6IDE1LFxyXG4gICAgdjA6IDYwMFxyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IFwicGhhc2VyXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vZ2FtZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluaXRTdGF0ZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgZ2FtZSE6IEdhbWU7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcih7IGtleTogXCJpbml0XCIgfSk7XHJcbiAgfVxyXG4gIHByZWxvYWQoKSB7XHJcbiAgICB0aGlzLmdhbWUuY29uZmlnLmJhY2tncm91bmRDb2xvci5zZXRUbygyMzgsIDIzOCwgMjM4KTtcclxuXHJcbiAgICAvLyBnZXQgdXNlciBwcm9ncmVzc1xyXG4gICAgY29uc3QgcGxheWVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5nYW1lLmluaXRpYWxEYXRhLnBsYXllcik7XHJcbiAgICBpZiAocGxheWVyICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5nYW1lLmluaXRpYWxEYXRhID0gSlNPTi5wYXJzZShwbGF5ZXIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zY2VuZS5zdGFydChcImxvYWRcIik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBcInBoYXNlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRTdGF0ZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcih7IGtleTogXCJsb2FkXCIgfSk7XHJcbiAgfVxyXG4gIHByZWxvYWQoKSB7XHJcbiAgICBsZXQgbG9hZGluZyA9IHRoaXMuYWRkLnRleHQoXHJcbiAgICAgIHRoaXMuY2FtZXJhcy5tYWluLmNlbnRlclgsXHJcbiAgICAgIHRoaXMuY2FtZXJhcy5tYWluLmNlbnRlclksXHJcbiAgICAgIFwiTG9hZGluZyAuLi4gXCIsXHJcbiAgICAgIHsgZm9udEZhbWlseTogXCJGb250QXdlc29tZVwiIH1cclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5sb2FkLmF1ZGlvKFwiYm91bmNlXCIsIFwiLi9hc3NldHMvYXVkaW8vYm91bmNlLm1wM1wiKTtcclxuICAgIHRoaXMubG9hZC5hdWRpbyhcImJyaWNrSGl0XCIsIFwiLi9hc3NldHMvYXVkaW8vYnJpY2tIaXQubXAzXCIpO1xyXG4gICAgdGhpcy5sb2FkLmF1ZGlvKFwid2luXCIsIFwiLi9hc3NldHMvYXVkaW8vd2luLm1wM1wiKTtcclxuICAgIHRoaXMubG9hZC5hdWRpbyhcImxvc2VcIiwgXCIuL2Fzc2V0cy9hdWRpby9sb3NlLm1wM1wiKTtcclxuICAgIC8vIHRoaXMudGV4dHVyZXMuYWRkSW1hZ2UoXCJwbGF5QnV0dG9uXCIsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgLy8gICBcInBsYXlCdXR0b25cIlxyXG4gICAgLy8gKSBhcyBIVE1MSW1hZ2VFbGVtZW50KTtcclxuICB9XHJcbiAgY3JlYXRlKCkge1xyXG4gICAgdGhpcy5zY2VuZS5zdGFydChcIm1lbnVcIik7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBNZW51U3RhdGUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoeyBrZXk6IFwibWVudVwiIH0pO1xyXG4gIH1cclxuICBwcmVsb2FkKCkge1xyXG4gICAgbGV0IHBsYXkgPSB0aGlzLmFkZC50ZXh0KFxyXG4gICAgICBOdW1iZXIodGhpcy5nYW1lLmNvbmZpZy53aWR0aCkgLyAyLFxyXG4gICAgICBOdW1iZXIodGhpcy5nYW1lLmNvbmZpZy5oZWlnaHQpIC8gMixcclxuICAgICAgXCJDbGljayBUbyBQbGF5XCIsXHJcbiAgICAgIHsgZm9udDogXCJib2xkZXIgNTBweCBcIiwgY29sb3I6IFwiIzUzYzFjMVwiIH1cclxuICAgICk7XHJcbiAgICBwbGF5LnNldE9yaWdpbigwLjUsIDAuNSk7XHJcbiAgICBwbGF5LnNldEludGVyYWN0aXZlKCk7XHJcbiAgICBwbGF5Lm9uKFwicG9pbnRlcmRvd25cIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KFwicGxheVwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQbGF5U3RhdGUgfSBmcm9tIFwiLi9wbGF5XCI7XHJcbmltcG9ydCBcInBoYXNlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluZm8odGhpczogUGxheVN0YXRlKSB7XHJcbiAgY29uc3Qgc3R5bGUgPSB7IGZvbnQ6IFwiYm9sZGVyIDIwcHggXCIsIGNvbG9yOiBcIiM5OWEwYWFcIiB9O1xyXG4gIHRoaXMuc2NvcmVUID0gdGhpcy5hZGQudGV4dCg0MCwgNTgwLCBcIlNjb3JlOiBcIiArIHRoaXMuc2NvcmUsIHN0eWxlKTtcclxuICB0aGlzLmJhbGxzVCA9IHRoaXMuYWRkLnRleHQoNDQwLCA1ODAsIFwiQmFsbHM6IFwiICsgdGhpcy5iYWxscywgc3R5bGUpO1xyXG4gIHRoaXMudGltZXJUID0gdGhpcy5hZGQudGV4dCgyNDAsIDU4MCwgXCJUaW1lOiBcIiArIHRoaXMudGltZXJWLCBzdHlsZSk7XHJcbiAgdGhpcy50aW1lciA9IHRoaXMudGltZS5hZGRFdmVudCh7XHJcbiAgICBkZWxheTogMTAwLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgIHRoaXMudGltZXJWICs9IHRoaXMudGltZXIuZ2V0RWxhcHNlZFNlY29uZHMoKTtcclxuICAgICAgdGhpcy50aW1lclQudGV4dCA9IFwiVGltZTogXCIgKyAodGhpcy50aW1lclYgLyA2MCkudG9GaXhlZCgyKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBQbGF5U3RhdGUgfSBmcm9tIFwiLi9wbGF5XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGVmdElucHV0KHRoaXM6IFBsYXlTdGF0ZSkge1xyXG4gIHRoaXMubGVmdCA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFwibGVmdFwiKTtcclxuXHJcbiAgdGhpcy5sZWZ0Lm9uKFwiZG93blwiLCAoKSA9PiB7XHJcbiAgICB0aGlzLnBhZGRsZU1vdmVMZWZ0ID0gdHJ1ZTtcclxuICB9KTtcclxuXHJcbiAgdGhpcy5sZWZ0Lm9uKFwidXBcIiwgKCkgPT4ge1xyXG4gICAgdGhpcy5wYWRkbGVNb3ZlTGVmdCA9IGZhbHNlO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmlnaHRJbnB1dCh0aGlzOiBQbGF5U3RhdGUpIHtcclxuICB0aGlzLnJpZ2h0ID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoXCJyaWdodFwiKTtcclxuXHJcbiAgdGhpcy5yaWdodC5vbihcImRvd25cIiwgKCkgPT4ge1xyXG4gICAgdGhpcy5wYWRkbGVNb3ZlUmlnaHQgPSB0cnVlO1xyXG4gIH0pO1xyXG5cclxuICB0aGlzLnJpZ2h0Lm9uKFwidXBcIiwgKCkgPT4ge1xyXG4gICAgdGhpcy5wYWRkbGVNb3ZlUmlnaHQgPSBmYWxzZTtcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBsZXZlbHMgfSBmcm9tIFwiLi8uLi9nYW1lQ29uZmlnXCI7XHJcbmltcG9ydCB7IFBsYXlTdGF0ZSB9IGZyb20gXCIuL3BsYXlcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYWRkbGUodGhpczogUGxheVN0YXRlKSB7XHJcbiAgdGhpcy5wYWRkbGUgPSB0aGlzLmFkZC5yZWN0YW5nbGUodGhpcy5wYWRkbGVQb3MueCwgdGhpcy5wYWRkbGVQb3MueSwgMTAwLCAyMCwgMHg1M2MxYzEpO1xyXG4gIHRoaXMucGFkZGxlLnNldE9yaWdpbigwLjUsIDAuNSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJhbGwodGhpczogUGxheVN0YXRlKSB7XHJcbiAgdGhpcy5iYWxsID0gdGhpcy5hZGQucmVjdGFuZ2xlKHRoaXMuYmFsbFBvcy54LCB0aGlzLmJhbGxQb3MueSwgMTAsIDEwLCAweDUzY2NjYyk7XHJcbiAgdGhpcy5iYWxsLnNldE9yaWdpbigwLjUsIDAuNSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJyaWNrcyh0aGlzOiBQbGF5U3RhdGUpIHtcclxuICBjb25zdCBsZXZlbCA9IGxldmVsc1t0aGlzLmdhbWUuaW5pdGlhbERhdGEubGV2ZWxdO1xyXG4gIHRoaXMuYnJpY2tzID0gdGhpcy5hZGQuZ3JvdXAoKTtcclxuICBsZXQgb2ZmWCA9IDUwLFxyXG4gICAgb2ZmWSA9IDYwLFxyXG4gICAgbWFyZ2luID0gMTAsXHJcbiAgICByb3dzID0gbGV2ZWwucm93cyxcclxuICAgIGNvbHMgPSBsZXZlbC5jb2xzLFxyXG4gICAgZ3JpZFdpZHRoID0gTnVtYmVyKHRoaXMuZ2FtZS5jb25maWcud2lkdGgpIC0gMiAqIG9mZlgsXHJcbiAgICBicmlja1dpZHRoID0gKGdyaWRXaWR0aCAtIG1hcmdpbiAqIChjb2xzIC0gMSkpIC8gY29scyxcclxuICAgIGJyaWNrSGVpZ2h0ID0gMjA7XHJcblxyXG4gIGZvciAobGV0IHIgPSAwOyByIDwgcm93czsgcisrKSB7XHJcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNvbHM7IGMrKykge1xyXG4gICAgICBsZXQgbmV3QnJpY2sgPSB0aGlzLmFkZC5yZWN0YW5nbGUob2ZmWCwgb2ZmWSwgYnJpY2tXaWR0aCwgYnJpY2tIZWlnaHQsIFBoYXNlci5EaXNwbGF5LkNvbG9yLlJhbmRvbVJHQigpLmNvbG9yKTtcclxuICAgICAgbmV3QnJpY2suc2V0T3JpZ2luKDApO1xyXG4gICAgICB0aGlzLmJyaWNrcy5hZGQobmV3QnJpY2spO1xyXG4gICAgICBvZmZYICs9IGJyaWNrV2lkdGggKyBtYXJnaW47XHJcbiAgICB9XHJcbiAgICBvZmZYID0gNTA7XHJcbiAgICBvZmZZICs9IGJyaWNrSGVpZ2h0ICsgbWFyZ2luO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBsZXZlbHMgfSBmcm9tIFwiLi8uLi9nYW1lQ29uZmlnXCI7XHJcbmltcG9ydCB7IFBsYXlTdGF0ZSB9IGZyb20gXCIuL3BsYXlcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiYWxsUGh5c2ljcyh0aGlzOiBQbGF5U3RhdGUpIHtcclxuICB0aGlzLnBoeXNpY3MuYWRkLmV4aXN0aW5nKHRoaXMuYmFsbCk7XHJcbiAgaWYgKHRoaXMuYmFsbC5ib2R5IGluc3RhbmNlb2YgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkJvZHkpIHtcclxuICAgIGNvbnN0IGxldmVsID0gbGV2ZWxzW3RoaXMuZ2FtZS5pbml0aWFsRGF0YS5sZXZlbF07XHJcbiAgICB0aGlzLmJhbGwuYm9keS52ZWxvY2l0eS5zZXRUbyhsZXZlbC52MCwgLWxldmVsLnYwKTtcclxuICAgIHRoaXMuYmFsbC5ib2R5LmJvdW5jZS5zZXRUbygxKTtcclxuICAgIHRoaXMuYmFsbC5ib2R5LnNldENvbGxpZGVXb3JsZEJvdW5kcyh0cnVlKTtcclxuICAgIHRoaXMuYmFsbC5ib2R5Lm9uV29ybGRCb3VuZHMgPSB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhZGRsZVBoeXNpY3ModGhpczogUGxheVN0YXRlKSB7XHJcbiAgdGhpcy5waHlzaWNzLmFkZC5leGlzdGluZyh0aGlzLnBhZGRsZSk7XHJcbiAgaWYgKHRoaXMucGFkZGxlLmJvZHkgaW5zdGFuY2VvZiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuQm9keSkge1xyXG4gICAgdGhpcy5wYWRkbGUuYm9keS5pbW1vdmFibGUgPSB0cnVlO1xyXG4gIH1cclxuICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuYmFsbCwgdGhpcy5wYWRkbGUsICgpID0+IHtcclxuICAgIHRoaXMuc291bmQucGxheShcImJvdW5jZVwiKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVQYWRkbGUodGhpczogUGxheVN0YXRlKSB7XHJcbiAgaWYgKHRoaXMucGFkZGxlTW92ZUxlZnQgJiYgdGhpcy5wYWRkbGUueCA+IDc1KSB7XHJcbiAgICB0aGlzLnBhZGRsZS54IC09IDEwO1xyXG4gIH1cclxuICBpZiAodGhpcy5wYWRkbGVNb3ZlUmlnaHQgJiYgdGhpcy5wYWRkbGUueCA8IE51bWJlcih0aGlzLmdhbWUuY29uZmlnLndpZHRoKSAtIDc1KSB7XHJcbiAgICB0aGlzLnBhZGRsZS54ICs9IDEwO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJyaWNrUGh5c2ljcyh0aGlzOiBQbGF5U3RhdGUpIHtcclxuICB0aGlzLmJyaWNrcy5jaGlsZHJlbi5pdGVyYXRlKGJyaWNrID0+IHtcclxuICAgIHRoaXMucGh5c2ljcy5hZGQuZXhpc3RpbmcoYnJpY2spO1xyXG4gICAgaWYgKGJyaWNrLmJvZHkgaW5zdGFuY2VvZiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuQm9keSkge1xyXG4gICAgICBicmljay5ib2R5LmltbW92YWJsZSA9IHRydWU7XHJcbiAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5iYWxsLCBicmljaywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc291bmQucGxheShcImJyaWNrSGl0XCIpO1xyXG4gICAgICAgIGJyaWNrLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLnNjb3JlICs9IDEwO1xyXG4gICAgICAgIHRoaXMuc2NvcmVULnRleHQgPSBcIlNjb3JlOiBcIiArIHRoaXMuc2NvcmU7XHJcbiAgICAgICAgaWYgKHRoaXMuYnJpY2tzLmNvdW50QWN0aXZlKCkgPD0gMCkge1xyXG4gICAgICAgICAgdGhpcy5iYWxsLmRlc3Ryb3koKTtcclxuICAgICAgICAgIHRoaXMud2luU291bmQucGxheSgpO1xyXG4gICAgICAgICAgdGhpcy53aW5Tb3VuZC5vbihcImNvbXBsZXRlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmluaXRpYWxEYXRhLnRvcFNjb3JlID0gdGhpcy5zY29yZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS5pbml0aWFsRGF0YS5sZXZlbCA8IDYpIHRoaXMuZ2FtZS5pbml0aWFsRGF0YS5sZXZlbCArPSAxO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmdhbWUuaW5pdGlhbERhdGEucGxheWVyLCBKU09OLnN0cmluZ2lmeSh0aGlzLmdhbWUuaW5pdGlhbERhdGEpKTtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5zdGFydChcImluaXRcIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd29ybGRQaHlzaWNzKHRoaXM6IFBsYXlTdGF0ZSkge1xyXG4gIHRoaXMucGh5c2ljcy53b3JsZC5vbihcclxuICAgIFwid29ybGRib3VuZHNcIixcclxuICAgIChib2R5OiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlLCBfOiBhbnksIGI6IGJvb2xlYW4pID0+IHtcclxuICAgICAgaWYgKGIpIHtcclxuICAgICAgICB0aGlzLnNvdW5kLnBsYXkoXCJsb3NlXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLmJhbGwuYm9keSBpbnN0YW5jZW9mIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Cb2R5KSB7XHJcbiAgICAgICAgICB0aGlzLmJhbGwuYm9keS52ZWxvY2l0eS5zZXRUbygwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYWRkbGUuc2V0UG9zaXRpb24odGhpcy5wYWRkbGVQb3MueCwgdGhpcy5wYWRkbGVQb3MueSk7XHJcbiAgICAgICAgdGhpcy50aW1lLmFkZEV2ZW50KHtcclxuICAgICAgICAgIGRlbGF5OiAxMDAwLFxyXG4gICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5iYWxsLnNldFBvc2l0aW9uKHRoaXMuYmFsbFBvcy54LCB0aGlzLmJhbGxQb3MueSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJhbGwuYm9keSBpbnN0YW5jZW9mIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Cb2R5KSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbGV2ZWwgPSBsZXZlbHNbdGhpcy5nYW1lLmluaXRpYWxEYXRhLmxldmVsXTtcclxuICAgICAgICAgICAgICB0aGlzLmJhbGwuYm9keS52ZWxvY2l0eS5zZXRUbyhsZXZlbC52MCwgLWxldmVsLnYwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYmFsbHMtLTtcclxuICAgICAgICB0aGlzLmJhbGxzVC50ZXh0ID0gXCJCYWxsczogXCIgKyB0aGlzLmJhbGxzO1xyXG4gICAgICAgIGlmICh0aGlzLmJhbGxzIDw9IDApIHtcclxuICAgICAgICAgIHRoaXMuYmFsbC5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc291bmQucGxheShcImJvdW5jZVwiKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRoaXNcclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi8uLi9nYW1lXCI7XHJcbmltcG9ydCBcInBoYXNlclwiO1xyXG5pbXBvcnQgeyBsZWZ0SW5wdXQsIHJpZ2h0SW5wdXQgfSBmcm9tIFwiLi9pbnB1dHNcIjtcclxuaW1wb3J0IHsgYmFsbFBoeXNpY3MsIG1vdmVQYWRkbGUsIHBhZGRsZVBoeXNpY3MsIGJyaWNrUGh5c2ljcywgd29ybGRQaHlzaWNzIH0gZnJvbSBcIi4vcGh5c2ljc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVCYWxsLCBjcmVhdGVQYWRkbGUsIGNyZWF0ZUJyaWNrcyB9IGZyb20gXCIuL29iamVjdHNcIjtcclxuaW1wb3J0IHsgY3JlYXRlSW5mbyB9IGZyb20gXCIuL2luZm9cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5U3RhdGUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIGdhbWUhOiBHYW1lO1xyXG4gIHBhZGRsZSE6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XHJcbiAgcGFkZGxlUG9zITogUGhhc2VyLkdlb20uUG9pbnQ7XHJcbiAgYmFsbCE6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XHJcbiAgYmFsbFBvcyE6IFBoYXNlci5HZW9tLlBvaW50O1xyXG4gIGJyaWNrcyE6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cDtcclxuICBsZWZ0ITogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuICByaWdodCE6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XHJcbiAgcGFkZGxlTW92ZUxlZnQgPSBmYWxzZTtcclxuICBwYWRkbGVNb3ZlUmlnaHQgPSBmYWxzZTtcclxuICBzY29yZVQhOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICB0aW1lclQhOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICBiYWxsc1QhOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICB0aW1lciE6IFBoYXNlci5UaW1lLlRpbWVyRXZlbnQ7XHJcbiAgdGltZXJWID0gMDtcclxuICBzY29yZSA9IDA7XHJcbiAgYmFsbHMgPSA1O1xyXG4gIHdpblNvdW5kOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHsga2V5OiBcInBsYXlcIiB9KTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBjb25zdCB3ID0gTnVtYmVyKHRoaXMuZ2FtZS5jb25maWcud2lkdGgpO1xyXG4gICAgY29uc3QgaCA9IE51bWJlcih0aGlzLmdhbWUuY29uZmlnLmhlaWdodCk7XHJcbiAgICB0aGlzLnBhZGRsZVBvcyA9IG5ldyBQaGFzZXIuR2VvbS5Qb2ludCh3IC8gMiwgaCAtIDUwKTtcclxuICAgIHRoaXMuYmFsbFBvcyA9IG5ldyBQaGFzZXIuR2VvbS5Qb2ludCh3IC8gMiwgaCAtIDY1KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIC8vIGdhbWUgb2JqZWN0c1xyXG4gICAgY3JlYXRlQmFsbC5jYWxsKHRoaXMpO1xyXG4gICAgY3JlYXRlUGFkZGxlLmNhbGwodGhpcyk7XHJcbiAgICBjcmVhdGVCcmlja3MuY2FsbCh0aGlzKTtcclxuICAgIC8vIGdhbWUgaW5wdXRcclxuICAgIGxlZnRJbnB1dC5jYWxsKHRoaXMpO1xyXG4gICAgcmlnaHRJbnB1dC5jYWxsKHRoaXMpO1xyXG4gICAgLy8gZ2FtZSBwaHlzaWNzIGFuZCBsb2dpY1xyXG4gICAgYmFsbFBoeXNpY3MuY2FsbCh0aGlzKTtcclxuICAgIHBhZGRsZVBoeXNpY3MuY2FsbCh0aGlzKTtcclxuICAgIGJyaWNrUGh5c2ljcy5jYWxsKHRoaXMpO1xyXG4gICAgd29ybGRQaHlzaWNzLmNhbGwodGhpcyk7XHJcbiAgICAvLyBnYW1lIGluZm9cclxuICAgIGNyZWF0ZUluZm8uY2FsbCh0aGlzKTtcclxuICAgIC8vIGdhbWUgc291bmRcclxuICAgIHRoaXMud2luU291bmQgPSB0aGlzLnNvdW5kLmFkZChcIndpblwiKTtcclxuICB9XHJcbiAgdXBkYXRlKCkge1xyXG4gICAgbW92ZVBhZGRsZS5jYWxsKHRoaXMpO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFBoYXNlcjsiXSwic291cmNlUm9vdCI6IiJ9