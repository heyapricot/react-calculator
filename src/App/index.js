import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DialButton } from '../Buttons'
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

  dialPad(){
    const numbers = Array.from(Array(9).keys()).map((value, index) => index + 1);
    return <div className='d-flex flex-column'>
      <div className='btn-group'>
        {numbers.slice(6).map(number =>
          <DialButton
            caption={number}
            onClick={() => this.dialNumber(number)}
          />)}
      </div>
      <div className='btn-group'>
        {numbers.slice(3,6).map(number =>
          <DialButton
            caption={number}
            onClick={() => this.dialNumber(number)}
          />)}
      </div>
      <div className='btn-group'>
        {numbers.slice(0,3).map(number =>
          <DialButton
            caption={number}
            onClick={() => this.dialNumber(number)}
          />)}
      </div>
      <div className='btn-group'>
        <DialButton
          caption={0}
          onClick={() => this.dialNumber(0)}
        />
        <DialButton
          caption={'.'}
          onClick={() => this.switchToDecimal()}
        />
      </div>
    </div>
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
              </div>
              <div className="row">
                <div className="col">
                  {this.dialPad()}
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
