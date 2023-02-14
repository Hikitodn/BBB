import { Application } from "pixi.js";
import { gameSetting } from "./setting";
// import manifest from "../assets/manifest.json";

export default class Game {
  constructor() {
    this.app = new Application({
      view: document.getElementById("main"),
      resolution: window.devicePixelRatio | 1,
      antialias: true,
      backgroundColor: 0x23232f,
      width: gameSetting.WIDTH,
      height: gameSetting.HEIGHT,
    });
    // Assets.init({ manifest: manifest });
  }
}
