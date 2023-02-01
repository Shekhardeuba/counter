import React,{useState,useEffect} from 'react';
import './App.css';
import './darkMode.css';

const App =() => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => 
{theme === 'light'? setTheme('dark') : setTheme('light')
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  const [count,setCount] = useState(0);
  return (
    <div className={`App ${theme}`}>
        <button className="toggle" onClick={toggleTheme}>Toggle Theme</button>
        <h1> Counter App </h1>
        <h2 className='container'> {count} </h2>
        <button className='Increment' onClick={()=> setCount (count + 1)}>Increment</button>
        <button className='Decrement' onClick={()=> setCount (count - 1)}>Decrement</button>
        <button className='Reset' onClick={()=> setCount (0)}>Reset</button>
    </div>
  );
}

export default App;
