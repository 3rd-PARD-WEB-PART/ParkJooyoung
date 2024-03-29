import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

function App() {

  let counter = 0;

  const [counter2, setCounter2] = useState(0);

  const ref = useRef(0);
  const ref2 = useRef();

  const buttonHandler = () => {
    counter = counter + 1;
    // 크롬에서 값을 추적하려면 글로벌 변수여야 한다.
    window.counter = counter + 1;
  }

  const buttonHandler2 = () => {
    setCounter2((prev) => (prev) + 1)
  }

  const buttonHandler3 = () => {
    ref.current = ref.current + 1;
    console.log(ref);
  }

  useEffect(() => {
    ref2.current.focus();
    console.log("useEffect!");
  }, [counter2]);


  const [text, setText] = useState("")

  const onTextChange = (e) => {
    setText(e.target.value);
  }

  const onTextButton = () => {
    alert(text);
  }


  return (
    <div className="App">

      <div>state가 아닌 counter: {counter}</div>
      <button onClick={buttonHandler}>up</button>
      <div>useState: {counter2}</div>
      <button onClick={buttonHandler2}>upup</button>
      <div>useRef: <input ref={ref2}></input> {ref.current}</div>
      <button onClick={buttonHandler3}>upupup</button>

      <div>
        <input onChange={onTextChange}></input>
        <button onClick={onTextButton}>alert</button>
      </div>



    </div>
  );
}

export default App;
