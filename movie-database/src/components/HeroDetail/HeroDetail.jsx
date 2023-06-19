import { useEffect } from "react";
import styles from "./HeroDetail.module.css";
import { useState } from "react";
const HeroDetail = ({ movie_id }) => {
  const [movie, setMovie] = useState("");

  const fetchMovie = async () => {
    const API_KEY = "b0a4a6eba278fb3dc72204ee76ad699f";
    const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;
    const response = await fetch(url);
    const data = await response.json();

    setMovie(data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  const urlPoster = (poster) => {
    return `https://image.tmdb.org/t/p/original${poster}`;
  };

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <img
            className={styles.hero__image}
            src={urlPoster(movie.poster_path)}
            alt="hero-images"
          />
        </div>
        <div className={styles.hero__right}>
          <h4 className={styles.hero__title}>{movie.title}</h4>
          {movie.genres &&
            movie.genres.map((genre) => (
              <p className={styles.hero__genre}>{genre.name}</p>
            ))}{" "}
          - {movie.vote_average}
          <p className={styles.hero__description}>{movie.overview}</p>
          <button className={styles.hero__button}>Watch Me</button>
        </div>
      </section>
    </div>
  );
};

export default HeroDetail;
