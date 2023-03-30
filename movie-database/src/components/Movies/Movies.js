import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import data from "../../utils/constants/data";
import { useState } from "react";
import { nanoid as na } from "nanoid";

function Movies() {
  const [movies, setMovies] = useState(data);

  const handleAddMovie = () => {
    const newMovie = {
      id: na,
      title: "The Ice Age",
      year: "2022",
      type: "movie",
      poster: "https://picsum.photos/300/400",
    };

    setMovies([...movies, newMovie]);
  };

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {movies.map((movie) => {
            return (
              <Movie key={movie.id} title={movie.title} year={movie.year} />
            );
          })}
        </div>
        <button onClick={handleAddMovie}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;
