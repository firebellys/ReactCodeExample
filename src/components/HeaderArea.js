import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from '../containers/Login/LogoutContainer'

// Header section for page.
const HeaderArea = () => {
    return <div>
        <header className="App-header">
            <NavLink className="Nav-Links" to="/">Home</NavLink>
            <NavLink className="Nav-Links" to="/charts">Charts</NavLink>
            <NavLink className="Nav-Links" to="/about">About</NavLink>
            <h1 className="App-title">Test Run Header</h1>
            <Logout />
        </header>
    </div>
}

export default HeaderArea;