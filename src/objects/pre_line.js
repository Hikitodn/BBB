import { Graphics } from "pixi.js";
import { calcAngle, calcVector } from "../utils/util";

export class PredictLine extends Graphics {
  constructor() {
    super();
  }

  setPosition(x, y) {
    this.pointx = x;
    this.pointy = y;
  }

  draw(e) {
    let x = 10 * e.x - 9 * this.pointx;
    let y = 10 * e.y - 9 * this.pointy;

    let vector = calcVector(this.pointx, this.pointy, x, y);
    let angle = calcAngle(1, 0, vector.x, vector.y);
    this.angleShoot = angle;

    this.clear();
    this.lineStyle(1, 0xffffff, 0.5);
    this.moveTo(this.pointx, this.pointy);
    this.lineTo(x, y);
  }
}
