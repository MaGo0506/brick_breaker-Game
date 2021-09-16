export default class InputHandler {
  constructor(paddle, game) {
    document.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case 37:
          paddle.moveLeft();
          break;

        case 39:
          paddle.moveRight();
          break;

        case 27:
          game.togglePause();
          break;

          // skip default
      }
    });

    document.addEventListener('keyup', (e) => {
      switch (e.keyCode) {
        case 37:
          if (paddle.speed < 0) {
            paddle.stop();
          }

          break;

        case 39:
          if (paddle.speed > 0) {
            paddle.stop();
          }
          break;

          // skip default
      }
    });
  }
}
