import styles from "./Movie.module.css";

function Movie(props) {
  const { title, year } = props;

  return (
    <div className={styles.movie}>
      <img
        className={styles.movie__image}
        src="https://picsum.photos/300/400"
        alt=""
      />
      <h3 className={styles.movie__title}>{title}</h3>
      <p className={styles.movie__date}>{year}</p>
    </div>
  );
}

export default Movie;
