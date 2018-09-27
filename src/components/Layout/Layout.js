import React from "react";
import { propTypes } from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logout } from "../../actions/user";

import TopBar from "./TopBar";

class ApplicationLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="main-layout">
                <TopBar isLoggedIn={this.props.loggedIn} logout={this.props.logout} name={this.props.username} />
                <div className="layout-container">{this.props.children}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.login.loggedIn,
        username: state.login.username
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: bindActionCreators(logout, dispatch)
    };
};

const WrappedApplicationLayout = connect(mapStateToProps, mapDispatchToProps)(ApplicationLayout);

export default WrappedApplicationLayout;