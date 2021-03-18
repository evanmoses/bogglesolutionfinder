import React, { useState } from 'react'

import { makeStyles, withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'


function Solutions(props) {
  const [filterLetters, setFilterLetters] = useState(['All']);
  const [filterNumbers, setFilterNumbers] = useState(['All']);
  const [lettersAll, setLettersAll] = useState(true);
  const [numbersAll, setNumbersAll] = useState(true);

  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const numOfLetters = ['2', '3', '4', '5', '6', '7+']

  const classes = useStyles();

  const handleLetterChange = (event, newLetters) => {
    setLettersAll(false)
    setFilterLetters(newLetters);
  }

  const handleLettersAll = event => {
    setLettersAll(true)
    setFilterLetters(['All']);
  }

  const handleNumberChange = (event, newNumber) => {
    setNumbersAll(false);
    setFilterNumbers(newNumber);
  }

  const handleNumbersAll = event => {
    setNumbersAll(true);
    setFilterNumbers(['All']);
  }

  const sortAndFilter = () => {
    const sortedByLetter = props.solution.sort();
    const sortedByLength = sortedByLetter.sort((a, b) => {
      return a.length - b.length;
    })
    const smallLetters = filterLetters.map(x => x.toLowerCase());
    const parsedNumbers = filterNumbers.flatMap(x => {
      if (x === '7+') {
        return ([7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
      }
      return parseInt(x)
    });

    const filteredByLetter = lettersAll ? [...sortedByLength] :  sortedByLength.filter(item => smallLetters.includes(item[0]));

    const filteredByNumber = numbersAll ? [...filteredByLetter] :
    filteredByLetter.filter(item => parsedNumbers.includes(item.length))

    return filteredByNumber.map(x => <div key={x}>{x}</div>);
  }

  return (
    !props.solution.length ? null :
    <ThemeProvider theme={theme}>
      <div className={classes.root}>

        <Grid container className={classes.container} >
          <div>Filter results by:</div>
          <div>Letter</div>
          <Paper className={classes.paper}>

            <AllButton
              value='check'
              selected={lettersAll}
              onChange={handleLettersAll}
              size='small'
            >
              All
            </AllButton>
            <StyledToggleButtonGroup
              value={filterLetters}
              onChange={handleLetterChange}
            >
              {letters.map(letter => (
                <ToggleButton
                  key={letter}
                  value={letter}
                  size='small'
                >
                  {letter}
                </ToggleButton>
              ))}
            </StyledToggleButtonGroup>
          </Paper>
          <div>Number</div>
          <Paper className={classes.paper}>
            <AllButton
              value='check'
              selected={numbersAll}
              onChange={handleNumbersAll}
              size='small'
            >
              All
            </AllButton>
            <NumberToggleGroup
              value={filterNumbers}
              onChange={handleNumberChange}
            >
              {numOfLetters.map(number => (
                <ToggleButton
                  key={number}
                  value={number}
                  size='small'
                >
                  {`${number} letters`}
                </ToggleButton>
              ))}
            </NumberToggleGroup>
          </Paper>
        </Grid>
        <Grid className={classes.columns}>{sortAndFilter()}</Grid>
      </div>
    </ThemeProvider>
  );
}


export default Solutions;

const theme = createMuiTheme({
  breakpoints: {
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
    color: '#b0bec5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    display: 'none',
  },
  button: {
    margin: '0 10px'
  },
  container: {
    flexDirection: 'column',
    alignItems: 'left',
    width: 'fit-content',
  },
  paper: {
    width: 'fit-content',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    border: '0px',
    boxShadow: 'none',
  },
  columns: {
    columns: '100px 7',
    marginLeft: '50px'
  }

}));


const StyledToggleButtonGroup = withStyles(theme => ({
  root: {
    flexWrap: 'wrap',
    justifyContent: 'center',

    [theme.breakpoints.between('lg','xl')]: {
      minWidth: '755px'
    },

    [theme.breakpoints.between('md', 'md')]: {
      minWidth: '380px',
      maxWidth: '380px',
    },

    [theme.breakpoints.between('xs', 'sm')]: {
      minWidth: '262px',
      maxWidth: '262px',
    },

  },
  grouped: {
    lineHeight: '1',
    minWidth: '30px',
    maxWidth: '30px',
    margin: '0',
  },
}))(ToggleButtonGroup);

const NumberToggleGroup = withStyles(theme => ({
  root: {

    [theme.breakpoints.between('lg','xl')]: {
      minWidth: '650px'
    },

    [theme.breakpoints.between('md', 'md')]: {
      minWidth: '328px',
      maxWidth: '328px',
    },

    [theme.breakpoints.between('xs', 'sm')]: {
      minWidth: '219px',
      maxWidth: '219px',
    },

  },
  grouped: {
    minWidth: '110px',
    maxWidth: '110px',
  },
}))(StyledToggleButtonGroup);

const AllButton = withStyles(theme => ({
  root: {
    lineHeight: '1',
    maxHeight: '28px',
    marginRight: '3px',
  }
}))(ToggleButton);
