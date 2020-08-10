import React from "react";
import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { MovieCard } from "../../components/movies/MovieCard";
import { AuthProvider } from "../../context/authContext";
import { MoviesContext } from "../../context/MoviesContext";
import { MemoryRouter } from "react-router-dom";

describe("Test in <MovieCard />", () => {
  const contextValue = {
    deleteMovieFromFavorites: jest.fn(),
  };

  const wrapper = mount(
    <AuthProvider>
      <MoviesContext.Provider value={contextValue}>
        <MemoryRouter>
          <MovieCard
            title="Spiderman"
            docID="123456"
            id="123"
            poster_path="imagen"
            release_date="2020-01-20"
            vote_average="7.5"
            popularity={"2010"}
            isActived={true}
          />
        </MemoryRouter>
      </MoviesContext.Provider>
    </AuthProvider>
  );

  test("should show correctly component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should if the user is logged in, it must show the paragraph with the text "Eliminar pelicula" ', () => {
    const textDelete = wrapper.find(".sc-AxhUy").text().trim();
    expect(textDelete).toBe("Eliminar pelicula");
  });

  test('when the user is not logged in, the text "Eliminar pelicula should not be displayed', () => {
    const wrapper = mount(
      <AuthProvider>
        <MoviesContext.Provider value={contextValue}>
          <MemoryRouter>
            <MovieCard
              title="Spiderman"
              docID="123456"
              id="123"
              poster_path="imagen"
              release_date="2020-01-20"
              vote_average="7.5"
              popularity={"2010"}
              isActived={false}
            />
          </MemoryRouter>
        </MoviesContext.Provider>
      </AuthProvider>
    );

    const textDelete = wrapper.find(".sc-AxhUy").exists();
    expect(textDelete).toBe(false);
  });

  test('click on the "Eliminar pelicula" paragraph to call the deleteMovieFromFavorites function ', () => {
    wrapper.find(".sc-AxhUy").simulate("click");
    expect(contextValue.deleteMovieFromFavorites).toBeCalled();
  });
});
