import React, { Component } from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import Recipes from './components/Recipes';
require('dotenv').config();

class App extends Component {
  state = {
    recipes: []
  };

  getRecipe = async event => {
    event.preventDefault();

    const recipeName = event.target.recipeName.value;
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const API_KEY = process.env.REACT_APP_API_KEY;

    const api_call = await fetch(
      `${cors}http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=5`
    );

    const data = await api_call.json();
    console.log(data.recipes);
    this.setState({ recipes: data.recipes });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
