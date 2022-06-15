import Button from "../js/button.js";
//import unidades from "../js/unidades.js";

export class combate extends Phaser.Scene {
    constructor() {
      super("combate");
    }

    create() {

        var sala = 2;

        const text = this.add.text(0, 0, "Sala de Combate", {
            fontSize: "32px",
            fill: "#FFFFFF",
        })

        const boton = new Button(
            this.cameras.main.centerX,
            this.cameras.main.centerY + this.cameras.main.centerY / 3,
            "Ganar",
            this,
            () => {
              this.scene.start("mapa", { sala: sala });
            }
      
          );

          const boton1 = new Button(
            this.cameras.main.centerX,
            this.cameras.main.centerY + this.cameras.main.centerY / 9,
            "perder",
            this,
            () => {
              this.scene.start("winGuardian");
            }
      
          );
    }
}

