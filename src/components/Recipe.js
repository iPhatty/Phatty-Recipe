import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { ScaleLoader } from 'react-spinners';

const style = {
  card: {
    maxWidth: '900px',
    margin: '2rem auto 0'
  },
  media: {
    paddingTop: '56.25%' // 16:9
  },
  container: {
    width: '90%',
    height: '100vh',
    margin: '0 auto',
    position: 'relative'
  },
  link: {
    color: '#e53935'
  },
  spinner: {
    margin: '0',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
};
class Recipe extends React.Component {
  state = {
    activeRecipe: [],
    loading: true
  };
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const API_KEY = process.env.REACT_APP_API_KEY;

    const recipe_call = await fetch(
      `${cors}http://food2fork.com/api/search?key=${API_KEY}&q=${title}`
    );

    const res = await recipe_call.json();
    this.setState({ activeRecipe: res.recipes[0], loading: false });
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
        <div style={style.spinner}>
          <ScaleLoader color={' #e53935'} loading={this.state.loading} />
        </div>
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
