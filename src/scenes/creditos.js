export class creditos extends Phaser.Scene {
    constructor() {
      super("creditos");
    }

    create() {

      this.add.image(900, 400, 'logo').setScale(0.4);

        const text = this.add.text(350, 750, "The Keepers: Altamirano Irina, Barros Joaquín y Perot Alejo", {
            fontSize: "32px",
            fill: "#FFFFFF",
            //fontFamily: 'bold'
        })

        var volver = this.add.image(this.cameras.main.centerX,900,'volver').setInteractive()
        .on('pointerdown',()=> { this.scene.start("mainmenu"); })
        .on('pointerover', ()=> {volver.setScale(4.1)})
        .on('pointerout', ()=> {volver.setScale(4)});
        volver.setScale(4);
    }
}