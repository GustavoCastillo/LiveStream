import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { API_KEY, MOVIE_API_URL } from '../shared/constants';
import { useSearchBox } from "../hooks/useSearchBox";
import { resizeImage } from "../shared/utils";
import Pagination from '../components/Pagination';
import { Link } from "react-router-dom";

const SearchList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  const query = searchParams.get("query");
const searchUrl = `${MOVIE_API_URL}/search/multi?api_key=${API_KEY}&query=${query}&page=${page}`;
const movies = useSearchBox(searchUrl, { method: "GET" }, query,page);

  const handlePage = (page1) => {
    setPage(page1);
  };

   return (
    <div>
  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Movie List for "{query}"</h2>
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
    {movies?.results?.map((movie) => (
      <li key={movie.id}>
        <Link to={`/movie/${movie.id}`}>
        <div className="shadow-sm bg-dark-darken rounded-md overflow-hidden hover:scale-105 transition duration-300 relative group">
          <img
            alt="Poster film"
            src={
              movie.media_type === "person"
                ? resizeImage(movie.profile_path || "", "w342")
                : resizeImage(movie.poster_path, "w342")
            }
            className="object-cover w-full h-80 sm:h-96"
          />
          <p className="whitespace-nowrap overflow-hidden text-ellipsis text-base text-white mt-2 text-center px-2 group-hover:text-white transition duration-300">
            {movie.title || movie.name}
          </p>
        </div>
        </Link>
      </li>
    ))}
  </ul>
  {movies?.results?.length > 0   && (
  <Pagination
          page={movies.page}
          maxPage={movies.total_pages}
          onPageChange={handlePage}
        />
  )}
</div>

  );
};

export default SearchList;
