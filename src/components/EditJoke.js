import React, { useRef, useState } from "react"

import  * as actionCreators from '../actions/actions';

import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    // margin: theme.spacing(1),
  },
  // textField: {
  //   marginLeft: theme.spacing(1),
  //   marginRight: theme.spacing(1),
  //   width: 200,
  // },
}));

function EditJoke(props) {
  // const [labelWidth, setLabelWidth] = React.useState(0);
  // const [setName] = useState(props.jokeValue.joke);
  const refElement = useRef(null);
  const classes = useStyles();

  const [value, setValue] = useState('');

  // function handleChange(event) {
  //   console.log('TCL: handleChange -> event', event);
  //   setName(event.target.value);
  // }
  // function textValueChange(e) {
  //   console.log('%c Log this:', 'background: black; color: red;',  e.target.value);
  //   return e.target.value;
  // }
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
        {/* <InputLabel htmlFor="component-simple">Name</InputLabel> */}
        {/* <Input id="component-simple" value={name} onChange={handleChange} /> */}
        <TextField
          id="standard-full-width"
          defaultValue={jokeForEdit}
          // label="Label"
          style={{ margin: 8 }}
          // placeholder="Placeholder"
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