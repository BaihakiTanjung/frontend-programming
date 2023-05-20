import { useEffect } from "react";
import styles from "./Hero.module.css";
import { useState } from "react";
const Hero = () => {
  const [movie, setMovie] = useState("");

  const fetchMovie = async () => {
    const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
    const response = await fetch(url);
    const data = await response.json();

    setMovie(data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h4 className={styles.hero__title}>{movie.Title}</h4>
          <p className={styles.hero__genre}>{movie.Genre}</p>
          <p className={styles.hero__description}>{movie.Plot}</p>
          <button className={styles.hero__button}>Watch Me</button>
        </div>
        <div className={styles.hero__right}>
          <img
            className={styles.hero__image}
            src={movie.Poster}
            alt="hero-images"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
