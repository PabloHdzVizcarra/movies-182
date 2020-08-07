import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MoviesContext } from '../../context/MoviesContext';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { types } from '../../types/types';
import { respondTo } from '../../styles/_respondTo';



const ContainerMovie = styled.div`
  display: grid;
  background-color: #FFFFFF;

  ${respondTo.md`
    grid-template-columns: auto 1fr;
    align-items: center;
  `}

`;

const IconHeart = styled.div`

  display: flex;
  align-items: end;

  svg {
    font-size: 2rem;
    color: #f34747;
    cursor: pointer;
    margin-left: 20px;

    &:hover {
      color: #f12727;
    }
  }

`;

const ContainerTitleAndImage = styled.div`
  margin: 20px;
  margin-top: 30px;

  h2 {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  p {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  img {
    width: 100%;
    -webkit-box-shadow: 10px 9px 10px -5px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 9px 10px -5px rgba(0,0,0,0.75);
    box-shadow: 10px 9px 10px -5px rgba(0,0,0,0.75);
  }

  ${respondTo.sm`
    display: grid;
    justify-content: center;

    img {
      width: 100%;
    }
  `}
  ${respondTo.md`

    img {
      width: fit-content;
    }
  `}
`;

const StyleContainer = styled.div`
  margin: 10px;
  padding: 20px;
  border-radius: 6px;
  background-color: rgba(82, 72, 156, .1);
    

  ${respondTo.md`
  `}
  ${respondTo.lg`
  `}


  p {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  
  p:nth-child(1) {
    margin-bottom: 35px;
  }

  span {
    font-weight: bold
  }

`;

export const Movie = () => {

  const { movie, getMovieID, addFavoriteMovie, dispatch } = useContext(MoviesContext);
  const { movieID } = useParams();
  
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getMovieID(movieID);
      
    }

    return () => {
      mounted = false;
      dispatch({
        type: types.removeMovie
      })
    }
    //eslint-disable-next-line
  }, []);

  if (Object.keys(movie).length === 0) {
    return <p>Loading...</p>
  }

  const handleAddFavorite = () => {
    addFavoriteMovie(movie);
  }

  const { genres, overview, production_countries, release_date, tagline, popularity, vote_average, vote_count, poster_path, title, original_title } = movie;

  const allGeneres = genres.map(genre => genre.name).join('/');
  const allCountrys = production_countries.map(genre => genre.name).join(' | ');

  return (
    <ContainerMovie
      className="animate__animated animate__fadeIn"
    >
      <ContainerTitleAndImage>
        <div>
          <h2>{title}</h2>
          <p>{tagline}</p>
        </div>
        <img src={(poster_path) ? `https://image.tmdb.org/t/p/w500/${poster_path}`
          : "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"} alt="No hay Imagen Disponible" />
      </ContainerTitleAndImage>
        <StyleContainer>
            <div>
              <p>{overview}</p>
              <p> <span>Titulo Original:</span> {original_title}</p>
              <p> <span>Genero:</span>  {allGeneres}</p>
              <p> <span>Pais de produccion:</span>  {allCountrys}</p>
              <p><span>Lanzamiento:</span> {release_date}</p>
              <p> <span>Popularidad:</span>  {popularity}</p>
              <p> <span>Calificacion:</span>  {vote_average}</p>
              <p> <span>Numero de votos:</span>  {vote_count}</p>
              <IconHeart>
                <p>Añadir a favoritos</p>
                <FontAwesomeIcon
                  icon="heart" 
                  onClick={handleAddFavorite}  
                />
              </IconHeart>
            </div>
          </StyleContainer>
      

    </ContainerMovie>
  )
}
