import axios from "axios";

import { useEffect, useState } from "react";
import Movies from "../Movies/Movies";

function TopRated() {
  // const API_KEY = process.env.REACT_APP_API_KEY;
  const API_KEY = "b0a4a6eba278fb3dc72204ee76ad699f";
  const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

  const [TopRateds, setTopRateds] = useState([]);

  useEffect(() => {
    getTopRateds();
  }, []);

  const getTopRateds = async () => {
    const response = await axios(URL);

    setTopRateds(response.data.results);
  };

  return (
    <div className="top-rated">
      <Movies movies={TopRateds} title="Top Rated" />
    </div>
  );
}

export default TopRated;
