import { Container } from "pixi.js";
import { Ball } from "../objects/ball";

export class BallManager extends Container {
  constructor() {
    super();

    this.initListBall();
  }

  initListBall() {
    this.listBalls = [];

    this.ball = new Ball();
    this.addChild(this.ball);
  }

  onShootStart(angle) {
    this.ball.isMoving = true;
    this.ball.vx = Math.cos(angle) * 10;
    this.ball.vy = -Math.sin(angle) * 10;
    console.log(this.ball.vx);
    this.onShooting();
    // console.log(angle);
  }

  onShooting() {
    if (this.ball.isMoving) {
      this.ball.x += this.ball.vx;
      this.ball.y += this.ball.vy;
    }
  }

  onShootEnd() {}

  update(dt) {
    this.onShooting();
  }
}
