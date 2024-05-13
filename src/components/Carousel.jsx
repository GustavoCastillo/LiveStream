import React, {useContext} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { resizeImage } from "../shared/utils";
import { Link } from 'react-router-dom';

interface CarouselProps {
  movies: [];
  isCard: null;
}


const Carousel : FC<CarouselProps> = ({movies, isCard}) => {
  const imageSize = !isCard ? 'w1280' : 'w342';
  const sliderNav = document.querySelector('#root');
  const parentWidth = sliderNav?.parentElement?.offsetWidth;
  let maxItems = Math.round(parentWidth / 201);
  

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: !isCard ?  1 : maxItems,
    slidesToScroll: !isCard ? 1 : 3,
    swipeToswipeToSlide: true, 
    autoplay: !isCard ? true : false,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    arrows: false,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
    {isCard ? (
      <h2 className="text-xl text-white m-4">
        Popular
    </h2>
    ) : ''} 

  <div className="px-4 shrink-0">
    {movies?.length > 0 ? (
      <div className="relative">
        <Slider {...settings}>
          {movies.map((movie) => (
            <div key={movie.id} className={`${!isCard ? "!w-full h-[500px]" : "!w-[175px] h-[280px]"} relative flex items-center justify-center`}>
               <Link to={`/movie/${movie.id}`}>
                <div className="top-0 left-0 w-full h-full">
                  <img
                    src={resizeImage(!isCard ? movie?.backdrop_path : movie?.poster_path, imageSize)}
                    alt={movie.name}
                    className="object-cover w-full h-full rounded-lg shadow-md"
                  />
                  <div className="absolute top-0 right-0 mt-2 mr-2 bg-red-500 text-white px-3 py-2 rounded-full text-lg font-semibold">
                    {parseFloat(movie.vote_average).toFixed(1)}
                  </div>
                </div>
              </Link>
              {!isCard ? (
                <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 text-white p-2">
                  <h3 className="text-red-500 text-lg font-semibold">{movie.title}</h3>
                  <p className="text-sm">{movie.overview}</p>
                </div>
              ) : (
                <p className="whitespace-nowrap overflow-hidden text-ellipsis text-base text-white mt-1 text-center px-2">
                  {movie.title}
                </p>
              )}
            </div>
          ))}
        </Slider>
      </div>
    ) : (
      <div>Not Found Movies!</div>
    )}
  </div>
</>

  );
};

export default Carousel;
