import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import FindMovie from './FindMovie';
import SearchMovies from './SearchMovies';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';



class MovieTable extends React.Component {

  constructor(){
    super();
    this.state = {
      info: ""
    }
  }

getStuff = () => {
  var stuff;
  axios.get('http://www.omdbapi.com/?s=' + document.getElementById('film').value + '&apikey=355383a6').then(response => {
  stuff = response.data;
  console.log(stuff);
  this.setState({
    info:stuff.Search
  });
});
}
imageFormatter(cell, row) {
  return "<img src = '"+ cell +" '/>";
}

  render() {
    return (
      <div>
      <button style = {{color:'white', background:'red',fontSize:'100%'}} id='button2' onClick={this.getStuff}>Search movies</button>
      <BootstrapTable data={this.state.info}>
        <TableHeaderColumn dataField='Title' isKey>Movie Name</TableHeaderColumn>
        <TableHeaderColumn dataField='Year'>Year</TableHeaderColumn>
        <TableHeaderColumn dataField='Poster' dataFormat={this.imageFormatter}>Poster</TableHeaderColumn>
      </BootstrapTable>
      </div>
    );
  }
}


export default MovieTable;
