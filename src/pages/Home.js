import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import Typography from '@material-ui/core/Typography';
import HomeButton from '../Components/Button/HomeButton.js';
import background from '../img/background.jpeg';

const styles = {
  root: {
    margin: 0,
    padding: 0,
    width: '100vw',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundImage: `url( ${background} )`,
    zIndex: -1,
  },
  mask: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(49, 52, 53, 35%)',
    zIndex: 0,

  },
  content: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    display: 'flex',
  },
  name: {
    fontFamily: 'Abel, sans-serif',
  },

  quote: {
    color: "#ffffff",
    paddingTop: '25px'
  }
};

const Home = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root} >
      <div className={classes.mask}> </div>
      <div className={classes.content}>
        <Typography
          className={classes.name}
          variant="h1"
          gutterBottom
        >
          Shuyi Tao
        </Typography>
        <div className={classes.buttonGroup}>
          <HomeButton text={"Profile"} />
          <HomeButton text={"Project"} />
          <HomeButton text={"Blog"} />
        </div>
        <div className={classes.quote}>
          <Typography
            variant="h5"
            align="center"
            color="inherit"
          >
            I went to the woods because I wished to live deliberately.
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="inherit"
          >
            -Henry David Thoreau
          </Typography>
        </div>
      </div>
    </div>
  )
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
