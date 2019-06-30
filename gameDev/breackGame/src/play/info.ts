import { PlayState } from "./play";
import "phaser";

export function createInfo(this: PlayState) {
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
