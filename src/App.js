import React, {useState} from 'react';
import {Message} from './Message.js';
import './App.css'

function App() {
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(false);
  return (
    <div className = {`box ${isMorning ? 'daylight' : ''}`}>
      <h1>Have A Good {isMorning ? "Morning" : "Night"}</h1>
      <Message counter = {count}/>
      <br/>
      <button onClick={()=> setCount(++count)}>
        Update Counter</button>

      <button onClick={() => setMorning(!isMorning)}>Update Day</button>
    </div>
  );
}

export default App;
