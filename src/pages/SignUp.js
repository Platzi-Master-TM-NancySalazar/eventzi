import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { MdLockOutline, MdMailOutline } from "react-icons/md";
import { FiUser } from "react-icons/fi";

export default function SignUp() {
  let history = useHistory()
  const [form, setForm] = useState(null)

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
    console.log(form)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    signUp(form, "/login")
  }

  const signUp = ({ name, email, password, confirmPassword }, redirectUrl) => {
    if (password === confirmPassword) {
      axios({
        method: 'POST',
        url: 'https://eventziapi.herokuapp.com/users/',
        data: {
          fullname: name,
          email: email,
          psswd: password,
        }
      })
        .then((data) => {
          console.log(data.data)
          if (data.data.data.length > 0) {
            history.push(redirectUrl)
          }
        })
        .catch((err) => console.log(err))
    } else {
      console.log('las contraseñas no coinciden')
    }
  }




  return (
    <div className="signup">
      <div className="negro2">
        <form className="signup__container" action="" onSubmit={handleSubmit}>
          <label htmlFor="name">
            <span><FiUser /></span>
            <input type="text" name="name" id="name" placeholder="Name" onChange={handleInput} />
          </label>

          <label htmlFor="email">
            <span><MdMailOutline /></span>
            <input type="text" name="email" id="email" placeholder="Email Address" onChange={handleInput} />
          </label>

          <label htmlFor="password">
            <span><MdLockOutline /></span>
            <input type="password" name="password" id="password" placeholder="Password" onChange={handleInput} />
          </label>

          <label htmlFor="confirmPassword">
            <span><MdLockOutline /></span>
            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" onChange={handleInput} />
          </label>

          <button type="submit">SIGN UP</button>

        </form>
      </div>

    </div>
  )
}
