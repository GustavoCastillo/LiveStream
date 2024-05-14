import React, { useState } from 'react';
import { MOVIE_API_URL, API_KEY  } from "../shared/constants";
import { useMovies } from "../hooks/useMovies";

interface ModalItemProps {
    isOpen: null;
    onClose: null;
    videoId: number
  }

const Modal : FC<ModalItemProps> = ({ isOpen, onClose, videoId }) => {
    debugger
  const [isVisible, setIsVisible] = useState(isOpen);
  const trailerUrl = `${MOVIE_API_URL}/movie/${videoId}/videos?api_key=${API_KEY}`;
  let options = {
    method: "GET",
  };
  const trailerList = useMovies(trailerUrl, options);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  if (isVisible == false && isOpen == false) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 max-w-md">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            title="YouTube Video Player"
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${trailerList?.results[0].key}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <button
          className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full"
          onClick={()=>handleClose()}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
