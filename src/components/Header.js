import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/static/logo_full.png'

export default function NavBar() {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header--img' src={logo} alt='Logo Eventzi' />
      </Link>

      <nav className='header--nav'>
        <ul className='header--nav-link'>
          <input
            className='header--search'
            type='text'
            placeholder='Search event'
          />
        </ul>
        <Link to='/singup' className='header--nav-link'>
          <ul>Sign up</ul>
        </Link>

        <Link to='/login'>
          <ul className='header--nav-link'>Log in</ul>
        </Link>
      </nav>
    </header>
  )
}
