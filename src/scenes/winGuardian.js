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

        const boton1 = new Button(
          this.cameras.main.centerX,
          this.cameras.main.centerY + this.cameras.main.centerY / 2,
          "Salir",
          this,
          () => {
            this.scene.start("mainmenu");
          }
    
        );
  }
}