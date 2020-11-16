import React, { useState, useContext } from 'react'
import { useHistory, Link } from 'react-router-dom'

import { MdLockOutline, MdMailOutline } from 'react-icons/md'
import ApiEventzi from '../utils/ApiEventzi'
import globalContext from '../context/globalContext'

const Login = () => {
  const history = useHistory()
  const { setUser, sendAlert } = useContext(globalContext)
  const [form, setForm] = useState(null)

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    loginUser(form, '/admin_panel')
  }

  const loginUser = ({ email, password }, redirectUrl) => {
    ApiEventzi.login(email, password)
      .then((response) => {
        if (response.data.data.length) {
          setUser({
            userId: response.data.data[0].id_user,
            userName: response.data.data[0].email,
            isAuth: true
          })
          sendAlert({
            show: true,
            type: 'success',
            message: 'user logged in'
          })
          history.push(redirectUrl)
        } else {
          sendAlert({
            show: true,
            type: 'error',
            message: response.data.error
          })
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className='login'>
      <div className='negro'>
        <form className='login__container' onSubmit={handleSubmit}>
          <label htmlFor='email'>
            <span>
              <MdMailOutline />
            </span>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='Email Address'
              onChange={handleInput}
            />
          </label>

          <label htmlFor='password2'>
            <span>
              <MdLockOutline />
            </span>
            <input
              type='password'
              name='password'
              placeholder='Password'
              onChange={handleInput}
            />
          </label>
          <div className='login__container-more'>
            <p>
              <input type='checkbox' value='1' id='checkboxOneInput' />
              Remember me
            </p>
            <p className='italic'>Forgot Password?</p>
          </div>

          <button className='button large' type='submit'>login</button>
          <Link to='/signup' className='button text'>
            <p>Create a new account</p>
          </Link>
        </form>

      </div>
    </div>
  )
}

export default Login
