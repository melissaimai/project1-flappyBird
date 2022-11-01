class Flappy {
  constructor() {
    this.width = 33
    this.height = 24
    this.x = 10
    this.y = 50
    this.gravity = 0.25
    this.velocity = 0
    this.score = 0
    this.jumpSize = 4.6


    this.moviments;
    this.spriteX = 0;
    this.spriteY = 0;
    this.currentFrame = 0;
    this.sprites;
  }



  draw() {

    //   this.sprites = this.moviments[this.currentFrame];

    // colision() {
    //   if (colision(this.flappy, this.floor)) {
    //     console.log('Fez colisao');
    //     som_HIT.play();

    //     mudaParaTela(Telas.GAME_OVER);
    //     return;
    //   }
    // }

    // moviments = [
    //   { spriteX: 0, spriteY: 0, }, // asa pra cima
    //   { spriteX: 0, spriteY: 26, }, // asa no meio 
    //   { spriteX: 0, spriteY: 52, }, // asa pra baixo
    //   { spriteX: 0, spriteY: 26, }, // asa no meio 
    // ]



    // const intervaloDeFrames = 10;
    // const passouOIntervalo = frames % intervaloDeFrames === 0;
    // console.log('passouOIntervalo', passouOIntervalo)

    // if (passouOIntervalo) {
    //   const baseDoIncremento = 1;
    //   const incremento = baseDoIncremento + this.currentFrame;
    //   const baseRepeticao = this.moviments.length;
    //   this.currentFrame = incremento % baseRepeticao
    // }
    // console.log('[incremento]', incremento);
    // console.log('[baseRepeticao]',baseRepeticao);
    // console.log('[frame]', incremento % baseRepeticao);


    this.velocity += this.gravity
    this.y += this.velocity
    // If y is lower than the top left corner of bb8 we need to set its value to the starting value
    if (this.y >= 368 - this.height) {
      this.y = 368 - this.height
    }

    image(
      game.img,
      this.x, this.y, //canvasX, canvasY (posição no canva)
      this.width, this.height, //flappyBird.width, flappyBird.height in canvas
      this.spriteX, this.spriteY, // start cutting size in sprite (Sprite X, Sprite Y)
      this.width, this.height // size to cut in sprite (tamanho do recorte na sprite)
    );
  }

  jump() {
    this.velocity = - this.jumpSize
  }
}
