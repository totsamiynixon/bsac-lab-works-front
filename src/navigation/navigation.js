import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./privateRoute";
//COMPONENTS
import AppLayout from "../components/layout/Layout";
import Login from "../components/auth/Login";
import Labs from "../components/user/Labs";
import Tests from "../components/user/Tests";
import Test from "../components/user/Test";

export default class ApplicationRouter extends React.Component {
  beforeRouteCh;
  render() {
    return (
      <BrowserRouter>
        <AppLayout>
          <Switch>
            <PrivateRoute exact path="/" component={Labs} />
            <PrivateRoute exact path="/tests/:labId" component={Tests} />
            <PrivateRoute path="/tests/pass/:testId" component={Test} />
            <Route path="/login" component={Login} />
          </Switch>
        </AppLayout>
      </BrowserRouter>
    );
  }
}
