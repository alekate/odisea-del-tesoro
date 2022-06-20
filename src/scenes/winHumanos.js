import Button from "../js/button.js";

export class winHumanos extends Phaser.Scene {
    constructor() {
      super("winHumanos");
    }

    create() {

      const text = this.add.text(0, 0, "Victoria (Humana)", {
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