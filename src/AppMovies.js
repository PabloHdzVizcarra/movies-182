import React from 'react';
import { AppRouter } from './router/AppRouter';
import { MoviesProvider } from './context/MoviesContext';

export const AppMovies = () => {
  return (
    <MoviesProvider>
        <AppRouter />
    </MoviesProvider>
  )
}
