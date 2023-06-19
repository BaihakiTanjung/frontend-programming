import styles from "./Movie.module.css";
import { Link } from "react-router-dom";

const Movie = ({ id, title, release_date, poster_path }) => {
  const urlPoster = (poster) => {
    return `https://image.tmdb.org/t/p/original${poster}`;
  };

  return (
    <div className={styles.movie}>
      <Link to={`/movie/${id}`}>
        <img
          className={styles.movie__image}
          src={urlPoster(poster_path)}
          alt={title}
        />
        <div className={styles.movie__body}>
          <h4 className={styles.movie__body__title}>{title}</h4>
          <p className={styles.movie__body__date}>{release_date}</p>
        </div>
      </Link>
    </div>
  );
};

export default Movie;
