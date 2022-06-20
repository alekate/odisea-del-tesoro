import Button from "../js/button.js";

var sala;
var hum1;
var hum2;
var hum3;
var criaturas;
var criat1;
var criat2;
var criat3;

export class combate extends Phaser.Scene {
    constructor() {
      super("combate");
    }

    init(data) {
      sala = data.sala;
      hum1 = data.hum1;
      hum2 = data.hum2;
      hum3 = data.hum3;
      criaturas = data.criaturas;
      criat1 = data.criat1;
      criat2 = data.criat2;
      criat3 = data.criat3;
  }

    create() {

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
              this.scene.start("mapa", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });
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

