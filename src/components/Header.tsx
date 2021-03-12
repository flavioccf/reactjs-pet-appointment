import React, { useReducer } from "react";
import { Link } from "react-router-dom";

function reducer(isActiveMenu: string) {
  return isActiveMenu === "is-active" ? "" : "is-active";
}

function Header() {
  const [isActiveMenu = "", toggleMenu] = useReducer(reducer, "");
  return (
    <>
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img
              alt=""
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            ></img>
          </Link>
          <span
            onClick={toggleMenu}
            role="button"
            className={`navbar-burger ${isActiveMenu}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>
        <div id="navbarBasicExample" className={`navbar-menu ${isActiveMenu}`}>
          <div className="navbar-start">
            <Link
              onClick={toggleMenu}
              to="/add_appointment"
              className="navbar-item"
            >
              Add Appointments
            </Link>
            <Link
              onClick={toggleMenu}
              to="/search_appointment"
              className="navbar-item"
            >
              Search Appointments
            </Link>
            <Link
              onClick={toggleMenu}
              to="/list_appointment"
              className="navbar-item"
            >
              List Appointments
            </Link>
          </div>
        </div>
      </nav>
      <div className="m-5 p-5"></div>
    </>
  );
}

export default Header;
