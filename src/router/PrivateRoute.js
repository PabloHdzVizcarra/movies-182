import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ isLogin, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isLogin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
