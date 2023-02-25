import { Graphics } from "pixi.js";

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

    this.clear();
    this.lineStyle(1, 0xffffff, 0.5);
    this.moveTo(this.pointx, this.pointy);
    this.lineTo(x, y);
  }
}
