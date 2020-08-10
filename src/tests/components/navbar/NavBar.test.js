import "@testing-library/jest-dom";
import React from "react";
import { mount } from "enzyme";
import { AuthProvider, AuthStateContext } from "../../../context/authContext";
import { MoviesContext, MoviesProvider } from "../../../context/MoviesContext";
import { MemoryRouter } from "react-router-dom";
import { NavBar } from "../../../components/navbar/NavBar";
import { render, screen, fireEvent } from "@testing-library/react";

describe("test in <NavBar /> component", () => {
  //Enzyme
  const contextValue = {
    deleteMovieFromFavorites: jest.fn(),
  };

  const wrapper = mount(
    <AuthProvider>
      <MoviesContext.Provider value={contextValue}>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </MoviesContext.Provider>
    </AuthProvider>
  );

  // react testing library

  const Wrapper = ({ children }) => {
    return (
      <AuthProvider>
        <MoviesProvider>
          <MemoryRouter>{children}</MemoryRouter>
        </MoviesProvider>
      </AuthProvider>
    );
  };

  const customRender = (ui, options) => {
    render(ui, { wrapper: Wrapper, ...options });
  };

  test("the component must be correctly rendered ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("the login button should work", () => {
    customRender(<NavBar />);
    expect(screen.getByText(/Inicia Sesion/i)).toBeInTheDocument();
  });

  test('when the user is logged in, the "Cerrar sesion" button should appear', async () => {
    const Wrapper = ({ children }) => {
      return (
        <AuthProvider>
          <AuthStateContext.Provider
            value={{
              isActived: true,
              activeUser: {
                displayName: "Pablo Hernandez",
              },
            }}
          >
            <MoviesContext.Provider
              value={{
                dispatch: jest.fn(),
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

    customRender(<NavBar />);
    expect(screen.getByText(/Cerrar sesion/i)).toBeInTheDocument();
  });

  test('when you click on "Cerrar sesion", the users current session should be closed and the text "Cerrar sesion" should disappear', async () => {
    const Wrapper = ({ children }) => {
      return (
        <AuthProvider>
          <AuthStateContext.Provider
            value={{
              isActived: true,
              activeUser: {
                displayName: "Pablo Hernandez",
              },
            }}
          >
            <MoviesContext.Provider
              value={{
                dispatch: jest.fn(),
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

    customRender(<NavBar />);

    const node = screen.getByText(/Cerrar sesion/i);
    fireEvent.click(node);
  });
});
