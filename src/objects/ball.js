import { Graphics } from "pixi.js";
import { gameSetting } from "../setting";
import { GameObject } from "./game_object";

export class Ball extends GameObject {
  constructor() {
    super();

    this.speed = 10;
    this.isMoving = false;

    // velocity
    this.vx = 0;
    this.vy = 0;

    // draw ball
    this.ball = new Graphics();
    this.ball.beginFill(0xffffff);
    this.ball.drawCircle(0, 0, 5);
    this.ball.endFill;
    this.addChild(this.ball);

    this.x = gameSetting.WIDTH / 2;
    this.y = gameSetting.HEIGHT - 80;
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
