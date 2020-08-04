import React, { useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { useAuthState } from "../../context/authContext";
import { MoviesContext } from "../../context/MoviesContext";



const ContainCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: rgb(0, 0, 0, .1);
  border-radius: 6px;

  h4 {
    margin-top: 5px;
    margin-bottom: 5px;
    font-family: 'Comfortaa', cursive;
    font-size: 20px;
  }

  img {
    width: 100%;
    -webkit-box-shadow: 10px 9px 10px -5px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 9px 10px -5px rgba(0,0,0,0.75);
    box-shadow: 10px 9px 10px -5px rgba(0,0,0,0.75);
  }

`;

const IconAndText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  
  p {
    margin: 2px;
    font-weight: bold;
    font-family: monospace;
  }
`;

const TitleAndIcon = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  svg {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const MovieCard = ({ docID, isActived, id, title, poster_path, imgMovie, popularity, release_date, vote_average }) => {

  const { activeUser } = useAuthState();
  const { deleteMovieFromFavorites } = useContext(MoviesContext);

  function handleDeleteFavoriteMovie() {
    deleteMovieFromFavorites(activeUser.uid, docID);


  }

  return (
    <ContainCard>
      <TitleAndIcon>
        <h4>{title}</h4>
        {isActived
          && <FontAwesomeIcon
          icon="heart-broken" 
          onClick={handleDeleteFavoriteMovie}
          />
        }
      </TitleAndIcon>
      <Link to={`/search/${id}`} >
        {
          imgMovie
            ? <img src={imgMovie} alt={title}/>
            : <img src={`https://image.tmdb.org/t/p/w342/${poster_path}` || ''} alt="No hay Imagen Disponible" />
        }
      </Link>
      <IconAndText>
        <FontAwesomeIcon icon="fire" color="#ff9900"/>
        <p>{popularity}</p>
      </IconAndText>
      <IconAndText>
        <FontAwesomeIcon icon="thumbs-up" color="#b98946" />
        <p>{vote_average}</p>
      </IconAndText>
      <IconAndText>
        <FontAwesomeIcon icon="calendar-day" color="#1a75ff"/>
        <p>{release_date}</p>
      </IconAndText>
    </ContainCard>
  )
};
