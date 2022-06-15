import Button from "../js/button.js";
//import unidades from "../js/unidades.js";

var num1;
var num2;
var num3;


export class selector extends Phaser.Scene {
    constructor() {
      super("selector");
    }
  
create() {
        const text = this.add.text(0, 0, "Selector de unidades", {
            fontSize: "32px",
            fill: "#FFFFFF",
        })

        const boton5 = new Button(
            850,200,
            "-",
            this,
            () => {
              if (text3 =! 0){
                num3 = text3 +1
                text3.setText(num3)
               }
              }
          );

          const boton6 = new Button(
            960,200,
            "+",
            this,
            () => {
              if (text3 <= 3){
                num3 = text3 + 1
                text3.setText(num3)
               }
              }    
          );

          const text3 = this.add.text(890, 190, "0", {
            fontSize: "32px",
            fill: "#FFFFFF",
        })

          const boton4 = new Button(
            680,200,
            "+",
            this,
            () => {
              if (text2 <= 3){
                num2 = text2 + 1
                text2.setText(num2)
               }
              }
          );

          const boton3 = new Button(
            570,200,
            "-",
            this,
            () => {
              if (text2 =! 0){
                num2 = text2 - 1
                text2.setText(num2)
               }
              }
          );

          const text2 = this.add.text(610, 190, "0", {
            fontSize: "32px",
            fill: "#FFFFFF",
        })

          const boton2 = new Button(
            400,200,
            "+",
            this,
            () => {
            if (text1 <= 3){
              num1 = text1 + 1
              text1.setText(num1)
             }
            }
          );

          const boton1 = new Button(
            290,200,
            "-",
            this,
            () => {
              if (text1 =! 0){
                num1 = text1 - 1
                text1.setText(num1)
               }
              }
          );

          const text1 = this.add.text(330, 190, "0", {
            fontSize: "32px",
            fill: "#FFFFFF",
        })
    }


}