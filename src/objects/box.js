import { Graphics } from "pixi.js";
import { GameObject } from "./game_object";
import { blue, green, red, yellow } from "../utils/colors";
import {
  calcDistance,
  calcNormal,
  calcUnit,
  calcVector,
  randomInt,
} from "../utils/util";

export class Box extends GameObject {
  constructor(x, y, w, h) {
    super();

    // random colors
    this.listColors = [red, green, blue, yellow];

    this.box = new Graphics();
    this.box.beginFill(this.listColors[randomInt(0, 3)]);
    this.box.drawRect(x, y, w, h);
    this.box.endFill();

    // box vertices
    this.vertex = [];
    this.vertex[0] = [x, y];
    this.vertex[1] = [x + w, y];
    this.vertex[2] = [x + w, y + h];
    this.vertex[3] = [x, y + h];

    // normals
    this.edge = calcVector(
      this.vertex[0][0],
      this.vertex[0][1],
      this.vertex[1][0],
      this.vertex[1][1]
    );
    this.length = calcDistance(this.edge.x, this.edge.y);
    this.dir = calcUnit(this.edge, this.length);
    this.normal = calcNormal(this.dir);

    this.addChild(this.box);
  }
}
