import React, { useContext } from 'react'
import { MoviesContext } from '../../context/MoviesContext';

export const PageFavorites = () => {

  const { favoriteMovies } = useContext(MoviesContext);
  console.log(favoriteMovies);

  return (
    <div>
      Favoritos
    </div>
  )
}
