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
var humImg1;
var humImg2;
var humImg3;

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


//////////////////////////////////////////////// selector de sprites
        switch (hum1.nombre) {
            case "arquero":
              humImg1 = this.add.image(120, 250, 'arquero')
              humImg1.setScale(2);
              break;
          
            case "caballero":
              humImg1 = this.add.image(120, 250, 'caballero')
              humImg1.setScale(2);
              break;
          
            case "piromano":
              humImg1 = this.add.image(120, 250, 'piromano')
              humImg1.setScale(2);
              break;
          
            default:
              break;
          }
          
          switch (hum2.nombre) {
            case "arquero":
              humImg2 = this.add.image(120, 550, 'arquero')
              humImg2.setScale(2);
              break;
          
            case "caballero":
              humImg2 = this.add.image(120, 550, 'caballero')
              humImg2.setScale(2);
              break;
          
            case "piromano":
              humImg2 = this.add.image(120, 550, 'piromano')
              humImg2.setScale(2);
              break;
          
            default:
              break;
          }
          
          switch (hum3.nombre) {
            case "arquero":
              humImg3 = this.add.image(120, 850, 'arquero').setInteractive()
              humImg3.setScale(2);
              break;
          
            case "caballero":
              humImg3 = this.add.image(120, 850, 'caballero').setInteractive()
              humImg3.setScale(2);
              break;
          
            case "piromano":
              humImg3 = this.add.image(120, 850, 'piromano').setInteractive();
              humImg3.setScale(2);
              break;
          
            default:
              break;
          }


//////////////////////////////////////////////////// estadisticas
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