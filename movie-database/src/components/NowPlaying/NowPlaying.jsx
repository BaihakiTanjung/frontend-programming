import axios from "axios";

import { useEffect, useState } from "react";
import Movies from "../Movies/Movies";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function NowPlaying() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`;

  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayings();
  }, []);

  const getNowPlayings = async () => {
    const response = await fetch(URL, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    const data = await response.json();

    dispatch(updateMovies(data.results));
  };

  return (
    <div className="now-playing">
      <Movies title="Now Playings" />
    </div>
  );
}

export default NowPlaying;
