import { useState, useEffect } from 'react';

export const useMovies = (url, options) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url,options);
        if (!response.ok) {
          throw new Error('No se pudo obtener los datos');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log('Error')
      } 
    };

    fetchData();
  }, [url]);

  return data ;
};

