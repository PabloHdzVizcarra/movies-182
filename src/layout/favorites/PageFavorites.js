import React, { useContext, useEffect } from 'react'
import { useAuthState } from '../../context/authContext'
import { MoviesContext } from '../../context/MoviesContext';
import { MovieCard } from '../../components/movies/MovieCard';
import styled from 'styled-components';
import { respondTo } from '../../styles/_respondTo';

const MoviesContainer = styled.div`
  display: grid;
  gap: 10px;
  padding: 16px;
  height: max-content;
  background-color: rgba(133, 133, 133, .2);
  min-height: 87vh;

  ${respondTo.xs`
    grid-template-columns: 1fr;
  `}

  ${respondTo.sm`
    grid-template-columns: 1fr 1fr;
  `}

  ${respondTo.md`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `}

  ${respondTo.lg`
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  `}
`;

export const PageFavorites = () => {

  const data = useAuthState();
  const { getMoviesFirebase, favoriteMovies, loadingMovies } = useContext(MoviesContext);

  useEffect(() => {
    if (data.activeUser.uid) {
      getMoviesFirebase(data.activeUser.uid);

    }
    //eslint-disable-next-line
  }, [data.activeUser.uid]);
  
  if (loadingMovies) {

    return (
      <p>Loading Page</p>
    )
  }
  return (
    <MoviesContainer>
      {(favoriteMovies.length === 0)
        ? <p>No tienes peliculas favoritas</p>
        : favoriteMovies.map((movie) => (
          <MovieCard
            isActived={data.isActived}
            key={movie.id}
            {...movie}
          />
      ))}
    </MoviesContainer>
  )
}
