import React, { useState } from 'react'

export default function General () {
  const [form, setForm] = useState(null)

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    sendGeneral(form)
  }

  const sendGeneral = (form) => {
    return (
      <div className="general">

        <div className="general__container">
          <h3>General</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="general__logo">
              <p>Logo</p>
              <input type="file" name="general__logo" id="general__logo" placeholder="" onChange={handleInput} />
            </label>

            <label htmlFor="general__banner">
              <p>Banner</p>
              <input type="file" name="general__banner" id="general__banner" placeholder="" onChange={handleInput} />
            </label>

            <label htmlFor="general__name">
              <p>Event name</p>
              <input type="text" name="general__name" id="general__name" placeholder="Nombre..." onChange={handleInput} />
            </label>

            <label htmlFor="general__url">
              <p>Event url</p>
              <input type="text" name="general__url" id="general__url" placeholder="Url" onChange={handleInput} />
            </label>

            <label htmlFor="general__date">
              <p>Event date</p>
              <input type="date" name="general__date" id="general__date" placeholder="Date" onChange={handleInput} />
            </label>

            <label htmlFor="general__description">
              <p>Event description</p>
              <textarea type="text" name="general__description" id="general__description" placeholder="Description..." onChange={handleInput}></textarea>
            </label>

            <label htmlFor="general__template">
              <p>Template:</p>
              <select type="text" name="general__template" id="general__template" placeholder="Template" onChange={handleInput}>
                <option>1</option>
                <option>2</option>
              </select>
            </label>

            <button type="submit">Save event</button>

          </form>
        </div>
      </div>
    )
  }
}
