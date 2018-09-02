import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./privateRoute";
//COMPONENTS
import AppLayout from "../components/layout/Layout";
import Login from "../components/auth/Login";
import Labs from "../components/user/Labs";

export default class ApplicationRouter extends React.Component {
  beforeRouteCh;
  render() {
    return (
      <BrowserRouter>
        <AppLayout>
          <Switch>
            <PrivateRoute exact path="/" component={Labs} />
            <Route path="/login" component={Login} />
          </Switch>
        </AppLayout>
      </BrowserRouter>
    );
  }
}
