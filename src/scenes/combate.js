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
      criatImg2 = this.add.image(1400, 400, 'esqueletos').setInteractive();
      criatImg2.setScale(4);
      break;
  
    case "mago":
      criatImg2 = this.add.image(1400, 400, 'mago').setInteractive();
      criatImg2.setScale(4);
      break;
  
    case "polilla":
      criatImg2 = this.add.image(1400, 400, 'polilla').setInteractive();
      criatImg2.setScale(4);
      break;
  
    default:
      break;
}

switch (criat3.nombre) {
    case "esqueletos":
      criatImg3 = this.add.image(1600, 400, 'esqueletos').setInteractive();
      criatImg3.setScale(4);
      break;
    
      case "mago":
        criatImg3 = this.add.image(1600, 400, 'mago').setInteractive();
        criatImg3.setScale(4);
        break;
    
      case "polilla":
        criatImg3 = this.add.image(1600, 400, 'polilla').setInteractive();
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
      atacar.enable = false;
    });
}


update(){

  if (hum1.vida == 0 && hum3.vida == 0 && hum2.vida == 0) {
    this.scene.start("winGuardian")
  }
 
  if (criat1.vida == 0 && criat2.vida == 0 && criat3.vida == 0) {
    this.scene.start("mapa", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas })
  }

  humImg1.on('pointerdown',()=> {
    if (atacar.enable == false) {
      switch (turno) {
        case 4:
          hum1.vida -= criat1.ataque;
          atacar.enable = true;
          turno++
          break;

          case 5:
          hum1.vida -= criat2.ataque;
          atacar.enable = true;
          turno++
          break;

          case 6:
          hum1.vida -= criat3.ataque;
          atacar.enable = true;
          turno = 1;
          break;
      
        default:
          break;
      }}})

  humImg1.on('pointerover',()=> {
    humImg1.setScale(4.1);
  })

  humImg1.on('pointerout', ()=> {
    humImg1.setScale(4);
  })


  humImg2.on('pointerdown',()=> {
    if (atacar.enable == false) {
      switch (turno) {
        case 4:
          hum2.vida -= criat1.ataque;
          atacar.enable = true;
          turno++
          break;

          case 5:
          hum2.vida -= criat2.ataque;
          atacar.enable = true;
          turno++
          break;

          case 6:
          hum2.vida -= criat3.ataque;
          atacar.enable = true;
          turno = 1;
          break;
      
        default:
          break;
      }}})

  humImg2.on('pointerover',()=> {
    humImg2.setScale(4.1);
  })

  humImg2.on('pointerout', ()=> {
    humImg2.setScale(4);
  })
  

  humImg3.on('pointerdown',()=> {
    if (atacar.enable == false) {
      switch (turno) {
        case 4:
          hum3.vida -= criat1.ataque;
          atacar.enable = true;
          turno++
          break;

          case 5:
          hum3.vida -= criat2.ataque;
          atacar.enable = true;
          turno++
          break;

          case 6:
          hum3.vida -= criat3.ataque;
          atacar.enable = true;
          turno = 1;
          break;
      
        default:
          break;
      }}})

  humImg3.on('pointerover',()=> {
    humImg3.setScale(4.2);
  })

  humImg3.on('pointerout', ()=> {
    humImg3.setScale(4);
  })


  criatImg1.on('pointerdown',()=> {
    if (atacar.enable == false) {
      switch (turno) {
        case 1:
          criat1.vida -= hum1.ataque;
          atacar.enable = true;
          turno++
          break;

          case 2:
          criat1.vida -= hum2.ataque;
          atacar.enable = true;
          turno++
          break;

          case 3:
          criat1.vida -= hum3.ataque;
          atacar.enable = true;
          turno++;
          break;
      
        default:
          break;
      }}})

  criatImg1.on('pointerover',()=> {
    criatImg1.setScale(4.2);
  })

  criatImg1.on('pointerout', ()=> {
    criatImg1.setScale(4);
  })


  criatImg2.on('pointerdown',()=> {
    if (atacar.enable == false) {
      switch (turno) {
        case 1:
          criat2.vida -= hum1.ataque;
          atacar.enable = true;
          turno++
          break;

          case 2:
          criat2.vida -= hum2.ataque;
          atacar.enable = true;
          turno++
          break;

          case 3:
          criat2.vida -= hum3.ataque;
          atacar.enable = true;
          turno++;
          break;
      
        default:
          break;
      }}})

  criatImg2.on('pointerover',()=> {
    criatImg2.setScale(4.2);
  })

  criatImg2.on('pointerout', ()=> {
    criatImg2.setScale(4);
  })


  criatImg3.on('pointerdown',()=> {
    if (atacar.enable == false) {
      switch (turno) {
        case 1:
          criat3.vida -= hum1.ataque;
          atacar.enable = true;
          turno++
          break;

          case 2:
          criat3.vida -= hum2.ataque;
          atacar.enable = true;
          turno++
          break;

          case 3:
          criat3.vida -= hum3.ataque;
          atacar.enable = true;
          turno++;
          break;
      
        default:
          break;
      }}})

  criatImg3.on('pointerover',()=> {
    criatImg3.setScale(4.2);
  })

  criatImg3.on('pointerout', ()=> {
    criatImg3.setScale(4);
  })
}
}