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
      //console.log(data);
  }

create() {

        const text = this.add.text(0, 0, "Sala de Combate", {
            fontSize: "32px",
            fill: "#FFFFFF",
        });

        const boton = new Button(
            900,1000,
            "atacar",
            this,
            () => {
              this.scene.start("mapa", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });
            });
    }

update(){

  if (hum1.vida == 0 && hum3.vida == 0 && hum2.vida == 0) {
    this.scene.start("winGuardian")
  }
 
  if (criat1.vida == 0 && criat2.vida == 0 && criat3.vida == 0) {
    this.scene.start("mapa", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas })
  }



}

}
