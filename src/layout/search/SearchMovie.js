import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { MoviesContext } from '../../context/MoviesContext';
import { respondTo } from '../../styles/_respondTo';
import { MovieCard } from '../../components/movies/MovieCard';

const Contain = styled.div`
  display: grid;
  justify-items: center;
  width: 100%;
`;

const InputContainer = styled.div`
  width: 80%;
  background-color: rgba(116,114,116,.3);
  margin-top: 10px;
  padding: 1.2rem;
  border-radius: 6px;

  input {
    width: -webkit-fill-available;
    font-size: 1.4rem;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid white;

    &:focus {
      outline: none;
    }
  }

  button {
    padding: 8px 20px 8px 20px;
    margin-top: 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    background-color: rgba(116, 114, 116, .8);
    color: white;
    outline: none;

    &:hover {
      background-color: rgba(116, 114, 116, 1);
    }
  }
`;

const MoviesContainer = styled.div`
  display: grid;
  gap: 10px;
  padding: 16px;

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

const ErrorMessage = styled.div`
    margin-top: 10px;
    border-radius: 5px;
    background-color: #F54848;
    padding: 0 10px 0 10px;
    color: #FFFFFF;
    border: 1px solid #F42727;
`;

export const SearchMovie = () => {

  const { getMovieSearch, searchMovie, errorForm } = useContext(MoviesContext);
  const [search, setSearch] = useState('');
  

  const handleSearchMovie = (event) => {
    event.preventDefault();

    if (search.length < 1) return
    getMovieSearch(search);
    setSearch('');
  }
  

  return (
    <Contain>
      {errorForm.error && <ErrorMessage className="animate__animated animate__fadeInDown"><p>{errorForm.message}</p></ErrorMessage>}
      <InputContainer>
        <form
          onSubmit={(event) => handleSearchMovie(event)}
        >
          <input
            type="text"
            autoComplete="none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />
          <button>
            Buscar
          </button>
        </form>
      </InputContainer>
      <MoviesContainer>
        {(searchMovie.lenght !== 0) && searchMovie.map(({id, title, poster_path, backdrop_path, popularity, release_date, vote_average}) => (
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
      </MoviesContainer>
    </Contain>
  )
}
