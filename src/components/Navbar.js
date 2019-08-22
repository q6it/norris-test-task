import React from 'react';

import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';
import MobileNavbar from './MobileNavbar';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: 'relative',
  },
  title: {
    flexGrow: 1,
  },
  navBar: {
    backgroundColor: '#333333'
  },
  link: {
    padding: theme.spacing(2),
    color: 'white',
    underline: 'hover',
  }
}));

function NavbarMain() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
          <Grid container>
            <Grid item xs={12}>
              <AppBar className={classes.navBar} position="static">
                <Toolbar>
                  <Typography variant="h6" className={classes.title}>
                    Chuck Norris Facts
                  </Typography>
                  <Hidden smUp>
                    <MobileNavbar />
                  </Hidden>
                  <Hidden xsDown>
                    <Link className={classes.link} component={RouterLink} to="/" >Jokes</Link>
                    <Link className={classes.link} component={RouterLink} to="/favorites">Favorite jokes</Link>
                    <Link className={classes.link} component={RouterLink} to="/about" >About</Link>
                  </Hidden>
                </Toolbar>
              </AppBar>
            </Grid>
          </Grid>
      </div>
  );
};

NavbarMain.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(NavbarMain)