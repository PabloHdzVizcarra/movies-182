import React from 'react'
import { types } from '../types/types';

const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();

function authReducer(state, action) {
  switch (action.type) {

    case types.setActiveUser:
      return {
        ...state,
        activeUser: action.payload,
        isActived: true
      }

    case types.logoutUser:
      return {
        ...state,
        activeUser: {},
        isActived: false
      }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}


function AuthProvider({ children }) {
  const [state, dispatch] = React.useReducer(authReducer, {
    activeUser: {},
    isActived: false
  });

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

function useAuthState() {
  const context = React.useContext(AuthStateContext);

  if (context === undefined) {
    throw new Error('useAuthState must be used within AuthProvider')
  }

  return context
}

function useAuthDispatch() {
  const context = React.useContext(AuthDispatchContext);

  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within AuthProvider')
  }

  return context
}

export {
  AuthProvider,
  useAuthState,
  useAuthDispatch
}