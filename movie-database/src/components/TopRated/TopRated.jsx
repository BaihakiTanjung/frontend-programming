import axios from "axios";

import { useEffect } from "react";
import Movies from "../Movies/Movies";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function TopRated() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

  const dispatch = useDispatch();

  useEffect(() => {
    getTopRateds();
  }, []);

  const getTopRateds = async () => {
    const response = await axios(URL);

    dispatch(updateMovies(response.data.results));
  };

  return (
    <div className="top-rated">
      <Movies title="Top Rated" />
    </div>
  );
}

export default TopRated;
