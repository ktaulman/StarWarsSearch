import React from 'react';
//Component Imports 
import Card from './components/Card'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Star Wars </h1>
      <label>Input<input placeholder="SearchParams"/></label>
      <div className="cardContainer">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
