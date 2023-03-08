import { Container } from "pixi.js";
import { Ball } from "../objects/ball";
import { gameSetting, GAME_BOTTOM } from "../setting";

export class BallManager extends Container {
  constructor() {
    super();

    this.initListBall();
  }

  initListBall() {
    this.listBalls = [];

    this.ball = new Ball(0, 0, 5);
    this.ball.setPosition(gameSetting.WIDTH / 2, gameSetting.HEIGHT - 80);
    this.addChild(this.ball);
  }

  onShootStart(angle) {
    this.ball.isMoving = true;
    let vx = Math.cos(angle) * this.ball.speed;
    let vy = -Math.sin(angle) * this.ball.speed;
    this.ball.setVelocity(vx, vy);
    this.onShooting();
    // console.log(angle);
  }

  onShooting() {
    // if (this.ball.isMoving) {
    //   this.ball.x += this.ball.vx;
    //   this.ball.y += this.ball.vy;
    // }
  }

  onShootEnd() {}

  update(dt) {
    this.ball.update(dt);
    this.onShooting();
  }
}
