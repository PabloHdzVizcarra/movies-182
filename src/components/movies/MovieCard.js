import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAuthState } from "../../context/authContext";
import { MoviesContext } from "../../context/MoviesContext";
import {
  ContainCard,
  IconAndText,
  InfoData,
  TextDeleteMovie,
} from "./MovieCardStyles";
import { shortTitleMovie } from "../../helpers/short-title-movie";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

export const MovieCard = ({
  docID,
  isActived,
  id,
  title,
  poster_path,
  imgMovie,
  popularity,
  release_date,
  vote_average,
}) => {
  const { activeUser } = useAuthState();
  const { deleteMovieFromFavorites } = useContext(MoviesContext);

  function handleDeleteFavoriteMovie() {
    deleteMovieFromFavorites(activeUser.uid, docID);
  }

  const newDate = moment(release_date).format("DD MMMM YYYY");
  const shortTitle = shortTitleMovie(title);

  return (
    <ContainCard className="animate__animated animate__fadeIn">
      <div>
        <Link to={`/search/${id}`}>
          {imgMovie ? (
            <img src={imgMovie} alt={title} />
          ) : (
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w342/${poster_path}`
                  : "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              }
              alt="No hay Imagen Disponible"
            />
          )}
        </Link>
      </div>

      <div>
        <InfoData>
          <h4>{shortTitle}</h4>
          <IconAndText>
            <div>
              <p>Calificacion:</p>
              <p>
                <b>{vote_average}</b>{" "}
              </p>
            </div>
          </IconAndText>
          <IconAndText>
            <div>
              <p> Likes: </p>
              <p>
                <b>{popularity}</b>{" "}
              </p>
            </div>
          </IconAndText>
          <IconAndText>
            <div style={{ paddingBottom: "10px" }}>
              <p>Estreno: </p>
              <p>
                <b>{newDate}</b>{" "}
              </p>
            </div>
          </IconAndText>
          {isActived && (
            <TextDeleteMovie
              onClick={handleDeleteFavoriteMovie}
            >
              Eliminar pelicula
            </TextDeleteMovie>
          )}
        </InfoData>
      </div>
    </ContainCard>
  );
};
