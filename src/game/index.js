import * as React from 'react';
import Example from './Example';
import Phaser from 'phaser';

function createGame() {
  const config = {
    type: Phaser.AUTO,
    parent: 'phaser-game',
    width: 800,
    height: 600,
    scene: [Example]
  };

  new Phaser.Game(config);
}

export class Game extends React.PureComponent {
  componentDidMount() {
    createGame();
  }

  render() {
    return <div id="phaser-game" />;
  }
}
