import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreateMovie from "./pages/movie/CreateMovie";
import PopularMovie from "./pages/movie/PopularMovie";
import NowPlayingMovie from "./pages/movie/NowPlayingMovie";
import TopRatedMovie from "./pages/movie/TopRatedMovie";
import Layout from "./Layout";
import Counter from "./components/Counter/Counter";

const App = () => {
  return (
    // <Counter />
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/create" element={<CreateMovie />} />
        <Route path="/movie/popular" element={<PopularMovie />} />
        <Route path="/movie/now-playing" element={<NowPlayingMovie />} />
        <Route path="/movie/top" element={<TopRatedMovie />} />
      </Routes>
    </Layout>
  );
};

export default App;
