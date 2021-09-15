import Paddle from './utils/paddle';
import InputHandler from './utils/input';
import Ball from './utils/ball';

export const app = () => {
  const canvas = document.getElementById('gameScreen');

  const ctx = canvas.getContext('2d');

  const GAME_WIDTH = 800;
  const GAME_HEIGHT = 500;

  const ball = new Ball();

  const paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

  let lastTime = 0;

  new InputHandler(paddle);

  function gameLoop(timestamp) {
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    paddle.update(deltaTime);
    paddle.draw(ctx);

    ball.draw(ctx);

    requestAnimationFrame(gameLoop);
  }

  gameLoop();
};
