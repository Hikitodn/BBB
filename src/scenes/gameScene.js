import { Assets, Container, Ticker } from "pixi.js";
import { getSpriteFromCache } from "../utils/util";
import { gameSetting } from "../setting";
import { GameOverScene } from "./gameOverScene";
import { Box } from "../objects/box";
import { Ball } from "../objects/ball";
import { BallManager } from "../managers/ball_manager";

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

    this.gameOverScene = new GameOverScene();
    this.gameOverScene.visible = false;

    this.box = new Box();
    this.box.y = 80;
    this.addChild(this.box);

    this.ball = new BallManager();
    this.addChild(this.ball);

    Ticker.shared.add(this.loop.bind(this));
  }

  loop() {}
}
