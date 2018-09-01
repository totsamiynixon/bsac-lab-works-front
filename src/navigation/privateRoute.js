import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      console.log("routeProps", props);
      return localStorage.getItem("isLoggedIn") === "true" ? (
        <Component {...props} />
      ) : props.location.pathname != "/login" ? (
        <Redirect to="/login" />
      ) : null;
    }}
  />
);
export default PrivateRoute;
