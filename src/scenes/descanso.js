
var sala;
var hum1;
var hum2;
var hum3;
var criaturas;

export class descanso extends Phaser.Scene {
    constructor() {
      super("descanso");
    }

    init(data) {
      sala = data.sala;
      hum1 = data.hum1;
      hum2 = data.hum2;
      hum3 = data.hum3;
      criaturas = data.criaturas;
  }
  
create() {
  var ataque = this.add.image(1300,951,'menos').setInteractive()
        .on('pointerdown',()=> {
          hum1.ataque += 1;
          hum2.ataque += 1;
          hum3.ataque += 1;
          sala++;
          this.scene.start("mapa", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });})
        .on('pointerover', ()=> {ataque.setScale(5.2)})
        .on('pointerout', ()=> {ataque.setScale(5.1)});
        ataque.setScale(5.1); 
        
  var vidaMax = this.add.image(700,951,'menos').setInteractive()
        .on('pointerdown',()=> {
          hum1.vidaMax += 1; 
              hum2.vidaMax += 1;
              hum3.vidaMax += 1;
              sala++;
              this.scene.start("mapa", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas })})
        .on('pointerover', ()=> {vidaMax.setScale(5.2)})
        .on('pointerout', ()=> {vidaMax.setScale(5.1)});
        vidaMax.setScale(5.1);
          
        var vida = this.add.image(200,951,'menos').setInteractive()
        .on('pointerdown',()=> {
          if (hum1.vida < hum1.vidaMax){
            hum1.vida += 1;
          }
          if (hum2.vida < hum2.vidaMax){
            hum2.vida += 1;
           }
          if (hum3.vida < hum3.vidaMax) {
            hum3.vida += 1;
          }
          sala++;
          this.scene.start("mapa", { hum1: hum1, hum2: hum2, hum3: hum3, sala: sala, criaturas: criaturas });})
        .on('pointerover', ()=> {vida.setScale(5.2)})
        .on('pointerout', ()=> {vida.setScale(5.1)});
        vida.setScale(5.1);
}
}