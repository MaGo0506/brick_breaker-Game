export default class Ball {

    constructor() {
        this.image = document.getElementById('img_ball');
        this.width = 16;
        this.height = 16;

        // this.position {

        // }
    }

    draw(ctx) {
        ctx.drawImage(this.image, 10, 10, this.width, this.height)
    }

    update(deltaTime) {

    }
}