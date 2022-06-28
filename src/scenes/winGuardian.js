export class winGuardian extends Phaser.Scene {
    constructor() {
      super("winGuardian");
    }

create() {

      const text = this.add.text(0, 0, "Victoria (Guardian)", {
          fontSize: "32px",
          fill: "#FFFFFF",
      })

var Salir = this.add.image(this.cameras.main.centerX,
  this.cameras.main.centerY + this.cameras.main.centerY / 2,'salir').setInteractive()
.on('pointerdown',()=> {this.scene.start("mainmenu")})
.on('pointerover',()=> {Salir.setScale(5.1)})
.on('pointerout',()=> {Salir.setScale(5)})
Salir.setScale(5);
        
  }
}