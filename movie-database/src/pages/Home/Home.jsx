import { useEffect, useState } from "react";
import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import data from "../../data/utils/data";

const Home = () => {
  const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGE0YTZlYmEyNzhmYjNkYzcyMjA0ZWU3NmFkNjk5ZiIsInN1YiI6IjYyMmI2M2NkZWRhNGI3MDAxODJiYzhmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UhgRdOiTZ6u2m-E3fLzhoMrobeHAOEV2MSyndar-MOY";
  const URL = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const response = await fetch(URL, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    const data = await response.json();
    setMovies(data.results);
    console.log(movies);
  };

  return (
    <>
      <Hero />
      <Movies movies={movies} title="Latest Movie" />
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </>
  );
};

export default Home;
