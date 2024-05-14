import TotalCart from './TotalCart';
import CartItem from './CartItem';
import { useCart } from '../context/CartContext';

const CartList = () => {
  const moviesList = JSON.parse(localStorage.getItem('moviesList')) || [];
  const { completedPayment } = useCart(); 
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">List of Films</h2>
      <ul className="divide-y divide-gray-200">
        {moviesList.map((movie, index) => (
            <CartItem movie={{movie, index}}/>
        ))}
        <div className="py-4 flex justify-between items-center">
          <span className="text-lg font-semibold">Total:</span>
          <TotalCart/>
        </div>
        <div className="py-4 flex justify-center">
          <button onClick={()=>completedPayment()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Pay Now
          </button>
        </div>
      </ul>
    </div>
  );
};

export default CartList;
