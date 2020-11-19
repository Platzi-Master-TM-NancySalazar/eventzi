import React, { useState } from 'react'
import ApiEventzi from '../utils/ApiEventzi'

export default function Agenda () {
  const [form, setForm] = useState(null)

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    sendagenda(form)
  }

  const sendagenda = () => {
    ApiEventzi.getOrganizations()
      .then(data => console.log(data))
  }

  return (
    <div className="agenda">

      <div className="agenda__container">
        <h3>Schedule</h3>

        <form onSubmit={handleSubmit}>
          <label htmlFor="agenda__name">
            <p>Title</p>
            <input type="text" name="agenda__title" id="agenda__title" placeholder="Title..." onChange={handleInput} />
          </label>

          <label htmlFor="agenda__description">
            <p>Description</p>
            <textarea type="text" name="agenda__description" id="agenda__description" placeholder="Tell us about the agenda..." onChange={handleInput} ></textarea>
          </label>
          <label htmlFor="agenda__date">
            <p>Time</p>
            <input type="time" name="agenda__date" id="agenda__date" placeholder="Date" onChange={handleInput} />
          </label>

          <button type="submit">Save talk</button>

        </form>

      </div>
    </div>

  )
}
