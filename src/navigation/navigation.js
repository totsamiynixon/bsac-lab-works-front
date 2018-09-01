import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./privateRoute";
//COMPONENTS
import AppLayout from "../components/layout/Layout";
import Login from "../components/auth/Login";
import Subjects from "../components/user/Subjects";
import Labs from "../components/user/Labs";

export default class ApplicationRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/">
          <AppLayout>
            <Switch>
              <Redirect from="/" exact to="/labs" />
              {
                //<PrivateRoute exact path="/subjects" component={Subjects} />}
              }
              <PrivateRoute path="/labs" component={Labs} />
              <Route path="/login" component={Login} />
            </Switch>
          </AppLayout>
        </Route>
      </BrowserRouter>
    );
  }
}
