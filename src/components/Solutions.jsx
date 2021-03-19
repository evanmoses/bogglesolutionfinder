import React, { useEffect, useState } from 'react'

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
    (filterLetters.length === 2 && newLetters.length === 1) ? setLettersAll(true) : setLettersAll(false)
    setFilterLetters(newLetters);
  }

  const handleLettersAll = event => {
    setLettersAll(true);
    setFilterLetters(['All']);
}

  const handleNumberChange = (event, newNumber) => {
    (filterNumbers.length === 2 && newNumber.length === 1) ? setNumbersAll(true) : setNumbersAll(false)
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

    if (filteredByNumber.length > 0) {
      return (
        <Grid className={classes.columns}>
          {filteredByNumber.map(x => <div key={x}>{x}</div>)}
        </Grid>
      )
    } else {
      return 'No matches for your selection'
    }
  }

  return (
    !props.solution.length ? null :
      <div className={classes.root}>

        <Grid container className={classes.container} >
          <div className={classes.heading}>Filter results by:</div>
          <div className={classes.label}>Letter</div>
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
          <div className={classes.label}>Number</div>
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
        <Grid className={classes.results}>
        {sortAndFilter()}
        </Grid>
      </div>
  );
}


export default Solutions;

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
  results: {
    marginTop: '50px',
  },
  columns: {
    columns: '100px 7',
    margin: '0 0 0 50px',

    [theme.breakpoints.between('xs', 'sm')]: {
      columns: '70px 4',
      margin: '0 0 0 35px',
    },

  },
  heading: {
    marginTop: '30px',
    fontWeight: '500',
  },
  label: {
    margin: '10px 0 5px',
    fontSize: '0.8rem'
  }

}));


const StyledToggleButtonGroup = withStyles(theme => ({
  root: {
    flexWrap: 'wrap',
    justifyContent: 'center',

    [theme.breakpoints.between('lg','xl')]: {
      minWidth: '754px'
    },

    [theme.breakpoints.between('md', 'md')]: {
      minWidth: '377px',
      maxWidth: '377px',
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
    '&:not(:first-child)': {
     borderLeft: '1px solid #757575',
    },
    [theme.breakpoints.between('md', 'md')]: {
      '&:nth-child(13)': {
      borderTopRightRadius: '4px',
      borderBottomRightRadius: '4px',
      },
      '&:nth-child(14)': {
      borderTopLeftRadius: '4px',
      borderBottomLeftRadius: '4px',
      borderLeft: 'none',
      },
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      '&:nth-child(9n+0)': {
      borderTopRightRadius: '4px',
      borderBottomRightRadius: '4px',
      },
      '&:nth-child(9n+1)': {
      borderTopLeftRadius: '4px',
      borderBottomLeftRadius: '4px',
      borderLeft: 'none',
      },
    },
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
      minWidth: '218px',
      maxWidth: '218px',
    },

  },
  grouped: {
    minWidth: '110px',
    maxWidth: '110px',
    [theme.breakpoints.between('md', 'md')]: {
      '&:nth-child(3)': {
      borderTopRightRadius: '4px',
      borderBottomRightRadius: '4px',
      },
      '&:nth-child(4)': {
      borderTopLeftRadius: '4px',
      borderBottomLeftRadius: '4px',
      borderLeft: 'none',
      },
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      '&:nth-child(2n+0)': {
      borderTopRightRadius: '4px',
      borderBottomRightRadius: '4px',
      },
      '&:nth-child(2n+1)': {
      borderTopLeftRadius: '4px',
      borderBottomLeftRadius: '4px',
      borderLeft: 'none',
      },
    },
  },

}))(StyledToggleButtonGroup);

const AllButton = withStyles(theme => ({
  root: {
    lineHeight: '1',
    width: '50px',
    maxHeight: '28px',
    marginRight: '4px',
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '30ox',
    },
  }
}))(ToggleButton);
