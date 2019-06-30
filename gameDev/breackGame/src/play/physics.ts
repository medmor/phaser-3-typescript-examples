import { levels } from "./../gameConfig";
import { PlayState } from "./play";

export function ballPhysics(this: PlayState) {
  this.physics.add.existing(this.ball);
  if (this.ball.body instanceof Phaser.Physics.Arcade.Body) {
    const level = levels[this.game.initialData.level];
    this.ball.body.velocity.setTo(level.v0, -level.v0);
    this.ball.body.bounce.setTo(1);
    this.ball.body.setCollideWorldBounds(true);
    this.ball.body.onWorldBounds = true;
  }
}

export function paddlePhysics(this: PlayState) {
  this.physics.add.existing(this.paddle);
  if (this.paddle.body instanceof Phaser.Physics.Arcade.Body) {
    this.paddle.body.immovable = true;
  }
  this.physics.add.collider(this.ball, this.paddle, () => {
    this.sound.play("bounce");
  });
}

export function movePaddle(this: PlayState) {
  if (this.paddleMoveLeft && this.paddle.x > 75) {
    this.paddle.x -= 10;
  }
  if (this.paddleMoveRight && this.paddle.x < Number(this.game.config.width) - 75) {
    this.paddle.x += 10;
  }
}

export function brickPhysics(this: PlayState) {
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

export function worldPhysics(this: PlayState) {
  this.physics.world.on(
    "worldbounds",
    (body: Phaser.GameObjects.Rectangle, _: any, b: boolean) => {
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
              const level = levels[this.game.initialData.level];
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
