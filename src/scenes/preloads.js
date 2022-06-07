export class preloads extends Phaser.Scene {
  constructor() {
    super("preloads");
  }

  preload() {
    this.load.image("phaser_logo", "public/assets/images/phaser_logo.png");
    this.load.image("mainmenu_bg","public/assets/images/main_menu_background.png");

  }

  create() {
    this.scene.start("mainmenu");
  }
}
