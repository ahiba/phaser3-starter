import Phaser from 'phaser';
import Main from './Main';

export function setup(parentId) {
  var config = {
    type: Phaser.WEBGL,
    width: 640,
    height: 480,
    backgroundColor: '#bfcc00',
    parent: parentId,
    scene: Main
  };

  // instantiates the game
  new Phaser.Game(config);
}

export function teardown() {}
