import Button from "../js/button.js";
import Esqueletos from "../js/esqueletos.js";
import Hechizero from "../js/hechizero.js";
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

    }

    update () {
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

      
      const botonCont = new Button(
        900,900,
        "Continuar",
        this,
        () => {

          for (let i = 0; i < num1; i++) {
  
            criats.push(new Esqueletos)
          }
        
          for (let i = 0; i < num3; i++) {
          
            criats.push(new Hechizero)
          }
        
          for (let i = 0; i < num2; i++) {
          
            criats.push(new Polilla)
          }
          sala++
          criaturas -= 3;
          this.scene.start("combate", { criat1: criats[0], criat: criats[1], criat3: criats[2], sala: sala, criaturas: criaturas, hum1: hum1, hum2: hum2, hum3: hum3 });
            })
            }
    



}