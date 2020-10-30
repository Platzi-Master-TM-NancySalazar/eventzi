import React from 'react'

import event_image from '../assets/static/event_image.png'

const EventCard = () => {
  return (
    <div className='event_card'>
      <img className='event_card--img' src={event_image} />

      <div className='event_card--description'>
        <h3 className='event_card--title'>Template 1</h3>
        <p className='event_card--text'>15 de octubre 2020</p>
        <p className='event_card--text'>Organiza: PLATZI</p>
      </div>
    </div>
  )
}

export default EventCard
