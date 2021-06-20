import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "123456789",
    title: "Terminator",
    genre: { _id: "abcdefghijkl", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "9876543210",
    title: "Die Hard",
    genre: { _id: "lmnopqrstuvwxyz", name: "Action" },
    numberInStock: 3,
    dailyRentalRate: 3.5
  },
  {
    _id: "a1b23e45c6789",
    title: "Big Bang",
    genre: { _id: "a11bcde2fghij44kl", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 5.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "9876s85e43h21j0",
    title: "Gladiator",
    genre: { _id: "l4mn4op7qrs7tuv7wxyz", name: "Fiction" },
    numberInStock: 2,
    dailyRentalRate: 8.5
  },
  {
    _id: "1s23q4hd567sfju8k9",
    title: "Johny English",
    genre: { _id: "ab246cdyyw21efghi6jkl", name: "Comedy" },
    numberInStock: 9,
    dailyRentalRate: 12.5,
    publishDate: "2018-07-03T19:07:48.809Z"
  },
  {
    _id: "9854r437654yyh32w10",
    title: "Immaculate Conception",
    genre: { _id: "lmn887t5rr3opqrstuvwxyz", name: "History" },
    numberInStock: 3,
    dailyRentalRate: 3.5
  },
  {
    _id: "ar9jht854r437654yyh32w10",
    title: "Get Out",
    genre: { _id: "l62mn887t5rr3opqrs875tuvwxyz", name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 1.5
  },
  {
    _id: "a1b6t5y8723e45c6789",
    title: "Star Wars",
    genre: { _id: "a11bcde2uy565fghij44kl", name: "Science Fiction" },
    numberInStock: 7,
    dailyRentalRate: 7.5,
    publishDate: "2019-01-08T19:04:28.809Z"
  },
  {
    _id: "98a76s8t5e43h2d1j0",
    title: "3 Idiots",
    genre: { _id: "l4mgn4op7qrs7tiopyz", name: "Funny" },
    numberInStock: 12,
    dailyRentalRate: 4.5
  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = this.getMovie(movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.title = movie.title;
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;
  // movieInDb.genre = genresAPI.genre;

  if (!movieInDb._id) {
    console.log("Movie does not exist in DB.");
  }
}
