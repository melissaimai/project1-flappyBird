class Flappy {
  constructor() {
    this.width = 33
    this.height = 24
    this.x = 10
    this.y = 50
    this.gravity = 0.25
    this.velocity = 0
    this.score = 0
  }

  draw() {
    this.velocity += this.gravity
    this.y += this.velocity


    // If y is lower than the top left corner of bb8 we need to set its value to the starting value
    if (this.y >= 480 - this.height) {
      this.y = 480 - this.height
    }
    image(
      game.img,
      this.x, this.y, //canvasX, canvasY (posição no canva)
      this.width, this.height, //flappyBird.width, flappyBird.height in canvas
      0, 0, // start cutting size in sprite (Sprite X, Sprite Y)
      this.width, this.height // size to cut in sprite (tamanho do recorte na sprite)
    );
  }


  jump() {
    this.velocity = - 5
  }
}