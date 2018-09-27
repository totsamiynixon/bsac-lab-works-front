import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//COMPONENTS

import Login from "../components/Auth/Login";
import Labs from "../components/User/Labs";
import Tests from "../components/User/Tests/Tests";
import Test from "../components/User/Tests/Test";
import IndexRoute from "./IndexRoute";
import Registration from "../components/Auth/Registration";

export default class ApplicationRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/tests/:labId" component={Tests} />
                    <Route path="/tests/pass/:testId" component={Test} />
                    <Route path="/registration" component={Registration} />
                    <IndexRoute component={IndexRoute} />
                    <Route exact path="/" component={Labs} />
                    <Route path="/login" component={Login} />
                </Switch>
            </BrowserRouter>
        );
    }
}