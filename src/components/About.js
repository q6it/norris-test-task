import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import VideocamIcon from '@material-ui/icons/Videocam';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import ComputerIcon from '@material-ui/icons/Computer';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundImage: ''
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
  },
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  aboutBoxDark: {
    background: '#515151',
    borderRadius: '5px',
    color: '#F0EFEF',
    padding: theme.spacing(2),
    margin: theme.spacing(1)
  },
  aboutBoxLight: {
    background: '#E4E4E4',
    borderRadius: '5px',
    padding: theme.spacing(2),
    margin: theme.spacing(1)
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: 32,
  },
}));

function About(props) {
  const classes = useStyles();
  
  const {width} = props;
  const changeGrid = () => {
    if (width === 'xl') {
      return 5;
    }
    if (width === 'lg') {
      return 4;
    }
    if (width === 'md') {
      return 5;
    }
    if (width === 'sm') {
      return 12;
    }
    if (width === 'xs') {
      return 12;
    }
    return 4;
  }

  return (
    <div className={classes.root} >
      <Paper className={classes.paper}>
          <Grid item xs={12}>
            <Grid item xs container direction="column">
              <Typography variant="h4" className={classes.title}>
                About me
              </Typography>
              <Grid container item xs={changeGrid()} className={classes.aboutBoxDark}>
                <Typography variant="body1" gutterBottom>
                    I'm  a web developer. Even though my path started from a different field.
                    I have an electrical engineering bachelor degree from TalTech and worked for beautifil 8 years in one Electrical Company.
                </Typography>
              </Grid>
              <Box display="flex" justifyContent="center" >
                <Grid container item xs={changeGrid()} className={classes.aboutBoxLight} >
                  <Typography variant="body1" gutterBottom>
                    But 2 years ago I realized that it's not what I want to do and found a new passion. With a couple of friends we started to learn javascript language.
                    Then I decided to take courses in information technology faculty at TalTech. I have accomplished <strong>Software Engineering</strong>, <strong>Network Applicatin</strong> and <strong>User Interfaces</strong> cause the front-end direction where more close to me.
                  </Typography>
                </Grid>
              </Box>
              <Box  display="flex" justifyContent="flex-end">
                <Grid container item xs={changeGrid()} className={classes.aboutBoxDark}>
                <Typography variant="body1" gutterBottom>
                  Now for more the 1.5 year I'm working as web developer. My goal is to continue evolve in this field and of course to make Web a better place =).
                </Typography>
                </Grid>
              </Box>
            </Grid>
          </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Typography variant="h4" className={classes.title}>
          Hobbies:
        </Typography>
        <Typography>
          <PhotoCameraIcon className={classes.icon} />
          <ComputerIcon className={classes.icon} />
          <VideocamIcon className={classes.icon} />
          <DirectionsRunIcon className={classes.icon} />
          <MusicNoteIcon className={classes.icon} />
          <FilterHdrIcon className={classes.icon} />
          <BeachAccessIcon className={classes.icon} />
        </Typography>
      </Paper>
    </div>
  );
};

About.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(About);