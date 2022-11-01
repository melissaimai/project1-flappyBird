class Game {
  constructor() {
    this.img = new Image()
    this.flappy = new Flappy()
  }

  preload() {
    this.img = loadImage('./images/sprites.png');
  }

  draw() {
    fill('#70c5ce');
    rect(0, 0, 320, 480);

    //Background
    image(
      this.img,
      0, 480 - 204,
      275, 204,
      390, 0,
      275, 204
    );
    image(
      this.img,
      204, 480 - 204,
      275, 204,
      390, 0,
      275, 204
    );

    //Floor - second part: to complete the floor
    image(
      this.img,
      0, 480 - 112,
      224, 112,
      0, 610,
      224, 112
    );
    image(
      this.img,
      112, 480 - 112,
      224, 112,
      0, 610,
      224, 112
    );

    this.flappy.draw();

    //Flappy Bird image
    // image(
    //   this.img,
    //   10, 50, //canvasX, canvasY
    //   33, 24, //flappyBird.width, flappyBird.height in canvas
    //   0, 0, // start cutting size in sprite
    //   33, 24 // size to cut in sprite
    // );
  }
}