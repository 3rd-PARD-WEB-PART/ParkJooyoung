import './Form.css';
import styled from "styled-components";
import Email from './Email';
import Button from './Button';
import Name from './Name.js';
import Message from './Message.js';

function App() {
  return (
    <div>
      <form>
        <Name />
        <Email />
        <Message />
        <Button />
      </form>
    </div>
  );
}

export default App;
