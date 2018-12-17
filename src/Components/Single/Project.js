import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import GithubButton from '../../Components/Button/GithubButton';
import Faker from "faker";

const styles = theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '250px',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },

  },

  media: {
    width: 250,
    height: 250,
  },
  image: {
    width: '100%',
    height: '100%',
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  details: {
    paddingBottom: 0,
  },
  tag: {
    margin: theme.spacing.unit,
    color: theme.secondary,
    fontWeight: 'bold'
  },
  time: {
    color: "#3cc47c",
  },
  actions: {
    justifyContent: "flex-start",
    paddingRight: 20,
  }
});

function Project(props) {
  const { classes } = props;
  const project = {
    title: Faker.commerce.productName(),
    description: Faker.lorem.sentence(),
    time: "27981739",
    picture: Faker.image.image(),
    picture_s: 'link',
    pictureTitle: 'x',
    tags: [Faker.lorem.word(),Faker.lorem.word()],
  };

  const { title, description, picture, tags, time } = project;

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.media}>
        <CardMedia
          className={classes.image}
          image={picture}
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <div className={classes.content}>
        <CardContent className={classes.details}>
          <Typography gutterBottom variant="h5" component="h2" color="primary">
            { title }
          </Typography>
          <Typography gutterBottom variant="p" className={classes.time}>
            { time }
          </Typography>
          <Typography gutterBottom variant="p" >
          { description }
        </Typography>

          <div>
            {tags.map((tag) => {
              return (
                <Chip
                  label={tag}
                  className={classes.tag}
                  color={"secondary"}
                />
              )
            })}
          </div>
        </CardContent>

        <CardActions className={classes.actions}>
          <Button size="large" color="primary" >
            Learn More
          </Button>
          <GithubButton/>
        </CardActions>
      </div>
    </Card>
  );
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Project);

