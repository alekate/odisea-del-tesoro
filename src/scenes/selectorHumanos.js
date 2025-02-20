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
var imag1




export class selectorH extends Phaser.Scene {
    constructor() {
      super("selectorH");
    }
  
create() {
  this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'selector');

//////////////////////////////////////////// indicadores de cantidad

  var num1 = 0;
  var num2 = 0;
  var num3 = 0;
  var cant = 0;
  
  text1 = this.add.text(315, 175, "0", {
    fontSize: "120px",
    fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  text2 = this.add.text(925, 175, "0", {
    fontSize: "120px",
    fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  text3 = this.add.text(1525, 175, "0", {
    fontSize: "120px",
    fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  text9 = this.add.text(1150, 75, "max/min: 3", {
    fontSize: "40px",
    fill: "#FFFFFF",
    fontFamily: "georgia"
  })
  tcant = this.add.text(530, 75, "cantidad: " + cant, {
    fontSize: "40px",
    fill: "#FFFFFF",
    fontFamily: "georgia"
  })


  //////////////////////////////////////////////// estadisticas
var text4 = this.add.text(280, 690, "vida: 2", {
  fontSize: "37px",
  fill: "#FFFFFF",
  fontFamily: "georgia"
})
var text5 = this.add.text(280, 650, "daño: 3", {
  fontSize: "37px",
  fill: "#FFFFFF",
  fontFamily: "georgia"
})
var text12 = this.add.text(210, 725, "ventaja vs: polilla", {
  fontSize: "37px",
  fill: "#FFFFFF",
  fontFamily: "georgia"
})
var text6 = this.add.text(895, 690, "vida: 4", {
  fontSize: "37px",
  fill: "#FFFFFF",
  fontFamily: "georgia"
})
var text7 = this.add.text(895, 650, "daño: 1", {
  fontSize: "37px",
  fill: "#FFFFFF",
  fontFamily: "georgia"
})
var text11 = this.add.text(790, 725, "ventaja vs: esqueletos", {
  fontSize: "37px",
  fill: "#FFFFFF",
  fontFamily: "georgia"
})
var text8 = this.add.text(1500, 690, "vida: 3", {
  fontSize: "37px",
  fill: "#FFFFFF",
  fontFamily: "georgia"
})
var text9 = this.add.text(1500, 650, "daño: 2", {
  fontSize: "37px",
  fill: "#FFFFFF",
  fontFamily: "georgia"
})
var text10 = this.add.text(1435, 725, "ventaja vs: mago", {
  fontSize: "37px",
  fill: "#FFFFFF",
  fontFamily: "georgia"
})


//////////////////////////////////////////////////// animaciones
//this.anims.create({
  //key: 'arqueroIDLE',
  //frames: [ { key: 'arquero', frame: 0 } ],
  //frameRate: 20
//});


///////////////////////////////////////////////////// sprites
  imag1 = this.add.image(350, 515, 'arquero');
  var imag2 = this.add.image(960, 515, 'caballero');
  var imag3 = this.add.image(1550, 515, 'piromano');
  imag1.setScale(4);
  imag2.setScale(4);
  imag3.setScale(4);


/////////////////////////////////////////////////////// botones
var menos3 = this.add.image(1420,251,'menos').setInteractive()
        .on('pointerdown',()=> { 
          if (num3 > 0 && cant != 0){
          num3--
          cant--
          text3.text = num3;
          tcant.text = "cantidad: " + cant;
         }})
  .on('pointerover', ()=> {menos3.setScale(5.2)})
  .on('pointerout', ()=> {menos3.setScale(5.1)});
        menos3.setScale(5.1);        
var mas3 = this.add.image(1710,251,'mas').setInteractive()
        .on('pointerdown',()=> { 
          if (num3 < 3 && cant < 3){
            num3++
            cant++
            text3.text = num3;
            tcant.text = "cantidad: " + cant;
           }})
  .on('pointerover', ()=> {mas3.setScale(5.2)})
  .on('pointerout', ()=> {mas3.setScale(5.1)});
        mas3.setScale(5.1);

  
var mas2 = this.add.image(1105,251,'mas').setInteractive()
        .on('pointerdown',()=> { 
          if (num2 < 3 && cant < 3){
            num2++
            cant++
            text2.text = num2;
            tcant.text = "cantidad: " + cant;
           }})
  .on('pointerover', ()=> {mas2.setScale(5.2)})
  .on('pointerout', ()=> {mas2.setScale(5.1)});
        mas2.setScale(5.1);
var menos2 = this.add.image(820,251,'menos').setInteractive()
        .on('pointerdown',()=> { 
          if (num2 > 0 && cant != 0){
            num2--
            cant--
            text2.text = num2;
            tcant.text = "cantidad: " + cant;
           }})
  .on('pointerover', ()=> {menos2.setScale(5.2)})
  .on('pointerout', ()=> {menos2.setScale(5.1)});
        menos2.setScale(5.1); 
  

var mas1 = this.add.image(500,251,'mas').setInteractive()
        .on('pointerdown',()=> { 
          if (num1 < 3 && cant < 3){
            num1++
            cant++
            text1.text = num1;
            tcant.text = "cantidad: " + cant;
           }})
  .on('pointerover', ()=> {mas1.setScale(5.2)})
  .on('pointerout', ()=> {mas1.setScale(5.1)});
        mas1.setScale(5.1);
var menos1 = this.add.image(200,251,'menos').setInteractive()
        .on('pointerdown',()=> { 
          if (num1 > 0 && cant != 0){
            num1--
            cant--
            text1.text = num1;
            tcant.text = "cantidad: " + cant;
           }})
  .on('pointerover', ()=> {menos1.setScale(5.2)})
  .on('pointerout', ()=> {menos1.setScale(5.1)});
        menos1.setScale(5.1);       


  ///////////////////////////////////////////// matriz de personajes
  var hums = [];

  var continuar = this.add.image(970,950,'continuar').setInteractive()
  .on('pointerdown',()=> {  
    if (cant == 3) {
    
      for (let i = 0; i < num1; i++) {
        hums.push(new Arquero)
      }
      for (let i = 0; i < num2; i++) {
        hums.push(new Caballero)
      }
      for (let i = 0; i < num3; i++) {
        hums.push(new Piromano)
      }
      this.scene.start("mapa", { hum1: hums[0], hum2: hums[1], hum3: hums[2], sala: sala, criaturas: criaturas });
    }})  
  .on('pointerover', ()=> {continuar.setScale(5.1)})
  .on('pointerout', ()=> {continuar.setScale(5)});
  continuar.setScale(5);
  }

update(){
//imag1.anims.play('arqueroIDLE');
}
}