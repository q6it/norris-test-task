import React, { useRef, useState } from "react"

import  * as actionCreators from '../actions/actions';

import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
  },
}));

function EditJoke(props) {

  const refElement = useRef(null);
  const classes = useStyles();

  const [value, setValue] = useState('');

  function handleEdit(e, id, joke) {
    e.preventDefault();
    const newValue = value !== '' ? value : joke
    props.updateJoke(id, newValue)
  }

  const jokeId = props.jokeValue.id
  const jokeForEdit = props.jokeValue.joke

  return(
    <Paper>
      <form className={classes.container} noValidate autoComplete="off" onSubmit={e => handleEdit(e, jokeId, jokeForEdit)}>
        <TextField
          id="standard-full-width"
          defaultValue={jokeForEdit}
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          ref={refElement}
          onChange={e => setValue(e.target.value)}
        />
        <Button variant="contained" onClick={e => handleEdit(e, jokeId, jokeForEdit)}>Update</Button>
      </form>
  </Paper>
  )
}

const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateJoke: (id, joke) => dispatch(actionCreators.updateJoke(id, joke))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditJoke) 