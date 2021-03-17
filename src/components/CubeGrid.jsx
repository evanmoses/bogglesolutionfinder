import React from 'react';
import { useMediaQuery } from '../lib/useMediaQuery';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase'
import Box from '@material-ui/core/Box'



function CubeGrid(props) {
  const isSmall = useMediaQuery('(max-width: 520px)');
  const classes = useStyles();

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
                  key={`input${index}`}
                  value={props.rolledLetters[index]}
                  inputProps={{maxLength: 1}}
                  onFocus={e => props.handleOnFocus(e,index)}
                  onChange={e => {
                    props.handleInputChange(e,index);
                  }}
                  style={
                    ['W','M','Z'].indexOf(props.rolledLetters[index]) > -1 ?
                      wmzStyle.apply(isSmall) :
                        props.rolledLetters[index] === 'Qu' ? quStyle.apply(isSmall) : defStyle.apply(isSmall)
                  }
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

const wmzStyle = {
  apply: isSmall => ({
    textDecoration: 'underline',
    fontSize: isSmall ? '36px' : '62px',
  })
};

const quStyle = {
  apply: isSmall => ({
    fontSize: isSmall ? '30px' : '56px',
  })
};

const defStyle = {
  apply: isSmall => ({
    fontSize: isSmall ? '38px' : '68px',
  })
};

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
  root: {
    fontWeight: 700,
    fontFamily: 'TexGyreHerosBold',
    height: '100%',
    padding: '0',
    transform: 'translateY(-5%)',
  },
  input: {
    textAlign: 'center',
    textTransform: 'capitalize',
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
