import HeroDetail from "../../components/HeroDetail/HeroDetail";
import Recommendation from "../../components/Recommendation/Recommendation";
import { useParams } from "react-router-dom";

const DetailMovie = () => {
  const { id } = useParams();

  return (
    <>
      <HeroDetail movie_id={id} />
      <Recommendation movie_id={id} />
    </>
  );
};

export default DetailMovie;
