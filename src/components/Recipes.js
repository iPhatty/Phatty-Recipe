import React from 'react';

const Recipes = props => {
  const recipeList = () =>
    props.recipes.map(recipe => {
      return (
        <div key={recipe.recipe_id}>
          <img src={recipe.image_url} alt={recipe.title} />
          <p>{recipe.title}</p>
        </div>
      );
    });

  return <div>{recipeList()}</div>;
};

export default Recipes;
