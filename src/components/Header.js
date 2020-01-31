import React from "react";
import { NavLink } from "react-router-dom";

// Header section for applications
const Header = () => (
  <div>
    <header className="App-header">
      <NavLink className="Nav-Links" to="/">
        Home
      </NavLink>
      <NavLink className="Nav-Links" to="/charts">
        Charts
      </NavLink>
      <NavLink className="Nav-Links" to="/about">
        About
      </NavLink>
      <h1 className="App-title">React Code Example</h1>
    </header>
  </div>
);

export default Header;
