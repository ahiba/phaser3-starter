import MainScene from './MainScene';
import Phaser from 'phaser';

let game;

export function setup(divId) {
  var config = {
    type: Phaser.WEBGL,
    width: 640,
    height: 480,
    backgroundColor: '#bfcc00',
    parent: divId,
    scene: MainScene
  };

  // instantiates the game
  game = new Phaser.Game(config);
}

export function teardown() {
  game.destroy();
  game = null;
}
