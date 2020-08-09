import React, { useCallback } from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';


describe('Test in <PrincipalScreen />', () => {

  const getPopularMovies = async () => {

    try {
      const apiKey = process.env.REACT_APP_APIKEY;

      console.log("OBTENIENDO PELICULAS POPULARES");
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-MX&page=1`
      );
      const { results } = await data.json();

      return results;

    } catch (error) {
      console.log(error);
    }
  };
  
  test('should function call API', async() => {
    
    console.log(await getPopularMovies());

  })
  
})
