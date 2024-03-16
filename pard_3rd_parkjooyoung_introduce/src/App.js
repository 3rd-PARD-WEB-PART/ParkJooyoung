import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount((prev) => (prev) + 1)
  }

  return (
    <div className="App">
      <div>안녕</div>
    </div>
  );
}

export default App;
