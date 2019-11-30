import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DialButton } from '../Buttons'

class App extends Component {
  constructor(props) {
    super(props);
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
                <div className="col d-flex flex-column col-9">
                  <div className="btn-group">
                    <DialButton caption='7'/>
                    <DialButton caption='7'/>
                    <DialButton caption='7'/>
                  </div>
                  <div className="btn-group">
                    <DialButton caption='7'/>
                    <DialButton caption='7'/>
                    <DialButton caption='7'/>
                  </div>
                </div>
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
