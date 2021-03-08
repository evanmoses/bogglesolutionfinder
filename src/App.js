import React, { useState, useCallback, useEffect } from 'react';
import './App.css';

import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import blue from '@material-ui/core/colors/blue'

import Buttons from './components/Buttons.jsx';
import CubeGrid from './components/CubeGrid.jsx';

import generateRandom from './lib/cubearray.js';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '8%',
  }
}))

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: {
      main: blue[700],
    }
  },
})


function App() {

  const [rolledLetters, setRolledLetters] = useState(new Array(16).fill(' '));
  const classes = useStyles();

  const handleInputChange = (event, index) => {
    const newLetter = event.target.value;
    let newArr = [...rolledLetters];
    newArr[index] = newLetter;
    updateLetters(newArr);
  }

  const updateLetters = useCallback(async (letters) => {
    await setRolledLetters(letters);
  }, []);

  const handleGetRandomClick = () => {
    const randomArray = generateRandom();
    updateLetters(randomArray);
  }

  useEffect(() => {
    updateLetters(rolledLetters);
  }, [updateLetters]);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <div className={classes.root}>
          <CubeGrid rolledLetters={rolledLetters} handleInputChange={handleInputChange}/>
          <Buttons handleGetRandomClick={handleGetRandomClick}/>
        </div>
        <div>{rolledLetters}</div>
      </div>
    </ThemeProvider>
  );
}

export default App;
