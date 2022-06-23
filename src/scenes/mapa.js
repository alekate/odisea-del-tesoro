import Button from "../js/button.js";

var sala;
var hum1;
var hum2;
var hum3;
var criaturas;
var atk1;
var atk2;
var atk3;
var vida1;
var vida2;
var vida3;
var cantCriaturas;

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

        atk1 = this.add.text(220, 200, "atk: " + hum1.ataque, {
            fontSize: "32px",
            fill: "#FFFFFF",
        })
        vida1 = this.add.text(220, 250, "vida: " + hum1.vida + "/" + hum1.vidaMax, {
            fontSize: "32px",
            fill: "#FFFFFF",
        })

        atk2 = this.add.text(220, 500, "atk: " + hum2.ataque, {
            fontSize: "32px",
            fill: "#FFFFFF",
        })
        vida2 = this.add.text(220, 550, "vida: " + hum2.vida + "/" + hum2.vidaMax, {
            fontSize: "32px",
            fill: "#FFFFFF",
        })

        atk3 = this.add.text(220, 800, "atk: " + hum3.ataque, {
            fontSize: "32px",
            fill: "#FFFFFF",
        })
        vida3 = this.add.text(220, 850, "vida: " + hum3.vida + "/" + hum3.vidaMax, {
            fontSize: "32px",
            fill: "#FFFFFF",
        })

        cantCriaturas = this.add.text(1550, 550, "criaturas: " + criaturas, {
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
            1700,1000,
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