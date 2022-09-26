import React, { useState } from 'react';
import './style.css';
import FirstChild from './FirstChild';
import Counter from './Counter';

export default function App() {
  const [firstVal, setFirstVal] = useState('');
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <input type="text" value={firstVal} onChange={(e) => setFirstVal(e.target.value)} />
      <FirstChild />
      <Counter />
    </div>
  );
}
