import React,{useState} from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  return (
    <div className="App">
      <h1> Counter App </h1>
      <h2> {count} </h2>
      <button className='Increment' onClick={()=> setCount (count + 1)}>Increment</button>
      <button className='Decrement' onClick={()=> setCount (count - 1)}>Decrement</button>
      <button className='Reset' onClick={()=> setCount (0)}>Reset</button>
    </div>
  );
}

export default App;
