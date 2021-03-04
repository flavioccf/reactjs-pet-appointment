import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isActiveMenu = "", toggle] = useReducer(
        (isActiveMenu: string) => (isActiveMenu === "is-active" ? "" : "is-active"),
        ""
    );

    return(
        <>
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <Link to="/" className="navbar-item">
            <img alt="" src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
            </Link>
            <a onClick={toggle} href="#" role="button" className={`navbar-burger ${isActiveMenu}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
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
        </>
    );
}

export default Header;