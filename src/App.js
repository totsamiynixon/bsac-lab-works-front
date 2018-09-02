import React, { Component } from "react";

//COMPONENTS
import TopBar from "./components/layout/TopBar";
import Navigation from "./navigation/navigation";

//UTILS
import { registerHttp } from "./http";

//HIUNIA
import "./App.css";

class App extends Component {
  render() {
    return <Navigation />;
  }
}
registerHttp();
export default App;
