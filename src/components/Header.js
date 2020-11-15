import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/static/logo_full.png'

import globalContext from '../context/globalContext'

export default function NavBar () {
  const { user: { isAuth, userName }, logout, setSearch } = useContext(globalContext)

  const { pathname } = useLocation()

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <header className="header">
      <Link to="/">
        <img className="header--img" src={logo} alt="Logo Eventzi" />
      </Link>

      <nav className="header--nav">
        <ul className="header--nav-link">
          {
            pathname === '/' && <input
              onChange={handleChange}
              className="header--search"
              type="text"
              placeholder="Search event"
            />
          }

          {isAuth
            ? <>
              <p>{userName}</p>
              <Link to="/admin_panel" className="header--nav-link">
                <ul>Admin Panel</ul>
              </Link>
              <Link to="/" className="header-nav__logout">
                <ul className="header--nav-link" onClick={() => logout()}>
                  Logout<output></output>
                </ul>
              </Link>
            </>
            : <>
              <Link to="/signup" className="header--nav-link">
                <ul>Sign up</ul>
              </Link>

              <Link to="/login">
                <ul className="header--nav-link">Login</ul>
              </Link>
            </>
          }
        </ul>
      </nav>
    </header>
  )
}
