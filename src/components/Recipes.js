import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Recipes = props => {
  const style = {
    card: {
      maxWidth: '345px'
    },
    media: {
      paddingTop: '56.25%' // 16:9
    }
  };

  const recipeList = () =>
    props.recipes.map(recipe => {
      return (
        <div key={recipe.recipe_id}>
          <Card style={style.card}>
            <CardMedia
              image={recipe.image_url}
              title={recipe.title}
              style={style.media}
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {recipe.title}
              </Typography>
            </CardContent>
            <CardActions />
          </Card>
        </div>
      );
    });

  return <div>{recipeList()}</div>;
};

export default Recipes;
