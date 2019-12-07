import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DialButton } from '../Buttons'
import { DialPad } from '../DialPad'
import { Display } from '../Display'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      decimal: 0,
      decimalEnabled: false,
      decimalPositions: 1,
      integer: 0,
    };

    this.dialNumber = this.dialNumber.bind(this);
    this.switchToDecimal = this.switchToDecimal.bind(this);
  }

  dialNumber(number) {
    let { decimal, decimalEnabled, decimalPositions, integer } = this.state;
    const calculateDecimal = (previous, increase, positions) => (previous + (increase / Math.pow(10, positions)));
    const calculateInteger = (previous, increase) => (previous * 10) + increase;
    const newState = () => {
      if(decimalEnabled) {
        return {
          decimal: calculateDecimal(decimal, number, decimalPositions),
          decimalPositions: decimalPositions + 1
        }
      }
      else {
        return {
          integer: calculateInteger(integer, number)
        }
      }
    };

    this.setState(
      newState
    )
  }

  operationPad(){
    return <div className="d-flex flex-column">
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
        className="btn btn-lg btn-warning"
      />
    </div>
  }

  switchToDecimal(){
    this.setState(
      {
        decimalEnabled: true,
      }
    );
  }

  render() {
    const { decimal, decimalEnabled, decimalPositions, integer } = this.state;

    return (
      <div className="App-header">
        <div className="container">
          <div className="row">
            <div className="col">
              <Display caption={ (decimalEnabled ? (integer + decimal).toFixed(decimalPositions - 1) : integer )  }/>
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
                  <DialPad numberFn={this.dialNumber} dotFn={this.switchToDecimal}/>
                </div>
              </div>
            </div>
            <div className="col pl-0">
              {this.operationPad()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
