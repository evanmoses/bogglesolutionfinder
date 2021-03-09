import React, { useMemo, createRef, useEffect } from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    margin: '0 0 20px',
  },
  control: {
    width: '400px',
    ['@media (max-width:520px)']: { // eslint-disable-line no-useless-computed-key
      width: '240px'
    },
  },
}))

const BoggleInput = withStyles({
  input: {
    textTransform: 'capitalize',
    fontSize: '68px',
    fontWeight: 700,
    textAlign: 'center',
    fontFamily: 'TexGyreHerosBold',
    height: '100%',
    padding: '0',
    transform: 'translateY(-5%)',
    ['@media (max-width:520px)']: { // eslint-disable-line no-useless-computed-key
      fontSize: '38px'
    }
  }
})(InputBase);

const Cube = withStyles({
  root: {
    width: '90px',
    height: '90px',
    background: "linear-gradient(#E8E6DC, #8f8779)",
    borderRadius: '5%',
    margin: '5px',
    ['@media (max-width:520px)']: { // eslint-disable-line no-useless-computed-key
      width: '50px',
      height: '50px',
    }
  }
})(Box);

const Circle = withStyles({
  root: {
    width: '100%',
    height: '100%',
    background: '#cecac0',
    borderRadius: '100%',
    boxShadow: 'inset 0 0 2px 2px #dcdacf'
  }
})(Box);

function CubeGrid(props) {

  const classes = useStyles();
  const refs = useMemo(
    () => Array.from({length: 16}).map(() => createRef()),
  []);

  useEffect(() => {
    refs.current[refs.length - 1].current.focus()
  },[refs])

  if (!props.rolledLetters) {
    return null
  }
  return (
    <Grid container className={classes.root}>
      <Grid container className={classes.control}>
        {props.rolledLetters.map((cube,index) => {
          return (
            <Cube key={`cube${index}`}>
              <Circle key={`circle${index}`}>
                <BoggleInput
                  key={index}
                  value={props.rolledLetters[index]}
                  inputProps={{maxLength: 1}}
                  ref={refs[index]}
                  onChange={(e) => {
                    props.handleInputChange(e,index)
                    // refs[index].next.focus();
                  }}

                />
              </Circle>
            </Cube>
          )
        })
        }
      </Grid>
    </Grid>
  );
}

export default CubeGrid;
