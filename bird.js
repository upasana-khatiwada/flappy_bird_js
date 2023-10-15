class Bird {
    constructor() {
        this.position = {
            x: canvas.width / 2,
            y: 0,
        }
        this.velocity = {
            x: 0,
            y: 2,
        }
        this.size = {
            width: 50,
            height: 50,
        };
        this.isDead = false;

        this.acceleration = 0.2;
        this.img = new Image();
        this.img.src = "./bird.png";


    }
    draw() { }

    move() { }
    update() {
        this.draw();
        this.move();
    }


}