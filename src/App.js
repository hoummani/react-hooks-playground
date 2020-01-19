/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react'

import './App.scss'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.countUp = this.countUp.bind(this);
    this.countInit = this.countInit.bind(this);
  }
  countUp() {
    this.setState({ counter: this.state.counter + 1 });
  }
  countInit() {
    this.setState({ counter: 0});
  }

  render() {
    return (
      <div className="container" style={{ marginTop: '25px', padding: '20px' }}>
        <div className="has-padding-top-15">
          <div className="has-padding-5" style={{ marginLeft: '10px' }}>
            <h1 className="title">
              Welcome to React Hooks Features
            </h1>
            <p className="">
              React hooks let you use state and React lifecycle features without using class and React component lifecycle methods. They were introduced in React 16.8.
            </p>
            <br />
            <h2 className="subtitle">Count : <strong>{this.state.counter}</strong></h2>
            <div>
              <button
                className="button is-primary"
                style={{ marginRight: '5px' }}
                type="button"
                onClick={this.countUp}
              >
                  <strong>CountUp</strong>
              </button>
              <button 
                className="button is-secondary" 
                type="button"
                onClick={this.countInit}
              >
                  <strong>CountInit</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

