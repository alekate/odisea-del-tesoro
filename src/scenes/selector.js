export class selector extends Phaser.Scene {
    constructor() {
      super("selector");
    }

    create() {


        const text = this.add.text(0, 0, "Selector de unidades", {
            fontSize: "32px",
            fill: "#FFFFFF",
        })

        const boton = new Button(
            this.cameras.main.centerX + this.cameras.main.centerX / 2,
            this.cameras.main.centerY + this.cameras.main.centerY / 2,
            "unidad 1",
            this,
            () => {
              this.scene.start("mapa");
            }
      
          );

          const boton1 = new Button(
            this.cameras.main.centerX ,
            this.cameras.main.centerY,
            "unidad 2",
            this,
            () => {
              this.scene.start("mapa");
            }
      
          );

          const boton2 = new Button(
            this.cameras.main.centerX - this.cameras.main.centerX / 2,
            this.cameras.main.centerY,
            "unidad 3 ",
            this,
            () => {
              this.scene.start("mapa");
            }
      
          );
    }
}