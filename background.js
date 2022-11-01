class Background {
  constructor() {
    this.spriteX = 390
    this.spriteY = 0
    this.width = 275
    this.height = 204
    this.x = 0;
    this.y = 480 - 204;
  }

  draw() {

    fill('#70c5ce');
    rect(0, 0, 320, 480);

    image(game.img,
      this.x, this.y,
      this.width, this.height,
      this.spriteX, this.spriteY,
      this.width, this.height);

    image(game.img,
      this.height, this.y,
      this.width, this.height,
      this.spriteX, this.spriteY,
      this.width, this.height);
  }
}