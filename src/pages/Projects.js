import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid';
import Project from "../Components/Single/Project";
import Faker from 'faker';
import Header from "../Components/Frame/Header";
import Footer from "../Components/Frame/Footer";

const styles = theme => ({
  root: {
    flexGrow: 1,

  },
  content: {
    background: '#eee',
    width: '100%',
    paddingTop: '30px',
    paddingBottom: '150px',
  }
});


const Projects = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Header page={"Project"}/>
      <div className={classes.content}>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="flex-start"
          spacing={24}
        >
          <Grid item xs={10} sm={5} >
            <Project
            />
          </Grid>
          <Grid item xs={10} sm={5} >
            <Project
            />
          </Grid>
        </Grid>
      </div>
      <Footer />



    </div>
  )
};

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
