import styles from "./Movie.module.css";
import { Link } from "react-router-dom";

const Movie = ({ id, title, year, poster }) => {
  return (
    <div className={styles.movie}>
      <Link to={`/movie/${id}`}>
        <img className={styles.movie__image} src={poster} alt={title} />
        <div className={styles.movie__body}>
          <h4 className={styles.movie__body__title}>{title}</h4>
          <p className={styles.movie__body__date}>{year}</p>
        </div>
      </Link>
    </div>
  );
};

export default Movie;
