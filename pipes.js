class Pipes {
  constructor() {
    this.width = 52
    this.height = 400
    this.passou100Frames
    this.flappy = new Flappy()

    this.pares = [
      {
        x: 200,
        y: -100
      },
      {
        x: 100,
        y: 100
      }
    ];

    this.spaceBetweenPipes = 80
    this.Yrandom = -150

    //Sky pipe
    this.pipeSkyX = 220
    this.pipeSkyY = this.Yrandom

    //Floor pipe
    this.pipeFloorX = 220
    this.pipeFloorY = this.height + this.spaceBetweenPipes + this.Yrandom


  }

  draw() {
    if (frameCount % 100 === 0) {
      console.log('oeee')
    }

    this.pares.forEach((par) => {
      //Sky pipe
      image(game.pipeTopImg,
        par.x, this.pipeSkyY,
        this.width, this.height);

      //Floor pipe
      image(game.pipeBottomImg,
        par.x, this.pipeFloorY,
        this.width, this.height);
    })
  }
}
