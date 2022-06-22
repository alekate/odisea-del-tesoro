import Button from "../js/button.js";
import Arquero from "../js/arquero.js";
import Caballero from "../js/caballero.js";
import Piromano from "../js/piromano.js";

var num1 = 1;
var num2 = 1;
var num3 = 1;
var sala = 1;
var criaturas = 15;
var text1;
var text2;
var text3;

export class selectorH extends Phaser.Scene {
    constructor() {
      super("selectorH");
    }
  
create() {
  const text = this.add.text(0, 0, "Selector de humanos", {
    fontSize: "32px",
    fill: "#FFFFFF",
  })

  text1 = this.add.text(500, 390, "1", {
    fontSize: "32px",
    fill: "#FFFFFF",
  })

  text2 = this.add.text(890, 390, "1", {
    fontSize: "32px",
    fill: "#FFFFFF",
  })

  text3 = this.add.text(1290, 390, "1", {
    fontSize: "32px",
    fill: "#FFFFFF",
  })

  this.add.image(500, 500, 'arquero');
  this.add.image(900, 500, 'caballero');
  this.add.image(1300, 500, 'piromano');

  const boton5 = new Button(
    1250,400,
    "-",
    this,
    () => {
      if (num3 =! 0){
        num3--
        text3.text = num3;
       }
      }
  );
  
  const boton6 = new Button(
    1360,400,
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
    960,400,
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
    850,400,
    "-",
    this,
    () => {
      if (num2 =! 0){
        num2--
        text2.text = num2;
       }
      }
  );
  
 
  
  const boton2 = new Button(
    560,400,
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
    450,400,
    "-",
    this,
    () => {
    if (num1 =! 0){
      num1--
      text1.text = num1;
     }
    }
  );
  

  var hum1;
  var hum2;
  var hum3;
  var hums = []

  const botonCont = new Button(
    900,900,
    "Continuar",
    this,
    () => {
  for (let i = 0; i < num1; i++) {
  
    hums.push(new Arquero)
  }

  for (let i = 0; i < num3; i++) {
  
    hums.push(new Piromano)
  }

  for (let i = 0; i < num2; i++) {
  
    hums.push(new Caballero)
  }
  
      this.scene.start("mapa", { hum1: hums[0], hum2: hums[1], hum3: hums[2], sala: sala, criaturas: criaturas });
    }
  )
    }

update () {

}

}