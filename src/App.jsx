import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Quote from "./quote"

function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <Quote/>
    </div>
  );
}

export default App;
