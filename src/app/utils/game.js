import Paddle from './paddle';
import InputHandler from './input';
import Ball from './ball';
import Brick from './brick';

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.ball = new Ball(this);
    this.paddle = new Paddle(this);

    let bricks = [];
    for (let index = 0; index < 10; index++) {
        bricks.push(new Brick(this, { x: index * 52, y: 30 }))
    }

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
  }

  draw(ctx) {
    this.gameObjects.forEach((object) => {
      object.draw(ctx);
    });
  }
}
