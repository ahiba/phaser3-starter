import * as React from 'react';
import {setup, teardown} from './Snake';

export class Game extends React.PureComponent {
  componentDidMount() {
    setup('phaser-game');
  }

  componentWillUnmount() {
    teardown();
  }

  render() {
    return <div id="phaser-game" />;
  }
}
