import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const decrementHandler = () => {
    setCount(count - 1);
  }
  const incrementHandler = () => {
    setCount(count + 1);
  }
  console.log('Counter');
  return (<React.Fragment><h1>Counter</h1>
  <p>{count}</p>
  <p><button onClick={incrementHandler}>Increment ++ </button> <button onClick={decrementHandler}>Decrement --</button></p>
  </React.Fragment>);
};

export default React.memo(Counter);
