import React, { useState } from 'react'
import axios from 'axios'

export default function Lecturer () {
  const [form, setForm] = useState(null)

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    sendLecturer(form)
  }

  const sendLecturer = ({ lecturer__biography, lecturer__rol, lecturer__name, lecturer__twitter }) => {
    console.log(lecturer__biography, lecturer__rol, lecturer__name, lecturer__twitter)
    axios({
      method: 'POST',
      url: 'https://eventziapi.herokuapp.com/events/1/speaker/new',
      data: {
        fullname: lecturer__name,
        bio: lecturer__biography,
        twitter: `@${lecturer__twitter}`,
        rol: lecturer__rol,
        status_: 'active'
      }
    })
      .then(data => console.log(data))
      .catch((err) => console.log(err))
  }

  return (
        <div className="lecturer">

            <div className="lecturer__container">
                <h3>Speakers</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="lecturer__name">
                        <p>Name</p>
                        <input type="text" name="lecturer__name" id="lecturer__name" placeholder="Nombre..." onChange={handleInput} />
                    </label>

                    <label htmlFor="lecturer__rol">
                        <p>Rol</p>
                        <input type="text" name="lecturer__rol" id="lecturer__rol" placeholder="Position" onChange={handleInput} />
                    </label>

                    <label htmlFor="lecturer__biography">
                        <p>Bio</p>
                        <textarea type="text" name="lecturer__biography" id="lecturer__biography" placeholder="Bio" onChange={handleInput} ></textarea >
                    </label>

                    <label htmlFor="lecturer__twitter">
                        <p>Twitter</p>
                        <span>@</span><input type="text" name="lecturer__twitter" id="lecturer__twitter" placeholder="Twitter" onChange={handleInput} />
                    </label>

                    {/* <label htmlFor="lecturer__photo">
                        <p>Photo</p>
                        <input type="image" name="lecturer__image" id="lecturer__image" />
                    </label> */}
                    <button type="submit">Save speaker</button>

                </form>
            </div>
        </div>

  )
}
