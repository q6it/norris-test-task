import React, { useRef } from 'react';
import  * as actionCreators from '../actions/actions';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: 'auto',
    maxWidth: 600,
  },
  button: {
    "&:hover": {
      backgroundColor: "transparent",
      color: 'black'
    },
    margin: theme.spacing(2),
    backgroundColor: '#474242',
    color: 'white'
  },
  jokeActionButtons: {
    margin: theme.spacing(1),
  }
}));

function Home (props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();
  const refElement = useRef(null);

  const getRandomJoke = () => {
    props.fetchJokes();
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
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
    if (!jokeId) return 
    props.saveJoke(jokeId, selectedJoke)
  }

  const fetchedJoke = props.state.value ? (
    <div className={classes.paper} ref={refElement} id={props.state.id}>{ props.state.value }</div>
    ) : (
      <div> Loading new jokes...</div>
    );

  return (
    <div className={classes.root}>
      <Grid container
        // direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid container item xs={12} 
          justify="center"
          alignItems="center"
        >
          <Button variant="contained" color="primary" className={classes.button} onClick={handleClick}> Select Category</Button>
          <Button variant="contained" color="inherit" className={classes.button} onClick={getRandomJoke}>Random</Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
          >
            {
              // eslint-disable-next-line
              props.state.categories ? props.state.categories.map((value, index) => {
                //return only four categories from the categories list 
                if (index <= 3) {
                  return <MenuItem key={index} onClick={event =>{ handleClose(); getJokeByCategory(event) }}>{value}</MenuItem>
                } 
              }) : ''
            }
          </Menu>
        </Grid>

        <Grid container item xs={12}>
          <Paper className={classes.paper} >
            { fetchedJoke }
            <Button className={classes.jokeActionButtons} variant="contained" color="inherit" onClick={saveJoke}>Save</Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchJokes: jokes => dispatch(actionCreators.fetchJokes(jokes)),
    saveJoke: (id,joke) => dispatch(actionCreators.saveJoke(id, joke)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);