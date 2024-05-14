import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShieldHeart } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom'
import { useLocalStore } from "../hooks/useLocalStore";
import { useCart } from '../context/CartContext';

interface MovieProps {
  movie: {};
}

const Booking: FC<MovieProps> = ({ movie }) => {
    const { id } = useParams()
    const moviesLocal = JSON.parse(localStorage.getItem('moviesList')) || [];
    const [isBooking, setBooking] = useState(moviesLocal.some((item: any) => item.id == id));
    const [movieList, setMoviesList] = useState(moviesLocal);
    const { addToCart ,removeFromCart } = useCart();
  const showBooking = useLocalStore(isBooking,movieList);

  const addToLocalStorage = (movie) => {
    const movieList = JSON.parse(localStorage.getItem('moviesList')) || [];
    const index = movieList.findIndex((item: any) => item.id === movie.id);
    let addBooking=false;

        if (index !== -1) {
            removeFromCart();
            movieList.splice(index, 1);
        } else {
            addToCart();
            addBooking = true
            movieList.push(movie);
        }
        setBooking(addBooking); 
        setMoviesList(movieList)
  };

  return (
    <button onClick={()=>addToLocalStorage(movie)} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center absolute top-5 right-3`}>
    <FontAwesomeIcon icon={showBooking ? faShieldHeart  : faHeart} style={{ color: isBooking ? 'red' : 'white' }} />
    <span className="ml-2">Add</span>
  </button>
  );
};

export default Booking;
