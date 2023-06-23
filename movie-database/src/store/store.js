import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "../features/moviesSlice";

const store = configureStore({
  reducer: {
    movies: MoviesReducer,
  },
});

export default store;
