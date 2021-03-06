import React from "react";
import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { Movie } from "../../../layout/movie/Movie";
import { AuthProvider, AuthStateContext } from "../../../context/authContext";
import { MoviesContext } from "../../../context/MoviesContext";
import { MemoryRouter } from "react-router-dom";

describe("Test in <Movie />", () => {
  jest.mock("react-router-dom", () => ({
    useParams: () => ({
      movieID: 612706,
    }),
  }));

  test("the film must be shown correctly", () => {
    const mockMoviesContext = {
      movie: {
        id: 612706,
        title: "Work It: Al ritmo de los sueños",
        genres: [
          {
            name: "Comedia",
          },
        ],
        production_countries: [
          {
            name: "Mexico",
          },
        ],
        imdb_id: 5454,
      },
      getMovieID: jest.fn(),
      searchMovieFavorites: jest.fn()
    };

    const wrapper = mount(
      <AuthProvider>
        <MoviesContext.Provider value={mockMoviesContext}>
          <MemoryRouter>
            <Movie />
          </MemoryRouter>
        </MoviesContext.Provider>
      </AuthProvider>
    );
    expect(wrapper).toMatchSnapshot();

    const textNode = wrapper.find("h2").text().trim();
    expect(textNode).toBe(mockMoviesContext.movie.title);
  });

  test("if active user must show the button to add movie to favorites", async() => {

    const mockGetMoviesFirebase = () => false;

    const mockMoviesContext = {
      movie: {
        id: 612706,
        title: "Work It: Al ritmo de los sueños",
        genres: [
          {
            name: "Comedia",
          },
        ],
        production_countries: [
          {
            name: "Mexico",
          },
        ],
        imdb_id: 5454,
      },
      getMovieID: jest.fn(),
      searchMovieFavorites: mockGetMoviesFirebase,
      getMoviesFirebase: jest.fn(),
    };

    const wrapper = mount(
      <AuthProvider>
        <AuthStateContext.Provider
          value={{
            isActived: true,
            activeUser: {
              uid: "15asdsa",
              email: 'exmaple@exmaple.com',
              displayName: "Pablo",
              emailVerified: true
            },
          }}
        >
          <MoviesContext.Provider value={mockMoviesContext}>
            <MemoryRouter>
              <Movie />
            </MemoryRouter>
          </MoviesContext.Provider>
        </AuthStateContext.Provider>
      </AuthProvider>
    );

    expect(wrapper).toMatchSnapshot();
    const textNode = wrapper.find("p").getElements()[9].props.children;
    expect(textNode).toBe("Añadir a favoritos");
  });
});
