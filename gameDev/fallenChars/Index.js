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
    type: Phaser.AUTO,
    width: 800,
    height: 480,
    backgroundColor: "#bfcc00",
    parent: "gameDiv"
    // physics: { default: "arcade" }
};
exports.initialData = {};
exports.levels = {};


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
    init() {
        const t = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, "Loading ... ", { font: "bolder 30px " });
        t.setOrigin(0.5);
    }
    preload() {
        this.load.audio("foodHit", "./assets/audio/brickHit.mp3");
        this.load.audio("lose", "./assets/audio/lose.mp3");
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
__webpack_require__(/*! phaser */ "phaser");
class MenuState extends Phaser.Scene {
    constructor() {
        super({ key: "menu" });
    }
    create() {
        const w = Number(this.game.config.width) / 2;
        const h = Number(this.game.config.height) / 2;
        const t = this.add.text(w, h - 75, " CLICK ENTER OR \nTHE PLAY BUTTON", { font: "45px f1", color: "#ff00ff" });
        t.setOrigin(0.5);
        let play = this.add.text(w, h + 75, "\uf01d", { font: "100px fa", color: "#00ff00" });
        play.setOrigin(0.5);
        play.setInteractive();
        play.on("pointerdown", () => {
            this.scene.start("play");
        });
        play.on("pointerover", () => {
            play.setScale(1.2, 1.2);
        });
        play.on("pointerout", () => {
            play.setScale(1, 1);
        });
        this.input.keyboard.addKey(13).on("down", () => {
            this.scene.start("play");
        });
    }
}
exports.MenuState = MenuState;


/***/ }),

/***/ "./src/play/fText.ts":
/*!***************************!*\
  !*** ./src/play/fText.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! phaser */ "phaser");
class fText extends Phaser.GameObjects.Text {
    constructor(scene, x, y, text, speed) {
        super(scene, x, y, text, { font: "50px f2", color: "#" + Math.min(0xaaaaaa, (Math.random() * 0xffffff) << 0).toString(16) });
        this.fallTime = 0;
        scene.add.existing(this);
        this.speed = speed;
    }
    update(time) {
        if (time >= this.fallTime) {
            return this.fall(time);
        }
        return false;
    }
    hit(s) {
        return this.text === s;
    }
    fall(time) {
        this.y += 10;
        this.fallTime = time + this.speed;
    }
    out() {
        if (this.scene)
            return this.y > Number(this.scene.game.config.height);
        return undefined;
    }
}
exports.fText = fText;


/***/ }),

/***/ "./src/play/input.ts":
/*!***************************!*\
  !*** ./src/play/input.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function keyboardInput() {
    this.input.keyboard.on("keydown", (k) => {
        this.text += k.key.toUpperCase();
        this.textD.text = this.text;
        if (!this.chars.checkInput(this.text)) {
            this.text = "";
        }
        this.textD.text = this.text;
        this.info.text = `Exact: ${this.chars.count}   Errors: ${this.chars.errors}   Score: ${this.chars.score()}  Best Score: ${this.bestScore}`;
    });
}
exports.keyboardInput = keyboardInput;
function pointerInput() {
    this.input.on("pointerdown", () => {
        this.chars.generate = true;
    });
}
exports.pointerInput = pointerInput;


/***/ }),

/***/ "./src/play/play.ts":
/*!**************************!*\
  !*** ./src/play/play.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const textGenerator_1 = __webpack_require__(/*! ./textGenerator */ "./src/play/textGenerator.ts");
__webpack_require__(/*! phaser */ "phaser");
const input_1 = __webpack_require__(/*! ./input */ "./src/play/input.ts");
class PlayState extends Phaser.Scene {
    constructor() {
        super({ key: "play" });
        this.text = "";
        this.bestScore = 0;
        const ls = localStorage.getItem("fallenChars");
        if (ls !== null) {
            this.bestScore = JSON.parse(ls).bestScore;
        }
    }
    create() {
        this.chars = new textGenerator_1.TextGenerator(this);
        this.textD = this.add.text(400, 250, "", { font: "bold 15px Arial", color: "#ff0000" });
        this.info = this.add.text(100, 50, "", { font: "bold 15px Arial" });
        input_1.keyboardInput.call(this);
        input_1.pointerInput.call(this);
    }
    update(time) {
        this.chars.update(time);
        if (this.chars.updateChildren(time) === true) {
            this.saveBestScore();
            this.chars.reset();
        }
    }
    saveBestScore() {
        const ls = localStorage.getItem("fallenChars");
        if (ls === null)
            localStorage.setItem("fallenChars", JSON.stringify({ bestScore: this.chars.score() }));
        else if (JSON.parse(ls).bestScore < this.chars.score())
            localStorage.setItem("fallenChars", JSON.stringify({ bestScore: this.chars.score() }));
    }
}
exports.PlayState = PlayState;


