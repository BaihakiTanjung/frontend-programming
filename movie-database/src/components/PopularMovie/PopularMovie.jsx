import axios from "axios";

import { useEffect, useState } from "react";

function PopularMovie() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(async () => {
    const response = await axios(URL);

    setPopularMovies(response.data.results);
  }, []);

  return (
    <div className="popular-movie">
      <h2>Popular Movies</h2>
      <div className="popular-movie__container">
        {popularMovies.map((movie) => {
          return (
            <div className="popular-movie__card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PopularMovie;
