import React, { useContext, useEffect } from 'react';
import { MoviesContext } from '../../context/MoviesContext';
import styled from 'styled-components';
import { respondTo } from '../../styles/_respondTo';
import { MovieCard } from '../../components/movies/MovieCard';

const ContainMovies = styled.div`
  padding: 1rem;
  display: grid;
  gap: 10px;
  background-color: #FFFFFF;
  

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

export const TopRated = () => {

  const { movies, getTopRatedMovies } = useContext(MoviesContext);

  useEffect(() => {
    getTopRatedMovies();
  }, [getTopRatedMovies])

  return (
    <ContainMovies
      className="animate__animated animate__fadeIn"
    >
      {(movies.lenght !== 0) && movies.map(({id, title, poster_path, backdrop_path, popularity, release_date, vote_average}) => (
        <MovieCard
          key={id}
          title={title}
          poster_path={poster_path}
          backdrop_path={backdrop_path}
          popularity={popularity}
          release_date={release_date}
          vote_average={vote_average}
          id={id}
        />
      ))}
    </ContainMovies>
  )
}
