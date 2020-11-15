import React, { useState } from 'react'
import axios from 'axios'

export default function Associates (props) {
  console.log('props', props)
  const [form, setForm] = useState(null)

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    sendAssociates(form)
  }

  const sendAssociates = ({ associates__name, associates__url, associates__image }) => {
    console.log(form)
    axios({
      method: 'POST',
      url: 'https://eventziapi.herokuapp.com/partners/organizations/2/events/56',
      data: {
        name_: associates__name,
        url: associates__url,
        logo: associates__image
      }
    })
      .then(data => console.log(data))
      .catch((err) => console.log(err))
  }

  return (
        <div className="associates">

            <div className="associates__container">
                <h3>Associates</h3>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="associates__image">
                        <p>Logo</p>
                        <input type="file" name="associates__image" id="associates__image" onChange={handleInput} />
                    </label>

                    <label htmlFor="associates__name">
                        <p>Associate name</p>
                        <input type="text" name="associates__name" id="associates__name" placeholder="Eventzi example" onChange={handleInput} />
                    </label>

                    <label htmlFor="associates__url">
                        <p>Associate url</p>
                        <input type="text" name="associates__url" id="associates__url" placeholder="ex: eventzi.com" onChange={handleInput} />
                    </label>

                    <button type="submit">Save associate</button>

                </form>

            </div>
        </div>
  )
}
