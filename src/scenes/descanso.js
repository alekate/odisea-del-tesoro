import Button from "../js/button.js";

var sala;
var hum1;
var hum2;
var hum3;
var criaturas;

export class descanso extends Phaser.Scene {
    constructor() {
      super("descanso");
    }

    init(data) {
      sala = data.sala;
      hum1 = data.hum1;
      hum2 = data.hum2;
      hum3 = data.hum3;
      criaturas = data.criaturas;
  }
  
    create() {

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
              sala++;
              this.scene.start("mapa", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });
            }
      
          );

          const boton1 = new Button(
            this.cameras.main.centerX ,
            this.cameras.main.centerY,
            "+1 vidaMax",
            this,
            () => {
              sala++;
              this.scene.start("mapa", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });
            }
      
          );

          const boton2 = new Button(
            this.cameras.main.centerX - this.cameras.main.centerX / 2,
            this.cameras.main.centerY,
            "+1 vida act",
            this,
            () => {
              sala++;
              this.scene.start("mapa", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });
            }
      
          );
    }
}