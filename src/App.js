/* eslint-disable react/no-direct-mutation-state */
import React, { useState } from 'react'

import './App.scss'

export default function App (){
  const [counter, setCounter] = useState(0);
  
  function countUp(){
    setCounter(counter+1);
  }
  function countInit() {
    setCounter(0);
  }

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
          <h2 className="subtitle">Count : <strong>{counter}</strong></h2>
          <div>
            <button
              className="button is-primary is-outlined"
              style={{ marginRight: '5px' }}
              type="button"
              onClick={countUp}
            >
                <strong>CountUp</strong>
            </button>
            <button 
              className="button is-secondary" 
              type="button"
              onClick={countInit}
            >
                <strong>CountInit</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

