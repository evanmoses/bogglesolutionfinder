import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase'
import Box from '@material-ui/core/Box'

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
  }
})(InputBase);

const Cube = withStyles({
  root: {
    width: '90px',
    height: '90px',
    background: "linear-gradient(#E8E6DC, #8f8779)",
    borderRadius: '5%',
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
  if (!props.rolledLetters) {
    return null
  }
  return (
    <Grid container>
      <Grid container>
        <Cube>
          <Circle>
            <BoggleInput value={props.rolledLetters[0]} onChange={props.handleInputChange} />
          </Circle>
        </Cube>
        <Cube>
          <Circle>
            <BoggleInput value={props.rolledLetters[1]} onChange={props.handleInputChange} />
          </Circle>
        </Cube>
        <Cube>
          <Circle>
            <BoggleInput value={props.rolledLetters[2]} onChange={props.handleInputChange} />
          </Circle>
        </Cube>
        <Cube>
          <Circle>
            <BoggleInput value={props.rolledLetters[3]} onChange={props.handleInputChange} />
          </Circle>
        </Cube>
      </Grid>
      <Grid container>
      <Cube>
        <Circle>
          <BoggleInput value={props.rolledLetters[4]} onChange={props.handleInputChange} />
        </Circle>
      </Cube>
      <Cube>
        <Circle>
          <BoggleInput value={props.rolledLetters[5]} onChange={props.handleInputChange} />
        </Circle>
      </Cube>
      <Cube>
        <Circle>
          <BoggleInput value={props.rolledLetters[6]} onChange={props.handleInputChange} />
        </Circle>
      </Cube>
      <Cube>
        <Circle>
          <BoggleInput value={props.rolledLetters[7]} onChange={props.handleInputChange} />
        </Circle>
      </Cube>
      </Grid>
      <Grid container>
        <Cube>
          <Circle>
            <BoggleInput value={props.rolledLetters[8]} onChange={props.handleInputChange} />
          </Circle>
        </Cube>
        <Cube>
          <Circle>
            <BoggleInput value={props.rolledLetters[9]} onChange={props.handleInputChange} />
          </Circle>
        </Cube>
        <Cube>
          <Circle>
            <BoggleInput value={props.rolledLetters[10]} onChange={props.handleInputChange} />
          </Circle>
        </Cube>
        <Cube>
          <Circle>
            <BoggleInput value={props.rolledLetters[11]} onChange={props.handleInputChange} />
          </Circle>
        </Cube>
      </Grid>
      <Grid container>
      <Cube>
        <Circle>
          <BoggleInput value={props.rolledLetters[12]} onChange={props.handleInputChange} />
        </Circle>
      </Cube>
      <Cube>
        <Circle>
          <BoggleInput value={props.rolledLetters[13]} onChange={props.handleInputChange} />
        </Circle>
      </Cube>
      <Cube>
        <Circle>
          <BoggleInput value={props.rolledLetters[14]} onChange={props.handleInputChange} />
        </Circle>
      </Cube>
      <Cube>
        <Circle>
          <BoggleInput value={props.rolledLetters[15]} onChange={props.handleInputChange} />
        </Circle>
      </Cube>
      </Grid>
    </Grid>
  );
}

export default CubeGrid;
