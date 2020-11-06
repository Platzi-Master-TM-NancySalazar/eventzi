import React, { useState } from 'react'

import Modal from './Modal_Organization'
import logo_white from '../assets/static/logo-white.svg'

const Events = () => {

  const [openModal, setOpenModal] = useState(false)
  const modalOpen = () => {
    setOpenModal(true)
  }

  const modalClose = () => {
    setOpenModal(false)
  }

  const eventsList = [
    {
      eventName: 'Eventzi Team',
      eventId: 1
    },
    {
      eventName: 'Platzi',
      eventId: 2
    }
  ]
  
  return (
    <div className='events'>
      {
        openModal && <Modal modalClose={modalClose} />
      }
      <div className='events_buttons'>
        <button onClick={modalOpen} className='events_button'>Create organization</button>
        <button className='events_button events_button-light'>
          Organizations
        </button>
      </div>

      {
        eventsList.map((event) => {
          return (
            <div className='events_organization' key={event.eventId}>
            <figure className='events_container_logo'>
              <img src={logo_white} className='events_logo' />
            </figure>
          <h4 className='events_organization-title'>{event.eventName}</h4>
          </div>
          )
        })
      }

    </div>
    )
}

export default Events
