import { useEffect, useState } from "react";
import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import data from "../../data/utils/data";

const Home = ({ movies, setMovies }) => {
  return (
    <>
      <Hero />
      <Movies movies={movies} title="Latest Movie" />
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </>
  );
};

export default Home;
