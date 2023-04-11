import React, { useState } from "react";
import { nanoid } from "nanoid";

function AddMovieForm(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const { movies, setMovies } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "") {
      setIsTitleError(true);
    }

    if (date === "") {
      setIsDateError(true);
    }

    if (title !== "" && date !== "") {
      const newMovie = {
        id: nanoid(),
        title: title,
        date: date,
        poster: "https://picsum.photos/300/400",
      };

      console.log(newMovie);

      setMovies([...movies, newMovie]);

      setIsDateError(false);
      setIsTitleError(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {isTitleError && <p>Title wajib diisi</p>}
      <label htmlFor="date">Date</label>
      <input
        type="date"
        id="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      {isDateError && <p>Date wajib diisi</p>}
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovieForm;
