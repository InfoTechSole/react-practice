import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {};

  render() {
    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <td>Sr. #</td>
            <td>Title</td>
            <td>Genre</td>
            <td>Stock</td>
            <td>Rate</td>
            <td></td>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </React.Fragment>
    );
  }

  renderTable() {
    console.log("in render table");

    //   return (
    //     {this.state.movies.map(movie => <tr>
    //       <td></td>
    //     </tr>)};
    //   );
  }
}

export default Movies;
