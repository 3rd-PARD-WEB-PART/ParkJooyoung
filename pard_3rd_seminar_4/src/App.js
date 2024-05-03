import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import { Routes, Route } from "react-router-dom"
import MyInfo from './Pages/MyInfo';
import UpdateInfo from './Pages/UpdateInfo';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MyInfo />} />
      <Route path='/update' element={<UpdateInfo />} />
    </Routes>
  );
}

export default App;
