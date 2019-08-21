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
  },
}));

function Home (props) {
  const [anchorEl, setAnchorEl] = React.useState(false);
  console.log("TCL: Home -> props", props)
  const classes = useStyles();
  const refElement = useRef(null);

  const getRandomJoke = () => {
    console.log('rand');
    props.fetchJokes();
  };

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
    props.fetchCategories();
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function getJokeByCategory(e) {
    console.log("TCL: handleClose -> e.target", e.target.textContent)
    const selectedCategory = e.target.textContent;
    props.fetchJokes(selectedCategory);
  }

  function saveJoke() {
    const jokeId = refElement.current.attributes.id.value
    console.log("TCL: saveJoke -> jokeId", jokeId)
    const selectedJoke = refElement.current.textContent;
    console.log("TCL: saveJoke -> selectedJoke", selectedJoke)
    props.saveJoke(jokeId, selectedJoke)
  }

  const jokes = props.state.value ? (
    <div className='container' ref={refElement} id={props.state.id}>{ props.state.value  }</div>
    ) : (
      <div className="container"> Loading new jokes...</div>
    )

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            { jokes }
            <Button variant="contained" color="primary" className={classes.button} onClick={saveJoke}>Save</Button>
          </Paper>
        </Grid>
        
        <Grid item xs={6}>
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

const mapDispatchToProps = (dispatch) => {
  return {
    // createContact: contact => dispatch(contactAction.createContact(contact)),
    fetchJokes: jokes => dispatch(actionCreators.fetchJokes(jokes)),
    fetchCategories: categories => dispatch(actionCreators.fetchCategories(categories)),
    saveJoke: (id,joke) => dispatch(actionCreators.saveJoke(id, joke)),
    
    // deleteContact: index =>dispatch(contactAction.deleteContact(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;