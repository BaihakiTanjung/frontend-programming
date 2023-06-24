import axios from "axios";

import { useEffect, useState } from "react";
import Movies from "../Movies/Movies";
import { useDispatch } from "react-redux";

function Recommendation({ movie_id }) {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${API_KEY}`;

  const dispatch = useDispatch();

  useEffect(() => {
    getRecommendations();
  }, []);

  const getRecommendations = async () => {
    const response = await axios(URL);

    dispatch(updateMovies(response.data.results));
  };

  return (
    <div className="popular-movie">
      <Movies title="Recommendations" />
    </div>
  );
}

export default Recommendation;
