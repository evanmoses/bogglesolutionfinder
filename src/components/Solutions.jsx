import React, { useState } from 'react'

import { makeStyles, withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'


function Solutions(props) {
  const [filterLetters, setFilterLetters] = useState(['All']);
  const [filterNumbers, setFilterNumbers] = useState([]);

  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const classes = useStyles();

  const handleLetterChange = (event, newLetters) => {
    setFilterLetters(newLetters);
  }

  return (
    !props.solution.length ? null :
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container justify={'center'} >
          <StyledToggleButtonGroup value={filterLetters} onChange={handleLetterChange}>
            {letters.map(letter => (
              <ToggleButton key={letter} value={letter}>{letter}</ToggleButton>
            ))}
          </StyledToggleButtonGroup>
        </Grid>
        {props.solution.map(x => <div key={x}>{x}</div>)}
      </div>
    </ThemeProvider>
  );
}


export default Solutions;

const theme = createMuiTheme({
  breakpoints: {
    // Define custom breakpoint values.
    // These will apply to Material-UI components that use responsive
    // breakpoints, such as `Grid` and `Hidden`. You can also use the
    // theme breakpoint functions `up`, `down`, and `between` to create
    // media queries for these breakpoints
    values: {
      xs: 0,
      sm: 370,
      md: 520,
      lg: 900,
      xl: 1200
    }
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: '1200px',
    margin: 'auto',
    padding: theme.spacing(0.5),
    color: '#b0bec5',
  },
  input: {
    display: 'none',
  },
  button: {
    margin: '0 10px'
  }

}));


const StyledToggleButtonGroup = withStyles((theme) => ({
  root: {
    flexWrap: 'wrap',
    justifyContent: 'center',

    [theme.breakpoints.up('lg')]: {
      flexWrap: 'nowrap',
    },

    [theme.breakpoints.between('md', 'lg')]: {
      minWidth: '450px',
    },

    [theme.breakpoints.between('sm', 'md')]: {
      minWidth: '320px',
    },

    [theme.breakpoints.between('xs', 'sm')]: {
      minWidth: '260px',
    }

  },
  grouped: {
    lineHeight: '1',
    minWidth: '35px',
    maxWidth: '35px',
    marginTop: '3px',
  },
}))(ToggleButtonGroup);
