import { EventEmitter } from "@pixi/utils";

export class Collider extends EventEmitter {
  constructor() {
    super();
  }

  checkCollider(objectToCheck) {
    throw new Error("No object to check collide with");
  }
}
