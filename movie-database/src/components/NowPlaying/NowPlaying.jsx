import axios from "axios";

import { useEffect, useState } from "react";
import Movies from "../Movies/Movies";

function NowPlaying() {
  // const API_KEY = process.env.REACT_APP_API_KEY;
  const API_KEY = "b0a4a6eba278fb3dc72204ee76ad699f";
  const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;

  const [NowPlayings, setNowPlayings] = useState([]);

  useEffect( () => {
    getNowPlayings();
  }, []);

  const getNowPlayings = async () => {
    const response = await axios(URL);

    setNowPlayings(response.data.results);
  };

  return (
    <div className="now-playing">
      <Movies movies={NowPlayings} title="Now Playings" />
    </div>
  );
}

export default NowPlaying;
