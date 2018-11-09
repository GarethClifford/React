import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import FindMovie from './FindMovie';
import MovieTable from './MovieTable';


class SearchMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      infoTitle:"",
      infoYear:"",
      infoImg:""
    }
    }

    SearchFunction = () => {
      axios.get('http://www.omdbapi.com/?s=' + document.getElementById('film').value + '&apikey=355383a6').then(response => {

        this.setState({
        info:response.data.Search,
        infoTitle:response.data.Search.Title,
        infoYear:response.data.Search.Year,
        infoImg:response.data.Search.Poster

    });

})
};

   render() {
    return (
      <div className="SearchMovies">
      <MovieTable />
      </div>

);}
}

export default SearchMovies;
