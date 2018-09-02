import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import TopBar from "./TopBar";
export default class ApplicationLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="main-layout">
        <TopBar />
        {this.props.children}
      </div>
    );
  }
}
