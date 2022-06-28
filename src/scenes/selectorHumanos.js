import Arquero from "../js/arquero.js";
import Caballero from "../js/caballero.js";
import Piromano from "../js/piromano.js";


var sala = 1;
var criaturas = 15;
var text1;
var text2;
var text3;
var text9;
var tcant;
var hum1;
var hum2;
var hum3;




export class selectorH extends Phaser.Scene {
    constructor() {
      super("selectorH");
    }
  
create() {
  const text = this.add.text(0, 0, "Selector de humanos", {
    fontSize: "32px",
    fill: "#FFFFFF",
  })

  ////////////////////////////////////////// indicadores de cantidad

  var num1 = 0;
  var num2 = 0;
  var num3 = 0;
  var cant = 0;
  
  text1 = this.add.text(490, 280, "0", {
    fontSize: "50px",
    fill: "#FFFFFF",
  })
  text2 = this.add.text(890, 280, "0", {
    fontSize: "50px",
    fill: "#FFFFFF",
  })
  text3 = this.add.text(1287, 280, "0", {
    fontSize: "50px",
    fill: "#FFFFFF",
  })
  text9 = this.add.text(1020, 150, "max: 3", {
    fontSize: "37px",
    fill: "#FFFFFF",
  })
  tcant = this.add.text(620, 150, "cantidad: " + cant, {
    fontSize: "37px",
    fill: "#FFFFFF",
  })


  //////////////////////////////////////////////// estadisticas
var text4 = this.add.text(450, 690, "vida: 2", {
  fontSize: "37px",
  fill: "#FFFFFF",
})
var text5 = this.add.text(450, 740, "daño: 3", {
  fontSize: "37px",
  fill: "#FFFFFF",
})
var text6 = this.add.text(840, 690, "vida: 4", {
  fontSize: "37px",
  fill: "#FFFFFF",
})
var text7 = this.add.text(840, 740, "daño: 1", {
  fontSize: "37px",
  fill: "#FFFFFF",
})
var text8 = this.add.text(1250, 690, "vida: 3", {
  fontSize: "37px",
  fill: "#FFFFFF",
})
var text9 = this.add.text(1250, 740, "daño: 2", {
  fontSize: "37px",
  fill: "#FFFFFF",
})


  ///////////////////////////////////////////////////// sprites
  var imag1 = this.add.image(500, 500, 'arquero');
  var imag2 = this.add.image(900, 500, 'caballero');
  var imag3 = this.add.image(1300, 500, 'piromano');
  imag1.setScale(4);
  imag2.setScale(4);
  imag3.setScale(4);


/////////////////////////////////////////////////////// botones
var menos3 = this.add.image(1235,300,'menos').setInteractive()
        .on('pointerdown',()=> { 
          if (num3 > 0 && cant != 0){
          num3--
          cant--
          text3.text = num3;
          tcant.text = "cantidad: " + cant;
         }});
        menos3.setScale(2.5);        
var mas3 = this.add.image(1375,300,'mas').setInteractive()
        .on('pointerdown',()=> { 
          if (num3 < 3 && cant < 3){
            num3++
            cant++
            text3.text = num3;
            tcant.text = "cantidad: " + cant;
           }});
        mas3.setScale(2.7);

  
var mas2 = this.add.image(975,300,'mas').setInteractive()
        .on('pointerdown',()=> { 
          if (num2 < 3 && cant < 3){
            num2++
            cant++
            text2.text = num2;
            tcant.text = "cantidad: " + cant;
           }});
        mas2.setScale(2.7);
var menos2 = this.add.image(835,300,'menos').setInteractive()
        .on('pointerdown',()=> { 
          if (num2 > 0 && cant != 0){
            num2--
            cant--
            text2.text = num2;
            tcant.text = "cantidad: " + cant;
           }});
        menos2.setScale(2.7); 
  

var mas1 = this.add.image(575,300,'mas').setInteractive()
        .on('pointerdown',()=> { 
          if (num1 < 3 && cant < 3){
            num1++
            cant++
            text1.text = num1;
            tcant.text = "cantidad: " + cant;
           }});
        mas1.setScale(2.7);
var menos1 = this.add.image(435,300,'menos').setInteractive()
        .on('pointerdown',()=> { 
          if (num1 > 0 && cant != 0){
            num1--
            cant--
            text1.text = num1;
            tcant.text = "cantidad: " + cant;
           }});
        menos1.setScale(2.7);       


  ///////////////////////////////////////////// matriz de personajes
  var hums = [];

  var continuar = this.add.image(900,950,'continuar').setInteractive()
  .on('pointerdown',()=> {  for (let i = 0; i < num1; i++) {
    hums.push(new Arquero)
  }
  for (let i = 0; i < num2; i++) {
    hums.push(new Caballero)
  }
  for (let i = 0; i < num3; i++) {
    hums.push(new Piromano)
  }
  this.scene.start("mapa", { hum1: hums[0], hum2: hums[1], hum3: hums[2], sala: sala, criaturas: criaturas });
    }
  )  
  .on('pointerover', ()=> {continuar.setScale(4.1)})
  .on('pointerout', ()=> {continuar.setScale(4)});
  continuar.setScale(4);
  }
}