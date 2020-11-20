import React, { useState, useEffect } from 'react'
import ApiEventzi from '../utils/ApiEventzi'
import Select from './Select'

const PopupFirst = ({ evenChange, setBadge }) => {
  const [badgePop, setBadgePopup] = useState([])
  const [form, setForm] = useState({
    email: '',
    id_event_: ''
  })
  const [change, setChange] = useState(true)

  useEffect(() => {
    ApiEventzi.getEvents()
      .then(response => {
        const newInfo = response.data.data
        setBadgePopup(newInfo)
      })
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    if (form.email.length > 0 && form.id_event_ !== '') {
      setChange(false)
    } else {
      setChange(true)
    }
  }, [form])

  const handleClick = () => {
    const data = {
      email: form.email
    }
    ApiEventzi.sendOrganizers(form.id_event_, data)
      .then((response) => {
        if (response.status === 201) {
          evenChange()
          setBadge([])
        }
      })
      .catch((err) => console.log(err))
  }

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }
  return (
    <section className="overlay">
      <div className="popup__container-details">
        <h2>Add organizers to the event</h2>
        <p>Don't work alone, add organizers to the event to give you a hand</p>
        <div className="popup__details-form">
          <input onChange={handleChange} name="email" className="popup__input" type="email" placeholder="Write a user email" autoComplete="off" />
          <span className="popup__input-focus"></span>
          <Select badges={badgePop} handleChange={handleChange} name='id_event_' />

          <button onClick={handleClick} disabled={change} className="button-popup">Add</button>
        </div>
        <div className="container__details">
        </div>
        <div className="section__close">
          <div></div>
          <button className="button-close" onClick={evenChange}>Close</button>
        </div>
      </div>
    </section>
  )
}

export default PopupFirst
