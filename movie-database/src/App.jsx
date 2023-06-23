import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreateMovie from "./pages/movie/CreateMovie";
import PopularMovie from "./pages/movie/PopularMovie";
import NowPlayingMovie from "./pages/movie/NowPlayingMovie";
import TopRatedMovie from "./pages/movie/TopRatedMovie";
import Layout from "./Layout";
import Counter from "./components/Counter/Counter";
import theme from "./utils/constants/theme";
import GlobalStyle from "./components/GlobalStyle";
import DetailMovie from "./pages/movie/DetailMovie";
import { useEffect, useState } from "react";

import { ThemeProvider } from "styled-components";

const App = () => {
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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route
            path="/movie/create"
            element={<CreateMovie movies={movies} setMovies={setMovies} />}
          />
          <Route path="/movie/popular" element={<PopularMovie />} />
          <Route path="/movie/now-playing" element={<NowPlayingMovie />} />
          <Route path="/movie/top" element={<TopRatedMovie />} />
          <Route path="/movie/:id" element={<DetailMovie />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
