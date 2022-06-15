import Button from "../js/button.js";

export class combateJefe extends Phaser.Scene {
    constructor() {
      super("combateJefe");
    }

create() {
    
  const text = this.add.text(0, 0, "Combate de Jefe!", {
    fontSize: "32px",
    fill: "#FFFFFF",
  })
    
  const boton = new Button(
    this.cameras.main.centerX,
    this.cameras.main.centerY + this.cameras.main.centerY / 3,
    "Ganar",
    this,
    () => {
    this.scene.start("winHumanos");
  });

  const boton1 = new Button(
    this.cameras.main.centerX,
    this.cameras.main.centerY + this.cameras.main.centerY / 3,
    "Perder",
    this,
    () => {
    this.scene.start("winGuardian");
  });
  }
            
}