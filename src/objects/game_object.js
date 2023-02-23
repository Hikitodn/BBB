import { Container } from "pixi.js";

export class GameObject extends Container {
  constructor() {
    super();
    this.vx = 0;
    this.vy = 0;
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  setVelocity(vx, vy) {
    this.vx = vx;
    this.vy = vy;
  }

  update(dt) {
    this.x += this.vx;
    this.y += this.vy;
  }
}
