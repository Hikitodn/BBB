import { Graphics } from "pixi.js";
import { GameObject } from "./game_object";
import { checkLineCircle } from "../utils/util";

export class Ball extends GameObject {
  constructor(x, y, r) {
    super();

    // draw ball
    this.ball = new Graphics();
    this.ball.beginFill(0xffffff);
    this.ball.drawCircle(x, y, r);
    this.ball.endFill;
    this.addChild(this.ball);

    // ball properties
    this.speed = 5;
    this.isMoving = false;
  }

  setPosition(x, y) {
    super.setPosition(x, y);
    this.preX = this.x;
    this.preY = this.y;
  }

  update(dt) {
    super.update(dt);
  }
}
