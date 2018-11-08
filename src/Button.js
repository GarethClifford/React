import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class Button extends Component {


   searchFunction = () => {
      axios.get('http://www.omdbapi.com/?s=' + document.getElementById('film').value + '&apikey=355383a6').then(function(response){document.getElementById('changeTitle').innerHTML = JSON.stringify(response.data) } ) ;

   }
   async findFunction(){
      var stuff = await axios.get('http://www.omdbapi.com/?t=' + document.getElementById('film').value + '&apikey=355383a6').then(response => response.data);
      document.getElementById('changeTitle').innerHTML = "Title: " + stuff.Title;
      document.getElementById('changeYear').innerHTML = "Year: " + stuff.Year;
      document.getElementById('changeGenre').innerHTML ="Genre: " + stuff.Genre;
      document.getElementById('changeDirector').innerHTML ="Director: "+ stuff.Director;
      document.getElementById('changeWriter').innerHTML ="Writer: "+ stuff.Writer;
      document.getElementById('changeStarring').innerHTML ="Starring: " + stuff.Actors;
      document.getElementById('changeInfo').innerHTML ="Plot: " + stuff.Plot;
   }
   render() {
    return (
      <div className="Button">
      <button style = {{color:'white', background:'red', height:'70px',width:'150px',fontSize:'200%'}} id='button1' onClick={this.searchFunction}>{this.props.buttonProp1}</button>
      <button style = {{color:'white', background:'red', height:'70px',width:'150px',fontSize:'300%'}} id='button1' onClick={this.findFunction}>{this.props.buttonProp2}</button>
      </div>
    );
  }
}
export default Button;
