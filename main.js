const game = new Game()

// Load game assets
function preload() {
  game.preload()

}

function setup() {
  createCanvas(320, 480);
  // frameRate(25)

}

function draw() {
  game.draw()
  game.pipesUpdate()
}

function keyPressed() {
  if (keyCode === 32) {
    game.flappy.jump()
  }
}
