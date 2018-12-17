import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import Navigator from './Navigator';
import background from '../../img/header.jpeg';



const style = theme => ({
  root: {
    margin: 0,
    padding: 0,
    display: 'block',
    minHeight: '350px',
  },
  picture:{
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    maxHeight: '350px',
    position: 'absolute',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url( ${background} )`,
    zIndex: -1,
  }
});

const Header = (props) => {
  const { classes, page } = props;
  return (
    <div className={classes.root}>
      <div className={classes.picture}>

      </div>
      <Navigator/>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  page:  PropTypes.string.isRequired
};

export default withStyles(style)(Header);