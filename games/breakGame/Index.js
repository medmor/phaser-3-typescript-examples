/******/
const BreakGame = (function(modules) {
  var installedModules = {};
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = (installedModules[moduleId] = {
      i: moduleId,

      l: false,

      exports: {}
    });
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    module.l = true;
    return module.exports;
  }
  __webpack_require__.m = modules;

  __webpack_require__.c = installedModules;

  __webpack_require__.d = function(exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
    }
  };
  __webpack_require__.r = function(exports) {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      });
    }
    /******/
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  };
  __webpack_require__.t = function(value, mode) {
    if (mode & 1) value = __webpack_require__(value);
    if (mode & 8) return value;
    if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value
    });
    if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    return ns;
  };
  __webpack_require__.n = function(module) {
    var getter =
      module && module.__esModule
        ? function getDefault() {
            return module["default"];
          }
        : function getModuleExports() {
            return module;
          };
    __webpack_require__.d(getter, "a", getter);
    return getter;
  };
  __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  __webpack_require__.p = "";

  return __webpack_require__((__webpack_require__.s = "./src/game.ts"));
})({
  /***/
  "./src/game.ts":
    /*!*********************!*\
          !*** ./src/game.ts ***!
          \*********************/
    /*! no static exports found */
    /***/
    function(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      __webpack_require__(/*! phaser */ "phaser");
      const gameConfig_1 = __webpack_require__(/*! ./gameConfig */ "./src/gameConfig.ts");
      const play_1 = __webpack_require__(/*! ./play/play */ "./src/play/play.ts");
      const menu_1 = __webpack_require__(/*! ./menu/menu */ "./src/menu/menu.ts");
      const load_1 = __webpack_require__(/*! ./load/load */ "./src/load/load.ts");
      const init_1 = __webpack_require__(/*! ./init/init */ "./src/init/init.ts");
      class BreakGame extends Phaser.Game {
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
      exports.BreakGame = BreakGame;
      // window.onload = () => {
      //     const game = new Game();
      // };

      /***/
    },

  /***/
  "./src/gameConfig.ts":
    /*!***************************!*\
          !*** ./src/gameConfig.ts ***!
          \***************************/
    /*! no static exports found */
    /***/
    function(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      __webpack_require__(/*! phaser */ "phaser");
      exports.config = {
        width: 800,
        height: 600,
        type: Phaser.AUTO,
        parent: "gameDiv",
        physics: {
          default: "arcade"
        }
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

      /***/
    },

  /***/
  "./src/init/init.ts":
    /*!**************************!*\
          !*** ./src/init/init.ts ***!
          \**************************/
    /*! no static exports found */
    /***/
    function(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      __webpack_require__(/*! phaser */ "phaser");
      class InitState extends Phaser.Scene {
        constructor() {
          super({
            key: "init"
          });
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

      /***/
    },

  /***/
  "./src/load/load.ts":
    /*!**************************!*\
          !*** ./src/load/load.ts ***!
          \**************************/
    /*! no static exports found */
    /***/
    function(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      __webpack_require__(/*! phaser */ "phaser");
      class LoadState extends Phaser.Scene {
        constructor() {
          super({
            key: "load"
          });
        }
        preload() {
          this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, "Loading ... ");
          this.load.audio("bounce", "./breakGame/assets/audio/bounce.mp3");
          this.load.audio("brickHit", "./breakGame/assets/audio/brickHit.mp3");
          this.load.audio("win", "./breakGame/assets/audio/win.mp3");
          this.load.audio("lose", "./breakGame/assets/audio/lose.mp3");
        }
        create() {
          this.scene.start("menu");
        }
      }
      exports.LoadState = LoadState;

      /***/
    },

  /***/
  "./src/menu/menu.ts":
    /*!**************************!*\
          !*** ./src/menu/menu.ts ***!
          \**************************/
    /*! no static exports found */
    /***/
    function(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
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
        }
      }
      exports.MenuState = MenuState;

      /***/
    },

  /***/
  "./src/play/info.ts":
    /*!**************************!*\
          !*** ./src/play/info.ts ***!
          \**************************/
    /*! no static exports found */
    /***/
    function(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      __webpack_require__(/*! phaser */ "phaser");

      function createInfo() {
        const style = {
          font: "bolder 20px ",
          color: "#99a0aa"
        };
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

      /***/
    },

  /***/
  "./src/play/inputs.ts":
    /*!****************************!*\
          !*** ./src/play/inputs.ts ***!
          \****************************/
    /*! no static exports found */
    /***/
    function(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

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

      /***/
    },

  /***/
  "./src/play/objects.ts":
    /*!*****************************!*\
          !*** ./src/play/objects.ts ***!
          \*****************************/
    /*! no static exports found */
    /***/
    function(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
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
        let offX = 50,
          offY = 60,
          margin = 10,
          rows = level.rows,
          cols = level.cols,
          gridWidth = Number(this.game.config.width) - 2 * offX,
          brickWidth = (gridWidth - margin * (cols - 1)) / cols,
          brickHeight = 20;
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

      /***/
    },

  /***/
  "./src/play/physics.ts":
    /*!*****************************!*\
          !*** ./src/play/physics.ts ***!
          \*****************************/
    /*! no static exports found */
    /***/
    function(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
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
                  if (this.game.initialData.level < 6) this.game.initialData.level += 1;
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
        this.physics.world.on(
          "worldbounds",
          (body, _, b) => {
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
            } else {
              this.sound.play("bounce");
            }
          },
          this
        );
      }
      exports.worldPhysics = worldPhysics;

      /***/
    },

  /***/
  "./src/play/play.ts":
    /*!**************************!*\
          !*** ./src/play/play.ts ***!
          \**************************/
    /*! no static exports found */
    /***/
    function(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      __webpack_require__(/*! phaser */ "phaser");
      const inputs_1 = __webpack_require__(/*! ./inputs */ "./src/play/inputs.ts");
      const physics_1 = __webpack_require__(/*! ./physics */ "./src/play/physics.ts");
      const objects_1 = __webpack_require__(/*! ./objects */ "./src/play/objects.ts");
      const info_1 = __webpack_require__(/*! ./info */ "./src/play/info.ts");
      class PlayState extends Phaser.Scene {
        constructor() {
          super({
            key: "play"
          });
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

      /***/
    },

  /***/
  phaser:
    /*!*************************!*\
          !*** external "Phaser" ***!
          \*************************/
    /*! no static exports found */
    /***/
    function(module, exports) {
      module.exports = Phaser;

      /***/
    }

  /******/
}).BreakGame;
