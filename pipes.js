class Pipes {
  constructor() {
    this.velocity = 2.5;
    this.gap = 200;
    this.width = 52
    this.height = 200

    this.x = 400;
    this.y;

    // createCanvas(320, 480);

    this.topPosition
  }

  y = Math.floor(Math.random(100, 480));
  topPosition = this.y - this.height - this.gap


  draw() {
    image(game.pipeTopImg, this.x, this.y, this.width, this.height);
    image(game.pipeBottomImg, this.x, this.topPosition, this.width, this.height);
  }

  update() {
    this.x = this.x - this.velocity;
  };
  isOff() {
    return this.x < -this.width;
  };
}