import React from 'react'
// import { Link } from 'react-router-dom'
// import user from '../assets/static/user-icon.png'
// import candado from '../assets/static/candado.svg'
// import email from '../assets/static/mensaje.svg'

import { MdLockOutline, MdMailOutline } from "react-icons/md";
import { FiUser } from "react-icons/fi";

// import Context from '../Context'



export default function SignUp() {

    return (
        <div className="signup">
            <div className="negro2">
                <form className="signup__container" action="">
                    <label htmlFor="name">
                        <span><FiUser /></span>
                        <input type="text" name="name" id="name" placeholder="Name" />
                    </label>

                    <label htmlFor="email">
                        <span><MdMailOutline /></span>
                        <input type="text" name="email" id="email" placeholder="Email Address" />
                    </label>

                    <label htmlFor="password">
                        <span><MdLockOutline /></span>
                        <input type="text" name="password" id="password" placeholder="Password" />
                    </label>

                    <label htmlFor="confirm-password">
                        <span><MdLockOutline /></span>
                        <input type="text" name="confirm-password" id="confirm-password" placeholder="Confirm Password" />
                    </label>


                    <button>SIGN UP</button>

                </form>
            </div>

        </div>
    )
}
