import React, { useContext } from "react";
import psyduck from "../../assets/psyduckandhuman.jpg";
import { MoviesContext } from "../../context/MoviesContext";
import { NotData } from "./NotFoundStyles";

export const NotFound = () => {
  const { errorContextMovies } = useContext(MoviesContext);
  return (
    <NotData>
      <img src={psyduck} alt="Not Found" />
      <p>{errorContextMovies.message}</p>
    </NotData>
  );
};
