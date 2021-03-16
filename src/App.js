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
import { BoggleWords, MakeTrie } from './lib/solveGridAlt.jsx'
import { convertDict } from './lib/convertDict.js'

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


  const handleSolveClick = async function () {
    // const smallDict = ["aa", "aah", "aahed", "aahing", "aahs"]
    const dict = await convertDict();
    const d = await new MakeTrie(dict);
    console.log(d);

    var board = [
        'some',
        'lett',
        'qest',
        'otry'
    ];

    const solution = await BoggleWords(board, d);
    console.log(solution);
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
          handleSolveClick={handleSolveClick}
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
