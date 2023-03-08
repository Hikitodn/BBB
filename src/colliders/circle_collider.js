import { CIRCLE_COLLIDER, gameSetting, GAME_TOP_Y } from "../setting";
import { Collider } from "./collider";

export class CircleCollider extends Collider {
  constructor(x, y, radius) {
    super(CIRCLE_COLLIDER, x, y);
    this.radius = radius;
  }

  circleCollider() {}

  wallCollider() {
    let edgeCollision = [];
    // check collision with left board
    if (this.x - this.radius - 4 <= 0) {
      edgeCollision.push("left");
    }
    // check collision with right board
    else if (this.x + this.radius + 4 >= gameSetting.WIDTH) {
      edgeCollision.push("right");
    }

    // check collision with top board
    if (this.y - this.radius - 4 <= GAME_TOP_Y) {
      edgeCollision.push("top");
    }

    // check collision with bottom board
    else if (this.y + this.radius + 4 > gameSetting.HEIGHT) {
      edgeCollision.push("bottom");
    }

    if (edgeCollision.length === 0) return false;
    else return edgeCollision;
  }
}
