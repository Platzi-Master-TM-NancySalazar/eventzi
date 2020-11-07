import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/static/logo_full.png";
import { Context } from "../context/Context";

export default function NavBar() {
  const { removeAuth } = useContext(Context);
  const { isAuth } = useContext(Context);

  return (
    <header className="header">
      <Link to="/">
        <img className="header--img" src={logo} alt="Logo Eventzi" />
      </Link>

      <nav className="header--nav">
        <ul className="header--nav-link">
          <input
            className="header--search"
            type="text"
            placeholder="Search event"
          />

          {isAuth ? (
            <>
              <Link to="/login" className="header-nav__logout">
                <ul className="header--nav-link" onClick={() => removeAuth()}>
                  Log out<output></output>
                </ul>
              </Link>
            </>
          ) : (
            <>
              <Link to="/signup" className="header--nav-link">
                <ul>Sign up</ul>
              </Link>

              <Link to="/login">
                <ul className="header--nav-link">Log in</ul>
              </Link>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
