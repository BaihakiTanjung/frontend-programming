import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
  },
  reducers: {
    addMovie: (state, action) => {
      console.log(action);
      state.movies.push(action.payload);
    },
  },
});

const { addMovie } = moviesSlice.actions;
const MoviesReducer = moviesSlice.reducer;

export default MoviesReducer;
export { addMovie };
