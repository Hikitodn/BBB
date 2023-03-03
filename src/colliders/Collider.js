import { EventEmitter } from "@pixi/utils";

export class Collider extends EventEmitter {
  constructor(type, x, y) {
    super();
    this.type = type;
    this.x = x;
    this.y = y;
  }

  checkCollider(objectToCheck) {
    throw new Error("No object to check collide with");
  }
}
