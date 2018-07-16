import React from 'react';

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
    return <div>{this.state.activeRecipe.title}</div>;
  }
}

export default Recipe;
