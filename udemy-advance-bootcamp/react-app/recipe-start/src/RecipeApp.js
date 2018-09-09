import React, { Component } from 'react';
import logo from './logo.svg';
import Recipe from './Recipe';
import Navbar from './Navbar';
import './RecipeApp.css';


class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
      
        <Recipe  
        title="pasta" 
        ingredients={['flour', 'water']} 
        instructions="Mix Ingredients"
        img="anak.jpg"
        />
      </div>
    );
  }
}

export default RecipeApp;
