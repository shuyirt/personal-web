import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import Navigator from '../Components/Frame/Navigator';


const styles = {

};

const Profile = (props) => {
  const { classes } = props;

  return (
    <div>
      <Navigator page={"Profile"}/>
    </div>
  )
};

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);

