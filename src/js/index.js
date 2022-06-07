import { preloads } from "../scenes/preloads.js";
import { mainmenu } from "../scenes/mainmenu.js";
import { combate } from "../scenes/combate.js";
import { mapa } from "../scenes/mapa.js";
import { descanso } from "../scenes/descanso.js";
import { unidades } from "../scenes/unidades.js";
import { creditos } from "../scenes/creditos.js";
import { winGuardian } from "../scenes/winGuardian.js";
import { winHumanos } from "../scenes/winHumanos.js";
import { pausa } from "../scenes/pausa.js";
import { combateJefe } from "../scenes/pausaJefe.js";

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 800,
      height: 600,
    },
    max: {
      width: 1600,
      height: 1200,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  // Listado de todas las escenas del juego, en orden
  // La primera escena es con la cual empieza el juego
  scene: [preloads, mainmenu, unidades, mapa, combate, descanso, combateJefe, pausa, creditos, winGuardian, winHumanos],
};

var game = new Phaser.Game(config);
