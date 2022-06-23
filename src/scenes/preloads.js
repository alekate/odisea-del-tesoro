export class preloads extends Phaser.Scene {
  constructor() {
    super("preloads");
  }

  preload() {
    this.load.image("fondoMenu","public/assets/images/fondomenu.jpg");
    this.load.image("arquero", "public/assets/images/arqueroIdle.png");
    this.load.image("caballero", "public/assets/images/caballeroIdle.png");
    this.load.image("piromano","public/assets/images/piromanoIdle.png");
    this.load.image("mapa","public/assets/images/pantallamapa.png");
    this.load.image("boton","public/assets/images/button1.png");
    this.load.image("mago","public/assets/images/mago.png");
    this.load.image("esqueletos","public/assets/images/esqueleto.png");
    this.load.image("polilla","public/assets/images/polilla.png");
    this.load.image("logo","public/assets/images/logo.png");
  }

  create() {
    this.scene.start("mainmenu");
  }
}
