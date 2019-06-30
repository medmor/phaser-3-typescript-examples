/******/
const Snake = (function (modules) { // webpackBootstrap
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
    return __webpack_require__(__webpack_require__.s = "./snakeGame/src/game.ts");
    /******/
})
/************************************************************************/
/******/
({

    /***/
    "./snakeGame/src/game.ts":
        /*!*******************************!*\
          !*** ./snakeGame/src/game.ts ***!
          \*******************************/
        /*! no static exports found */
        /***/
        (function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            __webpack_require__( /*! phaser */ "phaser");
            const gameConfig_1 = __webpack_require__( /*! ./gameConfig */ "./snakeGame/src/gameConfig.ts");
            const play_1 = __webpack_require__( /*! ./play/play */ "./snakeGame/src/play/play.ts");
            const menu_1 = __webpack_require__( /*! ./menu/menu */ "./snakeGame/src/menu/menu.ts");
            const load_1 = __webpack_require__( /*! ./load/load */ "./snakeGame/src/load/load.ts");
            const init_1 = __webpack_require__( /*! ./init/init */ "./snakeGame/src/init/init.ts");
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
    "./snakeGame/src/gameConfig.ts":
        /*!*************************************!*\
          !*** ./snakeGame/src/gameConfig.ts ***!
          \*************************************/
        /*! no static exports found */
        /***/
        (function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            __webpack_require__( /*! phaser */ "phaser");
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


            /***/
        }),

    /***/
    "./snakeGame/src/init/init.ts":
        /*!************************************!*\
          !*** ./snakeGame/src/init/init.ts ***!
          \************************************/
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
    "./snakeGame/src/load/load.ts":
        /*!************************************!*\
          !*** ./snakeGame/src/load/load.ts ***!
          \************************************/
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
                    const g = this.add.graphics();
                    g.fillStyle(0x00);
                    g.fillRect(0, 0, 16, 16);
                    g.generateTexture("head", 16, 16);
                    g.fillStyle(0x00ff00);
                    g.fillRect(0, 0, 16, 16);
                    g.generateTexture("food", 16, 16);
                    this.load.audio("bounce", "./snakeGame/assets/audio/bounce.mp3");
                    this.load.audio("foodHit", "./snakeGame/assets/audio/brickHit.mp3");
                    this.load.audio("lose", "./snakeGame/assets/audio/lose.mp3");
                }
                create() {
                    this.scene.start("menu");
                }
            }
            exports.LoadState = LoadState;


            /***/
        }),

    /***/
    "./snakeGame/src/menu/menu.ts":
        /*!************************************!*\
          !*** ./snakeGame/src/menu/menu.ts ***!
          \************************************/
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


            /***/
        }),

    /***/
    "./snakeGame/src/play/food.ts":
        /*!************************************!*\
          !*** ./snakeGame/src/play/food.ts ***!
          \************************************/
        /*! no static exports found */
        /***/
        (function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            const gameConfig_1 = __webpack_require__( /*! ./../gameConfig */ "./snakeGame/src/gameConfig.ts");
            __webpack_require__( /*! phaser */ "phaser");
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


            /***/
        }),

    /***/
    "./snakeGame/src/play/input.ts":
        /*!*************************************!*\
          !*** ./snakeGame/src/play/input.ts ***!
          \*************************************/
        /*! no static exports found */
        /***/
        (function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

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


            /***/
        }),

    /***/
    "./snakeGame/src/play/play.ts":
        /*!************************************!*\
          !*** ./snakeGame/src/play/play.ts ***!
          \************************************/
        /*! no static exports found */
        /***/
        (function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            const gameConfig_1 = __webpack_require__( /*! ./../gameConfig */ "./snakeGame/src/gameConfig.ts");
            __webpack_require__( /*! phaser */ "phaser");
            const snake_1 = __webpack_require__( /*! ./snake */ "./snakeGame/src/play/snake.ts");
            const food_1 = __webpack_require__( /*! ./food */ "./snakeGame/src/play/food.ts");
            const input_1 = __webpack_require__( /*! ./input */ "./snakeGame/src/play/input.ts");
            class PlayState extends Phaser.Scene {
                constructor() {
                    super({
                        key: "play"
                    });
                }
                init() {}
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
                                validLocations.push({
                                    x: x,
                                    y: y
                                });
                            }
                        }
                    }
                    if (validLocations.length > 0) {
                        var pos = Phaser.Math.RND.pick(validLocations);
                        this.food.setPosition(pos.x * gameConfig_1.gridCellW, pos.y * gameConfig_1.gridCellW);
                        return true;
                    } else {
                        return false;
                    }
                }
            }
            exports.PlayState = PlayState;


            /***/
        }),

    /***/
    "./snakeGame/src/play/snake.ts":
        /*!*************************************!*\
          !*** ./snakeGame/src/play/snake.ts ***!
          \*************************************/
        /*! no static exports found */
        /***/
        (function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            const gameConfig_1 = __webpack_require__( /*! ./../gameConfig */ "./snakeGame/src/gameConfig.ts");
            const food_1 = __webpack_require__( /*! ./food */ "./snakeGame/src/play/food.ts");
            __webpack_require__( /*! phaser */ "phaser");
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
                    } else {
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
                    var hitBody = Phaser.Actions.GetFirst(this.getChildren(), {
                        x: this.head.x,
                        y: this.head.y
                    }, 1);
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
                    } else {
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