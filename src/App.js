import React, { useState } from 'react';
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

  const [rolledLetters, setRolledLetters] = useState(new Array(16).fill(''));
  const classes = useStyles();

  const handleGetRandomClick = () => {
    const randomArray = generateRandom();
    setRolledLetters(randomArray);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <div className={classes.root}>
          <CubeGrid />
          <Buttons handleGetRandomClick={handleGetRandomClick}/>
        </div>
        <div>{rolledLetters}</div>
      </div>
    </ThemeProvider>
  );
}

export default App;
