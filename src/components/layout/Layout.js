import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Login from "../auth/Login";
import Subjects from "../user/Subjects";
import TopBar from "./TopBar";
export default class ApplicationLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.children);
    return (
      <div id="main-layout">
        <TopBar />
        {this.props.children}
      </div>
    );
  }
}
