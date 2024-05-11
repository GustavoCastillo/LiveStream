import { getFilmPrice} from "../shared/utils";
const TotalCart= () => {
const moviesList = JSON.parse(localStorage.getItem('moviesList')) || [];
const total = moviesList.reduce((acc, movie) => acc + getFilmPrice(movie.vote_average), 0);

  return (
    <span className="text-lg font-semibold">$ {total.toFixed(2)}</span>
  );
};

export default TotalCart;
