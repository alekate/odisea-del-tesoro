export class winGuardian extends Phaser.Scene {
    constructor() {
      super("winGuardian");
    }

create() {

this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'winGuardian');

var Salir = this.add.image(1000,945,'salir').setInteractive()
.on('pointerdown',()=> {this.scene.start("mainmenu")})
.on('pointerover',()=> {Salir.setScale(5.1)})
.on('pointerout',()=> {Salir.setScale(5)})
Salir.setScale(5);
        
  }
}