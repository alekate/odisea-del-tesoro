import Button from "../js/button.js";

var sala;
var hum1;
var hum2;
var hum3;
var criaturas;
var text1;

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
        console.log(data);
    }

    create() {

        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'mapa');

        const text = this.add.text(0, 0, "Mapa", {
            fontSize: "32px",
            fill: "#FFFFFF",
        })

        text1 = this.add.text(200, 200, "", {
            fontSize: "32px",
            fill: "#FFFFFF",
        })

        const boton = new Button(
            1800,50,
            "Pausa",
            this,
            () => {
              this.scene.start("pausa");
            });

            
        const boton1 = new Button(
            1700,
            1000,
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

    update(){

        //var atk1 = text1.setText("atk: " + hum1.ataque);
        //var atk2 = this.hum2.ataque;
        //var atk3 = this.hum3.ataque;

    }
    
}