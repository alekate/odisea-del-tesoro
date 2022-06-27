import Button from "../js/button.js";

var sala;
var hum1;
var hum2;
var hum3;
var criaturas;
var criat1;
var criat2;
var criat3;
var humImg1;
var humImg2;
var humImg3;
var turno = 1;
var Tturno;
var ataque = "";
var criatImg1;
var criatImg2;
var criatImg3;
var vidaH1;
var vidaH2;
var vidaH3;
var vidaC1;
var vidaC2;
var vidaC3;

export class combate extends Phaser.Scene {
    constructor() {
      super("combate");
    }

init(data) {
      sala = data.sala;
      hum1 = data.hum1;
      hum2 = data.hum2;
      hum3 = data.hum3;
      criaturas = data.criaturas;
      criat1 = data.criat1;
      criat2 = data.criat2;
      criat3 = data.criat3;
      console.log(data);
  }

create() {

////////////////////////////////////////////// carteles de salud
  const text = this.add.text(0, 0, "Sala de Combate", {
    fontSize: "32px",
    fill: "#FFFFFF",
  });

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

vidaC1 = this.add.text(1170, 650, criat1.vida + "/" + criat1.vidaMax, {
  fontSize: "32px",
  fill: "#FFFFFF",
})

vidaC2 = this.add.text(1430, 650, criat2.vida + "/" + criat2.vidaMax, {
  fontSize: "32px",
  fill: "#FFFFFF",
})

vidaC3 = this.add.text(1670, 650, criat3.vida + "/" + criat3.vidaMax, {
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

////////////////////////////////////////////// selector de sprites criaturas
switch (criat1.nombre) {
    case "esqueletos":
      criatImg1 = this.add.image(1200, 400, 'esqueletos').setInteractive();
      criatImg1.setScale(4);
      break;
  
    case "mago":
      criatImg1 = this.add.image(1200, 400, 'mago').setInteractive();
      criatImg1.setScale(4);
      break;
  
    case "polilla":
      criatImg1 = this.add.image(1200, 400, 'polilla').setInteractive();
      criatImg1.setScale(4);
      break;
  
    default:
      break;
}

switch (criat2.nombre) {
    case "esqueletos":
      criatImg2 = this.add.image(1450, 400, 'esqueletos').setInteractive();
      criatImg2.setScale(4);
      break;
  
    case "mago":
      criatImg2 = this.add.image(1450, 400, 'mago').setInteractive();
      criatImg2.setScale(4);
      break;
  
    case "polilla":
      criatImg2 = this.add.image(1450, 400, 'polilla').setInteractive();
      criatImg2.setScale(4);
      break;
  
    default:
      break;
}

switch (criat3.nombre) {
    case "esqueletos":
      criatImg3 = this.add.image(1700, 400, 'esqueletos').setInteractive();
      criatImg3.setScale(4);
      break;
    
      case "mago":
        criatImg3 = this.add.image(1700, 400, 'mago').setInteractive();
        criatImg3.setScale(4);
        break;
    
      case "polilla":
        criatImg3 = this.add.image(1700, 400, 'polilla').setInteractive();
        criatImg3.setScale(4);
        break;
    
      default:
        break;
}

  const atacar = new Button(
    900,1000,
    "atacar",
    this,
    () => {
     ataque = "si"
    });
}


update(){

///////////////////////////////////////////////// win condition
  if (hum1.vida <= 0 && hum3.vida <= 0 && hum2.vida <= 0) {
    this.scene.start("winGuardian")
  }
  if (criat1.vida <= 0 && criat2.vida <= 0 && criat3.vida <= 0) {
    turno = 1;
    this.scene.start("mapa", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas })
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
if (criat1.vida <= 0) {
  criatImg1.destroy();
  vidaC1.text  = "";
}
if (criat2.vida <= 0) {
  criatImg2.destroy();
  vidaC2.text  = "";
}
if (criat3.vida <= 0) {
  criatImg3.destroy();
  vidaC3.text  = "";
}

////////////////////////////////////////////////// indicador de turno
    
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

  case 4:
    if (criat1.vida <= 0 && turno == 4) {
      turno++;
      Tturno.text = "turno: " +turno;
    } else {
     criatImg1.setScale(4.5);
     humImg3.setScale(4);
    }
    
    break;

  case 5:
    if (criat2.vida <= 0 && turno == 5) {
      turno++;
      Tturno.text = "turno: " +turno;
    } else {
     criatImg2.setScale(4.5);
     criatImg1.setScale(4);
    }
    
    break;

  case 6:
    if (criat3.vida <= 0 && turno == 6) {
      turno = 1;
      Tturno.text = "turno: " +turno;
    } else {
      criatImg3.setScale(4.5);
    criatImg2.setScale(4);
    }
    break;

  default:
    break;
}
  
  
    
//////////////////////////////////////////////// humanos
  humImg1.on('pointerdown',()=> {
    if (ataque == "si") {
      switch (turno) {
          case 4:
          hum1.vida -= criat1.ataque;
          turno++;
          vidaH1.text = hum1.vida + "/" + hum1.vidaMax;
          Tturno.text = "turno: " +turno;
          ataque = "no";
          break;

          case 5:
          hum1.vida -= criat2.ataque;
          turno++;
          vidaH1.text = hum1.vida + "/" + hum1.vidaMax;
          Tturno.text = "turno: " +turno;
          ataque = "no";
          break;

          case 6:
          hum1.vida -= criat3.ataque;
          turno = 1;
          vidaH1.text = hum1.vida + "/" + hum1.vidaMax;
          Tturno.text = "turno: " +turno;
          ataque = "no";
          break;
      
        default:
          break;
      }}})
  humImg1.on('pointerover',()=> {
    if (turno >= 4) {
    humImg1.setScale(4.1); 
  }
  })
  humImg1.on('pointerout', ()=> {
    humImg1.setScale(4);
  })

  humImg2.on('pointerdown',()=> {
    if (ataque == "si") {
      switch (turno) {
          case 4:
          hum2.vida -= criat1.ataque;
          turno++;
          vidaH2.text = hum2.vida + "/" + hum2.vidaMax;
          Tturno.text = "turno: " +turno;
          ataque = "no";
          break;

          case 5:
          hum2.vida -= criat2.ataque;
          turno++;
          vidaH2.text = hum2.vida + "/" + hum2.vidaMax;
          Tturno.text = "turno: " +turno;
          ataque = "no";
          break;

          case 6:
          hum2.vida -= criat3.ataque;
          turno = 1;
          vidaH2.text = hum2.vida + "/" + hum2.vidaMax;
          Tturno.text = "turno: " +turno;
          ataque = "no";
          break;
      
        default:
          break;
      }}})
  humImg2.on('pointerover',()=> {
    if (turno >= 4) {
      humImg2.setScale(4.1); 
    }
  })
  humImg2.on('pointerout', ()=> {
    humImg2.setScale(4);
  })
  
  humImg3.on('pointerdown',()=> {
    if (ataque == "si") {
      switch (turno) {
        case 4:
          hum3.vida -= criat1.ataque;
          turno++;
          vidaH3.text = hum3.vida + "/" + hum3.vidaMax;
          Tturno.text = "turno: " +turno;
          ataque = "no";
          break;

          case 5:
          hum3.vida -= criat2.ataque;
          turno++;
          vidaH3.text = hum3.vida + "/" + hum3.vidaMax;
          Tturno.text = "turno: " +turno;
          ataque = "no";
          break;

          case 6:
          hum3.vida -= criat3.ataque;
          turno = 1;
          vidaH3.text = hum3.vida + "/" + hum3.vidaMax;
          Tturno.text = "turno: " +turno;
          ataque = "no";
          break;
      
        default:
          break;
      }}})
  humImg3.on('pointerover',()=> {
    if (turno >= 4) {
      humImg3.setScale(4.1); 
    }
  })
  humImg3.on('pointerout', ()=> {
    humImg3.setScale(4);
  })

  /////////////////////////////////////// criaturas
  criatImg1.on('pointerdown',()=> {
    if (ataque == "si") {
      switch (turno) {
        case 1:
          if (hum1.nombre == "arquero" && criat1.nombre == "polilla") {
            criat1.vida = 0;
          } else {
            if (hum1.nombre == "caballero" && criat1.nombre == "esqueletos") {
            criat1.vida = 0;
          } else {
            if (hum1.nombre == "piromano" && criat1.nombre == "mago") {
            criat1.vida = 0;
          } else {
          criat1.vida -= hum1.ataque;
          }}}
          turno++;
          vidaC1.text = criat1.vida + "/" + criat1.vidaMax;
          Tturno.text = "turno: " +turno;
          ataque = "no";
          break;

          case 2:
            if (hum2.nombre == "arquero" && criat1.nombre == "polilla") {
              criat1.vida = 0;
            } else {
              if (hum2.nombre == "caballero" && criat1.nombre == "esqueletos") {
              criat1.vida = 0;
            } else {
              if (hum2.nombre == "piromano" && criat1.nombre == "mago") {
              criat1.vida = 0;
            } else {
            criat1.vida -= hum2.ataque;
            }}}
            turno++;
          vidaC1.text = criat1.vida + "/" + criat1.vidaMax;
          Tturno.text = "turno: " +turno;
          ataque = "no";
          break;

          case 3:
            if (hum3.nombre == "arquero" && criat1.nombre == "polilla") {
              criat1.vida = 0;
            } else {
              if (hum3.nombre == "caballero" && criat1.nombre == "esqueletos") {
              criat1.vida = 0;
            } else {
              if (hum3.nombre == "piromano" && criat1.nombre == "mago") {
              criat1.vida = 0;
            } else {
            criat1.vida -= hum3.ataque;
            }}}
            turno++;
          vidaC1.text = criat1.vida + "/" + criat1.vidaMax;
          Tturno.text = "turno: " +turno;
          ataque = "no";
          break;
      
        default:
          break;
      }}})
  criatImg1.on('pointerover',()=> {
    if (turno < 4) {
      criatImg1.setScale(4.1); 
    }
  })
  criatImg1.on('pointerout', ()=> {
    criatImg1.setScale(4);
  })

  criatImg2.on('pointerdown',()=> {
    if (ataque == "si") {
      switch (turno) {
        case 1:
          if (hum1.nombre == "arquero" && criat2.nombre == "polilla") {
            criat2.vida = 0;
          } else { 
          if (hum1.nombre == "caballero" && criat2.nombre == "esqueletos") {
            criat2.vida = 0;
          } else {
            if (hum1.nombre == "piromano" && criat2.nombre == "mago") {
            criat2.vida = 0;
          } else {
          criat2.vida -= hum1.ataque;
          }}}
          turno++;
          vidaC2.text = criat2.vida + "/" + criat2.vidaMax;
          Tturno.text = "turno: " +turno;
          ataque = "no";
          break;

          case 2:
            if (hum2.nombre == "arquero" && criat2.nombre == "polilla") {
              criat2.vida = 0;
            } else {
            if (hum2.nombre == "caballero" && criat2.nombre == "esqueletos") {
              criat2.vida = 0;
            } else{ 
            if (hum2.nombre == "piromano" && criat2.nombre == "mago") {
              criat2.vida = 0;
            } else {
            criat2.vida -= hum2.ataque;
            }}}
            turno++;
          vidaC2.text = criat2.vida + "/" + criat2.vidaMax;
          Tturno.text = "turno: " +turno;
          ataque = "no";
          break;

          case 3:
            if (hum3.nombre == "arquero" && criat2.nombre == "polilla") {
              criat2.vida = 0;
            } else {
              if (hum3.nombre == "caballero" && criat2.nombre == "esqueletos") {
              criat2.vida = 0;
            } else {
              if (hum3.nombre == "piromano" && criat2.nombre == "mago") {
              criat2.vida = 0;
            } else {
            criat2.vida -= hum3.ataque;
            }}}
            turno++;
          vidaC2.text = criat2.vida + "/" + criat2.vidaMax;
          Tturno.text = "turno: " +turno;
          ataque = "no";
          break;
      
        default:
          break;
      }}})
  criatImg2.on('pointerover',()=> {
    if (turno < 4) {
      criatImg2.setScale(4.1); 
    }
  })
  criatImg2.on('pointerout', ()=> {
    criatImg2.setScale(4);
  })

  criatImg3.on('pointerdown',()=> {
    if (ataque == "si") {
      switch (turno) {
        case 1:
          if (hum1.nombre == "arquero" && criat3.nombre == "polilla") {
            criat3.vida = 0;
          } else {
            if (hum1.nombre == "caballero" && criat3.nombre == "esqueletos") {
            criat3.vida = 0;
          } else {
            if (hum1.nombre == "piromano" && criat3.nombre == "mago") {
            criat3.vida = 0;
          } else {
          criat3.vida -= hum1.ataque;
          }}}
          turno++;
          vidaC3.text = criat3.vida + "/" + criat3.vidaMax;
          Tturno.text = "turno: " +turno;
          ataque = "no";
          break;

          case 2:
            if (hum2.nombre == "arquero" && criat3.nombre == "polilla") {
              criat3.vida = 0;
            } else {
              if (hum2.nombre == "caballero" && criat3.nombre == "esqueletos") {
              criat3.vida = 0;
            } else {
              if (hum2.nombre == "piromano" && criat3.nombre == "mago") {
              criat3.vida = 0;
            } else {
            criat3.vida -= hum2.ataque;
            }}}
            turno++;
          vidaC3.text = criat3.vida + "/" + criat3.vidaMax;
          Tturno.text = "turno: " +turno;
          ataque = "no";
          break;

          case 3:
            if (hum3.nombre == "arquero" && criat3.nombre == "polilla") {
              criat3.vida = 0;
            } else {
              if (hum3.nombre == "caballero" && criat3.nombre == "esqueletos") {
              criat3.vida = 0;
            } else {
              if (hum3.nombre == "piromano" && criat3.nombre == "mago") {
              criat3.vida = 0;
            } else {
            criat3.vida -= hum3.ataque;
            }}}
            turno++;
          vidaC3.text = criat3.vida + "/" + criat3.vidaMax;
          Tturno.text = "turno: " +turno;
          ataque = "no";
          break;
      
        default:
          break;
      }}})
  criatImg3.on('pointerover',()=> {
    if (turno < 4) {
      criatImg3.setScale(4.1); 
    }
  })
  criatImg3.on('pointerout', ()=> {
    criatImg3.setScale(4);
  })
}
}