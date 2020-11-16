import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/static/logo_full.png'

import { MdDashboard, MdArrowDropDown, MdClose } from 'react-icons/md'

import globalContext from '../context/globalContext'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const { user: { isAuth, userName }, logout, setSearch } = useContext(globalContext)

  const { pathname } = useLocation()

  useEffect(() => {
    if (open) {
      document.addEventListener('click', handleOutClick)
    }
    return () => {
      document.removeEventListener('click', handleOutClick)
    }
  }, [open])

  const handleOutClick = () => {
    setOpen(false)
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <header className="header">
      <Link to="/">
        <img className="header--img" src={logo} alt="Logo Eventzi" />
      </Link>

      <nav className="header--nav">
        {
          pathname === '/' && <input
            onChange={handleChange}
            className="header--search"
            type="text"
            placeholder="Search event"
          />
        }

        <ul className="header--nav-link">
          {isAuth
            ? <>
              <p>{userName}</p>
              <MdArrowDropDown onClick={handleOpen} className='header__user-menu-icon' />
              <div className={`header__user-menu ${open && 'active'}`}>
                <Link className='header__user-link' to="/admin_panel" onClick={() => handleOpen()}>
                  <MdDashboard className='header__user-link-icon' />
                  <span >Admin Panel</span>
                </Link>
                <Link className='header__user-link' to="/" onClick={() => {
                  handleOpen()
                  logout()
                }}>
                  <MdClose className='header__user-link-icon' />
                  <span>
                    Logout<output></output>
                  </span>
                </Link>
              </div>
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

export default NavBar
