import { useState, useEffect } from 'react';

export const useSearchBox = (url, options, searchInput, page) => {
  const [suggestion, setSuggestion] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url,options);
        if (!response.ok) {
          throw new Error('No se pudo obtener los datos');
        }
        const jsonData = await response.json();
        setSuggestion(jsonData);
      } catch (error) {
        console.log('Error')
      } 
    };

    fetchData();
  }, [searchInput,page]);

  return suggestion ;
};

