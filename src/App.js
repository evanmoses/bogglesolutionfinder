import React, { useState, useCallback, useEffect } from 'react';
import './App.css';
// import ClipLoader from 'react-spinners';

import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import blue from '@material-ui/core/colors/blue'

import Buttons from './components/Buttons.jsx';
import CubeGrid from './components/CubeGrid.jsx';
import Solutions from './components/Solutions.jsx';


import generateRandom from './lib/cubearray.js';

function App() {
  const [rolledLetters, setRolledLetters] = useState(new Array(16).fill(' '));

  const classes = useStyles();

  const handleOnFocus = (event, index) => {
    let newLetter = '';
    let newArr = [...rolledLetters];
    newArr[index] = newLetter;
    updateLetters(newArr);
  }

  const handleInputChange = async (event, index) => {
    let newLetter = event.target.value.toUpperCase();
    if (newLetter === 'Q') newLetter = 'Qu';
    let newArr = [...rolledLetters];
    newArr[index] = newLetter;
    updateLetters(newArr);
  }

  const updateLetters = useCallback((letters) => {
    setRolledLetters(letters);
  }, []);

  const handleGetRandomClick = () => {
    const randomArray = generateRandom();
    updateLetters(randomArray);
  }

  useEffect(() => {
    updateLetters(rolledLetters);
  }, [rolledLetters, updateLetters]);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CubeGrid
          rolledLetters={rolledLetters} handleInputChange={handleInputChange} handleOnFocus={handleOnFocus}
        />
        <Buttons
          handleGetRandomClick={handleGetRandomClick}
        />
        <Solutions />
      </div>
    </ThemeProvider>
  );
}

export default App;


const useStyles = makeStyles(theme => ({
  root: {
    margin: '5% 10%',
  },
}))

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: {
      main: blue[700],
    }
  },
})
