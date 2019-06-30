/******/
const FallenChars = (function (modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            i: moduleId,
            /******/
            l: false,
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
            /******/
        }
        /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/
    __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
            });
            /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value
        });
        /******/
        if (mode & 2 && typeof value != 'string')
            for (var key in value) __webpack_require__.d(ns, key, function (key) {
                return value[key];
            }.bind(null, key));
        /******/
        return ns;
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
            /******/
            function getDefault() {
                return module['default'];
            } :
            /******/
            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = "./src/game.ts");
    /******/
})
/************************************************************************/
/******/
({

    /***/
    "./src/game.ts":
        /*!*********************!*\
          !*** ./src/game.ts ***!
          \*********************/
        /*! no static exports found */
        /***/
        (function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            __webpack_require__( /*! phaser */ "phaser");
            const gameConfig_1 = __webpack_require__( /*! ./gameConfig */ "./src/gameConfig.ts");
            const play_1 = __webpack_require__( /*! ./play/play */ "./src/play/play.ts");
            const menu_1 = __webpack_require__( /*! ./menu/menu */ "./src/menu/menu.ts");
            const load_1 = __webpack_require__( /*! ./load/load */ "./src/load/load.ts");
            const init_1 = __webpack_require__( /*! ./init/init */ "./src/init/init.ts");
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


            /***/
        }),

    /***/
    "./src/gameConfig.ts":
        /*!***************************!*\
          !*** ./src/gameConfig.ts ***!
          \***************************/
        /*! no static exports found */
        /***/
        (function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            __webpack_require__( /*! phaser */ "phaser");
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


            /***/
        }),

    /***/
    "./src/init/init.ts":
        /*!**************************!*\
          !*** ./src/init/init.ts ***!
          \**************************/
        /*! no static exports found */
        /***/
        (function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            __webpack_require__( /*! phaser */ "phaser");
            class InitState extends Phaser.Scene {
                constructor() {
                    super({
                        key: "init"
                    });
                }
                preload() {
                    this.game.config.backgroundColor.setTo(238, 238, 238);
                    // get user progress
                    this.scene.start("load");
                }
            }
            exports.InitState = InitState;


            /***/
        }),

    /***/
    "./src/load/load.ts":
        /*!**************************!*\
          !*** ./src/load/load.ts ***!
          \**************************/
        /*! no static exports found */
        /***/
        (function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            __webpack_require__( /*! phaser */ "phaser");
            class LoadState extends Phaser.Scene {
                constructor() {
                    super({
                        key: "load"
                    });
                }
                init() {
                    const t = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, "Loading ... ", {
                        font: "bolder 30px "
                    });
                    t.setOrigin(0.5);
                }
                preload() {
                    this.load.audio("foodHit", "./fallenChars/assets/audio/brickHit.mp3");
                    this.load.audio("lose", "./fallenChars/assets/audio/lose.mp3");
                }
                create() {
                    this.scene.start("menu");
                }
            }
            exports.LoadState = LoadState;


            /***/
        }),

    /***/
    "./src/menu/menu.ts":
        /*!**************************!*\
          !*** ./src/menu/menu.ts ***!
          \**************************/
        /*! no static exports found */
        /***/
        (function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            __webpack_require__( /*! phaser */ "phaser");
            class MenuState extends Phaser.Scene {
                constructor() {
                    super({
                        key: "menu"
                    });
                }
                create() {
                    const w = Number(this.game.config.width) / 2;
                    const h = Number(this.game.config.height) / 2;
                    const t = this.add.text(w, h - 75, " CLICK ENTER OR \nTHE PLAY BUTTON", {
                        font: "45px f1",
                        color: "#ff00ff"
                    });
                    t.setOrigin(0.5);
                    let play = this.add.text(w, h + 75, "\uf01d", {
                        font: "100px fa",
                        color: "#00ff00"
                    });
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


            /***/
        }),

    /***/
    "./src/play/fText.ts":
        /*!***************************!*\
          !*** ./src/play/fText.ts ***!
          \***************************/
        /*! no static exports found */
        /***/
        (function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            __webpack_require__( /*! phaser */ "phaser");
            class fText extends Phaser.GameObjects.Text {
                constructor(scene, x, y, text, speed) {
                    super(scene, x, y, text, {
                        font: "50px f2",
                        color: "#" + Math.min(0xaaaaaa, (Math.random() * 0xffffff) << 0).toString(16)
                    });
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


            /***/
        }),

    /***/
    "./src/play/input.ts":
        /*!***************************!*\
          !*** ./src/play/input.ts ***!
          \***************************/
        /*! no static exports found */
        /***/
        (function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

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


            /***/
        }),

    /***/
    "./src/play/play.ts":
        /*!**************************!*\
          !*** ./src/play/play.ts ***!
          \**************************/
        /*! no static exports found */
        /***/
        (function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            const textGenerator_1 = __webpack_require__( /*! ./textGenerator */ "./src/play/textGenerator.ts");
            __webpack_require__( /*! phaser */ "phaser");
            const input_1 = __webpack_require__( /*! ./input */ "./src/play/input.ts");
            class PlayState extends Phaser.Scene {
                constructor() {
                    super({
                        key: "play"
                    });
                    this.text = "";
                    this.bestScore = 0;
                    const ls = localStorage.getItem("fallenChars");
                    if (ls !== null) {
                        this.bestScore = JSON.parse(ls).bestScore;
                    }
                }
                create() {
                    this.chars = new textGenerator_1.TextGenerator(this);
                    this.textD = this.add.text(400, 250, "", {
                        font: "bold 15px Arial",
                        color: "#ff0000"
                    });
                    this.info = this.add.text(100, 50, "", {
                        font: "bold 15px Arial"
                    });
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
                        localStorage.setItem("fallenChars", JSON.stringify({
                            bestScore: this.chars.score()
                        }));
                    else if (JSON.parse(ls).bestScore < this.chars.score())
                        localStorage.setItem("fallenChars", JSON.stringify({
                            bestScore: this.chars.score()
                        }));
                }
            }
            exports.PlayState = PlayState;


            /***/
        }),

    /***/
    "./src/play/textGenerator.ts":
        /*!***********************************!*\
          !*** ./src/play/textGenerator.ts ***!
          \***********************************/
        /*! no static exports found */
        /***/
        (function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            const fText_1 = __webpack_require__( /*! ./fText */ "./src/play/fText.ts");
            __webpack_require__( /*! phaser */ "phaser");
            const LEFT = "QWERTASDFGZXCVB";
            const RIGHT = "YUIOPHJKLNM";
            const padding = 500;
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
                    for (let i = this.min; i < Phaser.Math.Between(this.min + 1, this.max); i++)
                        t += (LEFT[Phaser.Math.Between(0, LEFT.length - 1)] + RIGHT[Phaser.Math.Between(0, RIGHT.length - 1)]);
                    const char = new fText_1.fText(this.scene, x, y, t, this.charSpeed);
                    this.add(char);
                    this.newCharTime = time + this.speed;
                }
                checkInput(t) {
                    const tt = this.getFirst(true);
                    if (tt) {
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
            exports.TextGenerator = TextGenerator;


            /***/
        }),

    /***/
    "phaser":
        /*!*************************!*\
          !*** external "Phaser" ***!
          \*************************/
        /*! no static exports found */
        /***/
        (function (module, exports) {

            module.exports = Phaser;

            /***/
        })

    /******/
}).Game;