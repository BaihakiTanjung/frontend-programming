import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../Movies/Movies";
import { useDispatch } from "react-redux";

function PopularMovie() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;

  const dispatch = useDispatch();

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
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
    <div className="popular-movie">
      <Movies title="Popular Movies" />
    </div>
  );
}

export default PopularMovie;
