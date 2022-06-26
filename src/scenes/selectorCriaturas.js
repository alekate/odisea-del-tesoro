import Button from "../js/button.js";
import Esqueletos from "../js/esqueletos.js";
import Mago from "../js/mago.js";
import Polilla from "../js/polilla.js"

var num1 = 1;
var num2 = 1;
var num3 = 1;
var sala;
var criaturas;
var hum1;
var hum2;
var hum3;
var text1;
var text2;
var text3;
var criat1;
var criat2;
var criat3;
var criats = []
var imag1;
var imag2;
var imag3;

export class selectorC extends Phaser.Scene {
    constructor() {
      super("selectorC");
    }

init(data) {
        sala = data.sala;
        hum1 = data.hum1;
        hum2 = data.hum2;
        hum3 = data.hum3;
        criaturas = data.criaturas;
    }
  
create() {
  const text = this.add.text(0, 0, "Selector de criaturas", {
    fontSize: "32px",
    fill: "#FFFFFF",
  })


////////////////////////////////////////////// indicadores de cantidad
  text1 = this.add.text(500, 290, "1", {
    fontSize: "32px",
    fill: "#FFFFFF",
  })
  text2 = this.add.text(890, 290, "1", {
    fontSize: "32px",
    fill: "#FFFFFF",
  })
  text3 = this.add.text(1290, 290, "1", {
    fontSize: "32px",
    fill: "#FFFFFF",
  })


//////////////////////////////////////////////// estadisticas
var text4 = this.add.text(450, 690, "vida: 4", {
  fontSize: "37px",
  fill: "#FFFFFF",
})
var text5 = this.add.text(450, 740, "daño: 1", {
  fontSize: "37px",
  fill: "#FFFFFF",
})
var text6 = this.add.text(840, 690, "vida: 3", {
  fontSize: "37px",
  fill: "#FFFFFF",
})
var text7 = this.add.text(840, 740, "daño: 2", {
  fontSize: "37px",
  fill: "#FFFFFF",
})
var text8 = this.add.text(1250, 690, "vida: 5", {
  fontSize: "37px",
  fill: "#FFFFFF",
})
var text9 = this.add.text(1250, 740, "daño: 3", {
  fontSize: "37px",
  fill: "#FFFFFF",
})


//////////////////////////////////////////////////// sprites
  var imag1 = this.add.image(500, 500, 'esqueletos');
  var imag2 = this.add.image(900, 500, 'polilla');
  var imag3 = this.add.image(1300, 500, 'mago');
  imag1.setScale(4);
  imag2.setScale(4);
  imag3.setScale(4);


  }

update () {

////////////////////////////////////////////////// botones
      const boton5 = new Button(
        1250,300,
        "-",
        this,
        () => {
          if (num3 > 0){
            num3--
            text3.text = num3;
           }
          }
      );
      const boton6 = new Button(
        1360,300,
        "+",
        this,
        () => {
          if (num3 < 3){
            num3++
            text3.text = num3;
           }
          }    
      );
      
      const boton4 = new Button(
        960,300,
        "+",
        this,
        () => {
          if (num2 < 3){
            num2++
            text2.text = num2;
           }
          }
      );
      const boton3 = new Button(
        850,300,
        "-",
        this,
        () => {
          if (num2 > 0){
            num2--
            text2.text = num2;
           }
          }
      );
      
      const boton2 = new Button(
        560,300,
        "+",
        this,
        () => {
        if (num1 < 3){
          num1++
          text1.text = num1;
         }
        }
      );
      const boton1 = new Button(
        450,300,
        "-",
        this,
        () => {
        if (num1 > 0){
          num1--
          text1.text = num1;
         }
        }
      );

      
/////////////////////////////////////////////// matriz de personajes
      const botonCont = new Button(
        900,900,
        "Continuar",
        this,
        () => {

          for (let i = 0; i < num1; i++) {
  
            criats.push(new Esqueletos)
          }
        
          for (let i = 0; i < num2; i++) {
          
            criats.push(new Polilla)
          }

          for (let i = 0; i < num3; i++) {
          
            criats.push(new Mago)
          }

          sala++
          criaturas -= 3;
          if (sala == 4) {
            this.scene.start("combate", { criat1: criats[3], criat2: criats[4], criat3: criats[5],
              sala: sala, criaturas: criaturas, hum1: hum1, hum2: hum2, hum3: hum3 });
          } else {
          this.scene.start("combate", { criat1: criats[0], criat2: criats[1], criat3: criats[2],
             sala: sala, criaturas: criaturas, hum1: hum1, hum2: hum2, hum3: hum3 });
         }  
    })
          
}
    

          


}