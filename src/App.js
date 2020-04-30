import React, { Component } from 'react';
import Countdown from './Countdown.js';
import Button from '@material-ui/core/Button';
import Image from 'react-bootstrap/Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Missão Rama</h1>
        
        <h1 className="title">Tempo Restante</h1>
        <Countdown date={`2020-05-02T17:00:00`} />
        <div>
          <Button size="large" variant="contained" color="primary" href="#contained-buttons">
          ASSISTIR
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
