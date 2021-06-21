import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    let movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLik = movie => {
    if (movie.liked === undefined) {
      movie.liked = false;
    }

    movie.liked = !movie.liked;
    this.setState({ movies: this.state.movies });
  };

  render() {
    let { movies } = this.state;
    let { length: moviesCount } = this.state.movies;

    return (
      <React.Fragment>
        <p className="row mt-2">
          {moviesCount === 0
            ? "There are no movies in the table."
            : `Showing ${moviesCount} movies in the table.`}
        </p>
        <table className="table">
          <thead>
            <tr>
              <td>Sr. #</td>
              <td>Title</td>
              <td>Genre</td>
              <td>Stock</td>
              <td>Rate</td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={movie._id}>
                <td>{index + 1}</td>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    onLikeToggle={() => this.handleLik(movie)}
                    movie={movie}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {/* {moviesCount === 0 ? <tr> No record found.</tr> : <tr></tr>} */}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
