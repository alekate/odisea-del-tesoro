import Button from "../js/button.js";

export class creditos extends Phaser.Scene {
    constructor() {
      super("creditos");
    }

    create() {

      this.add.image(900, 400, 'logo').setScale(0.4);

        const text = this.add.text(350, 750, "The Keepers: Altamirano Irina, Barros Joaquín y Perot Alejo", {
            fontSize: "32px",
            fill: "#FFFFFF",
        })

        const boton = new Button(
            900, 900,
            "Volver",
            this,
            () => {
              this.scene.start("mainmenu");
            }
      
          );
    }
}