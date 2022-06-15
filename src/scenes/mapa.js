import Button from "../js/button.js";


var sala;

export class mapa extends Phaser.Scene {
    constructor() {
      super("mapa");
    }

    init(data) {
        sala = data.sala;
    }

    create() {


        const text = this.add.text(0, 0, "Mapa", {
            fontSize: "32px",
            fill: "#FFFFFF",
        })

        const boton = new Button(
            this.cameras.main.centerX,
            this.cameras.main.centerY + this.cameras.main.centerY / 9,
            "Pausa",
            this,
            () => {
              this.scene.start("pausa");
            });

            
        const boton1 = new Button(
            this.cameras.main.centerX,
            this.cameras.main.centerY + this.cameras.main.centerY / 3,
            "Siguiente sala",
            this,
            () => {
                switch (sala) {
                    
                   case 1:{
                    this.scene.start("selector");
                    break;
                   }
                   case 2:{
                    this.scene.start("descanso");
                    break;
                   }
                   case 3:{
                    this.scene.start("combateJefe");
                    break;
                   }

                }
            });
    }
    
}