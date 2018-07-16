import React, { Component } from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import Recipes from './components/Recipes';
const env = require('env2')('../.env');

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
      `${cors}http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=12`
    );

    const data = await api_call.json();
    console.log(data.recipes);
    this.setState({ recipes: data.recipes });
  };
  componentDidMount = () => {
    const localRecipe = JSON.parse(localStorage.getItem('recipes'));
    if (localRecipe !== null) {
      this.setState({ recipes: localRecipe });
    }
  };

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem('recipes', recipes);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://image.flaticon.com/icons/svg/18/18460.svg"
            alt="App Logo"
            className="App-logo"
          />
          <h1 className="App-title">Phatty Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
