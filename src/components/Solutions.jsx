import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: '700px',
    margin: 'auto',
    padding: theme.spacing(2),
  },
  input: {
    display: 'none',
  },
  button: {
    margin: '0 10px'
  }

}));

function Solutions(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify={'center'} >
        <input
          accept='image/*'
          className={classes.input}
          id='contained-button-file'
          type='file'
        />
        <label htmlFor='contained-button-file'>
          <Button className={classes.button} variant='contained' color='primary' component='span'># of letters</Button>
        </label>
        <Button className={classes.button} variant='contained' color='primary' component='span' onClick={props.handleGetRandomClick}>starting with</Button>
      </Grid>
    </div>
  );
}

export default Solutions;
