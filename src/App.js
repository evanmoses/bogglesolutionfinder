import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from './components/Buttons.jsx'
import CubeGrid from './components/CubeGrid.jsx'
import cubeArray, {generateRandom} from './lib/cubearray.js'

function App() {
  const [rolledLetters, setRolledLetters] = useState(new Array(16).fill(''));

  const handleGetRandomClick = () => {
    const randomArray = generateRandom();
    setRolledLetters(randomArray);
  }

  return (
    <>
      <CubeGrid />
      <Buttons handleGetRandomClick={handleGetRandomClick}/>
      <div>{rolledLetters}</div>
    </>
  );
}

export default App;
