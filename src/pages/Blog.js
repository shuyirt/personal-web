import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import Navigator from '../Components/Frame/Navigator';


const styles = {

};

const Blog = (props) => {
  const { classes } = props;

  return (
    <div>
      <Navigator page={"Blog"}/>
      <p>This page is working in progress</p>
    </div>
  )
};

Blog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);

