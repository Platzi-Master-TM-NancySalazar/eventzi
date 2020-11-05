import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MdLockOutline, MdMailOutline } from "react-icons/md"
import axios from "axios"

import { Context } from '../context/Context'


const Login = () => {
    let history = useHistory()
    const { activateAuth } = useContext(Context)
    const [form, setForm] = useState(null)

    const handleInput = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        loginUser(form, "/")
    }

    const loginUser = ({ email, password }, redirectUrl) => {
        console.log('aqui')
        console.log(email, password)
        axios({
            method: 'POST',
            url: 'https://eventziapi.herokuapp.com/users/validate',
            data: {
                email: email,
                psswd: password,
            }
        })
            .then((data) => {
                console.log('llegaste')
                console.log('tu info es: ', data)
                if (data.data.data.length > 0) {
                    history.push(redirectUrl)
                }
                activateAuth()
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className="login">
            <div className="negro">
                <form className="login__container" onSubmit={handleSubmit}>
                    <label htmlFor="email">
                        <span><MdMailOutline /></span>
                        <input type="text" id="email" name="email" placeholder="Email Address" onChange={handleInput} />
                    </label>

                    <label htmlFor="password2">
                        <span><MdLockOutline /></span>
                        <input type="password" name="password" placeholder="Password" onChange={handleInput} />
                    </label>
                    <div className="login__container-more">
                        <p><input type="checkbox" value="1" id="checkboxOneInput" />Remember me</p>
                        <p className="italic">Forgot Password?</p>
                    </div>

                    <button type="submit">LOGIN</button>

                </form>
                <Link to="/signup" className="login__bottom">
                    <p>Create a new account</p>
                </Link>

            </div>

        </div>
    )
}

export default Login

