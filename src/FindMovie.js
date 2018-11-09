import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class FindMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      year: "",
      genre: "",
      director:"",
      writer:"",
      starring:"",
      plot:""}
    }

    findFunction = () => {
      axios.get('http://www.omdbapi.com/?t=' + document.getElementById('film').value + '&apikey=355383a6').then(response => this.setState({
        title:response.data.Title,
        year: response.data.Year,
        genre: response.data.Genre,
        director:response.data.Director,
        writer:response.data.Writer,
        starring:response.data.Actors,
        plot:response.data.Plot
    }));
  }

   render() {
    return (
      <div className="FindMovie">
      <button style = {{color:'white', background:'red',fontSize:'100%'}} id='button1' onClick={this.findFunction}>{this.props.buttonProp1}</button>


      <table className="table">
        <thead>
          <tr>
            <th scope="col">Movie Title</th>
            <th scope="col">Year</th>
            <th scope="col">Genre</th>
            <th scope="col">Director</th>
            <th scope="col">Writer</th>
            <th scope="col">Starring</th>
            <th scope="col">Plot</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>{this.state.title}</td>
          <td>{this.state.year}</td>
          <td>{this.state.genre}</td>
          <td>{this.state.director}</td>
          <td>{this.state.writer}</td>
          <td>{this.state.starring}</td>
          <td>{this.state.plot}</td>
          </tr>
        </tbody>
      </table>
      </div>
    );
  }
}
export default FindMovie;
