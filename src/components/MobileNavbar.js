import React from 'react';

import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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
    color: 'black',
    underline: 'hover',
  }
}))

function MobileNavbar() {
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

        </Menu>

    </div>
  )
}

export default MobileNavbar;