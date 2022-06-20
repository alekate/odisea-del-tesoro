import Button from "../js/button.js";

var hum1;
var hum2;
var hum3;

export class combateJefe extends Phaser.Scene {
    constructor() {
      super("combateJefe");
    }

init(data) {
      hum1 = data.hum1;
      hum2 = data.hum2;
      hum3 = data.hum3;
  }

create() {
    
  const text = this.add.text(0, 0, "Combate de Jefe!", {
    fontSize: "32px",
    fill: "#FFFFFF",
  })
    
  const boton = new Button(
    this.cameras.main.centerX,
    this.cameras.main.centerY + this.cameras.main.centerY / 9,
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