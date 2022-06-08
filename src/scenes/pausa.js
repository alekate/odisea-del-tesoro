import Button from "../js/button.js";

export class pausa extends Phaser.Scene {
    constructor() {
      super("pausa");
    }

    create() {

        const text = this.add.text(0, 0, "pausa", {
            fontSize: "32px",
            fill: "#FFFFFF",
        })

        const boton = new Button(
            this.cameras.main.centerX,
            this.cameras.main.centerY + this.cameras.main.centerY / 9,
            "Continuar",
            this,
            () => {
              this.scene.start("mapa");
            }
      
          );
          const boton1 = new Button(
            this.cameras.main.centerX,
            this.cameras.main.centerY + this.cameras.main.centerY / 3,
            "Salir",
            this,
            () => {
              this.scene.start("mainmenu");
            }
      
          );
    }
}