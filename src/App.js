import React, { Component } from 'react';
import Button from './Button.js';
import logo from 'stuff.Poster';

class App extends Component {

  render() {
    return (
    <div className="App">
       <header className="App-header">
        <h1> Welcome to the movie database </h1>
        <h2> Please search from our list or enter the film you would like </h2>

        <input type = "text" id = "film" placeholder = "Film name" />
        <Button buttonProp1="Search" buttonProp2="Find"/>
        <p id='changeTitle'></p>
        <p id='changeYear'></p>
        <p id='changeGenre'></p>
        <p id='changeDirector'></p>
        <p id='changeWriter'></p>
        <p id='changeStarring'></p>
        <p id='changeInfo'></p>
        <img id="changePoser" src={poster} />

       </header>

     </div>
    );
  }
}

export default App;
