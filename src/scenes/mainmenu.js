import Button from "../js/button.js";

export class mainmenu extends Phaser.Scene {
  constructor() {
    super("mainmenu");
  }

  create() {


    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondoMenu');

    const boton = new Button(
      this.cameras.main.centerX,
      this.cameras.main.centerY + this.cameras.main.centerY / 4,
      "Jugar",
      this,
      () => {
        this.scene.start("selector");
      }

    );

    const boton1 = new Button(
      this.cameras.main.centerX,
      this.cameras.main.centerY + this.cameras.main.centerY / 2,
      "Créditos",
      this,
      () => {
        this.scene.start("creditos");
      }

    );

  }
}
