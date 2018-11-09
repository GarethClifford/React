import React, { Component } from 'react';
import FindMovie from './FindMovie.js'


class Table1 extends Component {
  render() {
    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
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
              <th scope="row">1</th>
              <td></td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table1;
