import React, { useState } from 'react'
import logo from '../assets/static/logo-black.svg'
import axios from 'axios'

const EventPanel = () => {
  const [form, setForm] = useState(null)

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
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
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }

  return (
    <>
      <h3 className="panel__title">Edit email reminder message</h3>
      <div className="main-container">
        <div className="main-container_main">
          <form onSubmit={handleSubmit}>
            <p>Title</p>
            <label htmlFor="eventPanel-title">
              <input
                type="text"
                id="eventPanelTitle"
                placeholder="Message title..."
                name="eventPanelTitle"
                onChange={handleInput}
              />
            </label>

            <p>Message</p>
            <label htmlFor="eventPanel-message">
              <input
                type="text"
                id="eventPanelMessage"
                className="input-message"
                name="eventPanelMessage"
                placeholder="Write here your invitation..."
                onChange={handleInput}
              />
            </label>
            <button type="submit">Save</button>
          </form>

          <figure className="logo-image">
            <img src={logo} alt="" />
            <span>
              <h2>EVENTZI</h2>
            </span>
          </figure>
        </div>
        <div className="outside">
          <p>The email will be sent a day before the event.</p>
        </div>
      </div>
    </>
  )
}

export default EventPanel
