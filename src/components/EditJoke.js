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

  // function handleChange(event) {
  //   console.log('TCL: handleChange -> event', event);
  //   setName(event.target.value);
  // }
  function textValueChange(e) {
    console.log('%c Log this:', 'background: black; color: red;',  e.target.value);
  }
  function handleEdit(e, id , joke) {
    console.log('TCL: handleEdit -> e', e);
    console.log('TCL: handleEdit -> id', id);
    console.log('TCL: handleEdit -> joke', joke);
    console.log('%c Log this:', 'background: black; color: green;', refElement.current);
    e.preventDefault();
    props.updateJoke(id, joke)
  }
  const jokeId = props.jokeValue.id
  const jokeForEdit = props.jokeValue.joke
  console.log('TCL: EditJoke -> props', props);
  return(
    <Paper>
      <form className={classes.container} noValidate autoComplete="off" onSubmit={event => handleEdit(event, jokeId )}>
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
          onChange={textValueChange}
        />
        <Button variant="contained" onClick={event => handleEdit(event, jokeId, jokeForEdit )}>Update</Button>
      </form>
  </Paper>
  )
}

const mapStateToProps = state => {
  console.log("TCL: mapStateToProps -> state", state)
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // deleteJoke: id => dispatch(actionCreators.deleteJoke(id)),
    updateJoke: (id, joke) => dispatch(actionCreators.updateJoke(id, joke))
    // updateJoke
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditJoke) 