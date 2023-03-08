import { Graphics } from "pixi.js";
import { CircleCollider } from "../colliders/circle_collider";
import { ColliderEvent } from "../colliders/collider";
import { GameObject } from "./game_object";

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
    this.radius = r;
    this.isMoving = false;

    this.collider = new CircleCollider(x, y, r);
    this.collider.on(ColliderEvent.Colliding, this.wallCollision.bind(this));
  }

  setPosition(x, y) {
    super.setPosition(x, y);
    this.preX = this.x;
    this.preY = this.y;
  }

  update(dt) {
    super.update(dt);

    this.collider.x = this.x;
    this.collider.y = this.y;

    let edgeCollision = this.collider.wallCollider();
    if (edgeCollision) this.wallCollision(edgeCollision, true);
  }

  wallCollision(value, isWall = false) {
    if (isWall === true) {
      console.log(value);
      if (value.indexOf("left") !== -1 && this.vx < 0) {
        this.vx = -this.vx;
      }
      if (value.indexOf("right") !== -1 && this.vx > 0) {
        this.vx = -this.vx;
      }
      if (value.indexOf("top") !== -1 && this.vy < 0) {
        this.vy = -this.vy;
      }
      if (value.indexOf("bottom") !== -1) {
        if (this.isMoving) {
          this.vx = 0;
          this.vy = 0;
        }
      }
    }
  }
}
