import Film from '../components/Film'
import { useParams } from 'react-router-dom'
import { MOVIE_API_URL, API_KEY } from "../shared/constants";
import { useMovies } from "../hooks/useMovies";
const Movie = () => {
  const { id } = useParams()
  const movieUrl = `${MOVIE_API_URL}/movie/${id}?api_key=${API_KEY}`;

  let options = {
    method: "GET",
  };

  const movieDetails = useMovies(movieUrl, options);

   return (
      <Film item={movieDetails }/>
   )
}

export default Movie;