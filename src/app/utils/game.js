import Paddle from './paddle';
import InputHandler from './input';
import Ball from './ball';

import { buildLevel, level1 } from './levels';

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.ball = new Ball(this);
    this.paddle = new Paddle(this);

    const bricks = buildLevel(this, level1);

    this.gameObjects = [
      this.ball,
      this.paddle,
      ...bricks,
    ];

    new InputHandler(this.paddle);
  }

  update(deltaTime) {
    this.gameObjects.forEach((object) => {
      object.update(deltaTime);
    });

    this.gameObjects = this.gameObjects.filter((object) => !object.markedForDeletion);
  }

  draw(ctx) {
    this.gameObjects.forEach((object) => {
      object.draw(ctx);
    });
  }
}
