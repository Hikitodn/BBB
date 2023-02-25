import { Assets, Container, Graphics, Rectangle, Ticker } from "pixi.js";
import { getSpriteFromCache } from "../utils/util";
import { gameSetting } from "../setting";
import { GameOverScene } from "./gameOverScene";
import { Box } from "../objects/box";
import { BallManager } from "../managers/ball_manager";
import { PredictLine } from "../objects/pre_line";

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

    this.initBall();
    this.initPredictLine();
    this.initBox();

    Ticker.shared.add(this.loop.bind(this));
  }

  initBall() {
    this.ball = new BallManager();
    this.addChild(this.ball);
  }

  initPredictLine() {
    this.predictLine = new PredictLine();
    this.addChild(this.predictLine);
    this.predictLine.setPosition(
      gameSetting.WIDTH / 2,
      gameSetting.HEIGHT - 80
    );
    this.interactive = true;
    this.hitArea = new Rectangle(0, 70, gameSetting.WIDTH, gameSetting.HEIGHT);
    this.on("pointermove", (e) => {
      this.predictLine.draw(e.global);
    });
  }

  initBox() {
    this.box = new Box();
    this.box.y = 80;
    this.addChild(this.box);
  }

  loop() {}
}
