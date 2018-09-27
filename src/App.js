import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import store from "./helpers/store";
import configureFakeBackend from './helpers/fake-user-backend';

//COMPONENTS
import Navigation from "./navigation/navigation";
import ApplicationLayout from "./components/Layout/Layout";

//UTILS
import { registerHttp } from "./http";

import "./App.css";

configureFakeBackend();

class App extends Component {
  render() {
    return (
        <div>
            <ApplicationLayout/>
            <Navigation />
        </div>
    )
  }
}

const WrappedApp = connect()(App);

ReactDOM.render(<Provider store={store}><WrappedApp /></Provider>, document.getElementById('root'));

registerHttp();
export default App;

