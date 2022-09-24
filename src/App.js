import React, { useState } from 'react';
import './style.css';
import FirstChild from './FirstChild';
import SecondChild from './SecondChild';

export default function App() {
  const [firstVal, setFirstVal] = useState('');
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <input type="text" value={firstVal} onChange={(e) => setFirstVal(e.target.value)} />
      <FirstChild />
      <SecondChild />
    </div>
  );
}
