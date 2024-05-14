import { resizeImage , getFilmPrice} from "../shared/utils";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import React, { useState } from 'react';

interface CartItemProps {
    movie: {};
    index:number
  }

const CartItem: FC<CartItemProps> = ({movie, index}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="divide-y divide-gray-200">
        <li  key={{index}} className="py-4 flex items-center">
        <Link to={`/movie/${movie.movie.id}`}>
          <img src={resizeImage(movie.movie.poster_path)} alt={movie.title} className="w-20 h-28 mr-4 rounded-lg shadow-md" />
        </Link>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{movie.movie.title}</h3>
          <p className="text-gray-600 mb-2">{movie.movie.tagline}</p>
          <p className="text-gray-700">$ {getFilmPrice(movie.movie.vote_average)}</p>
        </div>
        <button onClick={()=>(handleOpenModal())} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
            Watch
          </button>
        </li>  
        <Modal isOpen={isModalOpen} onClose={()=>handleCloseModal()} videoId={movie.movie.id} />
    </div>
  );
};

export default CartItem;


