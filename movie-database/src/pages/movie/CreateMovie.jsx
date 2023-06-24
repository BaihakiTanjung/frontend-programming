import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";
const CreateMovie = ({ movies, setMovies }) => {
  return (
    <>
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </>
  );
};

export default CreateMovie;
