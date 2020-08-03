import React from 'react';
import { AppRouter } from './router/AppRouter';
import { MoviesProvider } from './context/MoviesContext';
import { AuthProvider } from './context/authContext';

export const AppMovies = () => {

  return (
    <MoviesProvider>
      <AuthProvider>
          <AppRouter />
      </AuthProvider>
    </MoviesProvider>
  )
}
