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
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { ThemeProvider } from "styled-components";
import { updateMovies } from "./features/moviesSlice";

const App = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  
  const URL = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;

  const dispatch = useDispatch();

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

    dispatch(updateMovies(data.results));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/create" element={<CreateMovie />} />
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
