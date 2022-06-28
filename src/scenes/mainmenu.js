import Button from "../js/button.js";

export class mainmenu extends Phaser.Scene {
  constructor() {
    super("mainmenu");
  }

  create() {


    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondomenu');


     var jugar = this.add.image(this.cameras.main.centerX,700,'jugar').setInteractive()
    .on('pointerdown',()=> { this.scene.start("selectorH"); })
    .on('pointerover', ()=> {jugar.setScale(5.1)})
    .on('pointerout', ()=> {jugar.setScale(5)});
    jugar.setScale(5);


    var creditos = this.add.image(this.cameras.main.centerX,900,'creditos').setInteractive()
    .on('pointerdown',()=> {this.scene.start("creditos")})
    .on('pointerover', ()=> {creditos.setScale(5.1)})
    .on('pointerout', ()=> {creditos.setScale(5)});
    creditos.setScale(5);
  
  }
}
