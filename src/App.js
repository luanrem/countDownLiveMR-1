import React, { Component } from 'react';
import Countdown from './Countdown.js';

class App extends Component {
  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <div className="App">
        <h1>Missão Rama</h1>
        <h1 className="title">Tempo Restante</h1>
        <Countdown date={`2020-05-02T17:00:00`} />
      </div>
    );
  }
}

export default App;
