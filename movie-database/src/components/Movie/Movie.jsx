import styles from "./Movie.module.css";

const Movie = ({ title, year, poster }) => {
  return (
    <div className={styles.movie}>
      <img className={styles.movie__image} src={poster} alt={title} />
      <div className={styles.movie__body}>
        <h4 className={styles.movie__body__title}>{title}</h4>
        <p className={styles.movie__body__date}>{year}</p>
      </div>
    </div>
  );
};

export default Movie; 
