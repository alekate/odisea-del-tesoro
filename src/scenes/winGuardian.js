import Button from "../js/button.js";

export class winGuardian extends Phaser.Scene {
    constructor() {
      super("winGuardian");
    }

    create() {

      const text = this.add.text(0, 0, "Victoria (Guardian)", {
          fontSize: "32px",
          fill: "#FFFFFF",
      })

      const boton = new Button(
          this.cameras.main.centerX - this.cameras.main.centerX / 3,
          this.cameras.main.centerY + this.cameras.main.centerY / 2,
          "Volver a jugar",
          this,
          () => {
            this.scene.start("mapa");
          }
    
        );

        const boton1 = new Button(
          this.cameras.main.centerX + this.cameras.main.centerX / 3,
          this.cameras.main.centerY + this.cameras.main.centerY / 2,
          "Salir",
          this,
          () => {
            this.scene.start("mainmenu");
          }
    
        );
  }
}