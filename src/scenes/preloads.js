export class preloads extends Phaser.Scene {
  constructor() {
    super("preloads");
  }

  preload() {
    this.load.image("fondoMenu","public/assets/images/fondomenu.jpg");
    this.load.image("arquero", "public/assets/images/arquero1.png");
    this.load.image("caballero", "public/assets/images/caballero1.png");
    this.load.image("piromano","public/assets/images/piromano7.png");
    this.load.image("mapa","public/assets/images/pantallamapa.png");
    this.load.image("boton","public/assets/images/button1.png");
  }

  create() {
    this.scene.start("mainmenu");
  }
}
