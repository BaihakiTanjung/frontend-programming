import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";
const CreateMovie = ({ movies, setMovies }) => {
  return (
    <>
      <h1>Create Movies</h1>

      <AddMovieForm movies={movies} setMovies={setMovies} />
    </>
  );
};

export default CreateMovie;
