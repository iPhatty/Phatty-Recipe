import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Recipes = props => {
  const style = {
    card: {
      width: '100%'
    },
    media: {
      paddingTop: '56.25%' // 16:9
    },
    container: {
      width: '90%',
      margin: '0 auto'
    }
  };

  const recipeList = () =>
    props.recipes.map(recipe => {
      return (
        <Grid key={recipe.recipe_id} item xs={12} sm={6} lg={3}>
          <Card style={style.card}>
            <CardMedia
              image={recipe.image_url}
              title={recipe.title}
              style={style.media}
            />
            <CardContent>
              <Typography gutterBottom variant="title">
                {recipe.title.length < 20
                  ? `${recipe.title}`
                  : `${recipe.title.substring(0, 19)}...`}
              </Typography>
              <Typography gutterBottom variant="caption" component="p">
                {recipe.publisher}
              </Typography>
            </CardContent>
            <CardActions>
              <Button color="secondary">
                <Link
                  to={{
                    pathname: `/recipe/${recipe.recipe_id}`,
                    state: { recipe: recipe.title }
                  }}
                >
                  View
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });

  return (
    <div style={style.container}>
      <Grid container spacing={16} alignItems="center" alignContent="center">
        {recipeList()}
      </Grid>
    </div>
  );
};

export default Recipes;
