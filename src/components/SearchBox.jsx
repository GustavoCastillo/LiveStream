import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchBox } from "../hooks/useSearchBox";
import { MOVIE_API_URL, API_KEY } from "../shared/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox = () => {
  const [searchText, setSearchText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  const searchUrl = `${MOVIE_API_URL}/search/keyword?api_key=${API_KEY}&query=${searchText}`;
  const suggestion = useSearchBox(searchUrl, { method: "GET" }, searchText);

  const handleInputChange = (e) => {
    const trimmedValue = e.target.value.trim().toLowerCase();
    setSearchText(trimmedValue);
  };
  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
<div className="max-w-md mx-auto relative">
      <div className="flex items-center relative">
        <input
          type="text"
          placeholder="Search movies..."
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 text-black"
          value={searchText}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          //onBlur={handleInputBlur}
        />
        <FontAwesomeIcon icon={faSearch} className="text-gray-500 absolute right-3 cursor-pointer" />
      </div>
      {isFocused && (
        <ul className="absolute top-full left-0 z-10 w-full bg-black bg-opacity-75 p-2 rounded-b-md shadow-md max-h-40 overflow-y-auto" style={{ overflowY: 'auto' }}>
        {suggestion?.results?.map((keyword, index) => (
         <li
         key={index}
         className="p-2 cursor-pointer hover:bg-gray-800"
          >
            <button
                onClick={() => {
                  navigate(`/search?query=${encodeURIComponent(keyword.name)}`);
                }}
                className="flex items-center gap-3 ml-5 hover:text-white transition duration-300"
              >
                <span>{keyword.name}</span>
              </button>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};

export default SearchBox;
