import React, { createContext, useReducer, useCallback } from 'react';
import { moviesReducer } from '../reducers/moviesReducer';
import { types } from '../types/types';

export const MoviesContext = createContext();



export const MoviesProvider = ({ children }) => {

  const [state, dispatch] = useReducer(moviesReducer, {
    movies: [],
    favoriteMovies: [],
    searchMovie: []
  });
  
  const { movies, favoriteMovies, searchMovie } = state;
  

  const getTopRatedMovies = useCallback(async () => {
    try {
      const apiKey = process.env.REACT_APP_APIKEY;
      
      console.log('OBTENIENDO PELICULAS');
      const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=es-MX&page=1`);
      const { results } = await data.json();
      
      dispatch({
        type: types.loadingTopRatedMovies,
        payload: results
      });
    } catch (error) {
      console.log(error);
    }
  }, [])

  const getPopularMovies = useCallback(async () => {
    try {
      const apiKey = process.env.REACT_APP_APIKEY;
      
      console.log('OBTENIENDO PELICULAS');
      const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-MX&page=1`);
      const { results } = await data.json();
      
      dispatch({
        type: types.loadingPopularMovies,
        payload: results
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getUpcomingMovies = useCallback(async () => {

    try {
      const apiKey = process.env.REACT_APP_APIKEY;
      
      console.log('OBTENIENDO PELICULAS');
      const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=es-MX&page=1`);
      const { results } = await data.json();
      
      dispatch({
        type: types.loadingUpcomingMovies,
        payload: results
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getMovieSearch = async (key) => {

    try {
      const apiKey = process.env.REACT_APP_APIKEY;
      const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${key}`);
      
      const { results } = await data.json();
      console.log(results);

      dispatch({
        type: types.searchMovies,
        payload: results
      });

    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <MoviesContext.Provider value={{
      movies,
      favoriteMovies,
      searchMovie,
      getPopularMovies,
      getTopRatedMovies,
      getUpcomingMovies,
      getMovieSearch,
      dispatch
    }}>
      {children}
    </MoviesContext.Provider>
  )
}