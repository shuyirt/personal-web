import React from 'react';
import Button from "@material-ui/core/Button/Button";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";

const styles = theme => ({
  button: {
    borderColor: '#ffffff',
    borderWidth: '2px',
    borderRadius: '8px',
    color: '#ffffff',
    fontWeight: 'bold',
    '&:hover': {
      color: '#001400',
      borderColor: '#ffffff',
      backgroundColor: '#ffffff',
      zIndex: 2,
    },
    margin: theme.spacing.unit,
  }

});


const HomeButton = (props) => {
  const { classes, text } = props;

  return (
    <Button
      variant="outlined"
      size="large"
      color="inherit"
      className={classes.button}
    >
      {text}
    </Button>
  )
};

HomeButton.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string,
};


export default withStyles(styles)(HomeButton);