/***/ }),

/***/ "./src/play/textGenerator.ts":
/*!***********************************!*\
  !*** ./src/play/textGenerator.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fText_1 = __webpack_require__(/*! ./fText */ "./src/play/fText.ts");
__webpack_require__(/*! phaser */ "phaser");
const LEFT = "QWERTASDFGZXCVB";
const RIGHT = "YUIOPHJKLNM,.;/";
const padding = 300;
class TextGenerator extends Phaser.GameObjects.Group {
    constructor(scene) {
        super(scene);
        this.speed = 5000;
        this.charSpeed = 1000;
        this.generate = true;
        this.newCharTime = 0;
        this.count = 0;
        this.errors = 0;
        this.min = 0;
        this.max = 3;
    }
    score() {
        get: return this.count - this.errors;
    }
    update(time) {
        if (this.generate && (this.empty() || time > this.newCharTime)) {
            this.addNewChar(time);
        }
    }
    updateChildren(time) {
        let f = false;
        this.children.each(c => {
            c.update(time);
            if (c.out()) {
                f = true;
            }
        });
        return f;
    }
    empty() {
        return this.countActive() === 0;
    }
    addNewChar(time) {
        const x = Phaser.Math.Between(10, Number(this.scene.game.config.width) - padding);
        const y = 0;
        let t = "";
        for (let i = this.min; i < Phaser.Math.Between(this.min + 1, this.max); i++) {
            if (Math.random() > 0.5)
                t += LEFT[Phaser.Math.Between(0, LEFT.length - 1)];
            else
                t += RIGHT[Phaser.Math.Between(0, RIGHT.length - 1)];
        }
        const char = new fText_1.fText(this.scene, x, y, t, this.charSpeed);
        this.add(char);
        this.newCharTime = time + this.speed;
    }
    checkInput(t) {
        const tt = this.getFirst(true);
        if (tt) {
            console.log(tt.text);
            if (t === tt.text) {
                this.remove(tt, true, true);
                this.count++;
                if (this.charSpeed > 500)
                    this.charSpeed -= this.charSpeed * 0.01;
                if (this.speed > 2000)
                    this.speed -= this.speed * 0.01;
                this.updateTextLength();
                return false;
            }
            if (tt.text.startsWith(t)) {
                return true;
            }
            else {
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
exports.TextGenerator = TextGenerator;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXQvaW5pdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9hZC9sb2FkLnRzIiwid2VicGFjazovLy8uL3NyYy9tZW51L21lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXkvZlRleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXkvaW5wdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXkvcGxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheS90ZXh0R2VuZXJhdG9yLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlBoYXNlclwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztB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SSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztDQUNGO0FBdkZELHNDQXVGQzs7Ozs7Ozs7Ozs7O0FDNUZELHdCIiwiZmlsZSI6IkluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZ2FtZS50c1wiKTtcbiIsImltcG9ydCBcInBoYXNlclwiO1xyXG5cclxuaW1wb3J0IHsgY29uZmlnLCBJX2luaXRpYWxEYXRhLCBpbml0aWFsRGF0YSB9IGZyb20gXCIuL2dhbWVDb25maWdcIjtcclxuXHJcbmltcG9ydCB7IFBsYXlTdGF0ZSB9IGZyb20gXCIuL3BsYXkvcGxheVwiO1xyXG5pbXBvcnQgeyBNZW51U3RhdGUgfSBmcm9tIFwiLi9tZW51L21lbnVcIjtcclxuaW1wb3J0IHsgTG9hZFN0YXRlIH0gZnJvbSBcIi4vbG9hZC9sb2FkXCI7XHJcbmltcG9ydCB7IEluaXRTdGF0ZSB9IGZyb20gXCIuL2luaXQvaW5pdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWUgZXh0ZW5kcyBQaGFzZXIuR2FtZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihjb25maWcpO1xyXG5cclxuICAgIHRoaXMuc2NlbmUuYWRkKFwiaW5pdFwiLCBuZXcgSW5pdFN0YXRlKCkpO1xyXG4gICAgdGhpcy5zY2VuZS5hZGQoXCJsb2FkXCIsIG5ldyBMb2FkU3RhdGUoKSk7XHJcbiAgICB0aGlzLnNjZW5lLmFkZChcIm1lbnVcIiwgbmV3IE1lbnVTdGF0ZSgpKTtcclxuICAgIHRoaXMuc2NlbmUuYWRkKFwicGxheVwiLCBuZXcgUGxheVN0YXRlKCkpO1xyXG5cclxuICAgIHRoaXMuc2NlbmUuc3RhcnQoXCJpbml0XCIpO1xyXG4gIH1cclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcclxufTtcclxuIiwiaW1wb3J0IFwicGhhc2VyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIHR5cGU6IFBoYXNlci5BVVRPLFxyXG4gIHdpZHRoOiA4MDAsXHJcbiAgaGVpZ2h0OiA0ODAsXHJcbiAgYmFja2dyb3VuZENvbG9yOiBcIiNiZmNjMDBcIixcclxuICBwYXJlbnQ6IFwiZ2FtZURpdlwiXHJcbiAgLy8gcGh5c2ljczogeyBkZWZhdWx0OiBcImFyY2FkZVwiIH1cclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSV9pbml0aWFsRGF0YSB7fVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxEYXRhOiBJX2luaXRpYWxEYXRhID0ge307XHJcblxyXG5leHBvcnQgY29uc3QgbGV2ZWxzID0ge307XHJcbiIsImltcG9ydCBcInBoYXNlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluaXRTdGF0ZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcih7IGtleTogXCJpbml0XCIgfSk7XHJcbiAgfVxyXG4gIHByZWxvYWQoKSB7XHJcbiAgICB0aGlzLmdhbWUuY29uZmlnLmJhY2tncm91bmRDb2xvci5zZXRUbygyMzgsIDIzOCwgMjM4KTtcclxuXHJcbiAgICAvLyBnZXQgdXNlciBwcm9ncmVzc1xyXG5cclxuICAgIHRoaXMuc2NlbmUuc3RhcnQoXCJsb2FkXCIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgXCJwaGFzZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkU3RhdGUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoeyBrZXk6IFwibG9hZFwiIH0pO1xyXG4gIH1cclxuICBpbml0KCkge1xyXG4gICAgY29uc3QgdCA9IHRoaXMuYWRkLnRleHQodGhpcy5jYW1lcmFzLm1haW4uY2VudGVyWCwgdGhpcy5jYW1lcmFzLm1haW4uY2VudGVyWSwgXCJMb2FkaW5nIC4uLiBcIiwgeyBmb250OiBcImJvbGRlciAzMHB4IFwiIH0pO1xyXG4gICAgdC5zZXRPcmlnaW4oMC41KTtcclxuICB9XHJcbiAgcHJlbG9hZCgpIHtcclxuICAgIHRoaXMubG9hZC5hdWRpbyhcImZvb2RIaXRcIiwgXCIuL2Fzc2V0cy9hdWRpby9icmlja0hpdC5tcDNcIik7XHJcbiAgICB0aGlzLmxvYWQuYXVkaW8oXCJsb3NlXCIsIFwiLi9hc3NldHMvYXVkaW8vbG9zZS5tcDNcIik7XHJcbiAgfVxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIHRoaXMuc2NlbmUuc3RhcnQoXCJtZW51XCIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgXCJwaGFzZXJcIjtcclxuZXhwb3J0IGNsYXNzIE1lbnVTdGF0ZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcih7IGtleTogXCJtZW51XCIgfSk7XHJcbiAgfVxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIGNvbnN0IHcgPSBOdW1iZXIodGhpcy5nYW1lLmNvbmZpZy53aWR0aCkgLyAyO1xyXG4gICAgY29uc3QgaCA9IE51bWJlcih0aGlzLmdhbWUuY29uZmlnLmhlaWdodCkgLyAyO1xyXG5cclxuICAgIGNvbnN0IHQgPSB0aGlzLmFkZC50ZXh0KHcsIGggLSA3NSwgXCIgQ0xJQ0sgRU5URVIgT1IgXFxuVEhFIFBMQVkgQlVUVE9OXCIsIHsgZm9udDogXCI0NXB4IGYxXCIsIGNvbG9yOiBcIiNmZjAwZmZcIiB9KTtcclxuICAgIHQuc2V0T3JpZ2luKDAuNSk7XHJcbiAgICBsZXQgcGxheSA9IHRoaXMuYWRkLnRleHQodywgaCArIDc1LCBcIlxcdWYwMWRcIiwgeyBmb250OiBcIjEwMHB4IGZhXCIsIGNvbG9yOiBcIiMwMGZmMDBcIiB9KTtcclxuICAgIHBsYXkuc2V0T3JpZ2luKDAuNSk7XHJcbiAgICBwbGF5LnNldEludGVyYWN0aXZlKCk7XHJcbiAgICBwbGF5Lm9uKFwicG9pbnRlcmRvd25cIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KFwicGxheVwiKTtcclxuICAgIH0pO1xyXG4gICAgcGxheS5vbihcInBvaW50ZXJvdmVyXCIsICgpID0+IHtcclxuICAgICAgcGxheS5zZXRTY2FsZSgxLjIsIDEuMik7XHJcbiAgICB9KTtcclxuICAgIHBsYXkub24oXCJwb2ludGVyb3V0XCIsICgpID0+IHtcclxuICAgICAgcGxheS5zZXRTY2FsZSgxLCAxKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoMTMpLm9uKFwiZG93blwiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoXCJwbGF5XCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBcInBoYXNlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIGZUZXh0IGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLlRleHQge1xyXG4gIHNwZWVkOiBudW1iZXI7XHJcbiAgZmFsbFRpbWUgPSAwO1xyXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIHNwZWVkOiBudW1iZXIpIHtcclxuICAgIHN1cGVyKHNjZW5lLCB4LCB5LCB0ZXh0LCB7IGZvbnQ6IFwiNTBweCBmMlwiLCBjb2xvcjogXCIjXCIgKyBNYXRoLm1pbigweGFhYWFhYSwgKE1hdGgucmFuZG9tKCkgKiAweGZmZmZmZikgPDwgMCkudG9TdHJpbmcoMTYpIH0pO1xyXG4gICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gIH1cclxuICB1cGRhdGUodGltZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodGltZSA+PSB0aGlzLmZhbGxUaW1lKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZhbGwodGltZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGhpdChzOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLnRleHQgPT09IHM7XHJcbiAgfVxyXG4gIGZhbGwodGltZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnkgKz0gMTA7XHJcbiAgICB0aGlzLmZhbGxUaW1lID0gdGltZSArIHRoaXMuc3BlZWQ7XHJcbiAgfVxyXG4gIG91dCgpIHtcclxuICAgIGlmICh0aGlzLnNjZW5lKSByZXR1cm4gdGhpcy55ID4gTnVtYmVyKHRoaXMuc2NlbmUuZ2FtZS5jb25maWcuaGVpZ2h0KTtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFBsYXlTdGF0ZSB9IGZyb20gXCIuL3BsYXlcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGtleWJvYXJkSW5wdXQodGhpczogUGxheVN0YXRlKSB7XHJcbiAgdGhpcy5pbnB1dC5rZXlib2FyZC5vbihcImtleWRvd25cIiwgKGs6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgIHRoaXMudGV4dCArPSBrLmtleS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgdGhpcy50ZXh0RC50ZXh0ID0gdGhpcy50ZXh0O1xyXG4gICAgaWYgKCF0aGlzLmNoYXJzLmNoZWNrSW5wdXQodGhpcy50ZXh0KSkge1xyXG4gICAgICB0aGlzLnRleHQgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgdGhpcy50ZXh0RC50ZXh0ID0gdGhpcy50ZXh0O1xyXG4gICAgdGhpcy5pbmZvLnRleHQgPSBgRXhhY3Q6ICR7dGhpcy5jaGFycy5jb3VudH0gICBFcnJvcnM6ICR7dGhpcy5jaGFycy5lcnJvcnN9ICAgU2NvcmU6ICR7dGhpcy5jaGFycy5zY29yZSgpfSAgQmVzdCBTY29yZTogJHt0aGlzLmJlc3RTY29yZX1gO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRlcklucHV0KHRoaXM6IFBsYXlTdGF0ZSkge1xyXG4gIHRoaXMuaW5wdXQub24oXCJwb2ludGVyZG93blwiLCAoKSA9PiB7XHJcbiAgICB0aGlzLmNoYXJzLmdlbmVyYXRlID0gdHJ1ZTtcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBUZXh0R2VuZXJhdG9yIH0gZnJvbSBcIi4vdGV4dEdlbmVyYXRvclwiO1xyXG5pbXBvcnQgXCJwaGFzZXJcIjtcclxuaW1wb3J0IHsga2V5Ym9hcmRJbnB1dCwgcG9pbnRlcklucHV0IH0gZnJvbSBcIi4vaW5wdXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5U3RhdGUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIGNoYXJzITogVGV4dEdlbmVyYXRvcjtcclxuICB0ZXh0ID0gXCJcIjtcclxuICB0ZXh0RDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgaW5mbzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgYmVzdFNjb3JlID0gMDtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHsga2V5OiBcInBsYXlcIiB9KTtcclxuICAgIGNvbnN0IGxzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYWxsZW5DaGFyc1wiKTtcclxuICAgIGlmIChscyAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmJlc3RTY29yZSA9IEpTT04ucGFyc2UobHMpLmJlc3RTY29yZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIHRoaXMuY2hhcnMgPSBuZXcgVGV4dEdlbmVyYXRvcih0aGlzKTtcclxuICAgIHRoaXMudGV4dEQgPSB0aGlzLmFkZC50ZXh0KDQwMCwgMjUwLCBcIlwiLCB7IGZvbnQ6IFwiYm9sZCAxNXB4IEFyaWFsXCIsIGNvbG9yOiBcIiNmZjAwMDBcIiB9KTtcclxuICAgIHRoaXMuaW5mbyA9IHRoaXMuYWRkLnRleHQoMTAwLCA1MCwgXCJcIiwgeyBmb250OiBcImJvbGQgMTVweCBBcmlhbFwiIH0pO1xyXG5cclxuICAgIGtleWJvYXJkSW5wdXQuY2FsbCh0aGlzKTtcclxuICAgIHBvaW50ZXJJbnB1dC5jYWxsKHRoaXMpO1xyXG4gIH1cclxuICB1cGRhdGUodGltZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmNoYXJzLnVwZGF0ZSh0aW1lKTtcclxuICAgIGlmICh0aGlzLmNoYXJzLnVwZGF0ZUNoaWxkcmVuKHRpbWUpID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMuc2F2ZUJlc3RTY29yZSgpO1xyXG4gICAgICB0aGlzLmNoYXJzLnJlc2V0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNhdmVCZXN0U2NvcmUoKSB7XHJcbiAgICBjb25zdCBscyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmFsbGVuQ2hhcnNcIik7XHJcbiAgICBpZiAobHMgPT09IG51bGwpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmFsbGVuQ2hhcnNcIiwgSlNPTi5zdHJpbmdpZnkoeyBiZXN0U2NvcmU6IHRoaXMuY2hhcnMuc2NvcmUoKSB9KSk7XHJcbiAgICBlbHNlIGlmIChKU09OLnBhcnNlKGxzKS5iZXN0U2NvcmUgPCB0aGlzLmNoYXJzLnNjb3JlKCkpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmFsbGVuQ2hhcnNcIiwgSlNPTi5zdHJpbmdpZnkoeyBiZXN0U2NvcmU6IHRoaXMuY2hhcnMuc2NvcmUoKSB9KSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGZUZXh0IH0gZnJvbSBcIi4vZlRleHRcIjtcclxuaW1wb3J0IFwicGhhc2VyXCI7XHJcbmNvbnN0IExFRlQgPSBcIlFXRVJUQVNERkdaWENWQlwiO1xyXG5jb25zdCBSSUdIVCA9IFwiWVVJT1BISktMTk0sLjsvXCI7XHJcbmNvbnN0IHBhZGRpbmcgPSAzMDA7XHJcbmV4cG9ydCBjbGFzcyBUZXh0R2VuZXJhdG9yIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwIHtcclxuICBzcGVlZCA9IDUwMDA7XHJcbiAgY2hhclNwZWVkID0gMTAwMDtcclxuICBnZW5lcmF0ZSA9IHRydWU7XHJcbiAgbmV3Q2hhclRpbWUgPSAwO1xyXG4gIGNvdW50ID0gMDtcclxuICBlcnJvcnMgPSAwO1xyXG4gIG1pbiA9IDA7XHJcbiAgbWF4ID0gMztcclxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lKSB7XHJcbiAgICBzdXBlcihzY2VuZSk7XHJcbiAgfVxyXG4gIHNjb3JlKCkge1xyXG4gICAgZ2V0OiByZXR1cm4gdGhpcy5jb3VudCAtIHRoaXMuZXJyb3JzO1xyXG4gIH1cclxuICB1cGRhdGUodGltZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5nZW5lcmF0ZSAmJiAodGhpcy5lbXB0eSgpIHx8IHRpbWUgPiB0aGlzLm5ld0NoYXJUaW1lKSkge1xyXG4gICAgICB0aGlzLmFkZE5ld0NoYXIodGltZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVwZGF0ZUNoaWxkcmVuKHRpbWU6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGYgPSBmYWxzZTtcclxuICAgIHRoaXMuY2hpbGRyZW4uZWFjaChjID0+IHtcclxuICAgICAgYy51cGRhdGUodGltZSk7XHJcbiAgICAgIGlmICgoYyBhcyBmVGV4dCkub3V0KCkpIHtcclxuICAgICAgICBmID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZjtcclxuICB9XHJcblxyXG4gIGVtcHR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY291bnRBY3RpdmUoKSA9PT0gMDtcclxuICB9XHJcblxyXG4gIGFkZE5ld0NoYXIodGltZTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCB4ID0gUGhhc2VyLk1hdGguQmV0d2VlbigxMCwgTnVtYmVyKHRoaXMuc2NlbmUuZ2FtZS5jb25maWcud2lkdGgpIC0gcGFkZGluZyk7XHJcbiAgICBjb25zdCB5ID0gMDtcclxuICAgIGxldCB0ID0gXCJcIjtcclxuICAgIGZvciAobGV0IGkgPSB0aGlzLm1pbjsgaSA8IFBoYXNlci5NYXRoLkJldHdlZW4odGhpcy5taW4gKyAxLCB0aGlzLm1heCk7IGkrKykge1xyXG4gICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkgdCArPSBMRUZUW1BoYXNlci5NYXRoLkJldHdlZW4oMCwgTEVGVC5sZW5ndGggLSAxKV07XHJcbiAgICAgIGVsc2UgdCArPSBSSUdIVFtQaGFzZXIuTWF0aC5CZXR3ZWVuKDAsIFJJR0hULmxlbmd0aCAtIDEpXTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYXIgPSBuZXcgZlRleHQodGhpcy5zY2VuZSwgeCwgeSwgdCwgdGhpcy5jaGFyU3BlZWQpO1xyXG4gICAgdGhpcy5hZGQoY2hhcik7XHJcblxyXG4gICAgdGhpcy5uZXdDaGFyVGltZSA9IHRpbWUgKyB0aGlzLnNwZWVkO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tJbnB1dCh0OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHR0ID0gdGhpcy5nZXRGaXJzdCh0cnVlKTtcclxuICAgIGlmICh0dCkge1xyXG4gICAgICBjb25zb2xlLmxvZyh0dC50ZXh0KTtcclxuICAgICAgaWYgKHQgPT09IHR0LnRleHQpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZSh0dCwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5jb3VudCsrO1xyXG4gICAgICAgIGlmICh0aGlzLmNoYXJTcGVlZCA+IDUwMCkgdGhpcy5jaGFyU3BlZWQgLT0gdGhpcy5jaGFyU3BlZWQgKiAwLjAxO1xyXG4gICAgICAgIGlmICh0aGlzLnNwZWVkID4gMjAwMCkgdGhpcy5zcGVlZCAtPSB0aGlzLnNwZWVkICogMC4wMTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRleHRMZW5ndGgoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR0LnRleHQuc3RhcnRzV2l0aCh0KSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZXJyb3JzKys7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUZXh0TGVuZ3RoKCkge1xyXG4gICAgaWYgKHRoaXMubWF4ICogMTUgPCB0aGlzLmNvdW50KSB7XHJcbiAgICAgIHRoaXMubWF4ICs9IDI7XHJcbiAgICAgIHRoaXMubWluICs9IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlc2V0KCkge1xyXG4gICAgdGhpcy5jbGVhcihmYWxzZSwgdHJ1ZSk7XHJcbiAgICB0aGlzLmdlbmVyYXRlID0gZmFsc2U7XHJcbiAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgIHRoaXMuZXJyb3JzID0gMDtcclxuICAgIHRoaXMuc3BlZWQgPSA1MDAwO1xyXG4gICAgdGhpcy5jaGFyU3BlZWQgPSAxMDAwO1xyXG4gICAgdGhpcy5taW4gPSAwO1xyXG4gICAgdGhpcy5tYXggPSAzO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFBoYXNlcjsiXSwic291cmNlUm9vdCI6IiJ9