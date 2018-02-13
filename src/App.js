import React, { Component } from 'react';
import ChartsContainer from './containers/Charts/ChartsContainer';
import LoginContainer from './containers/Login/LoginContainer';
import StartContainer from './containers/Start/StartContainer';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom';
import './App.css';
import AboutContainer from './containers/About/AboutContainer';
import HeaderArea from './components/HeaderArea';
import * as AllActions from './actions/AppActions'

class App extends Component {
  state = {
    userIsLoggedIn: false,
    username: '',
    password: '',
    data : []
  }

  render() {
    return (
      <div className="App">
        <HeaderArea />
        <Route exact path="/" component={StartContainer} />
        <Route exact path="/charts" render={() => (
          this.props.loggedin ? (<ChartsContainer />) : (<LoginContainer />)
        )} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/about" component={AboutContainer} />
        <footer className="App-footer">
          A little Footer
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedin: state.userIsLoggedIn
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AllActions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
