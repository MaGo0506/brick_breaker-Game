import Game from './utils/game';

export const app = () => {
  const canvas = document.getElementById('gameScreen');

  const ctx = canvas.getContext('2d');

  const GAME_WIDTH = 800;
  const GAME_HEIGHT = 500;

  let lastTime = 0;

  const game = new Game(GAME_WIDTH, GAME_HEIGHT);

  function gameLoop(timestamp) {
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    game.update(deltaTime);
    game.draw(ctx);

    requestAnimationFrame(gameLoop);
  }

  requestAnimationFrame(gameLoop);
};
