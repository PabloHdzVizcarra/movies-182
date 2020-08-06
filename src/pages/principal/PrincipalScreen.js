import React, { useEffect, useContext } from 'react'
import { MoviesContext } from '../../context/MoviesContext';
import { MovieCard } from '../../components/movies/MovieCard';
import styled from 'styled-components';
import { respondTo } from '../../styles/_respondTo';

const ContainMovies = styled.div`
  padding: 1rem;
  display: grid;
  gap: 10px;
  background-color: rgba(133, 133, 133, .2);
  

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

export const PrincipalScreen = () => {

  const { movies, getPopularMovies } = useContext(MoviesContext);

  useEffect(() => {
    getPopularMovies();
  }, [getPopularMovies]);

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
