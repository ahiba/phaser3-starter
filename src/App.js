import React, {Component} from 'react';
import './App.css';
import {Game} from './game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Phaser 3 Starter</h1>
        <Game />
      </div>
    );
  }
}

export default App;
