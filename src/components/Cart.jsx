import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';
const Cart= () => {
const { cartCount } = useCart();

  return (
    <Link to={`/cart`}  className="flex items-center text-white hover:text-gray-200">
      <FontAwesomeIcon icon={faCartShopping} />
      <span className="ml-1">{cartCount}</span>
    </Link>
  );
};

export default Cart;
