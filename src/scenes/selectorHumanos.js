import Button from "../js/button.js";
import Arquero from "../js/Unidades.js";
import Caballero from "../js/Unidades.js";
import Mago from "../js/Unidades.js"

var num1 = 1;
var num2 = 1;
var num3 = 1;
var sala = 1;
var criaturas = 15;

export class selectorH extends Phaser.Scene {
    constructor() {
      super("selectorH");
    }
  
create() {
  const text = this.add.text(0, 0, "Selector de humanos", {
    fontSize: "32px",
    fill: "#FFFFFF",
  })

    }

update () {
const boton5 = new Button(
  850,200,
  "-",
  this,
  () => {
    if (num3 =! 0){
      num3--
     }
    }
);

const boton6 = new Button(
  960,200,
  "+",
  this,
  () => {
    if (num3 < 3){
      num3++
     }
    }    
);

var text3 = this.add.text(890, 190, num3, {
  fontSize: "32px",
  fill: "#FFFFFF",
})

const boton4 = new Button(
  680,200,
  "+",
  this,
  () => {
    if (num2 < 3){
      num2++
     }
    }
);

const boton3 = new Button(
  570,200,
  "-",
  this,
  () => {
    if (num2 =! 0){
      num2--
     }
    }
);

var text2 = this.add.text(610, 190, num2, {
  fontSize: "32px",
  fill: "#FFFFFF",
})

const boton2 = new Button(
  400,200,
  "+",
  this,
  () => {
  if (num1 < 3){
    num1++
   }
  }
);

const boton1 = new Button(
  290,200,
  "-",
  this,
  () => {
  if (num1 =! 0){
    num1--
   }
  }
);

var text1 = this.add.text(330, 190, num1, {
  fontSize: "32px",
  fill: "#FFFFFF",
})

const botonCont = new Button(
  600,600,
  "Continuar",
  this,
  () => {

    if (num1 != 0){
      var hum1 = new Arquero;
      if (num1 > 1){
        var hum2 = new Arquero;
        if (num1 > 2){
          var hum3 = new Arquero;
        }
      }
    } else {
      if (num2 != 0){
        var hum1 = new Caballero;
        if (num2 > 1){
          var hum2 = new Caballero;
          if (num2 > 2){
            var hum3 = new Caballero;
          }
        }
      } else {
        if (num3 != 0){
          var hum1 = new Mago;
          if (num3 > 1){
            var hum2 = new Mago;
            if (num3 > 2){
              var hum3 = new Mago;
            }
          }
        }
      }
    }


    this.scene.start("mapa", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });
  }
)
}

}