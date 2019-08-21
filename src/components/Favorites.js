import React, { useRef } from "react"

import  * as actionCreators from '../actions/actions';
import EditJoke from './EditJoke';

import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { connect } from "react-redux"
// import classes from '*.module.css';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
  },
}))

function FavoriteJokes(props) {
  const classes = useStyles();
  // const refElement = useRef(null);
  // render() {
    console.log("favorite comp props", props)
    const favoriteJokes = props.state.savedJokes ? props.state.savedJokes : "no saved jokes jet"

  const deleteJoke = id => {
    props.deleteJoke(id)
  }

  const editJoke = id => {
    props.editJoke(id)
  }

  return (
    <div className={classes.root}>
      {Object.values(favoriteJokes).map((value, i) => {
    console.log('TCL: //render -> value', value);
      // return <div key={i}>{value.joke}</div>
      return !value.edit ? <Paper className={classes.paper} key={i} id={value.id} >
      {/* <Typography variant="h6" component="h3" ref={value => this.getTextValue = value}> */}
      <Typography variant="h6" component="h3" >
        {value.joke}
      </Typography>
      <Button onClick={() => editJoke(value.id)}>Edit</Button>
      <Button onClick={() => deleteJoke(value.id)}>Delete</Button>
    </Paper> : <EditJoke key={i} id={value.id} jokeValue={value}/>
    })}
    </div>
  )
  // }
}

const mapStateToProps = state => {
  console.log("TCL: mapStateToProps -> state", state)
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteJoke: id => dispatch(actionCreators.deleteJoke(id)),
    editJoke: id => dispatch(actionCreators.editJoke(id))
    // updateJoke
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteJokes)
