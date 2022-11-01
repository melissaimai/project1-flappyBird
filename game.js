class Game {
  constructor() {
    this.img = new Image()
    // this.messageGetReady = new MessageGetReady()
    this.background = new Background()
    this.floor = new Floor()
    this.flappy = new Flappy()
    this.pipes = new Pipes()
    this.pipeBottomImg = new Image()
    this.pipeTopImg = new Image()
    this.readyMessage
    this.dieSound
    this.hitSound
    this.wingSound
    this.smooshSound
    this.gameRunning
    this.lives = 5;
    this.points = 0;


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
    this.pipes.draw();
    this.floor.draw();
    this.flappy.draw();

    // new Image(this.pipeBottomImg, 150, 300)
    // if (this.gameRunning) {
    //   play()
    // } else {
    //   if (!this.gameRunning) {
    //     new Image(this.readyMessage, 320 / 2, 480 * (1 / 3))
    //     if (mouseIsPressed) {
    //       this.gameRunning = true;
    //       this.lives;
    //       this.points;
    //     }
    //   } else {
    //     play();
    //   }


    // Image(this.pipeTopImg,)

    // this.messageGetReady.draw();
    // this.pipes.draw();

  }
}

  // play() { // 1/25th of a second
  //   // Pipes
  //   let pipe = [500, 100];
  //   let pipe_gap = 100;
  //   let pipe_speed = 10;
  //   pipe[0] -= pipe_speed;
  //   if (pipe[0] < -this.pipeBottomImg.width) {
  //     if (pipe[0] < -this.pipeTopImg.width) {
  //       pipe[0] = 320;
  //       pipe[1] = 50 + random(480 - 200);
  //       pipe[1] = 50 + random(480 - 200);
  //       pipe_gap = 100 + random(100);
  //       points += 1;
  //     }
  //   }
  // }
