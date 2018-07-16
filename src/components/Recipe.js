import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const style = {
  card: {
    maxWidth: '900px',
    margin: '8rem auto 0'
  },
  media: {
    paddingTop: '56.25%' // 16:9
  },
  container: {
    width: '90%',
    margin: '0 auto'
  },
  link: {
    color: '#e53935'
  }
};
class Recipe extends React.Component {
  state = {
    activeRecipe: []
  };
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const API_KEY = process.env.REACT_APP_API_KEY;

    const recipe_call = await fetch(
      `${cors}http://food2fork.com/api/search?key=${API_KEY}&q=${title}`
    );

    const res = await recipe_call.json();
    this.setState({ activeRecipe: res.recipes[0] });
    console.log(this.state.activeRecipe);
  };
  render() {
    const {
      title,
      publisher,
      publisher_url,
      source_url,
      image_url
    } = this.state.activeRecipe;
    return (
      <div style={style.container}>
        {this.state.activeRecipe.length !== 0 && (
          <Card style={style.card}>
            <CardMedia image={image_url} title={title} style={style.media} />
            <CardContent>
              <Typography gutterBottom variant="title">
                {title}
              </Typography>
              <Typography gutterBottom component="p">
                Publisher: {publisher}
              </Typography>
              <Typography gutterBottom component="p">
                Website:{' '}
                <a href={publisher_url} style={style.link}>
                  {publisher_url}
                </a>
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="outlined" color="secondary">
                <Link to="/">Home</Link>
              </Button>
              <Button variant="outlined" color="secondary">
                <a href={source_url} target="_blank">
                  View Source
                </a>
              </Button>
            </CardActions>
          </Card>
        )}
      </div>
    );
  }
}

export default Recipe;
