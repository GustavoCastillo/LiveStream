import { useState, useEffect } from 'react';

export const useLocalStore = (booking, movieLocal) => {
  const [isBooking, setBooking] = useState(false);
  useEffect(() => {
    const setData = async () => {
      try {
        setBooking(booking); 
        localStorage.setItem('moviesList', JSON.stringify(movieLocal));
      } catch (error) {
        console.log('Error')
      } 
    };

    setData();
  }, [booking]);

  return isBooking ;
};

