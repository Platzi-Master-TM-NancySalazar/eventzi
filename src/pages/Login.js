import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdLockOutline, MdMailOutline } from "react-icons/md"
import axios from "axios"
// import qs 'qs');
import https from 'https'


import { Context } from '../context/Context'


const Login = () => {
    const { activateAuth } = useContext(Context)
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

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
        // console.log('form', form)
    }

    // const loginUser = () => {
    //     let data = qs.stringify({
    //         'email': 'luis@hotmail.com',
    //         'psswd': '123'
    //     });

    // headers: {
    //     'Content-Type': "application/x-www-form-urlencoded"
    // },




    // const loginUser = ({ name, password }, redirectUrl) => {
    const loginUser = () => {
        // axios({
        //     method: 'post',
        //     url: 'https://www.eventziapp.com:3000/users/validate',
        //     httpsAgent: new https.Agent({
        //         rejectUnauthorized: false,
        //     }),
        //     data: {
        //         email: 'luis@hotmail.com',
        //         psswd: '123',
        //     },
        // })
        //     .then(({ data }) => {
        //         console.log('exitoso', data)
        //     })
        //     .catch(err => console.log('Fallo la peticion', err))
        axios({
            method: 'post',
            url: 'https://www.eventziapp.com:3000/users/validate',
            httpsAgent: new https.Agent({
                rejectUnauthorized: false,
            }),
            data: {
                email: 'luis@hotmail.com',
                psswd: '123',
            },
        })
            .then((data) => console.log(data.data))
            .catch((err) => console.log(err))
    }

    // const loginUser = async ({ name, password }) => {
    //     try {
    //         usuarios = await axios({
    //             method: 'post',
    //             url: 'https://www.eventziapp.com:3000/users/validate',
    //             httpsAgent: new https.Agent({
    //                 rejectUnauthorized: false,
    //             }),
    //             data: {
    //                 email: 'luis@hotmail.com',
    //                 psswd: '123',
    //             },
    //         })
    //     } catch (error) {
    //         console.log('error', error)
    //     }
    // }





    // axios(config)
    // .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });


    // let usuarios = []

    // try {
    //   usuarios = await axios.get('https://3.137.109.12:3000/users', {
    //     httpsAgent: new https.Agent({
    //       rejectUnauthorized: false,
    //     }),
    //   })
    // } catch (error) {
    //   console.log('error', error)
    // }

    // const async loginUser = () => {
    //     try {
    //         usuarios = await axios.get('https://3.137.109.12:3000/users', {
    //             httpsAgent: new https.Agent({
    //                 rejectUnauthorized: false,
    //             }),
    //         })
    //     } catch (error) {
    //         console.log('error', error)

    //     }








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

                    <button onClick={() => activateAuth()}>LOGIN</button>

                </form>
                <Link to="/" className="login__bottom">
                    <p>Create a new account</p>
                </Link>



            </div>

        </div>
    )
}

export default Login