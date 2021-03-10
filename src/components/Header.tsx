import React, { createContext, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { HeaderContextProps } from '../interfaces/HeaderContextProps';

export const HeaderContext = createContext<Partial<HeaderContextProps>>({});

function reducer(isActiveMenu: string) {
    return isActiveMenu === "is-active" ? "" : "is-active";
}

function Header() {
    const [isActiveMenu = "", toggleMenu] = useReducer(
        reducer,
        ""
    );
    const values = {isActiveMenu, toggleMenu};

    return(
        <HeaderContext.Provider value={
            values
        }>
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <Link to="/" className="navbar-item">
            <img alt="" src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
            </Link>
            <a onClick={toggleMenu} href="#" role="button" className={`navbar-burger ${isActiveMenu}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" className={`navbar-menu ${isActiveMenu}`}>
            <div className="navbar-start">
            <Link to="/add_appointment" className="navbar-item">
                Add Appointments
            </Link>
            <Link to="/search_appointment" className="navbar-item">
                Search Appointments
            </Link>
            <Link to="/list_appointment" className="navbar-item">
                List Appointments
            </Link>
            </div>
        </div>
        </nav>
        <div className="m-5 p-5"></div>
        </HeaderContext.Provider>
    );
}

export default Header;