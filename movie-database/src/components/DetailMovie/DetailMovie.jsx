import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const API_KEY = "b0a4a6eba278fb3dc72204ee76ad699f";

  useEffect(async () => {
    getDetailMovie();
  }, []);

  const getDetailMovie = async () => {
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    const response = await axios(URL);
    setMovie(response.data);
  };

  return (
    <div className="detail-movie">
      <h2>Detail Movie</h2>
    </div>
  );
}

export default DetailMovie;
