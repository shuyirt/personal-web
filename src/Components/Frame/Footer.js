import React from 'react';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/es/Typography/Typography";
import { ReactComponent as ReactIcon } from "../../img/react.svg";
import { ReactComponent as MaterialIcon } from "../../img/material-ui.svg";

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    width: '100%',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

});

function Footer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant={"body1"} color={"inherit"}>
        Created with React <ReactIcon /> and Material UI <MaterialIcon/>
      </Typography>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);

