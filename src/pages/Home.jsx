import Carousel from "../components/Carousel";
import { useMovies } from "../hooks/useMovies";
import { MOVIE_API_URL, API_KEY  } from "../shared/constants";
const Home = () => {
  const topUrl = `${MOVIE_API_URL}/trending/movie/day?api_key=${API_KEY}`;
  const popularUrl = `${MOVIE_API_URL}/movie/popular?api_key=${API_KEY}`;

  let options = {
    method: "GET",
  };
  const topMovies = useMovies(topUrl, options);
  const popularMovies = useMovies(popularUrl, options);

  return ( 
    <>
    <Carousel movies={topMovies.results} isCard={false}/>
    <Carousel movies={popularMovies.results} isCard ={true} />
    </>
  )
};

export default Home;