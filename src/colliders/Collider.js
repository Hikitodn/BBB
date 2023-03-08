import { EventEmitter } from "@pixi/utils";
export const ColliderEvent = Object.freeze({
  Colliding: "collider:colliding",
  NeedRemove: "collider:needremove",
});

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
