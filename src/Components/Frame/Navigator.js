import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Pets from '@material-ui/icons/Pets';

const styles =  theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: '20px',
    paddingTop: '40px',
  },
  appBar: {
    background: 'transparent',
    boxShadow: 'none'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    float: 'right'
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    minHeight: "inherit",
    borderRadius: 0,
    fontSize: '16px',
    '&:hover': {
      borderBottom: '4px #ffffff solid',
    },
  },
  title: {
    flexGrow: 1,
  },
  chip:{
    fontSize: '24px',
    fontWeight: 'bold',
    '&:hover': {

    },
  }
});

const Navigator = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton className={classes.sectionMobile} color="inherit" aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            Shuyi Tao
          </Typography>
          <div className={classes.sectionDesktop}>
            <Button
              color="inherit"
              size={"large"}
              className={classes.button}
            >
              Profile
            </Button>
            <Button
              color="inherit"
              size={"large"}
              className={classes.button}
            >
              Projects
            </Button>
            <Button
              color="inherit"
              size={"large"}
              className={classes.button}
            >
              Blog
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);