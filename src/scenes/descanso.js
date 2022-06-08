import Button from "../js/button.js";

export class descanso extends Phaser.Scene {
    constructor() {
      super("descanso");
    }

    create() {

        var sala = 3;

        const text = this.add.text(0, 0, "Sala de descanso", {
            fontSize: "32px",
            fill: "#FFFFFF",
        })

        const boton = new Button(
            this.cameras.main.centerX + this.cameras.main.centerX / 2,
            this.cameras.main.centerY,
            "+1 ataque",
            this,
            () => {
              this.scene.start("mapa", { sala: sala });
            }
      
          );

          const boton1 = new Button(
            this.cameras.main.centerX ,
            this.cameras.main.centerY,
            "+1 vidaMax",
            this,
            () => {
              this.scene.start("mapa", { sala: sala });
            }
      
          );

          const boton2 = new Button(
            this.cameras.main.centerX - this.cameras.main.centerX / 2,
            this.cameras.main.centerY,
            "+1 vida act",
            this,
            () => {
              this.scene.start("mapa", { sala: sala });
            }
      
          );
    }
}