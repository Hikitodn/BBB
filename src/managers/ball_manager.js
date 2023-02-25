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

    // this.ball.on("pointerdown", this.onBallDragStart.bind(this));
  }

  onShootStart() {}

  onShooting() {}

  onShootEnd() {}
}
