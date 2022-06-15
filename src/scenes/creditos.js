import Button from "../js/button.js";

export class creditos extends Phaser.Scene {
    constructor() {
      super("creditos");
    }

    create() {

        const text = this.add.text(this.cameras.main.centerX - this.cameras.main.centerX/2 - this.cameras.main.centerX/6, this.cameras.main.centerY, "Odisea del Tesoro: Altamirano Irina, Barros Joaquín y Perot Alejo", {
            fontSize: "32px",
            fill: "#FFFFFF",
        })

        const boton = new Button(
            this.cameras.main.centerX,
            this.cameras.main.centerY + this.cameras.main.centerY / 3,
            "Volver",
            this,
            () => {
              this.scene.start("mainmenu");
            }
      
          );
    }
}