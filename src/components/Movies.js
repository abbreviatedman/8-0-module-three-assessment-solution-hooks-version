import { useEffect, useState } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => response.json())
      .then((movies) => setMovies(movies));
  }, []);

  const switchMovies = (event) => {
    const movie = movies.find((movie) => movie.title === event.target.value);

    setMovie(movie);
  };

  const movieOptions = movies.map((movie) => {
    return <option value={movie.title}>{movie.title}</option>;
  });

  return (
    <div className="movies">
      <p>Select a Movie</p>
      <select id="movies" name="movies" onChange={switchMovies}>
        <option value="">Select A Movie</option>
        {movieOptions}
      </select>
      <h1>{movie && movie.title}</h1>
      <p>{movie && movie.description}</p>
      <p>{movie && movie.release_date}</p>
    </div>
  );
};

export default Movies;
