import Button from "../js/button.js";

export class mainmenu extends Phaser.Scene {
  constructor() {
    super("mainmenu");
  }

  create() {

    var sala = 1;

    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY / 1.5,
      "phaser_logo"
    );

    const boton = new Button(
      this.cameras.main.centerX,
      this.cameras.main.centerY + this.cameras.main.centerY / 9,
      "Jugar",
      this,
      () => {
        this.scene.start("mapa", { sala: sala});
      }

    );

    const boton1 = new Button(
      this.cameras.main.centerX,
      this.cameras.main.centerY + this.cameras.main.centerY / 3,
      "Créditos",
      this,
      () => {
        this.scene.start("creditos");
      }

    );

  }
}
