import React, { Component } from "react";
import PropTypes from "prop-types";
import ChartsContainer from "./containers/Charts/ChartsContainer";
import LoginContainer from "./containers/Login/LoginContainer";
import StartContainer from "./containers/Start/StartContainer";
import AboutContainer from "./containers/About/AboutContainer";
import HeaderArea from "./components/HeaderArea";
import FooterArea from "./components/FooterArea";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import * as AllActions from "./actions/AppActions";

// Styles
import "./styles/App.css";

// Main application class
class App extends Component {
  state = {
    userIsLoggedIn: false,
    username: "",
    password: "",
    data: []
  };

  render() {
    return (
      <div className="App">
        <HeaderArea />
        <div className="MainArea">
          <Route exact path="/" component={StartContainer} />
          <Route
            exact
            path="/charts"
            render={() =>
              this.props.localUserIsLoggedIn ? (
                <ChartsContainer />
              ) : (
                <LoginContainer />
              )
            }
          />
          <Route path="/login" component={LoginContainer} />
          <Route path="/about" component={AboutContainer} />
        </div>
        <FooterArea />
      </div>
    );
  }
}

// Validate prop types
App.propTypes = {
  localUserIsLoggedIn: PropTypes.bool
};

// Map the redux state to local properties
const mapStateToProps = state => {
  return {
    localUserIsLoggedIn: state.userIsLoggedIn
  };
};

// Map the redux dispatch events to local properties
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AllActions, dispatch)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
