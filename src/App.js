import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from "redux";
import reducer from "./store/Reducer";
import { Provider, useSelector } from "react-redux";
import ChartsContainer from "./containers/Charts/ChartsContainer";
import LoginContainer from "./containers/Login/LoginContainer";
import StartContainer from "./containers/Start/StartContainer";
import AboutContainer from "./containers/About/AboutContainer";
import HeaderArea from "./components/HeaderArea";
import FooterArea from "./components/FooterArea";

// Styles
import "./styles/index.css";
import "./styles/App.css";

const store = createStore(reducer);

// Main application class
const App = () => {
  const userIsLoggedIn = useSelector(state => state.userIsLoggedIn);

  return (
    <div className="App">
      <HeaderArea />
      <div className="MainArea">
        <Route exact path="/" component={StartContainer} />
        <Route
          exact
          path="/charts"
          render={() =>
            userIsLoggedIn ? <ChartsContainer /> : <LoginContainer />
          }
        />
        <Route path="/login" component={LoginContainer} />
        <Route path="/about" component={AboutContainer} />
      </div>
      <FooterArea />
    </div>
  );
};

export default () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
