import React from 'react'
import { Link } from 'react-router-dom'
import { MdLockOutline, MdMailOutline } from "react-icons/md";


export default function Login() {
    return (
        <div className="login">
            <div className="negro">

                <form className="login__container">
                    <label htmlFor="email">
                        <span><MdMailOutline /></span>
                        <input type="text" id="email" name="email" placeholder="Email Address" />
                    </label>

                    <label htmlFor="password2">
                        <span><MdLockOutline /></span>
                        <input type="text" name="password" placeholder="Password" />
                    </label>
                    <div className="login__container-more">
                        <p><input type="checkbox" value="1" id="checkboxOneInput" />Remember me</p>
                        <p className="italic">Forgot Password?</p>
                    </div>

                    <button>LOGIN</button>

                </form>
                <Link to="/" className="login__bottom">
                    <p>Create a new account</p>
                </Link>



            </div>

        </div>
    )
}
