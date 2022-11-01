class Floor {
  constructor() {
    this.spriteX = 0
    this.spriteY = 610
    this.width = 224
    this.height = 112
    this.x = 0;
    this.y = 480 - this.height;

    this.movimentoDoChao = 1;
    this.repeteEm = this.width / 2;
    this.movimentacao;
  }

  draw() {
    this.movimentacao = this.x - this.movimentoDoChao;
    this.x = this.movimentacao % this.repeteEm;

    image(game.img,
      this.x, this.y,
      this.width, this.height,
      this.spriteX, this.spriteY,
      this.width, this.height);

    image(game.img,
      this.x + this.width, this.y,
      this.width, this.height,
      this.spriteX, this.spriteY,
      this.width, this.height);
  }
}