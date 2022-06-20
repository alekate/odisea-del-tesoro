import Button from "../js/button.js";
import Esqueletos from "../js/Unidades.js";
import Hechizero from "../js/Unidades.js";
import Polilla from "../js/Unidades.js"

var num1 = 1;
var num2 = 1;
var num3 = 1;
var sala;
var criaturas;
var hum1;
var hum2;
var hum3;

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
      var criat1 = new Esqueletos;
      if (num1 > 1){
        var criat2 = new Esqueletos;
        if (num1 > 2){
          var criat3 = new Esqueletos;
        }
      }
    } else {
      if (num2 != 0){
        var criat1 = new Hechizero;
        if (num2 > 1){
          var criat2 = new Hechizero;
          if (num2 > 2){
            var criat3 = new Hechizero;
          }
        }
      } else {
        if (num3 != 0){
          var criat1 = new Polilla;
          if (num3 > 1){
            var criat2 = new Polilla;
            if (num3 > 2){
              var criat3 = new Polilla;
            }
          }
        }
      }
    }
    
    sala++;

    this.scene.start("combate", 
    { hum1: hum1, hum2: hum2, hum3: hum3,
     sala: sala, criaturas: criaturas, 
     criat1: criat1, criat2: criat2, criat3: criat3 });
  }
)
}

}