import { Component } from "react";

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentMovie: null,
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => response.json())
      .then((movies) => this.setState({ movies }));
  }

  switchMovies = (event) => {
    const currentMovie = this.state.movies.find(
      (movie) => movie.title === event.target.value
    );

    this.setState({ currentMovie });
  };

  render() {
    const { movies, currentMovie } = this.state;
    const movieOptions = movies.map((movie) => {
      return <option value={movie.title}>{movie.title}</option>;
    });

    return (
      <div className="movies">
        <p>Select a Movie</p>
        <select id="movies" name="movies" onChange={this.switchMovies}>
          <option value="">Select A Movie</option>
          {movieOptions}
        </select>
        <h1>{currentMovie && currentMovie.title}</h1>
        <p>{currentMovie && currentMovie.description}</p>
        <p>{currentMovie && currentMovie.release_date}</p>
      </div>
    );
  }
}

export default Movies;
