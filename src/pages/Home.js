import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button/Button";
import background from '../img/home2.jpeg';

const styles = {
  root: {
    margin: 0,
    padding: 0,
    width: '100vw',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundImage: `url( ${background} )`
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  }

};

const Home = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root} >
      <div className={classes.content}>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Shuyi Tao
        </Typography>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          I went to the woods because I wished to live deliberately. -Henry David Thoreau
        </Typography>
        <div>
          <Button color="inherit">Profile</Button>
          <Button color="inherit">Project</Button>
          <Button color="inherit">Blog</Button>
        </div>
      </div>
    </div>
  )
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);