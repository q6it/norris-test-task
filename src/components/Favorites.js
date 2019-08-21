import React, { useRef } from "react"

import  * as actionCreators from '../actions/actions';

import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { connect } from "react-redux"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}))
function FavoriteJokes(props) {
  const refElement = useRef(null);
  // render() {
    console.log("favorite comp props", props)
    const favoriteJokes = props.state.savedJokes ? props.state.savedJokes : "no saved jokes jet"
    const deleteJoke = (id) => {
      props.deleteJoke(id)
    }

    return (
      <div>
        {Object.values(favoriteJokes).map((value, i) => {
          // return <div key={i}>{value.joke}</div>
          console.log('TCL: //render -> value.id', value.id);
          return <Paper key={value.id} id={value.id} ref={refElement}>
            {/* <Typography variant="h6" component="h3" ref={value => this.getTextValue = value}> */}
            <Typography variant="h6" component="h3" >
              {value.joke}
            </Typography>
            <Button >Edit</Button>
            <Button onClick={() => deleteJoke(value.id)}>Delete</Button>
          </Paper>
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
    deleteJoke: id => dispatch(actionCreators.deleteJoke(id))
    // updateJoke
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteJokes)
