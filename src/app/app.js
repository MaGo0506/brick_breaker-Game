import Paddle from './utils/paddle';

export const app = () => {
  const canvas = document.getElementById('gameScreen');

  const ctx = canvas.getContext('2d');

  const GAME_WIDTH = 800;
  const GAME_HEIGHT = 500;

  const paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

  let lastTime = 0;

  function gameLoop(timestamp) {
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, 800, 500);
    paddle.update(deltaTime);
    paddle.draw(ctx);

    requestAnimationFrame(gameLoop);
  }

  gameLoop();
};
