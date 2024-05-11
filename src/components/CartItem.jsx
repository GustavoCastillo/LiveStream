import { resizeImage , getFilmPrice} from "../shared/utils";

interface CartItemProps {
    movie: {};
    index:number
  }

const CartItem: FC<CartItemProps> = ({movie, index}) => {
  return (
    <li className="py-4 flex items-center">
    <img src={resizeImage(movie.movie.poster_path)} alt={movie.title} className="w-20 h-28 mr-4 rounded-lg shadow-md" />
    <div className="flex-1">
      <h3 className="text-lg font-semibold">{movie.movie.title}</h3>
      <p className="text-gray-600 mb-2">{movie.movie.tagline}</p>
      <p className="text-gray-700">$ {getFilmPrice(movie.movie.vote_average)}</p>
    </div>
    </li>
  );
};

export default CartItem;


