import React from 'react';

// import { MemoryRouter as Router } from 'react-router';
// import { BrowserRouter, Route } from "react-router-dom";

import { Link as RouterLink, NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import { grey } from '@material-ui/core/colors';
// import Link from '@material-ui/core/Link';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    top: 36,
    right: 0,
    left: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navBar: {
    backgroundColor: '#616161'
  },
  link: {
    // backgroundColor: '#f5f5f5',
    color: 'white'
  }
}));

export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  return (

      <div className={classes.root}>
        {/* <ClickAwayListener onClickAway={handleClickAway}> */}
          <Grid container>
            <Grid item xs={12}>
              <AppBar className={classes.navBar} position="static">
                <Toolbar>
                  {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                      <MenuIcon />
                    </IconButton> */}
                  <Typography variant="h6" className={classes.title}>
                    Chuck Norris Facts
                  </Typography>
                  {/* <Link component={RouterLink} to="/">Home</Link> */}
                  {/* <Link component={RouterLink} to="/"></Link> */}
                  <Button color="inherit" className={classes.button}><RouterLink className={classes.link} to="/" >Jokes</RouterLink></Button>
                  <Button color="inherit" className={classes.button}>
                    <RouterLink className={classes.link} to="/favorites">Favorite jokes</RouterLink>
                  </Button>
                  <Button color="inherit" className={classes.button}><RouterLink className={classes.link} to="/about" >About</RouterLink></Button>
                </Toolbar>
              </AppBar>
            </Grid>
          </Grid>
        {/* </ClickAwayListener> */}
      </div>

  );
}