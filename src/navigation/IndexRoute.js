import React, { Component } from "react";
import { connect } from "react-redux";

import Login from "../components/Auth/Login"
import Labs from "../components/User/Labs";

class IndexRoute extends Component {
    render() {
        if (this.props.isLoggedIn) {
            return <Labs />
        } else {
            return <Login />
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.login.loggedIn
    }
};

const WrappedIndexRoute = connect(mapStateToProps)(IndexRoute);

export default WrappedIndexRoute;