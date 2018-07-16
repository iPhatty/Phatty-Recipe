import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from './components/Form';

class App extends Component {
  getRecipe = event => {
    const recipeName = event.target.recipeName.value;
    event.preventDefault();
    console.log(recipeName);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
      </div>
    );
  }
}

export default App;
