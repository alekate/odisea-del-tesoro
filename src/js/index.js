import { preloads } from "../scenes/preloads.js";
import { mainmenu } from "../scenes/mainmenu.js";
import { combate } from "../scenes/combate.js";
import { mapa } from "../scenes/mapa.js";
import { descanso } from "../scenes/descanso.js";
import { creditos } from "../scenes/creditos.js";
import { winGuardian } from "../scenes/winGuardian.js";
import { winHumanos } from "../scenes/winHumanos.js";
import { pausa } from "../scenes/pausa.js";
import { combateJefe } from "../scenes/combateJefe.js";
import { selectorH } from "../scenes/selectorHumanos.js";
import { selectorC } from "../scenes/selectorCriaturas.js";

var config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  pixelArt: true,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 16,
      height: 9,
    },
    max: {
      width: 1920,
      height: 1080,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },

  scene: [preloads, mainmenu, selectorH, mapa, selectorC, combate, descanso, combateJefe, pausa, creditos, winGuardian, winHumanos],

};

var game = new Phaser.Game(config);
