import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'


function Solutions(props) {
  const [filterLetters, setFilterLetters] = useState(['All']);
  const [filterNumbers, setFilterNumbers] = useState([]);

  const letters = ['All', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];

  const classes = useStyles();

  const handleLetterChange = (e, newLetters) => {
    setFilterLetters(e.target.value);
  }

  return (
    !props.solution.length ? null :
    <div className={classes.root}>
      <Grid container justify={'center'} >
        <ToggleButtonGroup value={useState} onChange={handleLetterChange}>
          {letters.map(letter => (
            <ToggleButton value={letter}>{letter}</ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Grid>
      {props.solution.map(x => <div>{x}</div>)}
    </div>
  );
}


export default Solutions;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: '700px',
    margin: 'auto',
    padding: theme.spacing(2),
    color: '#b0bec5',
  },
  input: {
    display: 'none',
  },
  button: {
    margin: '0 10px'
  }

}));
