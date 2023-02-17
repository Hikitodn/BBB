import { Assets, Container, Ticker } from "pixi.js";
import { getSpriteFromCache } from "../utils/util";
import { gameSetting } from "../setting";

export class GameScene extends Container {
  constructor() {
    super();
    Assets.loadBundle("game-screen").then(this.setup.bind(this));
    this.gameContainer = new Container();
    this.addChild(this.gameContainer);
    this.setup();
  }

  setup() {
    // setup background
    const background = getSpriteFromCache("background");
    background.height = gameSetting.HEIGHT;
    this.gameContainer.addChild(background);

    Ticker.shared.add(this.loop.bind(this));
  }

  loop() {}
}
