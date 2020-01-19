/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  countUp = ()=> {
    this.setState({ counter: ++this.state.counter });
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center', fontWeight: 'lighter' }}>Counter component</h1>
        <h2 style={{ textAlign: 'center' }}>{ this.state.counter}</h2>
        <button onClick={this.countUp} style={{ backgroundColor: 'blue', padding: '5px', color: 'white', fontWeight: 'bolder', border: '0px',fontSize:'22px', marginLeft: '40%', width:'250px' }}>CountUp</button>
      </div>
    )
  }
}

