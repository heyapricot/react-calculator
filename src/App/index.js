import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DialButton } from '../Buttons'
import { DialPad } from '../DialPad'
import { Display } from '../Display'

const OperationPad = ({ sumFn }) =>
  <div className="d-flex flex-column">
    <DialButton
      caption={'/'}
      className="btn btn-lg btn-warning"
    />
    <DialButton
      caption={'x'}
      className="btn btn-lg btn-warning"
    />
    <DialButton
      caption={'-'}
      className="btn btn-lg btn-warning"
    />
    <DialButton
      caption={'+'}
      onClick={() => sumFn()}
      className="btn btn-lg btn-warning"
    />
  </div>;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accumulator: 0,
      display: '0',
      overwriteDisplay: true,
      value: 0,
    };

    this.sum = this.sum.bind(this);
  }

  dial(char, display) {
    return `${(display === '0' ? '' : display)}${(char === '.' && display.includes('.')) ? '' : char }`
  }

  onButtonClick(char, display){
    const newDisplay = this.dial(char, display);
    this.setState(
      {
        display: newDisplay,
        overwriteDisplay: false,
        value: parseFloat(newDisplay) || 0,
      }
    );
  }

  sum(first, second){
    this.setState(
      {
        accumulator: (first + second),
        overwriteDisplay: true,
        display: (first + second)
      }
    );
  }

  render() {
    const { accumulator, display, overwriteDisplay, value } = this.state;

    return (
      <div className="App-header">
        <div className="container">
          <div className="row">
            <div className="col">
              <Display caption={ display } />
            </div>
          </div>
          <div className="row">
            <div className="col-9 pr-0">
              <div className="row">
                <div className="col">
                  
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <DialPad onClick={char => this.onButtonClick(char, overwriteDisplay ? '' : display)}/>
                </div>
              </div>
            </div>
            <div className="col pl-0">
              <OperationPad sumFn={() => this.sum(accumulator, value)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
