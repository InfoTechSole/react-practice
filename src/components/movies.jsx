import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./common/listGroup";

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        offset: 1,
        limit: 4
    };

    componentDidMount() {
        this.setState({ movies: getMovies(), genres: getGenres() });
    }

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

    handleGenreSelect = genre => {
        if (!genre) {
            return null;
        }

        let allMovies = [...this.state.movies];

        let movies = allMovies.filter(movie => movie.genre._id === genre._id);

        // this.setState({ movies });
        this.setState({ selectedGenre: genre });
    };

    handlePageChange = page => {
        this.setState({ offset: page });
    };

    render() {
        let { length: moviesCount } = this.state.movies; // Object destructuring: assigning 'movies.length' to 'moviesCount' variable
        let { offset, limit, movies: allMovies, genres } = this.state;

        // Get 'movies' for pagination
        let movies = paginate(allMovies, offset, limit);

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-2">
                        <ListGroup
                            items={genres}
                            selectedItem={this.state.selectedGenre}
                            onItemSelect={this.handleGenreSelect}
                        />
                    </div>
                    <div className="col">
                        <p className="row mt-2">
                            {moviesCount === 0
                                ? "There are no movies in the table."
                                : `Showing ${moviesCount} movies in the table.`}
                        </p>
                        <table className="table">
                            <thead>
                                <tr style={{ fontWeight: "bold" }}>
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
                                                onLikeToggle={() =>
                                                    this.handleLik(movie)
                                                }
                                                movie={movie}
                                            />
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() =>
                                                    this.handleDelete(movie)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {/* {moviesCount === 0 ? <tr> No record found.</tr> : <tr></tr>} */}
                            </tbody>
                        </table>
                        <Pagination
                            pageSize={limit}
                            currentPage={offset}
                            itemsCount={allMovies.length}
                            onPageChange={this.handlePageChange}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Movies;
