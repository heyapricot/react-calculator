import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DialButton } from '../Buttons'

class App extends Component {
  constructor(props) {
    super(props);
  }

  dialPad(){
    const numbers = Array.from(Array(9).keys()).map((value, index) => index + 1);
    return <div className='col d-flex flex-column col-9'>
      <div className='btn-group'>
        {numbers.slice(6).map(number => <DialButton caption={number}/>)}
      </div>
      <div className='btn-group'>
        {numbers.slice(3,6).map(number => <DialButton caption={number}/>)}
      </div>
      <div className='btn-group'>
        {numbers.slice(0,3).map(number => <DialButton caption={number}/>)}
      </div>
    </div>
  }

  render() {
    return (
      <div className="App-header">
        <div className="container">
          <div className="row">
            <div className="col text-right" style={ { color: 'fff' } }>
              <h1>3.1416</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="row">
              </div>
              <div className="row">
                {this.dialPad()}
                <div className="col">

                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
