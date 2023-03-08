import { Assets, Container, Rectangle, Ticker } from "pixi.js";
import { getSpriteFromCache } from "../utils/util";
import { gameSetting, GAME_TOP_Y } from "../setting";
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
    this.initEvent();

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
    this.hitArea = new Rectangle(
      0,
      GAME_TOP_Y,
      gameSetting.WIDTH,
      gameSetting.HEIGHT - 160
    );
  }

  initBox() {
    this.box = new Box(0, 0, 50, 50);
    this.addChild(this.box);
  }

  initEvent() {
    this.on("pointermove", this.onMouseDragging, this);
    this.on("pointerdown", this.onMouseDragEnd, this);

    // this.test = new SatCollider();
  }

  onMouseDragging(e) {
    this.predictLine.draw(e.global);
  }

  onMouseDragEnd(e) {
    this.predictLine.draw(e.global);
    this.ball.onShootStart(this.predictLine.angleShoot);
    this.predictLine.clear();
  }

  loop(dt) {
    this.ball.update(dt);
    // this.test.satCollider(this.box, this.ball);
  }
}
