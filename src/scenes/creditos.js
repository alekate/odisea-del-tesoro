import Button from "../js/button.js";

export class creditos extends Phaser.Scene {
    constructor() {
      super("creditos");
    }

    create() {

        const text = this.add.text(0, 0, "Créditos", {
            fontSize: "32px",
            fill: "#FFFFFF",
        })

        const boton = new Button(
            this.cameras.main.centerX,
            this.cameras.main.centerY + this.cameras.main.centerY / 9,
            "Volver",
            this,
            () => {
              this.scene.start("mainmenu");
            }
      
          );
    }
}