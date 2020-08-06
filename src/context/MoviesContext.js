import React, { createContext, useReducer, useCallback, useState } from 'react';
import { moviesReducer } from '../reducers/moviesReducer';
import { types } from '../types/types';
import { db, firebase } from '../libs/firebase';

export const MoviesContext = createContext();



export const MoviesProvider = ({ children }) => {

  const [state, dispatch] = useReducer(moviesReducer, {
    movies: [],
    favoriteMovies: [],
    searchMovie: [],
    movie: {},
    loadingMovies: true
  });

  const [errorForm, setErrorForm] = useState({
    error: false,
    message: ''
  });
  
  const { movies, favoriteMovies, searchMovie, movie, loadingMovies } = state;
  

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
  }, []);

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

  const getMoviesFirebase = async(uid) => {

    try {
      
      let allFavoritesMovies = [];

      await db.collection(uid)
      .doc("movies")
      .collection("favorites")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let movie;
          movie = { ...doc.data() }
          movie.docID = doc.id;
          allFavoritesMovies.push(movie)
        });
      });

      // const reversedArray = allFavoritesMovies.reverse();

      dispatch({
        type: types.getFavoritesMoviesFirebase,
        payload: allFavoritesMovies
      })

    } catch (error) {
      console.log(error);
    }
  }

  const getMovieSearch = async (key) => {

    try {
      const apiKey = process.env.REACT_APP_APIKEY;
      const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${key}`);
      
      const { results } = await data.json();
      console.log(results);

      if (results.length === 0) {
        return setErrorForm({
          error: true,
          message: 'Intenta buscando otra pelicula'
        })
      }

      setErrorForm({
        error: false,
        message: ''
      })

      dispatch({
        type: types.searchMovies,
        payload: results
      });

    } catch (error) {
      console.log(error);
    }
  }

  const getMovieID = async (movieID) => {

    try {

      const apiKey = process.env.REACT_APP_APIKEY;
      const data = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=es-ES`);

      const resp = await data.json();
      
      dispatch({
        type: types.selectedMovie,
        payload: resp
      })
      
    } catch (error) {
      console.log(error);
    }
  }



  const addFavoriteMovie = async (movie) => {

    const {
      poster_path,
      id,
      genres,
      original_title,
      original_language,
      overview,
      popularity,
      production_countries,
      release_date,
      tagline,
      title,
      vote_average,
      vote_count
    } = movie;

    const imgMovie = `https://image.tmdb.org/t/p/w500/${poster_path}`;

    const favoriteMovie = {
      imgMovie,
      id,
      genres,
      original_title,
      original_language,
      overview,
      popularity,
      production_countries,
      release_date,
      tagline,
      title,
      vote_average,
      vote_count
    }

    const { uid } = firebase.auth().currentUser;

    if (uid) {

      const { id } = await db.collection(uid).doc('movies').collection('favorites').add(favoriteMovie);

      favoriteMovie.firebaseID = id;

      dispatch({
        type: types.addFavoritesMovies,
        payload: favoriteMovie
      })
      
      console.log('PELICULA AGREGADA A FAVORITOS');

    } else {
      throw new Error('No hay usuario autenticado')
    }

  }

  const deleteMovieFromFavorites = async (userID, docID) => {
    console.log(docID);

    dispatch({
      type: types.removeMovieFromFavorites,
      payload: docID
    })
    

    await db.collection(userID).doc('movies').collection('favorites').doc(docID)
      .delete();

    return console.log(`PELICULA ELIMINADA`);
  }
  
  return (
    <MoviesContext.Provider value={{
      movie,
      movies,
      favoriteMovies,
      searchMovie,
      loadingMovies,
      errorForm,
      getMovieID,
      getPopularMovies,
      getTopRatedMovies,
      getUpcomingMovies,
      getMovieSearch,
      addFavoriteMovie,
      getMoviesFirebase,
      deleteMovieFromFavorites,
      dispatch
    }}>
      {children}
    </MoviesContext.Provider>
  )
}