class MessageGetReady {
  constructor() {
    this.sX = 134
    this.sY = 0
    this.w = 174
    this.h = 152
    this.x = (320 / 2) - 174 / 2
    this.y = 50
  }

  draw() {
    image(
      game.img,
      this.x, this.y, //canvasX, canvasY (posição no canva)
      this.w, this.h, //flappyBird.width, flappyBird.height in canvas
      this.sX, this.sY, // start cutting size in sprite (Sprite X, Sprite Y)
      this.w, this.h // size to cut in sprite (tamanho do recorte na sprite)
    )
  }
}

// window.addEventListener('click', function () {
//   // if (telaAtiva.click) {
//   //   telaAtiva.click();
//   // }
// });
