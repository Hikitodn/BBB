import { Graphics } from "pixi.js";
import { GameObject } from "./game_object";
import { blue, green, red, yellow } from "../utils/colors";
import { randomInt } from "../utils/util";

export class Box extends GameObject {
  constructor() {
    super();

    this.listColors = [red, green, blue, yellow];

    this.box = new Graphics();
    this.box.beginFill(this.listColors[randomInt(0, 3)]);
    this.box.drawRect(0, 0, 50, 50);
    this.box.endFill;

    this.addChild(this.box);
  }
}
