import React from 'react';
import "@testing-library/jest-dom";
import { AuthProvider, AuthStateContext } from '../../../context/authContext';
import { MoviesContext } from '../../../context/MoviesContext';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchMovie } from '../../../layout/search/SearchMovie';

describe('Test in <SearchMovie />', () => {

  const mockGetMovieSearch = jest.fn();

  const Wrapper = ({ children }) => {
    return (
      <AuthProvider>
        <AuthStateContext.Provider
          value={{

          }}
        >
          <MoviesContext.Provider
            value={{
              movies: [
                {
                  id: '123',
                  title: "Pokemon",
                  popularity: 9.2,
                  release_date: '2020-09-12',
                  vote_average: 1029
                },
                {
                  id: '56',
                  title: "Naruto",
                  popularity: 8.1,
                  release_date: '2019-11-20',
                  vote_average: 1029
                }
              ],
              getMovieSearch: mockGetMovieSearch,
              getUpcomingMovies: jest.fn(),
              dispatch: jest.fn(),
              getTopRatedMovies: jest.fn(),
              errorForm: {
                error: false,
                message: ""
              },
              searchMovie: [

              ],
              errorContextMovies: {
                error: false,
                message: ''
              }
            }}
          >
          <MemoryRouter>{children}</MemoryRouter>
        </MoviesContext.Provider>
        </AuthStateContext.Provider>
      </AuthProvider>
    );
  };

  const customRender = (ui, options) => {
    render(ui, { wrapper: Wrapper, ...options });
  };
  test('the component should render correctly ', () => {
    
    customRender(<SearchMovie />)
    expect(screen.getByText("Buscar")).toBeInTheDocument();
  })

  test('the search button should work ', async () => {

    customRender(<SearchMovie/>)
    const searchButton = screen.getByText("Buscar");
    const input = screen.getByDisplayValue('');


    fireEvent.change(input, {
      target: {
        value: "Iron Man"
      }
    });
    fireEvent.click(searchButton);
    expect(mockGetMovieSearch).toHaveBeenCalledWith("Iron Man");
    expect(input.value).toBe('');
  })


  
})
