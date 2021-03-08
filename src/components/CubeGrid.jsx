import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase'
import Box from '@material-ui/core/Box'

const BoggleInput = withStyles({

})(InputBase);

const Cube = withStyles({
  root: {
    width: '30px',
    height: '30px',
    background: "#dfdfdf",
  }
})(Box);

function CubeGrid() {

  return (
    <Grid container>
      <Grid container justify={'space-evenly'}>
        <Cube>
          <BoggleInput>A</BoggleInput>
        </Cube>
        <div>B</div>
        <div>D</div>
        <div>D</div>
      </Grid>
      <Grid container>
        <div>A</div>
        <div>B</div>
        <div>D</div>
        <div>D</div>
      </Grid>
      <Grid container>
        <div>A</div>
        <div>B</div>
        <div>D</div>
        <div>D</div>
      </Grid>
      <Grid container>
        <div>A</div>
        <div>B</div>
        <div>D</div>
        <div>D</div>
      </Grid>
    </Grid>
  );
}

export default CubeGrid;
