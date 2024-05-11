import TotalCart from './TotalCart';
import CartItem from './CartItem';

const CartList = () => {
  const moviesList = JSON.parse(localStorage.getItem('moviesList')) || [];
 
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">List of Films</h2>
      <ul className="divide-y divide-gray-200">
        {moviesList.map((movie, index) => (
            <CartItem movie={{movie, index}}/>
        ))}
        <li className="py-4 flex justify-between items-center">
          <span className="text-lg font-semibold">Total:</span>
          <TotalCart/>
        </li>
        <li className="py-4 flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Pay Now
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CartList;