import Button from "../js/button.js";


var sala;
var hum1;
var hum2;
var hum3;
var criaturas;

export class mapa extends Phaser.Scene {
    constructor() {
      super("mapa");
    }

    init(data) {
        sala = data.sala;
        hum1 = data.hum1;
        hum2 = data.hum2;
        hum3 = data.hum3;
        criaturas = data.criaturas;
    }

    create() {


        const text = this.add.text(0, 0, "Mapa", {
            fontSize: "32px",
            fill: "#FFFFFF",
        })

        const boton = new Button(
            1200,50,
            "Pausa",
            this,
            () => {
              this.scene.start("pausa");
            });

            
        const boton1 = new Button(
            this.cameras.main.centerX,
            this.cameras.main.centerY + this.cameras.main.centerY / 3,
            "Siguiente sala",
            this,
            () => {
                switch (sala) {
                    
                   case 1:{
                    this.scene.start("selectorC", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });
                    break;
                   }
                   case 2:{
                    this.scene.start("descanso", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });
                    break;
                   }
                   case 3:{
                    this.scene.start("selectorC", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });
                    break;
                   }
                   case 4:{
                    this.scene.start("descanso", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });
                    break;
                   }
                   case 5:{
                    this.scene.start("combateJefe", { hum1: hum1, hum2: hum2, hum3: hum3});
                    break;
                   }

                }
            });
    }
    
}