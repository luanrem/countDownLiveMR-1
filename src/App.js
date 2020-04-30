import React, { Component } from 'react';
import Countdown from './Countdown.js';
import Button from '@material-ui/core/Button';
import Logo from './assets/MRLogo1.png';
import {GrYoutube, GrFacebook, GrInstagram} from 'react-icons/gr'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="sky-container">
          <div className="star"></div>
        </div>

        <img className="Logo" src={Logo} alt="Logo" />
        <h1 className="MRLogo">Missão Rama Live</h1>
        <h1 className="Chamada">Venha assistir a Live da Missão Rama.</h1>
        
        <Countdown date={`2020-05-02T17:00:00`} />
        <div>
          <Button size="large" variant="contained" color="primary" href="#contained-buttons">
          ASSISTIR
          </Button>

          <div className="Links">
            <a>
              <GrYoutube size="30px" />
            </a>

            <a>
              <GrFacebook size="30px" />
            </a>

            <a>
              <GrInstagram size="30px"/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
