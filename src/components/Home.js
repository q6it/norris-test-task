import React, { useRef } from 'react';
import  * as actionCreators from '../actions/actions';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import Popover from '@material-ui/core/Popover';

import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#3e2723',
  },
}));

function Home (props) {
  const [anchorEl, setAnchorEl] = React.useState(false);
  const classes = useStyles();
  const refElement = useRef(null);

  const getRandomJoke = () => {
    props.fetchJokes();
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    // props.fetchCategories();
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const getJokeByCategory = e => {
    const selectedCategory = e.target.textContent;
    props.fetchJokes(selectedCategory);
  }

  const saveJoke = () => {
    const jokeId = refElement.current.attributes ? refElement.current.attributes.id.value : null
    const selectedJoke = refElement.current.textContent;
    console.log("TCL: saveJoke -> refElement.current", refElement.current)
    if (!jokeId) return 
    props.saveJoke(jokeId, selectedJoke)
  }

  const fetchedJoke = props.state.value ? (
    <div className={classes.root} ref={refElement} id={props.state.id}>{ props.state.value }</div>
    ) : (
      <div> Loading new jokes...</div>
    );
    console.log("TCL: Home -> props", props)
  // const alertMessage = props.state.savedJokes ? props.state.savedJokes.map(x => {
  //   if (x.saved){
  //     return <div>already saved</div>
  //   } else {

  //   }
  //   }) : ''
  // console.log("TCL: Home -> alertMessage", alertMessage)

  return (
    <div className={classes.root}>
      <Grid container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Button variant="contained" color="primary" className={classes.button} onClick={getRandomJoke}>
            Random
          </Button>
          <Button variant="contained" color="primary" className={classes.button} onClick={handleClick}> Select Category</Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {
              props.state.categories ? props.state.categories.map((value, index) => {
                if (index <= 3) {
                  return <MenuItem key={index} onClick={event =>{ handleClose(); getJokeByCategory(event) }}>{value}</MenuItem>
                }
              }) : ''
            }
          </Menu>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            { fetchedJoke }
            <Button variant="contained" color="primary" className={classes.button} onClick={saveJoke}>Save</Button>
            {/* { alertMessage } */}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
  // }
};

const mapStateToProps = (state) => {
  console.log("TCL: mapStateToProps -> state", state)
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchJokes: jokes => dispatch(actionCreators.fetchJokes(jokes)),
    // fetchCategories: categories => dispatch(actionCreators.fetchCategories(categories)),
    saveJoke: (id,joke) => dispatch(actionCreators.saveJoke(id, joke)),
    
    // deleteContact: index =>dispatch(contactAction.deleteContact(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;