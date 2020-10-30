import React from 'react'
import eventImage from '../assets/static/event-image.png'
import logo from '../assets/static/logo-black.svg'
import social from '../assets/static/redes-sociales.png'
import { MdNotifications, MdPerson, MdPeople, MdEqualizer, MdPublish, MdShare } from "react-icons/md"



const EventPanel = () => {
    return (
        <div className="event">
            <div className="left-container">
                <ul>
                    <li><MdNotifications /> Events</li>
                    <li><MdPerson />  Organizers</li>
                    <li><MdPeople /> Attendants</li>
                    <li><MdShare /> Diffusion</li>
                    <li><MdPublish />  Publish</li>
                    <li><MdEqualizer /> Analytics</li>
                </ul>
            </div>

            <div className="main-container">
                <div className="main-container_main">
                    <figure>
                        <img src={eventImage} alt="" />
                        <button>Change cover</button>
                    </figure>

                    <p>Title:</p>
                    <input type="text" placeholder="Título del evento..." />

                    <p>Message:</p>
                    <input type="text" className="input-message" placeholder="Mensaje..." />

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
                    <button>Save</button>
                </div>
            </div>
        </div>
    )
}

export default EventPanel