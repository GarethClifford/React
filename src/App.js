import React, { Component } from 'react';
import FindMovie from './FindMovie.js';
import SearchMovies from './SearchMovies.js';
import MovieTable1 from './MovieTable.js';



class App extends Component {

  render() {
    return (
    <div className="App">
       <header className="App-header">
        <h1> Welcome to the movie database </h1>
        <h2> Please search from our list or enter the film you would like </h2>

        <input type = "text" id = "film" placeholder = "Film name" />
        <FindMovie buttonProp1="Find movie"/>
        <SearchMovies buttonProp2='Search movies'/>


       </header>
     </div>
    );
  }
}

export default App;
