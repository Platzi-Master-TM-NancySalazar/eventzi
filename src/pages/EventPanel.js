import React, { useState } from 'react'
import eventImage from '../assets/static/event-image.png'
import logo from '../assets/static/logo-black.svg'
import social from '../assets/static/redes-sociales.png'
import axios from "axios"


import LeftContainer from '../components/LeftContainer'
import { MdTitle } from 'react-icons/md'
import Axios from 'axios'
// import { MdNotifications, MdPerson, MdPeople, MdEqualizer, MdPublish, MdShare } from "react-icons/md"




const EventPanel = () => {
    const [form, setForm] = useState(null)

    const handleInput = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        sendEmail(form)
    }

    const sendEmail = ({ eventPanelTitle, eventPanelMessage }) => {
        console.log('eventPanelTitle', eventPanelTitle)
        console.log('eventPanelMessage', eventPanelMessage)
        axios({
            method: 'POST',
            url: 'https://eventziapi.herokuapp.com/difusion/events/1',
            data: {
                title: eventPanelTitle,
                message: eventPanelMessage
            }
        })
            .then(data => console.log(data))
            .catch((err) => console.log(err))
    }

    return (
        <div className="event">
            <LeftContainer />

            <div className="main-container">
                <div className="main-container_main">
                    <figure>
                        <img src={eventImage} alt="" />
                        <button>Change cover</button>
                    </figure>

                    <form onSubmit={handleSubmit}>
                        <p>Title</p>
                        <label htmlFor="eventPanel-title">
                            <input type="text" id="eventPanelTitle" placeholder="Titulo del evento..." name="eventPanelTitle" onChange={handleInput} />
                        </label>

                        <p>Message</p>
                        <label htmlFor="eventPanel-message">
                            <input type="text" id="eventPanelMessage" className="input-message" name="eventPanelMessage" placeholder="Mensaje..." onChange={handleInput} />
                        </label>
                        <button type="submit">Save</button>

                    </form>

                    <figure className="logo-image">
                        <img src={logo} alt="" />
                        <span><h2>EVENTZI</h2></span>
                    </figure>

                    <div className="social-media">
                        <figure>
                            <img src={social} alt="" />
                        </figure>
                    </div>
                </div>
                <div className="outside">
                    <p>The email will be sent a day before the event.</p>
                </div>
            </div>
        </div>
    )
}

export default EventPanel