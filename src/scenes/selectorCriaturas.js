import Button from "../js/button.js";
import Esqueletos from "../js/esqueletos.js";
import Mago from "../js/mago.js";
import Polilla from "../js/polilla.js"


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
var imag1;
var imag2;
var imag3;
var tcant;
var tmax;


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

var num1 = 0;
var num2 = 0;
var num3 = 0;
var cant = 0;

  text1 = this.add.text(500, 290, "0", {
    fontSize: "32px",
    fill: "#FFFFFF",
  })
  text2 = this.add.text(890, 290, "0", {
    fontSize: "32px",
    fill: "#FFFFFF",
  })
  text3 = this.add.text(1290, 290, "0", {
    fontSize: "32px",
    fill: "#FFFFFF",
  })
  tmax = this.add.text(1020, 150, "max: 3", {
    fontSize: "32px",
    fill: "#FFFFFF",
  })
  tcant = this.add.text(620, 150, "cantidad: " + cant, {
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


////////////////////////////////////////////////// botones
      const boton5 = new Button(
        1250,300,
        "-",
        this,
        () => {
          if (num3 > 0 && cant != 0){
            num3--
            cant--
            text3.text = num3;
            tcant.text = "cantidad: " + cant;
           }
          }
      );
      const boton6 = new Button(
        1360,300,
        "+",
        this,
        () => {
          if (num3 < 3 && cant < 3){
            num3++
            cant++
            text3.text = num3;
            tcant.text = "cantidad: " + cant;
           }
          }    
      );
      
      const boton4 = new Button(
        960,300,
        "+",
        this,
        () => {
          if (num2 < 3 && cant < 3){
            num2++
            cant++
            text2.text = num2;
            tcant.text = "cantidad: " + cant;
           }
          }
      );
      const boton3 = new Button(
        850,300,
        "-",
        this,
        () => {
          if (num2 > 0 && cant != 0){
            num2--
            cant--
            text2.text = num2;
            tcant.text = "cantidad: " + cant;
           }
          }
      );
      
      const boton2 = new Button(
        560,300,
        "+",
        this,
        () => {
        if (num1 < 3 && cant < 3){
          num1++
          cant++
          text1.text = num1;
          tcant.text = "cantidad: " + cant;
         }
        }
      );
      const boton1 = new Button(
        450,300,
        "-",
        this,
        () => {
        if (num1 > 0 && cant != 0){
          num1--
          cant--
          text1.text = num1;
          tcant.text = "cantidad: " + cant;
         }
        }
      );

      
/////////////////////////////////////////////// matriz de personajes
var criats = []

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
          //if (sala == 4) {
            //this.scene.start("combate", { criat1: criats[3], criat2: criats[4], criat3: criats[5],
              //sala: sala, criaturas: criaturas, hum1: hum1, hum2: hum2, hum3: hum3 });
          //} else {
          this.scene.start("combate", { criat1: criats[0], criat2: criats[1], criat3: criats[2],
             sala: sala, criaturas: criaturas, hum1: hum1, hum2: hum2, hum3: hum3 });
         //}  
    })
}

    

          


}