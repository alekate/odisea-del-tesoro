import Jefe from "../js/jefe.js";

var hum1;
var hum2;
var hum3;
var humImg1;
var humImg2;
var humImg3;
var vidaH1;
var vidaH2;
var vidaH3;
var vidaJefe;
var ataque;
var jefe;
var jefeImg;
var turno = 1;
var Tturno = 1;

export class combateJefe extends Phaser.Scene {
    constructor() {
      super("combateJefe");
    }

init(data) {
      hum1 = data.hum1;
      hum2 = data.hum2;
      hum3 = data.hum3;
  }

create() {    
////////////////////////////////////////////////////// jefe
jefe = new Jefe;
jefeImg = this.add.image(1450, 400, 'jefe').setInteractive();
jefeImg.setScale(5);


////////////////////////////////////////////////////// indicadores de vida
vidaH1 = this.add.text(160, 650,hum1.vida + "/" + hum1.vidaMax, {
  fontSize: "32px",
  fill: "#FFFFFF",
})
vidaH2 = this.add.text(420, 650, hum2.vida + "/" + hum2.vidaMax, {
  fontSize: "32px",
  fill: "#FFFFFF",
})
vidaH3 = this.add.text(700, 650, hum3.vida + "/" + hum3.vidaMax, {
  fontSize: "32px",
  fill: "#FFFFFF",
})
vidaJefe = this.add.text(1430, 650, jefe.vida + "/" + jefe.vidaMax, {
  fontSize: "32px",
  fill: "#FFFFFF",
})
Tturno = this.add.text(850, 150, "turno: " + turno, {
  fontSize: "32px",
  fill: "#FFFFFF",
})


////////////////////////////////////////////// selector de sprites humanos
switch (hum1.nombre) {
  case "arquero":
    humImg1 = this.add.image(200, 400, 'arquero').setInteractive();
    humImg1.setScale(4);
    break;

  case "caballero":
    humImg1 = this.add.image(200, 400, 'caballero').setInteractive();
    humImg1.setScale(4);
    break;

  case "piromano":
    humImg1 = this.add.image(200, 400, 'piromano').setInteractive()
    humImg1.setScale(4);
    break;

  default:
    break;
}

switch (hum2.nombre) {
  case "arquero":
    humImg2 = this.add.image(450, 400, 'arquero').setInteractive();
    humImg2.setScale(4);
    break;

  case "caballero":
    humImg2 = this.add.image(450, 400, 'caballero').setInteractive();
    humImg2.setScale(4);
    break;

  case "piromano":
    humImg2 = this.add.image(450, 400, 'piromano').setInteractive();
    humImg2.setScale(4);
    break;

  default:
    break;
}

switch (hum3.nombre) {
  case "arquero":
    humImg3 = this.add.image(700, 400, 'arquero').setInteractive()
    humImg3.setScale(4);
    break;

  case "caballero":
    humImg3 = this.add.image(700, 400, 'caballero').setInteractive()
    humImg3.setScale(4);
    break;

  case "piromano":
    humImg3 = this.add.image(700, 400, 'piromano').setInteractive();
    humImg3.setScale(4);
    break;

  default:
    break;
}


var atacar = this.add.image(900,900,'atacar').setInteractive()
.on('pointerdown',()=> {ataque = "si" })
.on('pointerover',()=> {atacar.setScale(5.1)})
.on('pointerout',()=> {atacar.setScale(5)})
atacar.setScale(5)
 
  }
            
update() {

///////////////////////////////////////////////// win condition
if (hum1.vida <= 0 && hum3.vida <= 0 && hum2.vida <= 0) {
  this.scene.start("winGuardian")
}
if (jefe.vida <= 0) {
  this.scene.start("winHumanos")
}

///////////////////////////////////////////////// indicador de turno
switch (turno) {
  case 1:
    if (hum1.vida <= 0 && turno == 1) {
      turno++;
      Tturno.text = "turno: " +turno;
    } else {
      humImg1.setScale(4.5);  
    }
        
    break;
        
  case 2:
    if (hum2.vida <= 0 && turno == 2) {
      turno++;
      Tturno.text = "turno: " +turno;
    } else {
      humImg2.setScale(4.5);
      humImg1.setScale(4);
    }
    
    break;

  case 3:
    if (hum3.vida <= 0 && turno == 3) {
      turno++;
      Tturno.text = "turno: " +turno;
    } else {
      humImg3.setScale(4.5);
      humImg2.setScale(4);
    }
    break;
a
  case 4:
      humImg3.setScale(4);
      jefeImg.setScale(5.5);
    break;
    
  default:
    break;
}

///////////////////////////////////////////////// eliminar unidades
if (hum1.vida <= 0) {
  humImg1.destroy();
  vidaH1.text  = "";
}
if (hum2.vida <= 0) {
  humImg2.destroy();
  vidaH2.text  = "";
}
if (hum3.vida <= 0) {
  humImg3.destroy();
  vidaH3.text  = "";
}

//////////////////////////////////////////////// sprites humanos
humImg1.on('pointerdown',()=> {
  if (ataque == "si" && turno == 4) {
        hum1.vida -= jefe.ataque;
        vidaH1.text = hum1.vida + "/" + hum1.vidaMax;
        ataque = "no";
        turno= 1;
        Tturno.text = "turno: " +turno;
  }})
humImg1.on('pointerover',()=> {
  if (turno == 4) {
    humImg1.setScale(4.1); 
  }
})
humImg1.on('pointerout', ()=> {
  humImg1.setScale(4);
})

humImg2.on('pointerdown',()=> {
  if (ataque == "si" && turno == 4) {
    hum2.vida -= jefe.ataque;
    vidaH2.text = hum2.vida + "/" + hum2.vidaMax;
    ataque = "no";
    turno= 1;
    Tturno.text = "turno: " +turno;
}})
humImg2.on('pointerover',()=> {
  if (turno == 4) {
    humImg2.setScale(4.1); 
  }
})
humImg2.on('pointerout', ()=> {
  humImg2.setScale(4);
})

humImg3.on('pointerdown',()=> {
  if (ataque == "si" && turno == 4) {
    hum3.vida -= jefe.ataque;
    vidaH3.text = hum3.vida + "/" + hum3.vidaMax;
    ataque = "no";
    turno= 1;
    Tturno.text = "turno: " +turno;
}})
humImg3.on('pointerover',()=> {
  if (turno == 4) {
    humImg3.setScale(4.1); 
  }
})
humImg3.on('pointerout', ()=> {
  humImg3.setScale(4);
})


////////////////////////////////////////////////////////// sprite jefe
jefeImg.on('pointerdown',()=> {
  if (ataque == "si") {
    switch (turno) {
        case 1:
        jefe.vida -= hum1.ataque;
        turno++;
        Tturno.text = "turno: " +turno;
        vidaJefe.text = jefe.vida + "/" + jefe.vidaMax;
        ataque = "no";
        break;

        case 2:
        jefe.vida -= hum2.ataque;
        turno++;
        Tturno.text = "turno: " +turno;
        vidaJefe.text = jefe.vida + "/" + jefe.vidaMax;
        ataque = "no";
        break;

        case 3:
        jefe.vida -= hum3.ataque;
        turno++;
        Tturno.text = "turno: " +turno;
        vidaJefe.text = jefe.vida + "/" + jefe.vidaMax;
        ataque = "no";
        break;
    
      default:
        break;
    }}})
jefeImg.on('pointerover',()=> {
  if (turno < 4) {
    jefeImg.setScale(5.1); 
  }
})
jefeImg.on('pointerout', ()=> {
  jefeImg.setScale(5);
})
}
}