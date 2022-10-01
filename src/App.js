import {React, useState } from 'react'

export default function App() {
  const [counter, setCounter] = useState(0);
  
  //increase
  const increase = () => {
    setCounter(count => count + 1);
  };

  // decrease counter
  const decrease = () => {
    if (counter > 0) {
    setCounter(count => count - 1);
    }
  };
  

  // reset counter 
  const reset = () => {
    setCounter(0)
  }

  return (
    <div className="counter">
      <h1>React Counter</h1>
      <span className="counting">
        {counter}
      </span>
      <div className='btn'>
        <button className="btns" onClick={increase}>+</button>
        <button className="btns" onClick={decrease} >-</button>
        <button className='reset' onClick={reset} >Reset</button>
      </div>
    </div>
  );
}