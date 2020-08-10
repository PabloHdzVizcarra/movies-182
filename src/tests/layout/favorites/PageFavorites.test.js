import React from 'react';
import "@testing-library/jest-dom";
import { mount } from 'enzyme';
import { PageFavorites } from '../../../layout/favorites/PageFavorites';
import { AuthProvider } from '../../../context/authContext';
import { MoviesContext } from '../../../context/MoviesContext';
import { MemoryRouter } from 'react-router-dom';

describe('Test in <PageFavorites />', () => {

  test('if there are no favorite movies the component must render the text "No tienes peliculas favoritas"', () => {
    
    const wrapper = mount(
      <AuthProvider>
        <MoviesContext.Provider value={{
          loadingMovies: false,
          favoriteMovies: []
        }}>          
          <PageFavorites />
        </MoviesContext.Provider>
      </AuthProvider>
    )

    const text = wrapper.find('p').text().trim();
    expect(text).toBe('No tienes peliculas favoritas');
  })

  test('if the component has favorite movies these should be rendered', () => {

    const mockMoviesContext = {
      loadingMovies: false,
      favoriteMovies: [
        {
          title: "Harry Potter",
          id: 612706
        }
      ]
    }
    const wrapper = mount(
      <AuthProvider>
        <MoviesContext.Provider value={mockMoviesContext}>
          <MemoryRouter>
            <PageFavorites />
          </MemoryRouter>  
        </MoviesContext.Provider>
      </AuthProvider>
    )

    
    expect(wrapper).toMatchSnapshot();
    const node = wrapper.find('h4').text().trim();
    expect(node).toBe(mockMoviesContext.favoriteMovies[0].title);
  })
  
  
})
