import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';

import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  // root: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'flex-end',
  // },
  icon: {
    margin: theme.spacing(2),
    color: 'white',
  },
  iconHover: {
    margin: theme.spacing(2),
    '&:hover': {
      color: 'white',
    },
  },
  link: {
    padding: theme.spacing(2),
    // backgroundColor: '#f5f5f5',
    color: 'black',
    underline: 'hover',
  }
}))

function MobileNavbar() {
  const ITEM_HEIGHT = 48;
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      {/* <Grid container> */}
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon  className={classes.icon} />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          // PaperProps={{
          //   style: {
          //     maxHeight: ITEM_HEIGHT * 4.5,
          //     width: 200,
          //   },
          // }}
        >
        <MenuItem>
          <Link className={classes.link} component={RouterLink} to="/" onClick={handleClose}>Jokes</Link>
        </MenuItem>
        <MenuItem>
          <Link className={classes.link} component={RouterLink} to="/favorites" onClick={handleClose}>Favorite jokes</Link>
        </MenuItem>
        <MenuItem>
          <Link className={classes.link} component={RouterLink} to="/about" onClick={handleClose}>About</Link>
        </MenuItem>
          {/* {options.map(option => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
              {option}
            </MenuItem>
          ))} */}
        </Menu>
      {/* </Grid> */}
    </div>
  )
}

export default MobileNavbar;