import axios from "axios";

import { useEffect, useState } from "react";
import Movies from "../Movies/Movies";

function PopularMovie() {
  // const API_KEY = process.env.REACT_APP_API_KEY;
  const API_KEY = "b0a4a6eba278fb3dc72204ee76ad699f";
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect( () => {
     getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const response = await axios(URL);

    setPopularMovies(response.data.results);
  };

  return (
    <div className="popular-movie">
      <Movies movies={popularMovies} title="Popular Movies" />
    </div>
  );
}

export default PopularMovie;
