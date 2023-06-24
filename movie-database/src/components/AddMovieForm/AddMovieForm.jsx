import { useState } from "react";
import styles from "./AddMovieForm.module.css";
import { nanoid } from "nanoid";
import Alert from "../Alert/Alert";
import Select from "../Select/Select";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovie } from "../../features/moviesSlice";

const AddMovieForm = ({ movies, setMovies }) => {
  const dispatch = useDispatch();

  // Refactor state form & error input value
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    poster: "",
    genre: "",
  });

  const [isError, setIsError] = useState({
    title: false,
    date: false,
    poster: false,
    genre: false,
  });

  // Destructuring state formData
  const { title, date, poster, genre } = formData;

  // Select initial state
  const genres = [
    {
      label: "Action",
      value: "action",
    },
    {
      label: "Drama",
      value: "drama",
    },
    {
      label: "Comedy",
      value: "comedy",
    },
    {
      label: "Horror",
      value: "horror",
    },
  ];

  // HandleChange
  const handleChange = (e) => {
    // Destructuring event target {name, value}
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validation error input value
  const validate = () => {
    if (title === "") {
      setIsError({
        ...isError,
        title: true,
      });
      return false;
    } else if (date === "") {
      setIsError({
        ...isError,
        title: false,
        date: true,
        poster: true,
      });
      return false;
    } else if (poster === "") {
      setIsError({
        ...isError,
        date: false,
        poster: true,
      });
      return false;
    } else {
      setIsError({
        ...isError,
        title: false,
        date: false,
        poster: false,
      });

      return true;
    }
  };

  const navigate = useNavigate();

  // Add New Data Movie
  const addMovie = () => {
    const newMovie = {
      id: nanoid(10),
      title: title,
      year: date,
      poster: poster,
      type: genre,
    };

    dispatch(addMovie(newMovie));

    // setMovies([...movies, newMovie]);

    // navigate("/");
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    validate() && addMovie();
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt="hero-images"
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movies</h2>
          <form
            action=""
            className={styles.form__container}
            onSubmit={handleSubmit}
          >
            <div className={styles.form__group}>
              <label htmlFor="">Title</label>
              <input
                name="title"
                type="text"
                value={title}
                onChange={handleChange}
              />
              {isError.title && <Alert>Title wajib diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="">Date</label>
              <input
                name="date"
                type="date"
                value={date}
                onChange={handleChange}
              />
              {isError.date && <Alert>Date wajib diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="">Poster</label>
              <input
                name="poster"
                type="text"
                value={poster}
                onChange={handleChange}
              />
              {isError.poster && <Alert>Poster image wajib diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <Select
                label={"Select Genre"}
                options={genres}
                value={genre}
                onChange={handleChange}
              />
            </div>
            <button className={styles.form__btn}>Add Movie</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMovieForm;
