import { Graphics } from "pixi.js";
import { gameSetting } from "../setting";
import { GameObject } from "./game_object";

export class Ball extends GameObject {
  constructor() {
    super();

    // draw ball
    this.ball = new Graphics();
    this.ball.beginFill(0xffffff);
    this.ball.drawCircle(0, 0, 5);
    this.ball.endFill;

    this.ball.x = gameSetting.WIDTH / 2;
    this.ball.y = gameSetting.HEIGHT - 80;
    this.ball.interactive = true;
    this.ball.cursor = "pointer";

    this.addChild(this.ball);
  }
}
