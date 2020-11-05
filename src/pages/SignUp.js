import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

// import { Link } from 'react-router-dom'
// import user from '../assets/static/user-icon.png'
// import candado from '../assets/static/candado.svg'
// import email from '../assets/static/mensaje.svg'

import { MdLockOutline, MdMailOutline } from "react-icons/md";
import { FiUser } from "react-icons/fi";

import { Context } from "../context/Context";

export default function SignUp() {
  let history = useHistory();
  const [form, setForm] = useState(null);

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    console.log(form);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signUp(form, "/login");
  };

  const signUp = ({ name, email, password }, redirectUrl) => {
    console.log(email, password);
    axios({
      method: "POST",
      url: "https://eventziapi.herokuapp.com/users/",
      data: {
        fullname: name,
        email: email,
        psswd: password,
      },
    })
      .then((data) => {
        console.log(data.data);
        if (data.data.data.length > 0) {
          history.push(redirectUrl);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <div className="blackscreen">
        <form className="login__container" action="" onSubmit={handleSubmit}>
          <label htmlFor="name">
            <span>
              <FiUser />
            </span>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              onChange={handleInput}
            />
          </label>

          <label htmlFor="email">
            <span>
              <MdMailOutline />
            </span>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email Address"
              onChange={handleInput}
            />
          </label>

          <label htmlFor="password">
            <span>
              <MdLockOutline />
            </span>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleInput}
            />
          </label>

          <label htmlFor="confirm-password">
            <span>
              <MdLockOutline />
            </span>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Confirm Password"
              onChange={handleInput}
            />
          </label>

          <Link to="/login">
            <button type="submit">SIGN UP</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
