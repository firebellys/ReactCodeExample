import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { configureStore } from "redux-starter-kit";
import rootReducer from "./reducers";
import { Provider, useSelector } from "react-redux";
import Charts from "./pages/Chart";
import Login from "./components/Login";
import Start from "./pages/Start";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Styles
import "./styles/index.css";
import "./styles/App.css";
import Logout from "./components/Logout";

const store = configureStore({ reducer: rootReducer });

// Main application class
const App = () => {
  const userIsLoggedIn = useSelector(state => state.userIsLoggedIn);

  return (
    <div className="App">
      <Header />
      <div className="MainArea">
        <Route
          path="/"
          render={() => (userIsLoggedIn ? <Logout /> : <Login />)}
        />
        <Route exact path="/" component={Start} />
        <Route
          exact
          path="/charts"
          render={() => userIsLoggedIn && <Charts />}
        />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
      </div>
      <Footer />
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
