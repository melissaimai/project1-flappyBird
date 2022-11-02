class Game {
  constructor() {
    this.img = new Image()
    // this.messageGetReady = new MessageGetReady()
    this.background = new Background()
    this.floor = new Floor()
    this.flappy = new Flappy()
    this.pipe = new Pipes()
    this.pipeBottomImg = new Image()
    this.pipeTopImg = new Image()
    this.pipes = [];
    // this.readyMessage
    // this.dieSound
    // this.hitSound
    // this.wingSound
    // this.smooshSound
    // this.gameRunning
  }

  preload() {
    this.img = loadImage('./images/sprites.png');
    this.pipeBottomImg = loadImage('./images/pipe-bottom.png')
    this.pipeTopImg = loadImage('./images/pipe-top.png')
    // this.readyMessage = loadImage('./images/readymsg.png')
    // this.dieSound = loadSound('./audio/die.mp3')
    // this.hitSound = loadSound('./audio/hit.mp3')
    // this.wingSound = loadSound('./audio/wing.mp3')
    // this.smooshSound = loadSound('./audio/smoosh.mp3')

  }

  draw() {

    this.background.draw();
    this.pipe.draw();
    // this.pipe.forEach(pipe => pipe.show())
    this.floor.draw();
    this.flappy.draw();
  }

  pipesUpdate() {
    if (frameCount % 100 === 0) {
      console.log("OI")
      this.pipes.push(this.pipe);
    }
    this.pipes.forEach((pipe, idx) => {
      pipe.update();
      if (pipe.isOff()) {
        this.pipes.splice(idx, 1);
      }
    }
    )
  }
}